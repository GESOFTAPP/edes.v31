# S.ltrim

## SINTAXIS
```javascript
S.ltrim(txt)
```

## DESCRIPCIÓN
Elimina los espacios en blanco del lado izquierdo (inicio) de una cadena de texto. Similar a trimStart() o trimLeft() pero con compatibilidad extendida.

## PARÁMETROS
- **txt** (string): La cadena de texto de la cual se eliminarán los espacios del lado izquierdo.

## EJEMPLO
```javascript
// Eliminar espacios del inicio
var textoConEspacios = "   Hola mundo";
var textoLimpio = S.ltrim(textoConEspacios);
console.log("'" + textoLimpio + "'"); // "'Hola mundo'"

// Limpiar entrada de formulario
var inputUsuario = "    juan@email.com";
var emailLimpio = S.ltrim(inputUsuario);
console.log(emailLimpio); // "juan@email.com"

// Con diferentes tipos de espacios
var textoComplejo = "\t\n   Texto importante";
var resultado = S.ltrim(textoComplejo);
console.log("'" + resultado + "'"); // "'Texto importante'"

// Conserva espacios del final
var ejemplo = "   inicio   final   ";
var solo_ltrim = S.ltrim(ejemplo);
console.log("'" + solo_ltrim + "'"); // "'inicio   final   '"
```