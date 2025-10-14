# .nextValue()

## SINTAXIS
```javascript
S(selector).nextValue()
```

## DESCRIPCIÓN
Obtiene el valor del siguiente elemento en la secuencia o estructura DOM. Útil para navegar entre elementos relacionados y obtener sus valores de manera secuencial.

## PARÁMETROS
- Ninguno: Este método no acepta parámetros

## EJEMPLO
```javascript
// Obtener el valor del siguiente elemento
var siguienteValor = S('#campo1').nextValue();
console.log(siguienteValor);

// Navegación secuencial en formulario
var valores = [];
S('.form-input').each(function() {
  var siguiente = S(this).nextValue();
  if (siguiente) {
    valores.push(siguiente);
  }
});

// Ejemplo con lista de elementos
S('#lista li:first').nextValue(); // Valor del segundo elemento de la lista

// Uso en validación secuencial
function validarSecuencia() {
  var actual = S('#paso1').val();
  var siguiente = S('#paso1').nextValue();
  
  if (actual && siguiente) {
    console.log('Secuencia válida');
  }
}
```

## NOTAS
- Útil para navegación secuencial entre elementos
- Retorna undefined si no hay siguiente elemento
- Puede usarse en validaciones de formularios paso a paso