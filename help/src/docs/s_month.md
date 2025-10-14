# S.month

## SINTAXIS
```javascript
S.month(txt, n)
```

## DESCRIPCIÓN
Obtiene el nombre del mes basado en un texto o número. Permite extraer o convertir información de meses.

## PARÁMETROS
- `txt` (string|number): Texto o número que representa un mes
- `n` (number): Número opcional para especificar el formato o idioma

## EJEMPLO
```javascript
S.month("01", 1)      // "Enero"
S.month("January", 2) // "Jan"
S.month(3)            // "Marzo"
```