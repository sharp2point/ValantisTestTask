export default class NotifyComponent extends HTMLElement {
    private root: ShadowRoot;
    private name: string;
    private content: string;
    private actions = new Array<((notifyName: string) => void)>();
    private actionDescription: string;

    constructor(name: string, content: string) {
        super();
        this.name = name;
        this.content = content;
        this.root = this.attachShadow({ mode: 'open' });
        this.root.innerHTML = renderTemplate(content);
    }
    connectedCallback() {
        this.addEventListener("click", () => {
            this.actions.forEach(fn => {
                fn(this.name);
            })
        })
    }
    attachClickAction(fn: (notifyName: string) => void, description?: string) {
        this.actions.push(fn);
        this.style.cursor = "pointer";
        if (description) {
            this.actionDescription = description;
            this.addEventListener("mouseenter", () => {
                this.root.querySelector("span").innerText = this.actionDescription;
            })
            this.addEventListener("mouseleave", () => {
                this.root.querySelector("span").innerText = this.content;
            })
        }
    }
    appendToDOM(parent: HTMLElement) {
        parent.appendChild(this);
    }
}

if (!customElements.get("nice2jm-notify")) {
    customElements.define("nice2jm-notify", NotifyComponent);
}

function renderTemplate(content: string) {
    const html = `
        <span>${content}</span>
    `
    const css = `
        <style>
            :host{
                display:flex;
                flex-direction:row;
                justify-content:center;
                align-items:center;
                min-width: 70px;
                height:40px;
                padding:1rem;
                border:2px solid rgb(100,100,100);
                border-radius:1rem;
                background: rgb(50,50,10);                
            }
            span{
                margin: 1rem;
                color: rgb(200,200,200);
                font:bold 1rem "Arial";
            }
        </style>
    `
    return `${html}${css}`;
}