//Polyfill for Function.prototype.call
if (!Function.prototype.call) {
  Function.prototype.call = function(thisArg, ...args) {
    thisArg = thisArg==null ||thisArg==undefined ? globalThis : Object(thisArg) ;
    let sym=Symbol();
    thisArg[sym] = this;
    const result = thisArg[sym](...args);
    delete thisArg[sym];
    return result;
  };
}
function abc(a,b,c){
    console.log(this.x);
    console.log(a,b,c);
}
let a=abc.bind({x:10},1,2,3);
a();