import { getDataFromApi } from "../api/api";
import { APICOMMANDS } from "../api/api_commands";
import { QueryFilter } from "../types/app_types";
import { clearDublicateID, clearDublicateProduct } from "../utils/utils";

export async function getFilterData(query: QueryFilter) {
    const results = new Array<Promise<any>>();
    results.push(queryPromise(query, "product"));
    results.push(queryPromise(query, "brand"));
    results.push(queryPromise(query, "price"));
    return Promise.all(results).then((data) => {
        const result = isEmptyData(data);
        return filterIntersect(result)
    }).then((ids) => {
        return getDataFromApi(APICOMMANDS.getItems({ ids: ids }));
    }).then((products) => {
        return clearDublicateProduct(products.result);
    });
}
async function queryPromise(query: QueryFilter, key: string) {
    let params = null;
    switch (key) {
        case "product": {
            params = { "product": `${query.get(key)}` }
            break;
        }
        case "brand": {
            params = { "brand": `${query.get(key)}` }
            break;
        }
        case "price": {
            params = { "price": parseFloat(`${query.get(key)}`) }
            break;
        }
    }
    if (query.has(key) && query.get(key)) {
        return await getDataFromApi(APICOMMANDS.filter(params));
    }
}
function isEmptyData(data: Array<any>) {
    const result = [];
    data.forEach((el) => {
        if (el) {
            result.push(el.result);
        }
    });
    return result;
}
function filterIntersect(data: Array<Array<string>>) {
    if (data.length === 0) {
        return [];
    } else if (data.length === 1) {
        return clearDublicateID(data[0]);;
    } else {
        let buf = [...data[0]] as Array<string>;
        const base = [...data.slice(1, data.length)];
        base.forEach((d: Array<string>) => {
            buf = buf.filter(el => d.includes(el));
        });
        return buf;
    }
}