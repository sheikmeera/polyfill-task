//Polyfill for Function.prototype.bind
if(!Function.prototype.bind){
    Function.prototype.bind=function(thisArg,...preset){
        thisArg=thisArg==null || thisArg==undefined ? globalThis : Object(thisArg);
        let obj=this;
        return function(...args){
            let sym=Symbol();
            thisArg[sym]=obj;
            let res=thisArg[sym](...preset,...args)
            delete thisArg[sym];
            return res;
        }
    }
}