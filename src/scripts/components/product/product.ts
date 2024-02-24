export default class ProductComponent extends HTMLElement {
    _root: ShadowRoot;
    constructor() {
        super();
        this._root = this.attachShadow({ mode: 'open' });
    }
    connectedCallback() {
        this._root.innerHTML = renderTemplate();
    }
}

if (!customElements.get("nice2jm-product")) {
    customElements.define("nice2jm-product", ProductComponent);
}
//-----------------------------------------------
function renderTemplate() {
    const html = `
    
    `;
    const css = `
        <style>

        </style>
    `
    return `${html}${css}`;
}