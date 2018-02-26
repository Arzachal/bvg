import { Product } from './product.model';

export class AltCategory {
    constructor(public name: string, public products: Product[]) {}
}
