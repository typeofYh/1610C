const fs = require('fs');


// getFile('./async.html').then(data=>{
//     console.log(data.toString());
// })

// concat(['./css/common1.css','./css/style.css']).then(data=>{
//     console.log(data);
// })


// function *concatfile(){
//     console.log(111);
//     let file = yield getFile('./css/common.css')
//     console.log(file);
//     let file1 = yield getFile('./css/style.css');
// }
// let res = concatfile();
// res.next().value.then(text=>{
//     console.log(res.next(text.toString()))
// })


class Concat{
    constructor(){
        this.concat(['./css/common.css','./css/style.css']).then(data=>{
            console.log(data);
        })
    }
    async concat(filepath){
        let css = '';
        for(let i=0;i<filepath.length;i++){
            try{
                await this.getFile(filepath[i]);  
            }catch(err){
                return err;
            }
            css += await this.getFile(filepath[i]); 
        }
        fs.writeFile('./css/build.css',css,(err)=>{
            if(err){
                return;
            }
            console.log('success');
        });
    }
    getFile(filepath,ck) {
        return new Promise((resolve,reject)=>{
            fs.readFile(filepath,(err,data)=>{
                if(err){
                    reject(err);
                    return;
                }
                resolve(data);
            })
        })
    }
}

new Concat();


//async class 


// const dialog = new Dialog(父元素,{
//     title:'确定要购买吗？',
//     content:['确定','取消'],
//     style:{
//         width:100
//     },
    // sureCallback(){

    // },
    // closeCallback(){

    // }
// })

// dialog.on('sure',()=>{

// })
// dialog.on('close',()=>{
    
// })


