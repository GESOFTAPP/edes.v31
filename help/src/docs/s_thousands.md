# S.thousands

## SINTAXIS
```javascript
S.thousands(num, dec, showZero)
```

## DESCRIPCIÓN
Formatea números añadiendo separadores de miles y controlando los decimales mostrados.

## PARÁMETROS
- `num` - Número a formatear
- `dec` - Número de decimales a mostrar (opcional)
- `showZero` - Booleano que indica si mostrar ceros (opcional)

## EJEMPLO
```javascript
// Formatear número básico
var numeroFormateado = S.thousands(1234567);
// Resultado: "1,234,567"

// Con decimales específicos
var conDecimales = S.thousands(1234.56789, 2);
// Resultado: "1,234.57"

// Sin mostrar ceros
var sinCeros = S.thousands(1200.00, 2, false);
// Resultado: "1,200"

// Mostrar ceros
var conCeros = S.thousands(1200.00, 2, true);
// Resultado: "1,200.00"
```