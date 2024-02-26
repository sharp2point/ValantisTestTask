import { Product } from "src/scripts/types/app_types";
import ProductComponent from "../product/product";

export default class PageComponent extends HTMLElement {
    _root: ShadowRoot;
    _capasity = 50;
    _cachProducts: Array<Product> = new Array<Product>();
    _id = 0;
    _page_id = 0;

    constructor(id: number) {
        super();
        this._id = id;
        this._root = this.attachShadow({ mode: 'open' });
        this._root.innerHTML = renderTemplate();
        this.setAttribute("class", "page");
    }
    addProduct(product_data: Product) {
        if (this._capasity > 0) {
            this._cachProducts.push(product_data);
            const product = new ProductComponent(this._page_id,product_data);
            this._root.getRootNode().appendChild(product);
            this._capasity -= 1;
            this._page_id += 1;
            return true;
        } else {
            return false;
        }
    }
    get capasity() {
        return this._capasity;
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