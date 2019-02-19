const oBox = document.getElementById('box');
const staticBtn = document.getElementsByTagName('button')[0];
const moveBtn = document.getElementsByTagName('button')[1];
const numInput = document.getElementsByTagName('input')[0];
const allBtn = document.getElementsByTagName('button')[2];
class StaticNumBlock{ // 静态数柱的类
    constructor(opt){
        let {min,max,num,background,margin} = opt;
        this.num = num;
        this.css = {
            width:'30px',
            height:'30px',
            'line-height':'30px',
            background,
            color:'#fff',
            'text-align':'center',
            margin:'0 2px',
            'padding-top':((num-1)*margin)+'px'
        };
        if(num >= min && num <= max){
            this.appendEl();
        } else {
            return;
        }
    }
    appendEl(){
        oBox.appendChild(this.createElement());
    }
    createElement(){
        this.el = document.createElement('div');
        this.el.style.cssText = Object.entries(this.css).map(item=>item[0]+':'+item[1]).join(';');
        this.el.innerHTML = this.num;
        return this.el;
    }
}

class MoveNumBlock extends StaticNumBlock{// 动态数柱的类
    constructor(opt){
        super(opt);
        this.addEvnet();
    }
    addEvnet(){
        const eventName = 'webkitAnimationEnd' || 'animationEnd';
        this.el.addEventListener('click',this.move.bind(this))
        this.el.addEventListener(eventName,()=>{
            this.el.classList.remove('jump');
            this.resolve();
        })
    }
    move(){
        return new Promise(resolve=>{
            this.resolve = resolve;
            this.el.classList.add('jump');
        })
    }
}

// 分别给按钮添加点击事件，实现所要求的的效果
staticBtn.onclick = ()=>{
    new StaticNumBlock({
        min:1,
        max:9,
        background:'red',
        margin:10,
        num:parseInt(numInput.value)
    })
}
const movebtn = [];
//[{move:P,el:div},{move:P,el:div},{move:P,el:div}]
moveBtn.onclick = ()=>{
    const moveel = new MoveNumBlock({
        min:1,
        max:9,
        background:'pink',
        margin:10,
        num:parseInt(numInput.value)
    })
    movebtn.push(moveel);
}

allBtn.onclick = async function(){
    for(let i of movebtn){
        await i.move();
    }
}



// let arr = [];
// function getcount(i){
//     return new Promise((resolve)=>{
//         resolve();
//         arr.push(i);
//     })  
// }


// for(let i=0;i<3;i++){
//     getcount(i);
// }
// console.log(arr);

// async function setcount(){
//     for(let i=0;i<3;i++){
//         await getcount(i);
//     }
//     console.log(arr);
// }
// setcount();