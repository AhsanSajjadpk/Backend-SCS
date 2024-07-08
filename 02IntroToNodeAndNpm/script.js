
const fs = require('fs');
// 1) npm init  -- package.json bn jaya gi

console.log("Hello from node js");
// to run this --> node script.js



// Create File

// fs.writeFile("test.txt","Hello  I am Ahsan",function(err){
//     if(err) throw err;
//     else{
//         console.log("File created successfully");
//     }
// })

// Append File

// fs.appendFile("test.txt"," Im Software Engineer.",function(err){
//     if(err) throw err;
//     else{
//         console.log("File Updated successfully");
//     }
// })

// Rename File

// fs.rename("test.txt","newHello.txt",function(err){
//     if(err) throw err;
//     else{
//         console.log("File Renamed successfully");
//     }
// })


// copyfile

// fs.copyFile("newHello.txt","./copy/copyHello",function(err){
//     if(err) throw err;
//         else{
//             console.log("File Copied successfully");
//         }
// })

// UnLink -- delete file

// fs.unlink("./copy/copyHello",function(err){
//     if(err) throw err;
//     else{
//         console.log("File Deleted successfully");
//     }
// })

// Remove Directory

// agar folder ma ziada files hon emplty na ho toa use=>
                         // fs.rm("./copy",function(err)

// fs.rmdir("./copy",function(err){
//     if(err) throw err;
//     else{
//     console.log("Folder Deleted Successfully")
//     }
// })


// Read file

// fs.readFile("newHello.txt",'utf-8',function(err,data){
//     if(err) throw err;
//     else{
//         console.log("Reading File..")
//         console.log(data)

//     }
// })


// Create folder

// fs.mkdir("Copy",function(err){
//     if(err) throw err;
//     else{
//         console.log("Folder Created..")
        
//     }
// })


// Read folder

// fs.readdir("Copy",function(err,data){
//     if(err) throw err;
//     else{
//         console.log("Folder Reading..")
//         console.log(data)
        
//     }
// })

//-----------------------------------Http----------------------------------

 const http = require("http");

 const server = http.createServer(function(req,res){
    res.end("Hello World");
 })

 server.listen(3000);