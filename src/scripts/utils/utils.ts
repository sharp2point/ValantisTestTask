import { APPSTATE } from "../appstate/appstate";
import PageComponent from "../components/page/page";
import { Product, QueryFilter } from "../types/app_types";

export function clearDublicateID(data: Array<string>) {
    return [...new Set([...data])];
}
export function clearDublicateProduct(data: Array<Product>) {
    const idMap = new Map<string, Product>();
    data.forEach((product) => {
        if (!idMap.get(product.id)) {
            idMap.set(product.id, product);
        }
    });
    return [...idMap.values()];
}
export function shiftOffset() {
    APPSTATE.loadOffset = APPSTATE.loadOffset + APPSTATE.loadLimit;
}
export function appendPageToDocument(page: PageComponent | HTMLElement) {
    const pagePlace = document.querySelector(".app-page");
    if (pagePlace) {
        pagePlace.replaceChildren(page);
        return true;
    }
    return false;
}
export function isQueryEmpty(query: QueryFilter) {
    let isEmpty = true;
    [...query.values()].forEach((item) => {
        if (item) {
            isEmpty = false;
        }
    });
    return isEmpty;
}
export function clearFilter() {
    clearNotify();
    APPSTATE.pageManagerFocused = APPSTATE.pageManager;
    APPSTATE.paginator.setPageManager(APPSTATE.pageManagerFocused);
    appendPageToDocument(APPSTATE.pageManagerFocused.getFirstPage());
}
export function clearNotify() {
    const notifyPlace = document.querySelector(".notify");
    while (notifyPlace.firstChild) {
        notifyPlace.removeChild(notifyPlace.firstChild);
    }
}

export function closeFilterNotifyAction(nameNotify: string) {
    clearFilter();
}
export function closeFilterActionButton() {
    const filter = document.querySelector(".filter");
    filter.classList.toggle("open-filter");
    clearFilter();
    //filterButton = "../filter.webp";
}    
export function initFilterButton() {
    const filterButton = document.querySelector(".filter-button") as HTMLButtonElement;
    const filter = document.querySelector(".filter");
    let filterState = false;
    filterButton.addEventListener("click", () => {
        if (!filterState) {
            const res = filter.classList.toggle("open-filter");            
            filterState = res;
        } else {
            if (APPSTATE.pageManagerFocused.name === "filter") {
                clearFilter();                
                filterState = false;
            } else {
                filter.classList.toggle("open-filter");                
                filterState = false;
            }
        }
    })
}