import mongoose, { model } from "mongoose";
import type { IAuthor } from "../../interfaces/author";

const authorSchema = new mongoose.Schema<IAuthor>({
  name:{  
    type:String,
    required:true
  },
  bio:{
    type:String,
    required:true,
  }
}) 

export const Author = model<IAuthor>("Author",authorSchema)
