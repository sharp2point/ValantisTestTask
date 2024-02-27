import { Product } from "src/scripts/types/app_types";

export default class ProductComponent extends HTMLElement {
    private root: ShadowRoot;
    private product: Product | null = null;
    private _id = 0;

    constructor(id: number, product: Product) {
        super();
        this._id = id;
        this.product = product;
        this.root = this.attachShadow({ mode: 'open' });
        this.setAttribute("class", "product-cmp");
        this.root.innerHTML = renderTemplate(this._id, this.product!);
    }
}

if (!customElements.get("nice2jm-product")) {
    customElements.define("nice2jm-product", ProductComponent);
}
//-----------------------------------------------
function renderTemplate(id: number, product: Product) {
    const rid = `${id}`;
    const lid = "".padStart((5 - rid.length), "0");
    const isEvenID = (id % 2 === 0) ? false : true;
    const html = `   
        <span class="id"><span class="lid">${lid}</span><span class="rid">${rid}</span></span>     
        <span class="product-id">${product.id}</span>
        <span class="brand">${product.brand}</span>
        <span class="price">${product.price}</span>
        <span class="product">${product.product}</span>
    `;

    const css = `
        <style>
            :host{
                --odd-back-color:rgb(60,60,60);
                --even-back-color:rgb(70,70,70);
                display:flex;
                flex-direction:row;
                justify-content:space-between;
                align-items: center;
                flex-wrap:nowrap;
                width:95%;
                min-height:40px;
                font:600 1rem "Arial";
                border-bottom:1px solid rgb(100,100,100);
                background: ${isEvenID ? 'var(--even-back-color)' : 'var(--odd-back-color)'};
            }
            span{
                padding-inline:0.3rem;                
                overflow:hidden;
                white-space: nowrap;
                text-overflow: ellipsis;  
            }
            span.id{          
                display:flex;
                flex-direction:row;                
                justify-content:start;  
                gap:0;    
                flex-basis:6%;
                border-right: 1px solid rgb(100,100,100);
            }
            span.id span{
                margin:0;
                padding:0;
            }
            span.id .lid{
                border:none;
                color:rgb(150,150,150);
            }
            span.id .rid{
                border:none;
                font-size:1.3rem;
                color:rgb(220,150,100);
            }
            span.product-id{
                color: rgb(220,220,0);
                flex-basis:25%;  
                border-right: 1px solid rgb(100,100,100);              
            }
            span.brand{
                color: white;
                flex-basis:10%;
                border-right: 1px solid rgb(100,100,100);
            }
            span.price{
                color: white;
                flex-basis:5%;
                border-right: 1px solid rgb(100,100,100);
            }
            span.product{
                color: white;
                flex-basis:50%;
            }
        </style>
    `
    return `${html}${css}`;
}