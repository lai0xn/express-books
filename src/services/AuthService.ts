import { User } from "../db/models/User";
import type { IUser } from "../interfaces/user";
import { Hasher } from "../utils/hasher";

export class AuthService{

  static async Register(user:IUser):Promise<IUser>{
    user.password = await Hasher.HashPassword(user.password)

    const userC:IUser = await User.create(user)

    return userC

  }

  static async VerifyUser(username:string,password:string):Promise<IUser|boolean>{
    const user = await User.findOne({username:username})
    const user_password :string = user?.password || ""
    const is_match = await Hasher.VerifyPassword(user_password,password)
    if(is_match){
      return user || false
    }else{
      return false
    }
  }
}
