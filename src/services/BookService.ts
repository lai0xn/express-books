import { Book } from "../db/models/Book";
import type { IBook } from "../interfaces/book";

export class BookService{

  //find all books
  static async findAll():Promise<IBook[]>{
    const books = await Book.find({}).populate("author")
    return books
  }
  static async get(id:string){
    const book = await Book.findOne({_id:id}).populate("author")
    return book
  }
  static async createBook(payload:IBook):Promise<IBook>{
    const book = await Book.create(payload)
    return book
  }
  static async delete(id:string){
    await Book.deleteOne({_id:id})
  }

}
