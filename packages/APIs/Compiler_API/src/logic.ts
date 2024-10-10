// import inquirer from 'inquirer';
// import { execSync } from 'node:child_process';
// import {writeFileSync} from 'node:fs';
// async function getLanguage():Promise<string>{
//     const {language}=await inquirer.prompt([{
//         type:"list",
//         name:"language",
//         message:"Choose any one language",
//         choices:['c','c++','java','javascript','python']
//     }]);

//     return language as unknown as string;
// }

// async function executeCCode(code:string):Promise<void>{
//     try{
//         writeFileSync('temp.c',code);
//         execSync('gcc temp.c');
//         const output=execSync('a.exe');
//         console.log(output.toString());
        
//     }catch(e){
//         console.log(e);
//     }
// }

// async function executeCppCode(code:string):Promise<void>{
//     try{
//         writeFileSync('temp.cpp',code);
//         execSync('g++ temp.cpp');
//         const output=execSync('a.exe');
//         console.log(output.toString());
        
//     }catch(e){
//         console.log(e);
//     }    
// }

// async function executeJavaCode(code:string):Promise<void>{
//     try{
//         writeFileSync('temp.java',code);
//         execSync('javac temp.java');
//         const output=execSync('java temp');
//         console.log(output.toString());
        
//     }catch(e){
//         console.log(e);
//     }        
// }

// async function executePythonCode(code:string):Promise<void>{
//     try{
//         writeFileSync('temp.py',code);
//         const output=execSync('python temp.py');
//         console.log(output.toString());
//     }catch(e){
//         console.log(e);
//     }
// }

// async function executeJSCode(code:string):Promise<void>{
//     try{
//         writeFileSync('temp.js',code);
//         const output=execSync('node temp.js');
//         console.log(output.toString());
//     }catch(e){
//         console.log(e);
//     }
// }

// async function getCodeandExecute(language:string){
//     const {code}=await inquirer.prompt([{
//         message:'Enter Your code',
//         type:'editor',
//         name:'code'
//     }])
//     switch (language){
//         case 'c':await executeCCode(code);break;
//         case 'c++':await executeCppCode(code);break;
//         case 'java':await executeJavaCode(code);break;
//         case 'python':await executePythonCode(code);break;
//         default:await executeJSCode(code);
//     }
// }

// async function main():Promise<void>{
//     let language=await getLanguage();
//     await getCodeandExecute(language);
// }

// main()
