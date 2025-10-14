# .attr

## SINTAXIS
```javascript
S().attr(dim, valor, asign)
```

## DESCRIPCIÓN
Establece o obtiene atributos de elementos DOM.

## PARÁMETROS
- `dim`: Nombre del atributo
- `valor`: Valor a asignar al atributo
- `asign`: Tipo de asignación

## EJEMPLO
```javascript
S("#miElemento").attr("data-value", "123");
S(".elementos").attr("class", "nueva-clase", true);
```