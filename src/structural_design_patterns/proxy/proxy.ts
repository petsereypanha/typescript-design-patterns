export interface Store {
    save(data: string): void
}
export class TextStore implements Store {
    save(data: string): void {
        console.log(`Called 'save' from TextStore with
    data=${data}`)
    }
}

export class ProxyTextStore implements Store {
    constructor(private textStore?: TextStore) {}
    save(data: string): void {
        console.log(`Called 'save' from ProxyTextStore with
    data=${data}`)
        if (!this.textStore) {
            console.log("Lazy init: textStore.")
            this.textStore = new TextStore()
        }
        this.textStore.save(data)
    }
}

function clientCode() {
    console.log("Client: Using TextStore directly:")
    const directStore: Store = new TextStore()
    directStore.save("Direct data")

    console.log("\nClient: Using ProxyTextStore:")
    const proxyStore: Store = new ProxyTextStore()
    proxyStore.save("Proxy data 1")

    console.log("\nClient: Using ProxyTextStore again:")
    proxyStore.save("Proxy data 2")

    console.log("\nClient: Using a new ProxyTextStore with pre-initialized TextStore:")
    const preInitStore: Store = new ProxyTextStore(new TextStore())
    preInitStore.save("Pre-init data")
}

// Run the client code
clientCode()