import express, { Request, Response } from "express"
import { json } from "body-parser"

const app = express()
const port = process.env.PORT || 3000

app.use(json())

app.get("/health", (req: Request, res: Response) => {
    res.send("OK!")
})

app.listen(port, () => console.log(`Server listening on port ${port}`))