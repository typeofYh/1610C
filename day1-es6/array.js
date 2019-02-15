let arr = ['zs','ls','ww'];
console.log(Object.entries(arr));

let obj = {
    name:'zs',
    age:13
}

//name=zs&age=13



function format(ops){
    return Object.entries(ops).map(function(item){
        return item.join('=')
    }).join('&');
    //[['name','zs'],['age','13']]
    //['name=zs','age=13']
}

format(obj);


