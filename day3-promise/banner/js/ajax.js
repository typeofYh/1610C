const ajax = {
    get(url,data='',async=true){
        const xhr = new XMLHttpRequest();
        if(typeof data === 'string'){
            if(data != ''){
                url += '?' + data
            }
        }else{
            url += '?' + this.format(data)
        }
        return new Promise((resolve,reject)=>{
            xhr.onload = ()=>{ //readystate 3-4
                if(xhr.status>=200 && xhr.status<=300 || xhr.status===304){
                    resolve(JSON.parse(xhr.responseText));
                }else{
                    reject(new Error(`服务器状态错误${xhr.statusText}`))
                }
            }
            xhr.open('get',url,async);
            xhr.send(null);
        })
    },
    post(){

    },
    format(data){
        //{name:zs,age:13} name=zs&age=13
       return  Object.entries(data).map(item=>item.join('=')).join('&')//[name,zs]
    }
}



