import { Product } from "src/scripts/types/app_types";
import ProductComponent from "../product/product";

export default class PageComponent extends HTMLElement {
    private root: ShadowRoot;
    private _capasity = 50;
    private cachProducts: Array<Product> = new Array<Product>();
    private _id = 0;
    private page_id = 0;

    constructor(id: number) {
        super();
        this._id = id;
        this.root = this.attachShadow({ mode: 'open' });
        this.root.innerHTML = renderTemplate();
        this.setAttribute("class", "page");
    }
    addProduct(product_data: Product) {
        if (this.capasity > 0) {
            this.cachProducts.push(product_data);
            const product = new ProductComponent(this.page_id,product_data);
            this.root.getRootNode().appendChild(product);
            this._capasity -= 1;
            this.page_id += 1;
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