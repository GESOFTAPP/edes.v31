# S.labelFix

## SINTAXIS
```javascript
S.labelFix(nmField)
```

## DESCRIPCIÓN
Fija la posición del label de un campo en el formulario. Cuando hay un formulario con varias columnas y en la misma fila hay un campo que puede cambiar el alto del control (por ejemplo los select tipo box), y en la otra columna hay un campo que no cambia su altura, al hacerse más alta el campo de la izquierda, el de la derecha al tener el label por defecto centrado verticalmente se desplaza y queda mal alineado.

## PARÁMETROS
- **nmField** (String): Nombre o ID del campo cuyo label necesita ser fijado en su posición

## EJEMPLO
```javascript
// Fijar la posición del label del campo 'email'
S.labelFix('email');

// Fijar múltiples campos en un formulario con layout complejo
S.labelFix('nombre');
S.labelFix('telefono');
S.labelFix('direccion');
```