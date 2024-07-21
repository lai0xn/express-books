import { env } from "bun"
import express from "express"
import mongoose from "mongoose"
import router from "./routes"
import { loggerMiddleware } from "./middlewares/logger"

const PORT = env.PORT || 8080
const MONGO_URI = env.MONGO_URI || ""


const app = express()

app.use(express.json())
app.use(loggerMiddleware)
app.use(express.urlencoded({ extended: true }));

app.use("/api",router)


const db = mongoose.connect(MONGO_URI).then(async()=>console.log("DB is connected"))
app.listen(PORT,async()=>{
  await db
  console.log("Server running on port:"+PORT)
})
