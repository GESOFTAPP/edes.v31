# .value

## SINTAXIS
```javascript
S().value(val, change)
```

## DESCRIPCION
Establece u obtiene el valor de un elemento, con opción de disparar evento de cambio.

## PARAMETROS
- `val`: Valor a establecer en el elemento
- `change`: (opcional) Booleano para indicar si se debe disparar el evento change

## EJEMPLO
```javascript
S('#miInput').value('Nuevo valor', true);
```