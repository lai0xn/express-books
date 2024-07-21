import express from "express"
import booksRouter from "./books"
import authorsRouter from "./authors"
import authRouter from "./auth"
const router = express.Router()

router.use("/books",booksRouter)

router.use("/authors",authorsRouter)

router.use("/auth",authRouter)


export default router
