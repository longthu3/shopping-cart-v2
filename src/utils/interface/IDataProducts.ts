import { IProduct } from "./IProduct";

export interface DataProductsResponse {
    code: number;
    status_code: number;
    message: string;
    data: DataProduct;
}

interface DataProduct {
    listProduct: IProduct[];
    totalPage: number;
}