export interface Clonable<T> {

    clone(): T

}

export interface Product extends Clonable<Product> {

    getName(): string
    getPrice(): number
    
    setName(name: string): void
    setPrice(price: number): void

}

export class FormProduct implements Product {

    protected name: string = ""
    protected price: number = 0

    getName(): string {
        return this.name
    }

    getPrice(): number {
        return this.price
    }

    setName(name: string): void {
        this.name = name
    }

    setPrice(price: number): void {
        this.price = price
    }

    clone(): Product {
        const clone = new FormProduct()
        clone.name = this.name
        clone.price = this.price
        return clone
    }

}

export class ProductBuilder {

    static createFormProduct(): Product {
        return new FormProduct()
    }

}