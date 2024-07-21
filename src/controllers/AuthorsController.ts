import type { Request, Response } from "express";
import { AuthorService} from "../services/AuthorService";
import type { IAuthor } from "../interfaces/author";

export class AuthorsController{
  static async getAll(_:Request,res:Response){
      const authors:Array<IAuthor> = await AuthorService.findAll()
      res.json(authors)
  }
  static async get(req:Request,res:Response){
      const author = await AuthorService.get(req.params.id)
      res.json(author)
  }
 
  static async create(req:Request<{},{},IAuthor>,res:Response){
    const author:IAuthor = await AuthorService.createAuthor(req.body) 
    res.json(author)
  }
  static async delete(req:Request,res:Response){
    await AuthorService.delete(req.params.id)
    res.send("deleted successfully")
  }
}

