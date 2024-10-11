import { execSync } from 'node:child_process';
import {writeFileSync} from 'node:fs';

class ComplierController{
    executeCCode(code:string){
        try{
            writeFileSync('temp.c',code);
            execSync('gcc temp.c');
            const output=process.platform=="win32"?execSync('a.exe'):execSync('./a.out');
            let result=output.toString();
            console.log(result)
            return result
            
        }catch(e){
            console.log(e);
            throw new Error("Failed to execute C code"+e);
        }
    }

    executeCppCode(code:string){
        try{
            writeFileSync('temp.cpp',code);
            execSync('g++ temp.cpp');
            
            const output=process.platform=="win32"?execSync('a.exe'):execSync('./a.out');
            let result=output.toString();
            console.log(result)
            return result
            
        }catch(e){
            console.log(e);
            throw new Error("Failed to execute C++ code"+e);
        }    
    }

    executeJavaCode(code:string){
        try{
            writeFileSync('temp.java',code);
            execSync('javac temp.java');
            const output=execSync('java temp');
            let result=output.toString();
            console.log(result)
            return result
            
        }catch(e){
            console.log(e);
            throw new Error("Failed to execute Java code"+e);
        }        
    }

    executePythonCode(code:string){
        try{
            writeFileSync('temp.py',code);
            const output=execSync('python temp.py');
            let result=output.toString();
            console.log(result)
            return result
        }catch(e){
            console.log(e);
            throw new Error("Failed to execute python code"+e);
        }
    }

    executeJSCode(code:any){
        try{
            writeFileSync('temp.js',code);
            const output=execSync('node temp.js');
            let result=output.toString();
            result=result.replace(/\x1B\[([0-9;]*m)/g, "");
            console.log(result)
            return result
        }catch(e){
            console.log(e);
            throw new Error("Failed to execute Js code"+e);
        }
    }
    compile(req:any,res:any){
        try{
        const {code,language}=req.body;
        console.log(code)
        console.log(language)
        let result="";
        let controller=new ComplierController();
        switch (language){
            case 'c':result=controller.executeCCode(code);break;
            case 'c++':result=controller.executeCppCode(code);break;
            case 'java':result=controller.executeJavaCode(code);break;
            case 'python':result=controller.executePythonCode(code);break;
            default:result=controller.executeJSCode(code);
        }
        res.status(200).json({"output":result});
        }catch(e:any){
            console.log(e.message);
            res.status(400).json({"message":e.message})
        }
    }
}

export default new ComplierController();