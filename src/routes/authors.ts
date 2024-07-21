import express from "express"
import { AuthorsController } from "../controllers/AuthorsController"

const authorsRouter = express.Router()

authorsRouter.get("/",AuthorsController.getAll)
authorsRouter.get("/:id",AuthorsController.get)
authorsRouter.delete("/",AuthorsController.delete)
authorsRouter.post("/",AuthorsController.create)

export default authorsRouter

