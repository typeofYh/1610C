export function ajax(url){
    return new Promise((resolve,reject)=>{
        const xhr = new XMLHttpRequest();
        xhr.onload = ()=>{
            if(xhr.status === 200){
                resolve(xhr.responseText)
            }else{
                reject(xhr.statusText);
            }
        }
        xhr.open('post',url);
        // xhr.setRequestHeader('content-type','application/x-www-from-urlencoded');
        // xhr.send('name=zs&pwd=1234');
        xhr.setRequestHeader('content-type','application/json');
        xhr.send(JSON.stringify({
            name:"zs",
            pwd:1234
        }))
        
    })  
}