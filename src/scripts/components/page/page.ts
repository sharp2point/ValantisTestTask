import { Product } from "src/scripts/types/app_types";
import ProductComponent from "../product/product";

export default class PageComponent extends HTMLElement {
    _root: ShadowRoot;

    constructor() {
        super();
        this._root = this.attachShadow({ mode: 'open' });
        this._root.innerHTML = renderTemplate();
        this.setAttribute("class", "page");
    }
    addProduct(product_data: Product) {
        const product = new ProductComponent(product_data);
        this._root.getRootNode().appendChild(product);
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