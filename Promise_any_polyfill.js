//Polyfill for Promise.any
if(!Promise.any){
    Promise.any=function(arr){
        return new Promise((resolve,reject)=>{  
            if(!Array.isArray(arr)||arr.length===0){
                return reject(new TypeError("Argument is not an array or is empty"));
            }
            let err=[];
            let count=0;
            for(let i=0;i<arr.length;i++){
                Promise.resolve(arr[i]).then((data)=>{resolve(data)}).catch(function(er){
                    err[i]=er;
                    count++;
                    if(count==arr.length){
                        return reject(err);
                    }
                })
            }
        })
    }
}