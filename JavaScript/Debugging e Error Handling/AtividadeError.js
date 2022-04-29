function validaarray(arr,num){
    try{
        if(!arr & !num) throw new ReferenceError("Envie os parametros");
    
        if(typeof arr !=='object') throw new TypeError("Array precisa ser do tipo object");
    
        if(typeof num !=='number') throw new TypeError("Num precisa ser do tipo object");
    
        if(arr.length !== num ) throw new RangeError("Tamanho inválido");
    
        return arr;
    }
    catch(e){
        if(e instanceof ReferenceError){
            console.log("Esse error é um ReferenceError")
            console.log(e.message)
            
        }else if(e instanceof TypeError){
            console.log("Esse error é um TypeError")
            console.log(e.message)
        }else if(e instanceof RangeError){
            console.log("Esse error é um RangerError")
            console.log(e.message)
        }else{
            console.log("Tipo de erro não esperado" + e)          
        }
    }
    }


console.log(validaarray([1,2,3,4,5],5));