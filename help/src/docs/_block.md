# .block()

## SINTAXIS
```javascript
S().block(tipo)
```

## DESCRIPCIÓN
Establece el display del elemento como block o controla el tipo de bloque a mostrar.

## PARÁMETROS
- **tipo** (opcional): Tipo de display block a aplicar
  - Sin parámetro: Establece `display: block`
  - `"inline-block"`: Establece `display: inline-block`
  - `"flex"`: Establece `display: flex`
  - `true` o `1`: Establece `display: block`
  - `false` o `0`: Establece `display: none`

## EJEMPLO
```javascript
// Mostrar como bloque
S("#miDiv").block();

// Mostrar como inline-block
S(".elemento").block("inline-block");

// Mostrar como flex
S(".container").block("flex");

// Ocultar elemento
S("#oculto").block(false);
```