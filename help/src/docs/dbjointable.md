# DBJoinTable

## Sintaxis
```
[DBJoinTable] Table1.Field = Table2.Field | c1, c2
```

## Descripción
Esta función está **solo activa al exportar datos**. Permite realizar joins entre tablas durante el proceso de exportación.

## Parámetros
- **Table1.Field = Table2.Field**: Condición de join entre las tablas
  - `Table1.Field`: Campo de la primera tabla
  - `Table2.Field`: Campo de la segunda tabla que se relaciona
- **c1, c2**: Lista de columnas separadas por comas (después del separador `|`)

## Características
- ⚠️ **Importante**: Solo funciona durante procesos de exportación de datos
- Permite relacionar datos de diferentes tablas
- Utiliza el separador `|` para distinguir entre la condición de join y las columnas

## Ejemplo
```
[DBJoinTable] usuarios.id_departamento = departamentos.id | nombre_depto, codigo_depto
```

### Explicación del ejemplo:
- Se hace un join entre las tablas `usuarios` y `departamentos`
- La condición: `usuarios.id_departamento = departamentos.id`
- Se incluyen las columnas: `nombre_depto` y `codigo_depto`
- Solo se ejecutará durante la exportación de datos

## Notas
- Esta funcionalidad complementa las operaciones de base de datos para exportación
- Asegúrate de que las tablas y campos especificados existan
- Útil para enriquecer los datos exportados con información relacionada