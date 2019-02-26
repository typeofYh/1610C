import BetterScroll from 'better-scroll';
export default class {
    constructor(data){
        this.parent = document.querySelector('#app');
        this.render(data);
        this.show();
    }
    render(data){
        this.parent.innerHTML = `<div>${ data.map(item=> `<p>${item}</p>`).join('') }</div>`;
        new BetterScroll('#app')
    }
    show(){
        this.p = [...this.parent.querySelectorAll('p')];
        let moves = this.p.map(item=>{
            return {
                el:item,
                promise:new Promise(resolve=>{
                        item.addEventListener('webkitAnimationEnd',()=>{
                            resolve();
                        })
                    })
                }
        });
        this.transition(moves);
    }
    async transition(arr){
        for(let val of arr){
            val.el.classList.add('active'); //1
            await val.promise;
        }
    }
}