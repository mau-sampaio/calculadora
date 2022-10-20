import somar from "./somar.js";
import subtrair from "./subtrair.js";
import dividr from "./dividir.js";
import multiplicar from "./multiplicar.js";


const num1 = 0,
num2 = 0;

console.log(`Os números informados foram ${num1} e ${num2} e os resutados são: 
Na função de adição o resultado foi: ${somar(num1,num2)} 
Na função de subtração o resultado foi: ${subtrair(num1,num2)}
`)

console.log(`Os números informados foram ${num1} e ${num2} e o resutado é:
Na função de multiplicação o resultado foi: ${multiplicar(num1,num2)}
`)


console.log(`Os números informados foram ${num1} e ${num2} e o resutado é:
Na função de divisão o resultado foi: ${dividir(num1,num2)}
`)