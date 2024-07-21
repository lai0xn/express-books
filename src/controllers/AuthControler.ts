import type { Request, Response } from "express";
import type { IUser } from "../interfaces/user";
import { AuthService } from "../services/AuthService";
import jwt from "jsonwebtoken"
import type { Claims } from "../types/claims";
import { env } from "bun";
export class AuthController {
  static async register(req:Request<{},{},IUser>,res:Response){
    const user = await AuthService.Register(req.body)
    res.json(user)
    
  }
  static async login(req:Request,res:Response){
    const user = await AuthService.VerifyUser(req.body.username,req.body.password)
    if(user == false){
      res.status(400).send("invalid credentials")
    }
  
    const claims:Claims = {
      userID:user._id,
      email:user.email,
      username:user.username,
    }
    const token :string = jwt.sign(claims,env.JWT_SECRET||"",{expiresIn:"72h"})
    return res.json({token:token})

  }
}
