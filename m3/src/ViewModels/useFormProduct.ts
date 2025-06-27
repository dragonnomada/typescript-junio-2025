import { useState } from "react"

import { ProductBuilder, type Product } from "../models/Product"

// Vista-Modelo
export function useFormProduct(): Product {

    const [product, setProduct] = useState<Product>(
        ProductBuilder.createFormProduct()
    )

    return {
        getName() {
            return product.getName()
        },
        getPrice() {
            return product.getPrice()
        },
        setName(name) {
            product.setName(name)
            setProduct(product.clone())
        },
        setPrice(price) {
            product.setPrice(price)
            setProduct(product.clone())
        },
        clone() {
            return product.clone()
        },
    }

}