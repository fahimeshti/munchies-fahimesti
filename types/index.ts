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
    totalVat: number;
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