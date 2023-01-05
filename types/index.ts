export type TApiAllProductsResponse = {
    id: number;
    name: string;
    price: number;
    quantity_available: number;
    quantity?: number;
    image: string;
    vat: number;
    addons: {
        name: string;
        is_default?: string;
        price: string;
    }[];
};

export type CartState = {
    products: TApiAllProductsResponse[];
    quantity: number;
    total: number;
}