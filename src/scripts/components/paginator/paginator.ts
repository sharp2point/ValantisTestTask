import PageManager from "src/scripts/page_manager";

export default class Paginator extends HTMLElement {
    private root: ShadowRoot | null = null;
    private cursor = 0;
    private pageManager: PageManager | null;
    private dom: Map<string, HTMLElement> = new Map<string, HTMLElement>();

    constructor(pageManager: PageManager) {
        super();
        this.pageManager = pageManager;
        this.root = this.attachShadow({ mode: 'open' });
        this.setAttribute("class", "page-paginator")
        this.root.innerHTML = renderTemplate(this.cursor);
        this.dom.set("position", this.root.querySelector(".position")!);
        this.dom.set("leftButton", this.root.querySelector(".left-button")!);
        this.dom.set("rightButton", this.root.querySelector(".right-button")!);
    }
    connectedCallback() {

    }
    set position(position: number) {
        if (position < this.pageManager!.pagesCount) {
            this.cursor = position;
        }
    }
    get position() {
        return this.cursor;
    }
    nextPosition() {
        if (this.cursor < this.pageManager!.pagesCount) {
            this.cursor += 1;
        }
    }
    previewPosition() {
        if (this.cursor >= 0) {
            this.cursor -= 1;
        }
    }
    appendToDOM(parent: HTMLElement) {
        parent.appendChild(this);
    }
}
if (!customElements.get("nice2jm-page-paginator")) {
    customElements.define("nice2jm-page-paginator", Paginator);
}

function renderTemplate(position: number) {
    const html = `
        <div class="left-button button"></div>
        <span class="position">${position}</span>
        <div class="right-button button"></div>
    `;
    const css = `
        <style>
            :host {
                --border-color: rgb(100,100,100);
                --text-color: rgb(100,100,100);
                display: flex;
                flex-direction: row;
                justify-content: center;
                align-items: center;
                gap: 0.5rem;
                background: rgb(250, 250, 250);
                min-width: 100px;
                width: 120px;
                min-height: 50px;
                margin: 1rem;
                border: 3px solid rgb(100, 100, 100);
                border-radius:1rem;
                
                padding: 1rem;
            }
            .position{
                color: var(--text-color);
                font:bold 1.5rem "Arial";
            }
            .button {
                width: 40px;
                height: 40px;
                background-color: transparent;
                cursor: pointer;
            }

            .left-button::before {
                position: absolute;
                display: block;
                content: "";
                width: 10px;
                height: 10px;
                border-left: 5px solid var(--border-color);
                border-top: 5px solid var(--border-color);
                transform: translate(15px,12px) rotate(-45deg);
            }

            .right-button::after {
                display: block;
                position:absolute;
                content: "";
                width: 10px;
                height: 10px;
                border-right: 5px solid var(--border-color);
                border-top: 5px solid var(--border-color);
                transform: translate(10px,12px) rotate(45deg);
            }
        </style>
    `
    return `${html}${css}`;
}