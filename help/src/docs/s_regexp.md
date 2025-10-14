# S.regExp

## SINTAXIS
```javascript
S.regExp(txt)
```

## DESCRIPCIÓN
Escapa caracteres especiales en una cadena para uso seguro en expresiones regulares, o crea una expresión regular a partir del texto.

## PARÁMETROS
- `txt` (string): Texto a procesar para expresión regular

## EJEMPLO
```javascript
S.regExp("hello.world")     // "hello\\.world"
S.regExp("[test]")          // "\\[test\\]"
S.regExp("price: $50")      // "price: \\$50"
```