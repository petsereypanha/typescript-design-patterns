interface Product {
    name: string
    price: number
    stock?: number
    imageUrl?: string
}
export function  createPartialProduct(initialData: Partial<Product>): Product {
    const defaultProduct: Product = {
        name: "Unnamed Product",
        price: 0,
        stock: 10,
    }
    return { ...defaultProduct, ...initialData }
}
const partialProduct = createPartialProduct({ name: "Sample Product", price: 19.99 })

console.log(partialProduct)
const minimalProduct = createPartialProduct({ name: "Mystery Item", price: 9.99 })
console.log(minimalProduct) // { name: "Mystery Item", price: 9.99, stock: 10 }