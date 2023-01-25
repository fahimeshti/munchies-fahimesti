export type TApiAllProductsResponse = {
    id: number | string;
    name: string;
    categories: string[];
    price: number;
    quantity_available: number;
    quantity?: number;
    image: string;
    vat: number;
    addons?: {
        id: number | string;
        name: string;
        is_default?: boolean;
        price: number;
    }[];
};

export type CartState = {
    products: TApiAllProductsResponse[];
    quantity: number;
    total: number;
    totalVat: number;
    success: boolean;
    error: boolean;
}

export type UserInfo = {
    name: string;
    phone: number;
    address: string;
}

export type TOrderInfo = {
    customer: UserInfo;
    calculation: {
        price: number;
        vat: number;
        total: number;
    };
    items: TApiAllProductsResponse[];
    _id: string;
    xUser: string;
    createdAt: string;
    updatedAt: string;
    __v: string;
}