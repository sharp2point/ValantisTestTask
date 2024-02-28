import { getDataFromApi } from "./api/api";
import { APICOMMANDS } from "./api/api_commands";
import { APPSTATE } from "./appstate/appstate";
import { Product, QueryFilter } from "./types/app_types";
import PageComponent from "./components/page/page";
import Paginator from "./components/paginator/paginator";
import PageManager from "./page_manager";
import Loader from "./components/loader/loader";
import FilterComponent from "./components/filter/filter";
import { getFilterData } from "./filter/filter";
import { clearDublicateID, clearDublicateProduct } from "./utils/utils";


window.addEventListener('load', async () => {
    APPSTATE.rootApp = document.querySelector("#app");
    APPSTATE.filter = document.querySelector('.filter') as FilterComponent;
    APPSTATE.filter.addSubscriber(queryFilter);
    APPSTATE.loader = new Loader();
    APPSTATE.loader.appendToDOM(APPSTATE.rootApp);

    const { pageManager, paginator } = InitStateApp();
    APPSTATE.pageManager = pageManager;

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

function InitStateApp() {
    const pageManager = new PageManager(uploadData);
    pageManager.addSubscriber(appendPageToDocument);
    const upPaginator = new Paginator(pageManager);
    upPaginator.appendToDOM(document.querySelector(".paginator-place")!);
    upPaginator.addSubscriber(pageManager.subsPaginator);

    getProductData({ offset: APPSTATE.loadOffset, limit: APPSTATE.loadLimit }).then((products) => {
        shiftOffset();
        return fillPage(clearDublicateProduct(products), pageManager);
    }).then((pageManager) => {
        APPSTATE.loader.show(false);
        return appendPageToDocument(pageManager.getFirstPage());
    }).then((result) => {
        upPaginator.setEnabled(result);
    }).catch((err) => {
        console.log("Get Product Error: ", err);
    });

    return {
        pageManager: pageManager,
        paginator: upPaginator,
    }
}

function uploadData() {
    APPSTATE.loader.show(true);
    getProductData({ offset: APPSTATE.loadOffset, limit: APPSTATE.loadLimit }).then((products) => {
        shiftOffset();
        return fillPage(clearDublicateProduct(products), APPSTATE.pageManager);
    }).then(() => {
        APPSTATE.loader.show(false);
    }).catch((err) => {
        console.log("Get Product Error: ", err);
    });
}
//Data Products----------
async function getProductData(options: { offset: number, limit: number }) {
    const ids_raw = await getDataFromApi(APICOMMANDS.getIDs({ offset: options.offset, limit: options.limit }));
    const ids = clearDublicateID(ids_raw.result);
    const products = await getDataFromApi(APICOMMANDS.getItems({ ids: ids }));
    return Promise.resolve(products.result);
}
function fillPage(products: Array<Product>, pageManager: PageManager) {
    let page = pageVerifyOnRemainder(pageManager);

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
        pagePlace.replaceChildren(page);
        return true;
    }
    return false;
}
function pageVerifyOnRemainder(pageManager: PageManager) {
    return (pageManager.getLastPage() && pageManager.getLastPage().capasity > 0) ?
        pageManager.getLastPage() :
        new PageComponent(pageManager.pagesCount + 1, pageManager.pagesCount * APPSTATE.productsOnPage);
}
function shiftOffset() {
    APPSTATE.loadOffset = APPSTATE.loadOffset + APPSTATE.loadLimit;
}
//Filter---------------
async function queryFilter(query: QueryFilter) {
    console.log(query)
    const result = await getFilterData(query);
    console.log(result);
}

// =====================================================


async function getProductsByIDs(ids: Array<string>) {
    const products = await getDataFromApi(APICOMMANDS.getItems({ ids: ids }));
    return products;
}
