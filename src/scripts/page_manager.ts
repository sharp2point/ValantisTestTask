import { APPSTATE } from "./appstate/appstate";
import PageComponent from "./components/page/page";

export default class PageManager {
    private pages = new Array<PageComponent>();
    private cursor = 0;
    private subscribers = new Array<(page: PageComponent) => void>();
    private addPageSubscribers = new Array<(countPage: number) => void>();
    private uploadDataEvent = () => { };
    private _name: string;

    get name() {
        return this._name;
    }
    get pageCount() {
        return this.pages.length;
    }

    constructor(name: string, uploadDataEvent?: () => void) {
        this._name = name;
        if (uploadDataEvent) {
            this.uploadDataEvent = uploadDataEvent;
        }
    }
    clearState() {
        this.pages = [];
        this.cursor = 0;
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
    addPageSubscriber(fn: (countPage: number) => void) {
        this.addPageSubscribers.push(fn);
    }
    addSubscriber(fn: (page: PageComponent) => void) {
        this.subscribers.push(fn);
    }
    paginator = (position: number) => {
        this.cursor = position;
        if (this.cursor === this.pages.length - 1) {
            this.uploadDataEvent();
        }
        this.notyfy()
    }
    notyfy = () => {
        this.subscribers.forEach((fn) => {
            fn(this.getPageByIndex(this.cursor));
        })
    }
    pageRemaind = () => {
        if (this.getLastPage() && this.getLastPage().capasity > 0) {
            return {
                isNew: false,
                page: this.getLastPage()
            }
        } else {
            const page = new PageComponent((this.getLastPage() ? this.getLastPage().pageID + 1 : 0), this.pages.length * APPSTATE.productsOnPage)
            this.pages.push(page);
            this.addPageSubscribers.forEach((fn) => {
                fn(this.pages.length);
            })
            return {
                isNew: true,
                page: this.getLastPage()
            }
        }
    }
}