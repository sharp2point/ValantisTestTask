export default class FilterComponent extends HTMLElement {
    _root: ShadowRoot;
    constructor() {
        super();
        this._root = this.attachShadow({ mode: 'open' });
    }
    connectedCallback() {
        this._root.innerHTML = renderTemplate();
    }
}

if (!customElements.get("nice2jm-filter-api")) {
    customElements.define("nice2jm-filter-api", FilterComponent);
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