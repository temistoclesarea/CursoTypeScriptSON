//booleano
var done1 = false; //implicita
//done1 = "teste";
//numeros
var num = 10;
var num2 = 10.50;
var num3 = 0xFA;
//num = true;
//num = 'string';
//string
var name1 = "temistocles";
var name2 = 'Temis';
name1 = "Teste - " + name1 + " - " + name2;
console.log(name1);
//array
var arrayString1 = ['a', 'b', 'c'];
var arrayNumber2 = [1, 2, 3];
var arrayAny3 = ['a', 2, true];
//enum
var estado_civil;
(function (estado_civil) {
    estado_civil[estado_civil["Solteiro"] = 0] = "Solteiro";
    estado_civil[estado_civil["Casado"] = 1] = "Casado";
    estado_civil[estado_civil["Divorciado"] = 2] = "Divorciado";
})(estado_civil || (estado_civil = {}));
;
var estado_civil2;
(function (estado_civil2) {
    estado_civil2["Solteiro"] = "solteiro";
    estado_civil2["Casado"] = "casado";
    estado_civil2["Divorciado"] = "divorciado";
})(estado_civil2 || (estado_civil2 = {}));
;
var meu_estado_civil = estado_civil.Solteiro;
if (meu_estado_civil == estado_civil.Solteiro) {
    console.log('solteiro!');
}
