import { TApiAllProductsResponse } from "../types";

export default function maxQuantityError(products: TApiAllProductsResponse[], item: TApiAllProductsResponse) {
    const filteredProduct = products.filter(product => product.id === item.id);
    let maxQuantityReached = false;
    if (filteredProduct.length > 0) {
        maxQuantityReached = filteredProduct[0]?.quantity === filteredProduct[0]?.quantity_available;
    }
    return maxQuantityReached;
}