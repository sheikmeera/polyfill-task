//Polyfill for Function.prototype.apply
if (!Function.prototype.apply) {
  Function.prototype.apply = function(thisArg, args) {
    thisArg = thisArg==null ||thisArg==undefined ? globalThis : Object(thisArg) ;
    if (!Array.isArray(args) && args !== null && args !== undefined) {
      throw new Error("Arguments should be passed as an array");
    }
    let sym=Symbol();
    thisArg[sym] = this;
    const result = thisArg[sym](...args);
    delete thisArg[sym];
    return result;
  };
}