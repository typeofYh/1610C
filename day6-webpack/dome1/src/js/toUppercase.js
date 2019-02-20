
export default {
    reverse(str){
        return str.split('').reverse().join('')
    },
    toUpper(str){
        let arr = str.split('-');
        let res = '';
        for(let i of Object.keys(arr)){
            if(i===0){
                res += arr[i];
            }else{
                res += arr[i][0].toUpperCase()+arr[i].substr(1)
            }
        }
        return res;
    }
};