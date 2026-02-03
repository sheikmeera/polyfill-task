//Polyfill for Promise.all
if(!Promise.all){
    Promise.all=function(arr){
        return new Promise((resolve,reject)=>{
            if(!Array.isArray(arr)){
                return reject(new TypeError("Argument is not an array"));
            }
            let res=[];
            let remaining=arr.length;
            arr.forEach((p,index)=>{
                if(arr.length===0){
                    return resolve([]);
                }
                Promise.resolve(p).then(value=>{
                    res[index]=value;
                    remaining--;
                    if(remaining===0){
                        resolve(res);
                    }
                }).catch(err=>{
                    reject(err);
                });
            });
        })
    }       
}