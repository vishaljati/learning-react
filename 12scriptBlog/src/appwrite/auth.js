import config from "../config/config"
import { Client, ID, Account } from "appwrite";

export class AuthService {
    client= new Client();
    account;

    constructor(){
        this.client
              .setEndpoint(config.appwriteUrl)
              .setProject(config.appwriteProjectId);

        this.account=new Account(this.client);
    }

    async createAccount({email,password,name}) {
        try {
          const userAccount= await this.account.create({
            userId:ID.unique(),
            email,
            password,
            name  })
          if (userAccount) {
            //redirect to login method
           return this.userLogin({email,password})
          } else {
            return null
          }

        } catch (error) {
            throw error;
            
        }
    }
    async userLogin(){
    try {
         return this.account
                .createEmailPasswordSession({email,password})
    } catch (error) {
            throw error
            
    }
  }
        
   async getLoggedInUser(){
     try {
        await this.account.get()
     } catch (error) {
        throw new Error("Appwrite error in getLoggedInUser",error)
     }
     return null
   }
   async logOut(){
     try {
        await this.account.deleteSessions()
     } catch (error) {
         throw new Error("Appwrite error in log out",error)
     }
   }
  

}

const authService = new AuthService()

export default authService