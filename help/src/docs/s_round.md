# S.round

## SINTAXIS
```javascript
S.round(num, dec, miles)
```

## DESCRIPCIÓN
Redondea un número con el número de decimales especificado y opcionalmente aplica separadores de miles.

## PARÁMETROS
- `num` (number): Número a redondear
- `dec` (number): Número de decimales
- `miles` (boolean): Si aplicar separador de miles

## EJEMPLO
```javascript
S.round(1234.5678, 2, true); // Resultado: "1,234.57"
S.round(1234.5678, 1, false); // Resultado: "1234.6"
```