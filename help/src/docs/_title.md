# .title

## SINTAXIS
```javascript
S().title(x)
```

## DESCRIPCIÓN
Pone el "title" a un objeto.

## PARÁMETROS
Hay 3 formas de usar la función:
1. `S(...).title("title a poner")` - Pone el "title" indicado
2. `S(...).title(true/false)` - Cuando en un tag tenemos los atributos "eTitleON" y/o "eTitleOFF" pondrá el title de uno de ellos, si no existe alguno de los atributos al usarlo lo crea con el valor de "title"
3. `S(...).title()` - Conmuta con los valores de "eTitleON" y "eTitleOFF"

## EJEMPLO
```html
<span id="CambiarTitle" title="ON" eTitleOFF="OFF">...</span>
```
```javascript
S("#CambiarTitle").title(false);
// Pone el title con el contenido de eTitleOFF y como no tienen el atributo eTitleON lo memoriza con el title actual
```

```html
<span id="CambiarTitle" title="OFF" eTitleON="ON">...</span>
```
```javascript
S("#CambiarTitle").title(true);
// Pone el title con el contenido de eTitleON y como no tienen el atributo eTitleOFF lo memoriza con el title actual
```