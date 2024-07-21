import type { Request, Response } from "express";
import { BookService } from "../services/BookService";
import type { IBook } from "../interfaces/book";

export class BooksController{
  static async getAll(req:Request,res:Response){
      const books:Array<IBook> = await BookService.findAll()
      res.json(books)
  }
  static async get(req:Request,res:Response){
      const book = await BookService.get(req.params.id)
      res.json(book)
  } 
  static async create(req:Request<{},{},IBook>,res:Response){
    const book:IBook = await BookService.createBook(req.body) 
    res.json(book)
  }
  static async delete(req:Request,res:Response){
    await BookService.delete(req.params.id)
    res.send("deleted successfully")
  }
}
