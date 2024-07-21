export class Hasher {
  static async HashPassword(password:string):Promise<string>{
    const hashed_password:string = await Bun.password.hash(password)
    return hashed_password
  }
  static async VerifyPassword(original:string,password:string):Promise<boolean>{
    const match = Bun.password.verify(password,original)
    return match
  }
}
