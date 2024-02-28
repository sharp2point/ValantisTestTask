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
                                        const allData = [];
                                        data.forEach(res => {
                                            if (res) {
                                                allData.push([...res.result])
                                            }
                                        });
                                        return clearDublicateID(allData.flat(1));
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