import type { Request, Response } from "express";

export const loggerMiddleware = (req:Request,res:Response,next)=>{
  console.log(req.method+"  "+req.url)
  next() 
}
