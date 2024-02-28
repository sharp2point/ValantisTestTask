import { getDataFromApi } from "./api/api";
import { APICOMMANDS } from "./api/api_commands";
import { APPSTATE } from "./appstate/appstate";
import { Product, QueryFilter } from "./types/app_types";
import Paginator from "./components/paginator/paginator";
import PageManager from "./page_manager";
import Loader from "./components/loader/loader";
import FilterComponent from "./components/filter/filter";
import { getFilterData } from "./filter/filter";
import { appendPageToDocument, clearDublicateID, clearDublicateProduct, isQueryEmpty, shiftOffset } from "./utils/utils";
import NotifyComponent from "./notyfy/notify";


window.addEventListener('load', async () => {
    APPSTATE.rootApp = document.querySelector("#app");
    APPSTATE.filter = document.querySelector('.filter') as FilterComponent;
    APPSTATE.filter.addSubscriber(queryFilter);
    APPSTATE.loader = new Loader();
    APPSTATE.loader.appendToDOM(APPSTATE.rootApp);
    APPSTATE.pageManager = new PageManager("main", uploadData);
    APPSTATE.pageManager.addSubscriber(appendPageToDocument);
    APPSTATE.pageManagerFocused = APPSTATE.pageManager;
    APPSTATE.filterPageManager = new PageManager("filter", () => { console.log("Filter Update Page") });
    APPSTATE.filterPageManager.addSubscriber(appendPageToDocument);
    APPSTATE.paginator = new Paginator(APPSTATE.pageManager);
    APPSTATE.paginator.appendToDOM(document.querySelector(".paginator-place")!);

    getProductData({ offset: APPSTATE.loadOffset, limit: APPSTATE.loadLimit }).then((products) => {
        shiftOffset();
        return fillPage(clearDublicateProduct(products), APPSTATE.pageManager);
    }).then((pageManager) => {
        APPSTATE.loader.show(false);
        return appendPageToDocument(pageManager.getFirstPage());
    }).catch((err) => {
        console.error("Get Product Error: ", err);
    });
});


function uploadData() {
    APPSTATE.loader.show(true);
    getProductData({ offset: APPSTATE.loadOffset, limit: APPSTATE.loadLimit }).then((products) => {
        shiftOffset();
        return fillPage(clearDublicateProduct(products), APPSTATE.pageManager);
    }).then(() => {
        APPSTATE.loader.show(false);
    }).catch((err) => {
        console.error("Product Request Error: ", err);
        setTimeout(() => {
            console.log("Product Request Repeat")
            uploadData();
        }, 1000);
    });
}
async function getProductData(options: { offset: number, limit: number }) {
    const ids_raw = await getDataFromApi(APICOMMANDS.getIDs({ offset: options.offset, limit: options.limit }));
    const ids = clearDublicateID(ids_raw.result);
    const products = await getDataFromApi(APICOMMANDS.getItems({ ids: ids }));
    return Promise.resolve(products.result);
}
function fillPage(products: Array<Product>, pageManager: PageManager) {
    let page = pageManager.pageRemaind();

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


//Filter---------------
async function queryFilter(query: QueryFilter) {
    if (!isQueryEmpty(query)) {
        clearNotify();
        APPSTATE.loader.show(true);
        APPSTATE.filterPageManager.clearState();
        APPSTATE.pageManagerFocused = APPSTATE.filterPageManager;
        getFilterData(query).then((products) => {
            const notify = new NotifyComponent("result-notify", `всего ${products.length}`);
            notify.appendToDOM(document.querySelector(".notify-place"));
            return fillPage(clearDublicateProduct(products), APPSTATE.filterPageManager);
        }).then((pageManager) => {
            APPSTATE.loader.show(false);
            APPSTATE.paginator.setPageManager(APPSTATE.filterPageManager);
            if (pageManager.pagesCount > 0) {
                return appendPageToDocument(pageManager.getFirstPage());
            } else {
                const notify = new NotifyComponent("not-found-notify", "Продукты не найдены");
                return appendPageToDocument(notify)
            }
        }).then(() => {
            const notify = new NotifyComponent("filter-mode-notify", "Фильтр");
            notify.attachClickAction(closeFilterNotifyAction, "Закрыть");
            notify.appendToDOM(document.querySelector(".notify-place"));
        }).catch((err) => {
            console.error("Filter Request Error: ", err);
            setTimeout(() => {
                console.log("Filter Request Repeat")
                queryFilter(query);
            }, 1000);
        });
    }
}
function clearFilter() {
    clearNotify();
    APPSTATE.pageManagerFocused = APPSTATE.pageManager;
    APPSTATE.paginator.setPageManager(APPSTATE.pageManagerFocused);
    appendPageToDocument(APPSTATE.pageManagerFocused.getFirstPage());
}
function clearNotify() {
    const notifyPlace = document.querySelector(".notify-place");
    while (notifyPlace.firstChild) {
        notifyPlace.removeChild(notifyPlace.firstChild);
    }
}

function closeFilterNotifyAction(nameNotify: string) {
    clearFilter();
}
