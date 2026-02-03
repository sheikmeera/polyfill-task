//Polyfill for Promise.race
if(Promise.race){
    Promise.race=function(arr){
        return new Promise(function(resolve,reject){
            if(!Array.isArray(arr)){
                return reject(new TypeError("Argument is not an array"));
            }
            if(arr.length===0){
                return resolve([]);
            }
            for(let i=0;i<arr.length;i++){
                Promise.resolve(arsr[i]).then(function(value){
                    return resolve(value);
                }).catch(function(err){
                    return reject(err);
                })
            }
        })
    }
       

}