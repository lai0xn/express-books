import mongoose, { model } from "mongoose";
import type { IBook } from "../../interfaces/book";

const bookSchema = new mongoose.Schema<IBook>({
  title:{
    type:String,
    required:true,
  },
  description:{
    type:String,
    required:true,
  },
  author:{
    type:mongoose.Types.ObjectId,
    ref:"Author"
  }
})

export const Book = model<IBook>("Book",bookSchema) 
