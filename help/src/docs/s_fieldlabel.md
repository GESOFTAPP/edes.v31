# S.fieldLabel

## SINTAXIS
```javascript
S.fieldLabel(obj)
```

## DESCRIPCIÓN
Obtiene el texto de la etiqueta (label) asociada a un campo de formulario. Busca automáticamente el elemento label vinculado al campo especificado, ya sea por el atributo 'for' o por jerarquía HTML.

## PARÁMETROS
- **obj** (element|string): El elemento de campo de formulario o selector del cual se desea obtener la etiqueta

## EJEMPLO
```javascript
// Obtener el label de un campo de input
var etiqueta = S.fieldLabel('#nombreUsuario');
console.log(etiqueta); // "Nombre de usuario"

// Obtener label de un campo por elemento
var campo = document.getElementById('email');
var labelTexto = S.fieldLabel(campo);
console.log(labelTexto); // "Correo electrónico"
```