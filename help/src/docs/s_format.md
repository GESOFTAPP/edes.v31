# S.format

## SINTAXIS
```javascript
S.format(tipo, txt)
```

## DESCRIPCIÓN
Aplica formato específico a un texto según el tipo especificado (fecha, número, moneda, etc.).

## PARÁMETROS
- `tipo` - Tipo de formato a aplicar (string)
- `txt` - Texto o valor a formatear

## EJEMPLO
```javascript
// Formatear fecha
var fechaFormateada = S.format('fecha', '2023-12-25');

// Formatear número
var numeroFormateado = S.format('numero', 1234.56);

// Formatear moneda
var monedaFormateada = S.format('moneda', 1500.75);

// Formatear texto personalizado
var textoFormateado = S.format('mayusculas', 'hola mundo');
```