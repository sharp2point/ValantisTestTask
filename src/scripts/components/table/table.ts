export default class TableComponent extends HTMLElement {
    _root: ShadowRoot;
    constructor() {
        super();
        this._root = this.attachShadow({ mode: 'open' });
    }
    connectedCallback() {
        this._root.innerHTML = renderTemplate();
    }
}

if (!customElements.get("nice2jm-table-products")) {
    customElements.define("nice2jm-table-products", TableComponent);
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