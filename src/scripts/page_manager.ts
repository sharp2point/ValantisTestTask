import PageComponent from "./components/page/page";

export default class PageManager {
    _pages: Array<PageComponent> = new Array<PageComponent>();
    _pageIndex = 0;
    _cursor = 0;

    get pagesCount() {
        return this._pageIndex
    }
    addPage(page: PageComponent) {
        this._pages.push(page);
        this._pageIndex += 1;
    }
    getPageByIndex = (index: number) => {
        this._cursor = index;
        return this._pages[index];
    };
    getFirstPage = () => {
        this._cursor = 0;
        return this._pages[0];
    }
    getLastPage = () => {
        this._cursor = this._pages.length - 1;
        return this._pages[this._pages.length - 1];
    }
    nextPage = () => {
        if (this._cursor <= this._pages.length - 1) {
            this._cursor += 1;
            return this.getPageByIndex(this._cursor);
        } else {
            return this.getLastPage();
        }
    }
    previewPage = () => {
        if (this._cursor >= 0) {
            this._cursor -= 1;
            return this.getPageByIndex(this._cursor);
        } else {
            return this.getFirstPage();
        }
    }

}