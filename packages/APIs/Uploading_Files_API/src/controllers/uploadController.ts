import express,{Request,Response} from "express";
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';
import { rename } from 'fs';
import tinyurl from "tinyurl-api";

const __dirname = dirname(fileURLToPath(import.meta.url));

class UploadController{
    async Upload(req:Request,res:Response){
        try{
            
            const files=req.file;
            let typeOfFile:any=files?.originalname.split('.')
            let destURL;
            if(typeOfFile&&typeOfFile.length>1){
                console.log(typeOfFile[1])
                const url=resolve(__dirname,"../","../","uploads",`${files?.filename}`);
                console.log(url);
                rename(url,`${url}.${typeOfFile[1]}`,(e)=>{
                    if(e===null){
                        destURL=`${url}.${typeOfFile[1]}`;
                    }
                })
            }else{
                throw new Error("Type of file is Undefined (Note file should contain . followed by its type)")
            }
            const finalURL=`${process.env.RUNTIME}/uploads/${files?.filename}.${typeOfFile[1]}`
    
            //You can use this when you have deployed the backend doesnt work for localhost
            //For localhost use finalURL instead
            //eg if you Runtime is localhost:3000
            //comment this part
            //const finalTinyURL=await tinyurl(finalURL);
            //res.json({"data":finalTinyURL})
            
            //rather use this
            //res.json({"data":finalURL})
    
            const finalTinyURL=await tinyurl(finalURL);
    
            res.json({"data":finalTinyURL})
    
        }catch(e){
            console.log(e)
            res.status(400).json({"Error":e})
        }
    }
    async getUpload(req:Request,res:Response){
        try{
        const id=req.params.id;
        const url=resolve(__dirname,"../","../","uploads",`${id}`)
        res.sendFile(url);
        }catch(e){
            console.log("entered here")
            res.status(400).json({"Error":e})
        }
}
}

export default new UploadController();