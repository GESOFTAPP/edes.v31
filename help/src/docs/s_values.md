# S.values

## SINTAXIS
```javascript
S.values( [ [ val ], change ] )
```

## DESCRIPCIÓN
Obtiene o establece todos los valores de un formulario. Devuelve una matriz con todos los valores de los campos del formulario.

## PARÁMETROS
- `val` - Array de valores a establecer (opcional)
- `change` - Booleano que indica si ejecutar eventos de cambio (opcional)

## EJEMPLO
```javascript
// Obtener todos los valores del formulario
var dimFields = S.values();
// Devuelve una matriz con todos los valores del formulario

// Establecer valores en el formulario
var nuevosValores = ['valor1', 'valor2', 'valor3'];
S.values(nuevosValores);

// Establecer valores y ejecutar eventos de cambio
S.values(nuevosValores, true);

// Guardar estado del formulario
var estadoFormulario = S.values();
localStorage.setItem('formulario', JSON.stringify(estadoFormulario));

// Restaurar estado del formulario
var estadoGuardado = JSON.parse(localStorage.getItem('formulario'));
S.values(estadoGuardado, false);
```