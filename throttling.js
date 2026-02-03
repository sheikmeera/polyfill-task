function throttling(fn,delay){
    let call=false;
    return function(...args){
        if(call){
            return;
        }
        call=true;
        fn.apply(this,args);
        setTimeout(()=>{
            call=false;
        },delay)
    }   
}