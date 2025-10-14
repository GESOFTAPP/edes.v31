# .radio()

## SINTAXIS
```javascript
S(selector).radio(val)
```

## DESCRIPCIÓN
Gestiona botones de radio (radio buttons) estableciendo o obteniendo el valor seleccionado en un grupo de opciones. Facilita el trabajo con elementos de tipo radio en formularios.

## PARÁMETROS
- `val` (string|number): El valor que se seleccionará en el grupo de radio buttons. Si no se proporciona, devuelve el valor actualmente seleccionado.

## EJEMPLO
```javascript
// Seleccionar un radio button por valor
S('input[name="genero"]').radio('masculino');

// Obtener el valor seleccionado
var seleccionado = S('input[name="color"]').radio();
console.log(seleccionado); // 'rojo', 'azul', etc.

// Ejemplo con formulario
S('input[name="plan"]').radio('premium');

// Manejar cambios en radio buttons
S('input[name="metodo_pago"]').on('change', function() {
  var metodoPago = S('input[name="metodo_pago"]').radio();
  console.log('Método seleccionado:', metodoPago);
});

// Validar selección de radio
function validarSeleccion() {
  var opcion = S('input[name="acepta_terminos"]').radio();
  if (!opcion) {
    S('.error-terminos').text('Debe aceptar los términos');
    return false;
  }
  return true;
}
```

## NOTAS
- Específico para elementos input de tipo "radio"
- Trabaja con grupos de radio buttons que comparten el mismo atributo "name"
- Útil para formularios con opciones excluyentes