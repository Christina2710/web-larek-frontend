import { IProduct } from "../../types/product";

export class Product implements IProduct{
    id: string;
    description: string;
    image: string;
    title: string;
    category: string;
    price: number;

    constructor(data: IProduct) {
        this.id = data.id;
        this.description = data.description;
        this.image = data.image;
        this.category = data.category;
        this.price = data.price;
    }
}