# .sum

## SINTAXIS
```javascript
S().sum(xGroups)
```

## DESCRIPCIÓN
Suma los campos que tengan en el atributo indicado los grupos especificados en "xGroups".

## PARÁMETROS
Son necesarios dos parámetros: el primero selecciona todos los input que tienen el atributo y el segundo suma entre ellos los que tengan todos los grupos indicados en la operación.

## EJEMPLO
```javascript
var cant1 = S("INPUT[e-group]").sum("op1 op2");
var cant2 = S("INPUT[e-group]").sum("op3");
var cant3 = S("INPUT[e-group]").sum("op1 op3");
```
En el atributo "e-group" se pone un identificador para indicar en qué operación está indicado sumar sus cantidades.