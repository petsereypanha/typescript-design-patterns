interface User {
    name: string
    avatar?: string // Optional avatar
}

type OptionalAvatarUser = {
    // Keyof gets all user properties
    [P in keyof User]?: User[P]
}

const user1: OptionalAvatarUser = { name: "Alice" }
const user2: OptionalAvatarUser = { name: "Bob", avatar: "avatar.png" }

interface Product {
    id: number
    price: number
}

type ProductDetails = {
    [P in keyof Product as `product ${P}`]: string // Transform property names
}

const product1: ProductDetails = {
    "product id": "123",
    "product price": "456",
}