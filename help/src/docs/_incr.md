# .incr

## SINTAXIS
```javascript
S().incr(prop)
```

## DESCRIPCIÓN
Incrementa el valor de una propiedad numérica.

## PARÁMETROS
- `prop`: Propiedad a incrementar

## EJEMPLO
```javascript
S("#contador").incr("data-value");
S(".precio").incr("value");
```