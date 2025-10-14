# S.lng

## SINTAXIS
```javascript
S.lng(i, c1, c2, c3)
```

## DESCRIPCIÓN
Función de internacionalización que devuelve diferentes cadenas de texto según un índice numérico. Útil para manejar plurales y diferentes formas de una palabra según la cantidad.

## PARÁMETROS
- **i** (number): El índice numérico que determina qué cadena retornar.
- **c1** (string): Cadena a retornar cuando i es 1.
- **c2** (string): Cadena a retornar cuando i es diferente de 1.
- **c3** (string, opcional): Cadena adicional para casos especiales.

## EJEMPLO
```javascript
// Manejo de plurales simples
var cantidad = 1;
var mensaje = S.lng(cantidad, "elemento", "elementos");
console.log(cantidad + " " + mensaje); // "1 elemento"

cantidad = 5;
mensaje = S.lng(cantidad, "elemento", "elementos");
console.log(cantidad + " " + mensaje); // "5 elementos"

// Con diferentes formas
var items = 0;
var texto = S.lng(items, "hay un item", "hay varios items", "no hay items");
console.log(texto); // "no hay items"

// Para mensajes de estado
var usuarios = 1;
var estado = S.lng(usuarios, "usuario conectado", "usuarios conectados");
console.log(usuarios + " " + estado); // "1 usuario conectado"
```