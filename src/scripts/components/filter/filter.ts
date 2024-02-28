import { QueryFilter } from "src/scripts/types/app_types";

export default class FilterComponent extends HTMLElement {
    private root: ShadowRoot;
    private dom = {
        form: null,
        submit: null
    }
    private subscribers = new Array<((query: QueryFilter) => void)>();
    private query: QueryFilter

    constructor() {
        super();
        this.root = this.attachShadow({ mode: 'open' });
        this.root.innerHTML = renderTemplate();
        this.dom.form = this.root.querySelector("form");
        this.dom.submit = this.root.querySelector("button[type=submit]");
    }
    connectedCallback() {
        this.dom.form.addEventListener("submit", async (e) => {
            e.preventDefault();
            this.submitDebounce(this.dom.form);
        });
    }
    private submitDebounce = (form: HTMLFormElement) => {
        this.query = new Map<string, string | number>();
        this.dom.submit.classList.add("inaccess");
        [...form.elements].forEach((input: HTMLFormElement) => {
            this.query.set(input.name, input.value);
        });
        this.notify(this.query);
    }
    addSubscriber(fn: () => void) {
        this.subscribers.push(fn);
    }
    notify(query: QueryFilter) {
        
        this.subscribers.forEach((fn) => {
            fn(query);
        })
    }
    appendToDOM(parent: HTMLElement) {
        parent.appendChild(this);
    }
}

if (!customElements.get("nice2jm-filter")) {
    customElements.define("nice2jm-filter", FilterComponent);
}
//-----------------------------------------------
function renderTemplate() {
    const html = `
            <form id="filter-form" action="">
                <label for="product">
                    Название продукта:
                    <input type="text" name="product" id="product" placeholder="Золотое кольцо">
                </label>
                <label for="brand">
                    Бренд:
                    <input type="text" name="brand" id="brand" placeholder="Piaget">
                </label>
                <label for="price">
                    Цена:
                    <input type="text" name="price" id="price" placeholder="17500">
                </label>

                <button type="submit">Поиск</button>
            </form>
    `;
    const css = `
        <style>
        :host{
            display:flex;
            width:100%;
            min-height:50px;
        }
            form{
                display:flex;
                flex-direction: row;
                justify-content: space-evenly;
                align-items: center;
                width:100%;
                min-height: 50px;
                background: rgb(50,50,60);
                color: rgb(200,200,200);

                label{
                    font: 600 1.2rem "Arial";
                }
                button[type=submit]{
                    font: 600 1.2rem "Arial";
                    padding:0.5rem;
                }
            }
        </style>
    `
    return `${html}${css}`;
}