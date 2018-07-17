
let meu_nome: any = "temistocles area";
let count1 = (<string>meu_nome).length;
let count2 = (meu_nome as string).length;

let obj = {
    name: 'temistocles area'
};
(<any>obj).texto1 = "teste1";
(obj as any).texto2 = "teste2";

console.log(obj);

let num = 2;

let numString = num + "";

console.log(typeof numString);

let stringNum = "-234";
let num2 = +stringNum;

console.log(typeof num2);
console.log(num2);