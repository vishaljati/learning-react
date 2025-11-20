import config from "../config/config"
import {Client,ID,Databases,Storage, Query} from "appwrite"


// Collections --> Tables
// Attributes   --> Columns
// Documents --> Rows

export class Service {
     client=new Client();
     databases;
     storage;

     constructor(){
        this.client = this.client
                      .setEndpoint(config.appwriteUrl)
                      .setProject(config.appwriteProjectId)
        this.databases=new Databases(this.client)
        this.storage=new Storage(this.client)
         
     }
     
      //DB operations
     async createPost({title,slug,content,featuredImage,status,userId}){
        try {
            return await this.databases.createDocument({

                  databaseId: config.appwriteDatabaseId,
                  collectionId: config.appwriteTableId,
                  documentId: slug,
                  data:{
                        title,
                        content,
                        featuredImage,
                        status,
                        userId,
                    },
              })
        } catch (error) {
            console.error("AppwriteError creating post:", error);
            
        }
     }

     async updatePost(slug,{title,content,featuredImage,status}){
        try {
            return await this.databases.updateDocument({ 

                databaseId: config.appwriteDatabaseId,
                collectionId:config.appwriteTableId,
                documentId:slug,
                data:{
                    title,
                    content,
                    featuredImage ,
                    status,
                }}
            )
        } catch (error) {
            console.error("AppwriteError updating post:", error);
        }
     }

     async deletePost(slug){
        try {
             await this.databases.deleteDocument({
                databaseId: config.appwriteDatabaseId,
                collectionId: config.appwriteTableId,
                documentId: slug
            })
            return true
        } catch (error) {
            console.error("AppwriteError deleting post:", error);
            return false
        }
     }
    
    async getPost(slug){
        try {
            return await this.databases.getDocument({
                databaseId: config.appwriteDatabaseId,
                collectionId: config.appwriteTableId,
                documentId: slug
                })
            } catch (error) {
            console.error("Appwrite error : fetching a post",error);
                
            }
    }
    async getAllPosts(queries=[Query.equal("status","active")]){
        try {
            return this.databases.listDocuments({
                    databaseId: config.appwriteDatabaseId,
                    collectionId: config.appwriteTableId,
                    queries
                 
            })
        } catch (error) {
            console.error("Appwrite error : fetching all posts",error);
            return false
        }
    }
    
    //Storage operations

    async uploadFile(file){
     try {
       return await this.storage.createFile({
            bucketId: config.appwriteBucketId,
            fileId: ID.unique(),
            file
        })
     } catch (error) {
        console.error("Appwrite error : Uploading the file",error);
        return false
        }
     }
    
    async deleteFile(fileId){
      try {
        await this.storage.deleteFile({
               bucketId:config.appwriteBucketId,
               fileId
        })
        return true

      } catch (error) {
         console.error("Appwrite error : Deleting the file",error);
         return false
      }
    }
   
    async getFilePreview(fileId){
        try {
            return this.storage.getFilePreview({
                   bucketId:config.appwriteBucketId,
                   fileId
            })
        } catch (error) {
             console.error("Appwrite error : Previewing the file",error);
             return null
        }
    }

}


const service = new Service()
export default service;