//Polyfill for Promise.allSettled
if(!Promise.allSettled){
    Promise.allSettled=function(arr){
        return new Promise(function(resolve,reject){
            if(!Array.isArray(arr)){
                return reject(new TypeError("Argument is not an array"));
            }   
            if(arr.length===0){
                return resolve([]);
            }
            let res=[];
            let count=0;
            for(let i=0;i<arr.length;i++){
                Promise.resolve(arr[i]).then(function(value){
                    res[i]={status:"fulfilled",value:value};
                }).catch(function(err){
                    res[i]={status:"rejected",value:err};
                })
                .finally(()=>{
                    count++;
                    if(count==arr.length){
                        return resolve(res);
                    }
                })
            }
        })
    }
}