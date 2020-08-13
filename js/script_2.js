/*2. Ingresar una palabra de máximo 
10 letras e informar si es un palíndromo (capicúa) Ej.: NEUQUEN
*/
/*prompt recuperta la palabra a ser analizada y la guarda en una variable*/
let palindromo = prompt("ingrese palabra: ");
/*Normaliza la palabra, retira caracteres especiales, la vuelve minuscula*/
let removeChar = palindromo.replace(/[^A-Z0-9]/ig, "").toLowerCase();
/*Vuelve la palabra a su estado inicial para comparar:
divide (split)
reversa (reverse)
Rejunta (join)*/    
let checkPalindrome = removeChar.split('').reverse().join('');
/*compara si el valor ingresado es un palindromo*/
if(removeChar === checkPalindrome){
    alert(palindromo+ " Es un Palindromo");
    //document.write(palindromo + " Es un Palindromo");
}else{
    alert(palindromo+ " NO es un palindromo");
    //document.write(palindromo + " NO es un Palindromo");
};
