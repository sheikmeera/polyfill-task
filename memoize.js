function memoize(fn){
    const cache=new Map();
    return function(...args){
        const key=JSON.stringify(args);
        if(cache.has(key)){
            return cache.get(key);
        }
        const res=fn.apply(this,args);
        cache.set(key,res);
        return res;
    }
}