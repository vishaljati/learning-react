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
    async userLogin({email,password}){
    try {
         return this.account.createEmailPasswordSession({email,password})
    } catch (error) {
            throw error
            
    }
  }
        
   async getLoggedInUser(){
     try {
       return await this.account.get()
     } catch (error) {
       console.log("Appwrite error in getLoggedInUser",error)
     }
     return null
   }

   async logOut(){
     try {
        await this.account.deleteSessions()
     } catch (error) {
         console.log("Appwrite Service Error",error);
         
     }
   }
  

}

const authService = new AuthService()

export default authService