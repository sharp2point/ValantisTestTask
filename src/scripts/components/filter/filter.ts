import { QueryFilter } from "src/scripts/types/app_types";

export default class FilterComponent extends HTMLElement {
    private root: ShadowRoot;
    private dom = {
        form: null,
        submit: null,
        closeFilterButton: null,
        inputs: null
    }
    private subscribers = new Array<((query: QueryFilter) => void)>();
    private query: QueryFilter
    private closeAction: () => void;

    constructor() {
        super();
        this.root = this.attachShadow({ mode: 'open' });
        this.root.innerHTML = renderTemplate();
        this.dom.form = this.root.querySelector("form");
        this.dom.submit = this.root.querySelector("button[type=submit]");
        this.dom.closeFilterButton = this.root.querySelector("header button");
        this.dom.inputs = [
            this.root.querySelector("#product"),
            this.root.querySelector("#brand"),
            this.root.querySelector("#price"),
        ];
    }
    connectedCallback() {
        this.root.querySelectorAll(".clear-button").forEach(inp => {
            inp.addEventListener("click", (e) => {
                e.stopPropagation();
                e.preventDefault();
                switch ((e.target as HTMLElement).dataset["name"]) {
                    case "product": {
                        (this.root.getElementById('product') as HTMLInputElement).value = "";
                        break;
                    }
                    case "brand": {
                        (this.root.getElementById('brand') as HTMLInputElement).value = "";
                        break;
                    }
                    case "price": {
                        (this.root.getElementById('price') as HTMLInputElement).value = "";
                        break;
                    }
                }
            })
        });
        this.dom.form.addEventListener("submit", (e) => {
            e.stopPropagation();
            e.preventDefault();
            this.onSubmit(this.dom.form);
        });
        this.dom.closeFilterButton.addEventListener("click", () => {
            this.closeAction();
        });
        this.dom.inputs.forEach(inp => {
            inp.addEventListener("keydown", (e) => {
                if (e.key === "Enter") {
                    this.onSubmit(this.dom.form);
                }
            });
        });
    }
    private onSubmit = (form: HTMLFormElement) => {
        this.query = new Map<string, string | number>();
        this.dom.submit.classList.add("inaccess");
        [...form.elements].forEach((input: HTMLInputElement) => {
            this.query.set(input.name, input.value);
        });
        this.notify(this.query);
    }
    addCloseAction(fn: () => void) {
        this.closeAction = fn;
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
            <header>
                <img src="gem.webp"><span>Фильтр</span><button class="filter-close"></button>
            </header>            
            <form id="filter-form" action="">
                <div class="frame">
                    <label for="product">Название продукта:</label>
                    <div class="block">
                        <input type="text" name="product" id="product">
                        <button class="clear-button" data-name="product"></button>
                    </div>
                </div>
                <div class="frame">
                    <label for="brand">Бренд:</label>
                    <div class="block">
                        <input type="text" name="brand" id="brand" min:"3" max="25">
                        <button class="clear-button" data-name="brand"></button>
                    </div>
                </div>
                <div class="frame">
                    <label for="price">Цена:</label>
                    <div class="block">
                        <input type="text" name="price" id="price" pattern="[0-9]{1,9}" title="воводите только числа">
                        <button class="clear-button" data-name="price"></button>
                    </div>
                </div>
                <button type="submit" accesskey="Enter"></button>
            </form>
    `;
    const css = `
        <style>
        :host{
            display:flex;
            flex-direction:column;
            justify-content:start;
            align-items:center;
            width:250px;
            min-height:100vh;
            box-shadow: 5px 0 10px 2px rgba(20,20,20,0.5);
            background: rgba(50,50,60,0.9);
        }
        header{
            width:88%;
            height:40px;
            display:flex;
            flex-direction:row;
            justify-content:space-between;
            align-items:center;
            gap:1rem;
            padding:1rem;
            background: rgba(150,150,120,0.9);
            border-bottom:1px solid rgba(100,100,100,0.5);
            border-radius: 0 0 1rem 1rem;
            box-shadow: 0 2px 3px 1px rgba(10,10,10,0.2);
        }
        header img{
            width:40px;
            height:40px;
        }
        header span{
            font:bold 2rem "Arial";
            color:rgb(230,230,230);
        }
        header button{
            width:35px;
            height:35px;
            border:none;
            background:rgba(200,200,200,1);
            border-radius:50%;
            background-image: url("no.png");
            background-size:33px 33px;
            background-position:center center;
            background-repeat:no-repeat;
        }
        header button:hover{
            transform:scale(1.05);
        }
        form{
            padding:2rem;
            display:flex;
            flex-direction: column;
            justify-content: start;
            align-items: start;
            gap:1rem;
            width:80%;
            background: transparent;
        }
        input[type=text]{
            font:100 1.2rem "Arial";
            padding: 10px;
            width: 80%;
            height:35px;
            border:none;
            border-radius:0.5rem;
            background: rgb(90,90,110);
            color:rgb(220,220,220);
            padding:0.3rem;
        }
        input[type=text]:focus{
            border: 1px solid green;
            border-radius:0.7rem;
            color:rgb(120,120,120);
            background:rgb(250,250,200);            
        }
        input[type=text]:invalid{
            border: 3px solid red;
            border-radius:0.7rem;
            background:rgb(250,250,200);
        }
        button[type=submit]{
            width:70px;
            height:70px;
            font: 600 1.2rem "Arial";
            padding:0.5rem;
            background: rgba(70,80,100);
            background-repeat:no-repeat;
            background-position:center center;
            background-image:url("search.png");
            background-size:40px 40px;
            border:3px solid rgba(60,60,100);
            border-radius:50%;
            box-shadow:0 0 3px 1px rgba(70,70,70,0.5);
            align-self:center;
        }
        button[type=submit]:hover{
            transform: scale(1.05);
            font: 600 1.2rem "Arial";
            padding:0.5rem;
            background: rgba(70,80,100);
            background-repeat:no-repeat;
            background-position:center center;
            background-image:url("search.png");
            background-size:35px 35px;
            border:3px solid rgba(60,60,100);
            border-radius:50%;
            box-shadow:0 0 4px 1px rgba(230,230,250,1);
            cursor:pointer;
        }
        .frame{
            width:100%;
            display:flex;
            flex-direction:column;
            align-items:start;
            justify-content:start;
            height:100px;
            gap:1rem;
            border-bottom: 1px solid rgba(200,200,200,0.3);          
        }
        label{
            color:rgb(200,200,200);
            font:bold 1.3rem "Arial";
        }
        .block{
            width:100%;
            display:flex;
            flex-direction:row;
            align-items:center;
            justify-content:space-between;
            gap:0.5rem;
        }
        .clear-button{
            width:35px;
            height:35px;
            border:none;
            background: transparent;
            background-repeat:no-repeat;
            background-position:center center;
            background-image:url("delete.png");
            background-size:30px 30px;
            cursor:pointer;
        }
        
        </style>
    `
    return `${html}${css}`;
}