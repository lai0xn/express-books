import express from "express"
import { BooksController } from "../controllers/BooksController"

const booksRouter = express.Router()

booksRouter.get("/",BooksController.getAll)
booksRouter.get("/:id",BooksController.get)
booksRouter.post("/",BooksController.create)
booksRouter.delete("/:id",BooksController.delete)

export default booksRouter
