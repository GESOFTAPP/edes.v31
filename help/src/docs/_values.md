# .values

## SINTAXIS
```javascript
S().values(val, change)
```

## DESCRIPCION
Establece u obtiene múltiples valores de elementos, con opción de disparar evento de cambio.

## PARAMETROS
- `val`: Valor o array de valores a establecer
- `change`: (opcional) Booleano para indicar si se debe disparar el evento change

## EJEMPLO
```javascript
S('.inputs').values(['valor1', 'valor2', 'valor3'], true);
```