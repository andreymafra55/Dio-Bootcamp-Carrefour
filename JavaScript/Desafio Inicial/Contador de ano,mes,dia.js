let totaldedias=400

let anos= totaldedias/365
let meses= (totaldedias%365)/30
let dias = (totaldedias%365)%15

console.log((Math.trunc(anos) + " ano(s) " + '\n' + 
Math.trunc(meses) +" mes(es)" + '\n' +
dias + " dia(s)")
);
