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
        <div class="header">
            <span class="id"></span>     
            <span class="product-id">id</span>
            <span class="brand">бренд</span>
            <span class="price">цена</span>
            <span class="product">описание</span>
        </div>
    `;
    const css = `
        <style>
            :host{
                --back-color:rgb(120,30,50);
                --font-color: rgb(220,220,200);
                display:flex;
                flex-direction:column;
                justify-content: start;
                align-items:center;
                gap:0.1rem;
                background:rgb(100,100,100);
                width:100%;
                border:3px solid rgb(150,150,150);
            }
            .header{                
                display:flex;
                flex-direction:row;
                justify-content:space-between;
                align-items: center;
                flex-wrap:nowrap;
                width:95%;
                min-height:40px;
                font:900 1.3rem "Arial";
                border-bottom:1px solid rgb(100,100,100);
                background: var(--back-color);
                color: var(--font-color);
            }
            span{
                display:flex;
                flex-direction:row;
                justify-content:center;
                padding-inline:0.3rem;
                overflow:hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
                text-transform:uppercase;
                letter-spacing: 0.2rem;
            }
            span.id{
                display:flex;
                flex-direction:row;
                gap:0;
                flex-basis:6%;
                border-right: 1px solid rgb(100,100,100);
            }
            span.product-id{
                flex-basis:25%;
                border-right: 1px solid rgb(100,100,100);
            }
            span.brand{
                flex-basis:10%;
                border-right: 1px solid rgb(100,100,100);
            }
            span.price{
                flex-basis:10%;
                border-right: 1px solid rgb(100,100,100);
            }
            span.product{
                flex-basis:50%;
            }
        </style>
    `
    return `${html}${css}`;
}