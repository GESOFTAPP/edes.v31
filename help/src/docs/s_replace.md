# S.replace

## SINTAXIS
```javascript
S.replace(obj, att)
```

## DESCRIPCIÓN
Función versátil de reemplazo que puede trabajar con texto simple, múltiples reemplazos, rangos de texto y atributos de objetos DOM.

## PARÁMETROS
- `obj` (string|object): Texto a procesar o elemento DOM
- `att` (string|array): Patrón de búsqueda, atributo, o configuración de reemplazo

## EJEMPLO
```javascript
// Reemplazo simple
S.replace($txt, "B", "*")

// Múltiples reemplazos
S.replace($txt, "B", "*", "e", ":", ...)

// Array de reemplazos
S.replace($txt, [["B", "*"], ["e", ":"], ...])

// Reemplazo por rango
S.replace($txt, "[", "]", "xxx")

// Array de rangos
S.replace($txt, [["[", "]", "xxx"], ["{", "}", "yyy"]])

// Reemplazo en atributos DOM
S.replace(oImg, "src", "_0.", "_1.", ..., ...)

// Array de reemplazos en atributos
S.replace(oImg, "src", [[".gif", ".png"], ...])
```