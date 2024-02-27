import { Product } from "src/scripts/types/app_types";
import ProductComponent from "../product/product";

export default class PageComponent extends HTMLElement {
    private root: ShadowRoot;
    private _capasity = 50;
    private cachProducts = new Array<Product>();
    private _id = 0; // id страницы
    private index_product = 0; // порядковый номер продукта

    constructor(id: number,init_index_product:number) {
        super();
        this._id = id;
        this.index_product = init_index_product;
        this.root = this.attachShadow({ mode: 'open' });
        this.root.innerHTML = renderTemplate();
        this.setAttribute("class", "page");
    }
    addProduct(product_data: Product) {
        if (this.capasity > 0) {
            this.cachProducts.push(product_data);
            const product = new ProductComponent(this.index_product, product_data);
            this.root.getRootNode().appendChild(product);
            this._capasity -= 1;
            this.index_product += 1;
            return true;
        } else {
            return false;
        }
    }
    get capasity() {
        return this._capasity;
    }
    get pageId() {
        return this._id;
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