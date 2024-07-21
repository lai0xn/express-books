import type mongoose from "mongoose"

export type Claims = {
  userID:mongoose.Types.ObjectId,
  username:string,
  email:string
}
