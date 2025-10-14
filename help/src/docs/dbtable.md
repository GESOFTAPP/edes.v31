# DBTable

## Descripción General

La directiva **DBTable** define las tablas de la base de datos que se utilizarán en el DF (Definición de Ficha) o LST (listado). Es la directiva fundamental que establece el origen de datos para formularios y listados, soportando tanto tablas individuales como múltiples tablas con joins.

## Sintaxis

```
[DBTable] Tabla1 [, Tabla2] ... [, TablaN] [ [ | SufijoISubList ] | TablaInfo1,,,, ]
```

### Parámetros

- **Tabla1**: Nombre de la tabla principal de la base de datos
- **Tabla2...TablaN**: *(Opcional)* Tablas adicionales para joins
- **SufijoISubList**: *(Opcional)* Sufijo para sublistas
- **TablaInfo1,,,,**: *(Opcional)* Lista de tablas adicionales para consulta estructural (F2 en editor)

## Configuraciones

### Tabla Individual
```
[DBTable] clientes
```
Utiliza una sola tabla como origen de datos.

### Múltiples Tablas con Alias
```
[DBTable] empresa E, outer postal P
```
- `empresa` con alias `E`
- `postal` con alias `P` usando OUTER JOIN
- Los campos deben especificar la tabla: `E.rsocial`, `P.cpostal`

### Con Información Adicional para Editor
```
[DBTable] pedidos, productos, clientes, articulos,,,,
```
Las tablas adicionales después de las comas están disponibles para consulta estructural (F2) en el editor.

## Tipos de Joins

### Inner Join (Por Defecto)
```
[DBTable] facturas F, clientes C
```
Solo registros que coincidan en ambas tablas.

### Outer Join
```
[DBTable] facturas F, outer clientes C
```
Incluye todos los registros de la tabla principal, aunque no tengan coincidencias.

### Left Join
```
[DBTable] pedidos P, left productos PR
```
Todos los registros de la tabla izquierda.

### Right Join
```
[DBTable] ventas V, right vendedores VE
```
Todos los registros de la tabla derecha.

## Uso con Alias

### Definición de Alias
```
[DBTable] factura_cabecera FC, factura_detalle FD, articulos A
```

### Referencia en Campos
```
[Fields]
Número Factura | FC.numero_factura | + | T | 10 | | M | | |
Artículo       | A.descripcion     | X | T | 40 | | M | | |
Cantidad       | FD.cantidad       | N | T | 10 | | M | | |
```

## Casos de Uso Prácticos

### Listado Simple
```
[Title] LISTADO DE CLIENTES
[DBTable] clientes
[DBOrder] nombre, apellidos
[Fields]
Código | codigo  | + | T | 10 | | M | | |
Nombre | nombre  | X | T | 30 | | M | | |
Email  | email   | E | T | 40 | | M | | |
```

### Listado con Joins
```
[Title] LISTADO DE EMPRESAS DATOS BASICOS
[DBTable] empresa E, outer postal P
[DBOrder] E.rsocial
[Fields]
C.I.F        | E.cd_empresa | CIF | T |  9|| M |||
,CODIGO      | E.numero     | +   | T |  8|| M |||
,RAZON SOCIAL| E.rsocial    | X   | T | 10|| M |||
,DIRECCION   | E.direccion  | D   | T | 40|| M |||
,CP          | P.cpostal    | CP  | T | 10|| M |||
,LOCALIDAD   | P.poblacion  | X   | T | 40|| M |||
,TELEFONO    | E.tlf        | T   | T | 15|| M |||
```

### Consulta Compleja con Múltiples Tablas
```
[DBTable] pedidos P, clientes C, productos PR, categorias CAT
[DBAddFilter] P.id_cliente = C.id_cliente
[DBAddFilter] P.id_producto = PR.id_producto  
[DBAddFilter] PR.id_categoria = CAT.id_categoria
[DBOrder] P.fecha_pedido DESC, C.nombre
```

## Integración con Otras Directivas

### Con DBAddFilter
```
[DBTable] facturas F, clientes C
[DBAddFilter] F.id_cliente = C.id_cliente
[DBAddFilter] F.fecha_factura >= '2024-01-01'
```

### Con DBOrder
```
[DBTable] productos P, categorias C
[DBOrder] C.nombre, P.precio DESC
```

### Con DBSerial
```
[DBTable] usuarios
[DBSerial] id_usuario
```

### Con Sublistas
```
[DBTable] pedidos | _detalle
```
Tabla `pedidos` con sufijo `_detalle` para sublistas relacionadas.

## Mejores Prácticas

### Nomenclatura de Alias
- **Consistente**: Usar patrones coherentes (primera letra o abreviatura lógica)
- **Descriptivo**: Alias que identifiquen claramente la tabla
- **Corto**: Alias de 1-3 caracteres para facilitar escritura

### Optimización de Joins
- **Índices**: Asegurar índices en campos de join
- **Orden**: Tabla principal primero, luego tablas relacionadas
- **Filtros**: Usar DBAddFilter para condiciones de join explícitas

### Organización
- **Documentación**: Comentar joins complejos
- **Modularidad**: Separar definiciones complejas en múltiples archivos
- **Reutilización**: Crear vistas de base de datos para consultas complejas frecuentes

## Configuración Avanzada

### Tablas Temporales
```
[DBTable] #temp_resultados TR, datos_base DB
```

### Vistas de Base de Datos
```
[DBTable] vista_ventas_mes VM, vendedores V
```

### Tablas de Sistema
```
[DBTable] usuarios U, sys_permisos SP, sys_roles SR
```

## Editor y Herramientas

### Consulta de Estructura (F2)
Al presionar F2 en el editor, se puede consultar la estructura de:
- Tablas definidas en DBTable
- Tablas adicionales especificadas después de las comas

### Ejemplo con Tablas Adicionales
```
[DBTable] facturas, clientes, productos, articulos, proveedores,,,,
```
Todas estas tablas estarán disponibles para consulta estructural.

## Consideraciones por Motor de Base de Datos

### MySQL
```sql
SELECT F.numero, C.nombre 
FROM facturas F 
LEFT JOIN clientes C ON F.id_cliente = C.id_cliente
```

### Oracle
```sql
SELECT F.numero, C.nombre 
FROM facturas F, clientes C 
WHERE F.id_cliente = C.id_cliente(+)
```

### PostgreSQL
```sql
SELECT F.numero, C.nombre 
FROM facturas F 
LEFT OUTER JOIN clientes C ON F.id_cliente = C.id_cliente
```

## Solución de Problemas

### Errores Comunes

1. **Tabla no encontrada**
   - Verificar que la tabla existe en la base de datos
   - Comprobar permisos de acceso
   - Revisar esquema/base de datos activa

2. **Campo ambiguo**
   - Usar alias para especificar la tabla: `E.codigo` vs `P.codigo`
   - Definir alias claros y consistentes

3. **Join incorrecto**
   - Verificar condiciones de join en DBAddFilter
   - Comprobar que los campos de relación existen
   - Revisar tipos de datos compatibles

### Comandos de Diagnóstico
```sql
-- Verificar existencia de tablas
SHOW TABLES LIKE 'tabla_name';

-- Describir estructura
DESCRIBE tabla_name;

-- Verificar joins
EXPLAIN SELECT * FROM tabla1 T1, tabla2 T2 WHERE T1.id = T2.id;
```

## Migración y Mantenimiento

### Cambio de Nombres de Tabla
```
-- Antes
[DBTable] clientes_old

-- Después  
[DBTable] clientes_new
```

### Refactoring de Alias
- Mantener consistencia en toda la aplicación
- Documentar cambios de alias
- Probar todos los listados afectados

## Relación con Otras Directivas

- **[DBAddFilter]**: Define condiciones de join y filtrado
- **[DBOrder]**: Especifica ordenación usando alias de tabla
- **[Fields]**: Referencia campos usando alias de tabla
- **[DBSerial]**: Define campos seriales en la tabla principal
- **[DBIndex]**: Especifica índices para optimizar joins