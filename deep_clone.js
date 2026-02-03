function deepClone(obj){
    if(obj===null || typeof obj !== 'object'){
        return obj;
    }
    let cloneObj=Array.isArray(obj) ? [] : {};
    for(let key in obj){
        cloneObj[key]=deepClone(obj[key]);
    }
    return cloneObj;
}