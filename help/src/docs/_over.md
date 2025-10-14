# .over

## SINTAXIS
```javascript
S().over(over, out)
```

## DESCRIPCION
Asigna manejadores para los eventos mouseover y mouseout.

## PARAMETROS
- `over`: Función a ejecutar cuando el mouse entra en el elemento
- `out`: Función a ejecutar cuando el mouse sale del elemento

## EJEMPLO
```javascript
S('#miElemento').over(
    function() { console.log('Mouse encima'); },
    function() { console.log('Mouse fuera'); }
);
```