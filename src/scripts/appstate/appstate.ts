export const APPSTATE = {
    rootApp: null, // коревая нода приложения
    filter: null, // web-component FilterComponent
    loader: null, // web-component Loader
    paginator: null, // web-component Paginator
    apiURL: "https://api.valantis.store:41000/",
    password: "Valantis",
    loadOffset: 0, // начальное смещение в запросе к API
    loadLimit: 100, // кол-во элементов в запросе к API
    productsOnPage: 50, // кол-во выводимых на странице элементов
    pageManager: null, // менеджер страниц -> web-component PageManager
    filterPageManager: null, // менеджер страниц фильтрации -> web-component PageManager
    pageManagerFocused: null, // текущий менеджер страниц  -> web-component PageManager
    // pagesOnServer: 265 // 264 * 49 + 18 = 12_954 // примерное колличество элементов в БД
}