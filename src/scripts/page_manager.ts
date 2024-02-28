import { APPSTATE } from "./appstate/appstate";
import PageComponent from "./components/page/page";

export default class PageManager {
    private pages = new Array<PageComponent>();
    private _pageCount = 0;
    private cursor = 0;
    private subscribers = new Array<(page: PageComponent) => void>();
    private uploadDataEvent = () => { };
    private _name: string;

    get name() {
        return this._name;
    }
    get pagesCount() {
        return this._pageCount;
    }

    constructor(name: string, uploadDataEvent?: () => void) {
        this._name = name;
        if (uploadDataEvent) {
            this.uploadDataEvent = uploadDataEvent;
        }
    }
    clearState() {
        this.pages = [];
        this._pageCount = 0;
        this.cursor = 0;
    }
    addPage(page: PageComponent) {
        this.pages.push(page);
        this._pageCount += 1;
    }
    getPageByIndex = (index: number) => {
        this.cursor = index;
        return this.pages[index];
    };
    getFirstPage = () => {
        this.cursor = 0;
        return this.pages[0];
    }
    getLastPage = () => {
        this.cursor = this.pages.length - 1;
        return this.pages[this.pages.length - 1];
    }
    // nextPage = () => {
    //     if (this.cursor <= this.pages.length - 1) {
    //         this.cursor += 1;
    //         return this.getPageByIndex(this.cursor);
    //     } else {
    //         return this.getLastPage();
    //     }
    // }
    // previewPage = () => {
    //     if (this.cursor >= 0) {
    //         this.cursor -= 1;
    //         return this.getPageByIndex(this.cursor);
    //     } else {
    //         return this.getFirstPage();
    //     }
    // }
    addSubscriber(fn: (page: PageComponent) => void) {
        this.subscribers.push(fn);
    }
    paginator = (position: number) => {
        this.cursor = position;
        console.log("Pag: ", position)
        console.log(this.name, " Pages: ", this.pagesCount)
        if (this.cursor === this.pagesCount - 1) {
            this.uploadDataEvent();
        }
        this.notyfy()
    }
    notyfy = () => {
        this.subscribers.forEach((fn) => {
            console.log("Cur: ", this.cursor)
            fn(this.getPageByIndex(this.cursor));
        })
    }
    pageRemaind = () => {
        return (this.getLastPage() && this.getLastPage().capasity > 0) ?
            this.getLastPage() :
            new PageComponent(this.pagesCount + 1, this.pagesCount * APPSTATE.productsOnPage);
    }

}