import type { IAuthor } from "./author";

export interface IBook{
  title :string,
  description:string,
  prince : number,
  author:IAuthor
}
