# S.filterAccent

## SINTAXIS
```javascript
S.filterAccent(txt)
```

## DESCRIPCIÓN
Elimina los acentos y caracteres diacríticos de una cadena de texto, convirtiéndolos a sus equivalentes sin acentos. Útil para normalizar texto para búsquedas o comparaciones.

## PARÁMETROS
- **txt** (string): La cadena de texto de la cual se eliminarán los acentos.

## EJEMPLO
```javascript
// Eliminar acentos de texto en español
var textoConAcentos = "Niño jugó fútbol en el jardín";
var textoSinAcentos = S.filterAccent(textoConAcentos);
console.log(textoSinAcentos); // "Nino jugo futbol en el jardin"

// Normalizar para búsquedas
var busqueda = "cafe";
var productos = ["Café colombiano", "Té verde", "Café expreso"];
var resultados = productos.filter(function(producto) {
    return S.filterAccent(producto.toLowerCase()).includes(busqueda);
});
console.log(resultados); // ["Café colombiano", "Café expreso"]
```