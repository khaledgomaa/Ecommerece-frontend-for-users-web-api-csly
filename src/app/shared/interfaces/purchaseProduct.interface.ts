export interface PurchaseProduct{
    UserName: string;
    // tslint:disable-next-line: no-unused-expression
    // tslint:disable-next-line: align
    ProductItems: ProductItem[];
}

export interface ProductItem{
    ProductName: string;
    Quantity: number;
}