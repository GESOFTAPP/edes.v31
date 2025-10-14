# .check

## SINTAXIS
```javascript
S().check(val)
```

## DESCRIPCIÓN
Marca o desmarca elementos de tipo checkbox o radio.

## PARÁMETROS
- `val`: Valor booleano para marcar (true) o desmarcar (false)

## EJEMPLO
```javascript
S("#checkbox1").check(true);  // Marca el checkbox
S("#checkbox2").check(false); // Desmarca el checkbox
S("input[type='radio'][name='grupo']").check(true); // Marca el radio button
```