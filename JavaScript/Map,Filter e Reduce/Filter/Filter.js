function filtraPares(arr){
    return arr.filter(callback)
}

function callback(item){
    return item % 2 === 0;
}

const meuarray =[2,7,6,12,18,19,17,33,57]

console.log(filtraPares(meuarray))