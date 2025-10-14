# S.visibility

## SINTAXIS
```javascript
S.visibility(obj, on)
```

## DESCRIPCIÓN
Controla la propiedad CSS `visibility` de un elemento, permitiendo hacer elementos visibles o invisibles sin afectar el layout del documento (a diferencia de `display`).

## PARÁMETROS
- **obj** (Element|String): El elemento DOM o selector del elemento
- **on** (Boolean): `true` para hacer visible (`visibility: visible`), `false` para ocultar (`visibility: hidden`)

## EJEMPLO
```javascript
// Hacer visible un elemento
S.visibility('#miElemento', true);

// Ocultar un elemento (mantiene el espacio)
S.visibility('#miElemento', false);

// Usar con elemento DOM directo
const elemento = document.getElementById('popup');
S.visibility(elemento, true);
```