class SSHUser {
    constructor(
        private privateKey: string,

        public publicKey: string,
    ) {
        this.privateKey = privateKey

        this.publicKey = publicKey
    }

    public getBase64(): string {
        return Buffer.from(this.publicKey).toString("base64")
    }
}
export {
    SSHUser
}