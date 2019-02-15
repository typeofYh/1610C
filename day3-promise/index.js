const {readFile,writeFile} = require('fs');
const path = require('path');
readFile(path.join(__dirname,'./index.html'),'utf8',(err,data)=>{
    if(err){
        return;
    }
    writeFile(path.join(__dirname,'./index1.html'),data,(err)=>{
        if(err){
            return;
        }
        console.log('success');

    });
})