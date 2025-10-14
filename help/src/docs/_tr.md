# .tr

## SINTAXIS
```javascript
S().tr(op, rec, dim, dimTr)
```

## DESCRIPCION
Gestiona filas de una tabla (crear, eliminar, modificar).

## PARAMETROS
- `op`: Operación a realizar en la fila
- `rec`: Registro o datos de la fila
- `dim`: Dimensiones de la fila
- `dimTr`: Dimensiones específicas del TR

## EJEMPLO
```javascript
S().tr('add', {col1: 'valor1', col2: 'valor2'}, 100, 25);
```