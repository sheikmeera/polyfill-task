function throttling(fn,delay,flag=false){
    let call=false;
    if(flag){
        return function(...args){
            if(!call){
                fn.apply(this,args);
                call=true;  
                setTimeout(()=>{
                    call=false;
                },delay);
            }
        }
    }
    else{
        let call=false;
        return function(...args){
            if(!call){
                call=true;  
                setTimeout(()=>{
                    fn.apply(this,args);
                    call=false;
                },delay);
            }
        }
    }
}