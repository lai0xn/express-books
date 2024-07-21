import express, { Router } from "express"
import { AuthController } from "../controllers/AuthControler"

const router:Router = express.Router()

router.post("/register",AuthController.register)
router.post("/login",AuthController.login)

export default router
