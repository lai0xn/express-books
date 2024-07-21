import mongoose, { model } from "mongoose";
import type { IUser } from "../../interfaces/user";
const userSchema = new mongoose.Schema<IUser>({
  username:{
    type:String,
    required:true,
  },
  email:{
    type:String,
    required:true
  },
  password:{
    type:String,
    required:true,
  }
})

export const User = model<IUser>("User",userSchema)
