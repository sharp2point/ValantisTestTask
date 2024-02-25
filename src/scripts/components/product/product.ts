import { Product } from "src/scripts/types/app_types";

export default class ProductComponent extends HTMLElement {
    _root: ShadowRoot;
    _product: Product | null = null;
    constructor(product: Product) {
        super();
        this._product = product;
        this._root = this.attachShadow({ mode: 'open' });
        this.setAttribute("class", "product-cmp");
        this._root.innerHTML = renderTemplate(this._product!);
    }
}

if (!customElements.get("nice2jm-product")) {
    customElements.define("nice2jm-product", ProductComponent);
}
//-----------------------------------------------
function renderTemplate(product: Product) {
    const html = `        
        <span class="id">${product.id}</span>
        <span class="brand">${product.brand}</span>
        <span class="price">${product.price}</span>
        <span class="product">${product.product}</span>
    `;

    const css = `
        <style>
            :host{
                display:flex;
                flex-direction:row;
                justify-content:space-between;
                align-items: center;
                flex-wrap:nowrap;
                width:95%;
                min-height:40px;
                font:600 1rem "Arial";
                border-bottom:1px solid rgb(100,100,100);
                background: rgb(50,50,50);
            }
            span{
                padding-inline:1rem;
                color: white;
                overflow:hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
                min-width:100px;
                border-right: 1px solid rgb(100,100,100);
            }
            span.id{
                flex-basis:30%;                
            }
            span.brand{
                flex-basis:5%;
            }
            span.price{
                flex-basis:5%;
            }
            span.product{
                flex-basis:60%;
            }
        </style>
    `
    return `${html}${css}`;
}