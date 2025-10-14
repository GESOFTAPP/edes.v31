# S.key_Char

## SINTAXIS
```javascript
S.key_Char(otype, pos, izq, char, dch, long, dec, accent, sType, noChar, typeBak, win, obj)
```

## DESCRIPCIÓN
Maneja la entrada de caracteres con validaciones específicas y formateo.

## PARÁMETROS
- `otype` (string): Tipo de operación
- `pos` (number): Posición del cursor
- `izq` (boolean): Dirección izquierda
- `char` (string): Carácter a procesar
- `dch` (string): Carácter derecho
- `long` (number): Longitud máxima
- `dec` (number): Número de decimales
- `accent` (boolean): Permitir acentos
- `sType` (string): Tipo de cadena
- `noChar` (string): Caracteres no permitidos
- `typeBak` (string): Tipo de respaldo
- `win` (object): Objeto window
- `obj` (object): Objeto elemento

## EJEMPLO
```javascript
S.key_Char("text", 0, false, "a", "", 10, 0, true, "string", "", "text", window, elemento);
```