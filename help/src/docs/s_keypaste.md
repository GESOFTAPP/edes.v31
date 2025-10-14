# S.keyPaste

## SINTAXIS
```javascript
S.keyPaste(obj, type, lon, dec, sType, otype, typeBak)
```

## DESCRIPCIÓN
Maneja el pegado de texto en elementos de entrada con validaciones específicas.

## PARÁMETROS
- `obj` (object): Objeto elemento donde pegar
- `type` (string): Tipo de entrada
- `lon` (number): Longitud máxima
- `dec` (number): Número de decimales
- `sType` (string): Tipo de cadena
- `otype` (string): Tipo de operación
- `typeBak` (string): Tipo de respaldo

## EJEMPLO
```javascript
var input = S("#miInput");
S.keyPaste(input, "number", 10, 2, "numeric", "paste", "number");
```