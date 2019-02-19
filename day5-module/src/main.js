import {ajax} from "./js/ajax";

ajax('/api/login').then((data)=>{
    console.log(data);
})