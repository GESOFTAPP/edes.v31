# DBOrder

## Descripción General

La directiva **DBOrder** permite definir las columnas de ordenación para los listados en el sistema. Esta funcionalidad es esencial para controlar cómo se presentan los datos al usuario final, ofreciendo tanto ordenaciones estáticas como dinámicas.

## Sintaxis

```
[DBOrder] Campo [DESC] [, Campo [DESC]] ... [, Campo [DESC]]
```

### Parámetros

- **Campo**: Nombre del campo por el cual ordenar
- **DESC**: Parámetro opcional para ordenación descendente
- **,**: Separador para múltiples campos de ordenación

## Características y Reglas

### Ubicación
- En **grupos de fichas (GDF)**: Debe colocarse obligatoriamente en la primera ficha del grupo
- Para listados simples: Se coloca en la definición del listado

### Tipos de Ordenación
- **Ascendente**: Por defecto (sin parámetros adicionales)
- **Descendente**: Añadir `DESC` después del nombre del campo

### Campos Select
Para ordenar por campos de tipo select que siguen el patrón `cd_[tabla]`:
- ❌ **Incorrecto**: `cd_proveedor`
- ✅ **Correcto**: `nm_proveedor`

### Cláusula GROUP BY
Se puede incluir al final de la lista de campos:
```
[DBOrder] campo1, campo2 GROUP BY 1,2
```

### Alias de Tablas
En caso de conflictos con nombres de campos, usar alias de tabla:
- Los alias siguen el patrón alfabético: **A**, **B**, **C**, etc.
- Se asignan según el orden de aparición en los selects
- Sintaxis: `[ALIAS].[CAMPO]`

## Ordenación Dinámica

### Variable del Sistema _ORDEN_
Permite que el usuario seleccione la ordenación en tiempo de ejecución:

```
[AddOption] c | *ORDEN* | opciones_ordenacion
[Fields]
Ordenación | *ORDEN* | 0 | SV | 3 | | Q | | |
```

### Formato de Opciones
```
valor,etiqueta; valor,etiqueta; ...
```

## Ejemplos Prácticos

### 1. Ordenación Básica
```
[DBOrder] codigo, fecha desc, articulo
```
- Ordena por código (ascendente)
- Luego por fecha (descendente)  
- Finalmente por artículo (ascendente)

### 2. Con GROUP BY
```
[DBOrder] nm_prov group by 1,2
```
- Ordena por nombre de provincia
- Agrupa por las dos primeras columnas

### 3. Ordenación Dinámica Completa
```
[AddOption] c | *ORDEN* | refe,Nº Referencia; A.cd_prov+A.cd_muni+A.cd_distrito+A.cd_barrio+A.nombre,Distrito y Barrio; pvp,PVP; pvp DESC, PVP Descendente; L.nombre+K.apellidos,Asesor

[Fields]
Ordenación | *ORDEN* | 0 | SV | 3 | | Q | | |
```

### 4. Con Alias de Tabla
```
[DBOrder] B.nm_auto, C.nm_t_cuota, A.dt_ini DESC
```
- `B.nm_auto`: Campo de la segunda tabla
- `C.nm_t_cuota`: Campo de la tercera tabla
- `A.dt_ini DESC`: Campo de la primera tabla en orden descendente

### 5. Campos Concatenados
```
[DBOrder] A.cd_prov+A.cd_muni+A.cd_distrito+A.cd_barrio+A.nombre
```
- Permite ordenar por múltiples campos concatenados

## Casos de Uso Comunes

### Listado de Clientes
```
[DBOrder] apellidos, nombre, fecha_alta DESC
```

### Listado de Productos por Categoría
```
[DBOrder] nm_categoria, precio DESC, codigo
```

### Listado con Agrupación
```
[DBOrder] nm_vendedor, total_ventas DESC GROUP BY nm_vendedor
```

## Consideraciones Técnicas

### Rendimiento
- La ordenación se aplica a nivel de base de datos
- Considerar índices en campos de ordenación frecuente
- GROUP BY puede impactar el rendimiento en grandes volúmenes

### Compatibilidad
- Los alias de tabla deben coincidir con la estructura del SELECT
- Verificar que los campos existan en las tablas referenciadas
- La sintaxis debe ser compatible con el motor de base de datos utilizado

## Solución de Problemas

### Errores Comunes

1. **Campo no encontrado**
   - Verificar que el campo existe en la tabla
   - Comprobar el alias de tabla correcto

2. **Conflicto de nombres**
   - Usar alias de tabla para desambiguar
   - Ejemplo: `A.fecha` vs `B.fecha`

3. **Ordenación de campos select**
   - Usar `nm_[tabla]` en lugar de `cd_[tabla]`

### Debugging
- Revisar la estructura de las tablas involucradas
- Verificar el orden de los alias en los SELECTs
- Comprobar la sintaxis SQL generada

## Mejores Prácticas

1. **Nomenclatura consistente**: Usar nombres de campos descriptivos
2. **Ordenación por defecto**: Definir siempre una ordenación lógica
3. **Índices**: Crear índices en campos de ordenación frecuente
4. **Documentación**: Comentar ordenaciones complejas
5. **Testing**: Probar con diferentes volúmenes de datos

## Relación con Otras Directivas

- **[Fields]**: Define los campos del listado
- **[AddOption]**: Proporciona opciones para ordenación dinámica
- **[Select]**: Define las tablas y campos base para la ordenación