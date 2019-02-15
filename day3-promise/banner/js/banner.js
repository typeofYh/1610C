// function Banner(data){
//     this.data = data;
//     this.init();
// }
// Banner.prototype = {
//     constructor:Banner,
//     init(){

//     }
// }

class Banner{
    constructor(parent,data){
        this.data = data.data;
        //字符串 dom对象
        this.parent = this.getEl(parent);
        this.wrapper = this.getEl('.swiper-wrapper',this.parent);
        this.init();
    }
    getEl(dom,parent=document){    
       return typeof dom === 'string' ? parent.querySelector(dom) : dom;
    }
    init(){
        let imgdata = this.data.map(item=>this.loadImage('./static/image/banner'+item.image+'.jpg'));
        Promise.all(imgdata).then(imgs=>{
            imgs.map(item=>{
                let div = document.createElement('div');
                div.className = 'swiper-slide';
                div.appendChild(item);
                this.wrapper.appendChild(div);
            })
            new Swiper(this.parent);
        })
    }
    loadImage(src){
        return new Promise((resolve,reject)=>{
            const img = new Image();
            img.onload = ()=>{resolve(img)};
            img.onerror = ()=>{reject(img)};
            img.src = src;
        })
    }
}
