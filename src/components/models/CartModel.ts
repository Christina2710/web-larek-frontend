import { ICart } from '../../types/cart';
import { IProduct } from '../../types/product';

export class CartModel implements ICart {
	total: number = 0;
	items: IProduct[] = [];


	add(product: IProduct) {
		if (!this.items.some((item) => item.id === product.id)) {
			this.items.push(product);
            this.recalculateTotal();
		}
        else {
            console.log("Данный товар уже в корзине!");
        }
	}

	remove(product: IProduct) {
        this.items = this.items.filter(item => item.id != product.id);
        this.recalculateTotal();
    }

	private recalculateTotal(): void {
		this.total = this.items.reduce((sum, item) => sum + item.price, 0);
	}
}
