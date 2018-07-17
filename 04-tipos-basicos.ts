//booleano
let done1: boolean = false; //implicita
//done1 = "teste";

//numeros
let num = 10;
let num2: number = 10.50;
let num3: number = 0xFA;

//num = true;
//num = 'string';

//string
let name1 = "temistocles";
let name2: string = 'Temis';
name1 = `Teste - ${name1} - ${name2}`;
console.log(name1);

//array
let arrayString1: string[] = ['a', 'b', 'c'];
let arrayNumber2: Array<number> = [1, 2, 3];
let arrayAny3: Array<any> = ['a', 2, true];

//enum
enum estado_civil {Solteiro, Casado, Divorciado};
enum estado_civil2 {
    Solteiro = 'solteiro', 
    Casado = 'casado', 
    Divorciado = 'divorciado'
};

let meu_estado_civil: estado_civil = estado_civil.Solteiro;

if(meu_estado_civil == estado_civil.Solteiro) {
    console.log('solteiro!');
}