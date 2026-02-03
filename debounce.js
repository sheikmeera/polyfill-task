function debounce(fn,delay,flag=false){
    let timer;
    if(flag){
        return function(...args){
            if(!timer){
                fn.apply(this,args);
            }
            clearTimeout(timer);
            timer=setTimeout(()=>{
                timer=null;
            },delay)
        }
    }else{
        return function(...args){
            clearTimeout(timer);
            timer=setTimeout(()=>{
                fn.apply(this,args);
            },delay)
        }
    }   
}