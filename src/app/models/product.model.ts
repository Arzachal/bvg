export class Product {
    constructor(public id: number,
                public name: string,
                public url: string,
                public description: string,
                public category: string,
                public imagePath: string,
                public price: number,
                public amount: number,
                public feature1: string,
                public available: boolean
    ) {}
}
