import { getDataFromApi } from "./api/api";
import { APICOMMANDS } from "./api/api_commands";
import PageComponent from "./components/page/page";
import Paginator from "./components/paginator/paginator";
import PageManager from "./page_manager";
import { Product } from "./types/app_types";

window.addEventListener('load', async () => {
    initFilter();

    const pageManager = new PageManager();
    const upPaginator = new Paginator(pageManager);
    upPaginator.appendToDOM(document.querySelector(".paginator-place")!);

    getProductData({ offset: 0, limit: 10 }).then((products) => {
        return fillPage(clearDublicateProduct(products), pageManager);
    }).then((pageManager) => {
        appendPageToDocument(pageManager.getLastPage());
    }).catch((err) => {
        console.log("Get Product Error: ", err);
    });
    // const responseIDs = await getDataFromApi(APICOMMANDS.getIDs({ offset: 0, limit: 10 }));
    // console.log("IDs ---------------------");
    // console.log(responseIDs.result);

    // const products = await getDataFromApi(APICOMMANDS.getItems({ ids: [...responseIDs.result] }));
    // console.log("Products ---------------------");
    // console.log(products.result);

    // const fields = await getDataFromApi(APICOMMANDS.getFields({ field: "brand", offset: 0, limit: 100 }));
    // console.log("Fields ---------------------");
    // console.log(fields.result);

    // const filter = await getDataFromApi(APICOMMANDS.filter({ "price": 17500.00 }));
    // console.log("Filter Price 17500.00 ---------------------");
    // console.log(filter.result);
});
//Data Products----------
async function getProductData(options: { offset: number, limit: number }) {
    const ids_raw = await getDataFromApi(APICOMMANDS.getIDs({ offset: options.offset, limit: options.limit }));
    const ids = clearDublicateID(ids_raw.result);
    const products = await getDataFromApi(APICOMMANDS.getItems({ ids: ids }));
    return Promise.resolve(products.result);
}

function fillPage(products: Array<Product>, pageManager: PageManager) {
    const page = new PageComponent(1);
    for (let i = 0; i < products.length; i++) {
        const result = page.addProduct(products[i]);
        if (i === products.length - 1) {
            pageManager.addPage(page);
            break;
        }
        if (!result) {
            pageManager.addPage(page);
            fillPage(products.slice(i, products.length - 1), pageManager)
            break;
        }
    }
    return pageManager;
}

function appendPageToDocument(page: PageComponent) {
    const pagePlace = document.querySelector(".app-page");
    if (pagePlace) {
        pagePlace.appendChild(page);
    }
}

//Filter---------------

function initFilter() {
    const filterForm = document.querySelector("#filter-form");
    if (filterForm && filterForm instanceof HTMLFormElement) {
        filterForm.addEventListener("submit", async (e) => {
            e.preventDefault();
            submitDebounce(filterForm);
        });
    }
}

/*
    submitDebounce(filterForm: HTMLFormElement) - функция блокирует кнопку Submit на время запроса + 1сек
*/
function submitDebounce(filterForm: HTMLFormElement) {
    const filterFormSubmit = document.querySelector("#filter-form>button[type=submit]") as HTMLButtonElement;
    filterFormSubmit.classList.add("inaccess");
    onFormSubmit(filterForm).then((data) => {
        const ids_data = crossFilterData(data);
        return getProductsByIDs(ids_data);
    }).then((data) => {
        console.log(data.result)
        //---------------------------------------------//
        blockedSubmitFilterForm(filterFormSubmit, 1000)
    }).catch((err) => {
        console.log("Error: ", err);
        blockedSubmitFilterForm(filterFormSubmit, 1000)
    })
}
async function onFormSubmit(form: HTMLFormElement) {
    const results = new Array<Promise<any>>();
    [...form.elements].forEach((input) => {
        if (input.value) {
            const res = filteringData(input.name, input.value);
            results.push(res);
        }
    });
    return Promise.all(results)
}
async function filteringData(filterName: string, filterValue: string) {
    let result;
    switch (filterName) {
        case "product": {
            result = await getDataFromApi(APICOMMANDS.filter({ "product": filterValue }));
            break;
        }
        case "brand": {
            result = await getDataFromApi(APICOMMANDS.filter({ "brand": filterValue }));
            break;
        }
        case "price": {
            result = await getDataFromApi(APICOMMANDS.filter({ "price": parseFloat(filterValue) }));
            break;
        }
        default: {
            result = Promise.reject(() => {
                throw Error("Error: Ошибка фильтрации")
            });
            break;
        }
    }
    return result;
}
async function getProductsByIDs(ids: Array<string>) {
    const products = await getDataFromApi(APICOMMANDS.getItems({ ids: ids }));
    return products;
}
//-----------------------------------------------------------------
function crossFilterData(arrays: Array<Array<string>>) {
    if (arrays.length === 1) {
        return arrays[0];
    } else if (arrays.length === 2) {
        return crossTwoData(arrays[0], arrays[1]);
    } else if (arrays.length == 3) {
        const tmp = crossTwoData(arrays[0], arrays[1]);
        return crossTwoData(tmp, arrays[2]);
    } else {
        return [];
    }
}
function crossTwoData(data1: Array<string>, data2: Array<string>) {
    return data1.filter((el) => data2.includes(el));
}
function blockedSubmitFilterForm(submitButton: HTMLButtonElement, timeout: number) {
    setTimeout(() => {
        submitButton.classList.remove("inaccess");
    }, timeout);
}
function clearDublicateID(data: Array<string>) {
    return [...new Set([...data])];
}
function clearDublicateProduct(data: Array<Product>) {
    const idMap = new Map<string, Product>();
    data.forEach((product) => {
        if (!idMap.get(product.id)) {
            idMap.set(product.id, product);
        }
    });
    return [...idMap.values()];
}