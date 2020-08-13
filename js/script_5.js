var items = [];
for (var i=0, j=40; i<j; i++) {
    items.push(Math.round(Math.random() * j))
}
var value = parseInt(prompt("Por favor Ingrese un numero: "));

function binary_Search(items, value){
    let firstIndex  = 0;
    let lastIndex   = items.length - 1;
    let middleIndex = Math.floor((lastIndex + firstIndex)/2);

    while(items[middleIndex] != value && firstIndex < lastIndex)
    {
       if (value < items[middleIndex])
        {
            lastIndex = middleIndex - 1;
        } 
      else if (value > items[middleIndex])
        {
            firstIndex = middleIndex + 1;
        }
        middleIndex = Math.floor((lastIndex + firstIndex)/2);
    }

    return (items[middleIndex] != value) ? -1 : middleIndex;
}
const sortedArray = [...items].sort((a, b) => a - b)
document.write("Array Resultante: " + "<br>" + sortedArray + " ");

var pos = sortedArray.indexOf(value);

document.write("Numero "+ value +" encontrado en posicion "+pos);