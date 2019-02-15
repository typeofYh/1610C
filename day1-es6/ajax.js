function ajax(obj){
    //type:'get',data:'',async:true,url:'http://www.baidu.com'
    let {type='get',data='',async=true,url} = obj 
    console.log(type,data,async,url);
}

ajax({
    url:'http://www.baidu.com'
})