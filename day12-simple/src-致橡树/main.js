import './css/index.css';
import {poem as data} from './mock/data';
import('./js/move.js').then(v=>{
    new v.default(data)
})
