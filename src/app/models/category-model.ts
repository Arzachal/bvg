import { AltCategory } from './alt-category.model';

export class Category {
    constructor(public name: string, public altCategories: AltCategory[]) {}
}
