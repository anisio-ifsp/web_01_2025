import express from "express"
import { ProductController } from "./controller/ProductController"


const productController = new ProductController()

const app = express()

const PORT = process.env.PORT ?? 3000
app.use(express.json())

app.post("/api/produto", productController.cadastrarProduto.bind(productController))

app.listen(PORT, () => console.log("Servidor rodando em http://localhost:3000"))