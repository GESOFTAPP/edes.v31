# S.selectRange

## SINTAXIS
```javascript
S.selectRange(obj, posIni, posEnd, copy)
S.selectRange("cadenaTexto")
```

## DESCRIPCIÓN
Selecciona un rango de texto específico en un elemento o cadena de texto, con opción de copiado.

## PARÁMETROS
- `obj` - Elemento DOM o cadena de texto
- `posIni` - Posición inicial de la selección (número)
- `posEnd` - Posición final de la selección (número)
- `copy` - Booleano que indica si copiar al portapapeles (opcional)

## EJEMPLO
```javascript
// Seleccionar rango en un textarea
var textarea = document.getElementById('miTexto');
S.selectRange(textarea, 0, 10); // Selecciona primeros 10 caracteres

// Seleccionar y copiar
S.selectRange(textarea, 5, 15, true);

// Seleccionar toda una cadena
S.selectRange("Texto completo");

// Seleccionar palabra específica
var input = document.getElementById('miInput');
S.selectRange(input, 10, 20); // Selecciona caracteres del 10 al 20
```