import { Author } from "../db/models/Author";
import type { IAuthor } from "../interfaces/author";

export class AuthorService{

  //find all books
  static async findAll():Promise<IAuthor[]>{
    const authors = await Author.find({})
    return authors
  }

  static async get(id:string){
    const author = await Author.findOne({_id:id})
    return author
  }

  static async delete(id:string){
    await Author.deleteOne({_id:id})
  }


  static async createAuthor(payload:IAuthor):Promise<IAuthor>{
    const author = await Author.create(payload)
    return author
  }

}

