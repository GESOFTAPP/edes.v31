# S.each

## SINTAXIS
```javascript
S.each(dim, callback, bak)
```

## DESCRIPCIÓN
Itera sobre un array o colección ejecutando una función callback para cada elemento.

## PARÁMETROS
- `dim` (array): El array o colección a iterar
- `callback` (function): La función que se ejecutará para cada elemento
- `bak` (optional): Parámetro adicional opcional

## EJEMPLO
```javascript
var numeros = [1, 2, 3, 4, 5];
S.each(numeros, function(index, valor) {
    console.log("Índice: " + index + ", Valor: " + valor);
});
```