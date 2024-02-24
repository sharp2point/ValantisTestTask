
export const APICOMMANDS = {
    filter: filter,
    getIDs: getIDs,
    getItems: getItems,
    getFields: getFields
}
//----- Функции запросов к API ---------------------------------------------------
function filter(params: {}) {
    /*  возвращает упорядоченный список идентификаторов товаров,
        соответствующих заданному значению.

        В качестве параметра может использоваться любое поле возвращаемое 
        методом get_fields без параметров. В качестве значения должен 
        использоваться тип данных соответствующий полю. Для поля product 
        будет проверяться вхождение параметра в строку. 
        Для остальных полей проверяется строгое соответствие.
    */
    return {
        "action": "filter",
        "params": params
    }
}
function getIDs(params: { offset: number, limit: number }) {
    /*  метод возвращает упорядоченный список идентификаторов товаров
        <offset: number> смещение относительно начала списка
        <limit: number> желаемое число возвращаемых записей
    */
    return {
        "action": "get_ids",
        "params": params
    }
}
function getItems(params: { ids: Array<string> }) {
    /*  возвращает упорядоченный список товаров со всеми характеристиками,
        если переданы идентификаторы товаров.
        <ids:Array<string>> идентификаторы товаров, которые будут возвращены.
    */
    return {
        "action": "get_items",
        "params": params
    }
}
function getFields(params: { field: string, offset: number, limit: number }) {
    /*  без параметров возвращает упорядоченный список имеющихся полей товаров
        <field: string> действительное название поля товара
        <offset: number> смещение относительно начала списка
        <limit: number> желаемое число возвращаемых записей
    */
    return {
        "action": "get_fields",
        "params": params
    }
}

