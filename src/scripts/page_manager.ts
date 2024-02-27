import PageComponent from "./components/page/page";

export default class PageManager {
    private pages = new Array<PageComponent>();
    private _pageCount = 0;
    private cursor = 0;
    private subscribers = new Array<(page: PageComponent) => void>();
    private uploadDataEvent: (() => void);

    get pagesCount() {
        return this._pageCount;
    }

    constructor(uploadDataEvent: () => void) {
        this.uploadDataEvent = uploadDataEvent;
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
    nextPage = () => {
        if (this.cursor <= this.pages.length - 1) {
            this.cursor += 1;
            return this.getPageByIndex(this.cursor);
        } else {
            return this.getLastPage();
        }
    }
    previewPage = () => {
        if (this.cursor >= 0) {
            this.cursor -= 1;
            return this.getPageByIndex(this.cursor);
        } else {
            return this.getFirstPage();
        }
    }
    addSubscriber(fn: (page: PageComponent) => void) {
        this.subscribers.push(fn);
    }
    subsPaginator = (position: number) => {
        this.cursor = position;
        if (this.cursor === this.pagesCount - 1) {
            this.uploadDataEvent();
        }
        this.notyfy()
    }
    notyfy = () => {
        this.subscribers.forEach((fn) => {
            fn(this.getPageByIndex(this.cursor));
        })
    }

}