import { Product } from "src/scripts/types/app_types";
import ProductComponent from "../product/product";
import { APPSTATE } from "src/scripts/appstate/appstate";

export default class PageComponent extends HTMLElement {
    private root: ShadowRoot;
    private _capasity = APPSTATE.productsOnPage; // вместимость страницы
    private _id = 0; // id страницы
    private indexProduct = 0; // порядковый номер продукта

    get pageID() {
        return this._id;
    }
    get capasity() {
        return this._capasity;
    }

    constructor(id: number, firstProductIndex: number) {
        super();
        this._id = id;
        this.indexProduct = firstProductIndex;
        this.root = this.attachShadow({ mode: 'open' });
        this.root.innerHTML = renderTemplate();
        this.setAttribute("class", "page");
    }
    addProduct(product_data: Product) {
        if (this.capasity > 0) {
            const product = new ProductComponent(this.indexProduct, product_data);
            this.root.getRootNode().appendChild(product);
            this._capasity -= 1;
            this.indexProduct += 1;
            return true;
        } else {
            return false;
        }
    }
}

if (!customElements.get("nice2jm-page-products")) {
    customElements.define("nice2jm-page-products", PageComponent);
}
//-----------------------------------------------
function renderTemplate() {
    const html = `
        
    `;
    const css = `
        <style>
            :host{
                display:flex;
                flex-direction:column;
                justify-content: start;
                align-items:center;
                gap:0.1rem;
                background:rgb(100,100,100);
                width:100%;
                margin:1rem;
                border:3px solid rgb(150,150,150);
            }
        </style>
    `
    return `${html}${css}`;
}