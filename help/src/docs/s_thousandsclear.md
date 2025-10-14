# S.thousandsClear

## SINTAXIS
```javascript
S.thousandsClear(obj, dec, showZero)
```

## DESCRIPCIÓN
Elimina el formato de miles de un elemento, devolviendo el valor numérico limpio.

## PARÁMETROS
- `obj` - Elemento DOM que contiene el número formateado
- `dec` - Número de decimales a conservar (opcional)
- `showZero` - Booleano que indica si mostrar ceros (opcional)

## EJEMPLO
```javascript
// Limpiar formato de un input
var valorLimpio = S.thousandsClear(document.getElementById('precio'));

// Limpiar con decimales específicos
var input = document.getElementById('cantidad');
S.thousandsClear(input, 2);

// Limpiar múltiples campos
var campos = document.querySelectorAll('.campo-numerico');
campos.forEach(function(campo) {
    S.thousandsClear(campo, 2, false);
});

// Limpiar antes de enviar formulario
document.getElementById('formulario').onsubmit = function() {
    S.thousandsClear(document.getElementById('total'));
    return true;
};
```