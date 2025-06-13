export interface IProduct {
    id: number;
    name: string;
    price: number;
    type: string;
    brand: string;
    image?: string;
    topSeller: boolean;
    newProd: boolean;
}

export interface IProd extends IProduct {
    quant: number;
}