import { Product } from "../types/app_types";

export function clearDublicateID(data: Array<string>) {
    return [...new Set([...data])];
}
export function clearDublicateProduct(data: Array<Product>) {
    const idMap = new Map<string, Product>();
    data.forEach((product) => {
        if (!idMap.get(product.id)) {
            idMap.set(product.id, product);
        }
    });
    return [...idMap.values()];
}