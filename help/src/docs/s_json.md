# S.json

## SINTAXIS
```javascript
S.json(array/txt [, convertir=false])
```

## DESCRIPCIÓN
Convierte un "array" en un JSON y si "convertir" le pasamos "true" te devolverá un txt.
Convierte un "txt" en un JSON y si "convertir" le pasamos "true" te devolverá un array.

## PARÁMETROS
- `array/txt` (array|string): Array o texto a convertir
- `convertir` (boolean): Opcional. Si es `true`, convierte el resultado

## EJEMPLO
```javascript
// Convertir array a JSON
var miArray = [1, 2, 3];
var jsonObj = S.json(miArray);

// Convertir array a texto JSON
var jsonString = S.json(miArray, true);

// Convertir texto JSON a objeto
var textoJson = '{"nombre": "Juan", "edad": 30}';
var objeto = S.json(textoJson);
```