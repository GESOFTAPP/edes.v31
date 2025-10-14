# GreenBar

## Sintaxis

```
[GreenBar]
```

## Descripción

En los listados, utiliza fondos de colores alternativos para cada línea, creando el efecto visual conocido como "papel pijama". Mejora la legibilidad al alternar colores de fondo entre filas consecutivas.

## Configuración global

En el fichero de configuración `sql.ini` se puede activar por defecto en todos los listados mediante:

```ini
$_GREENBAR = true;
```

## Parámetros

| Parámetro | Descripción |
|-----------|-------------|
| *(sin parámetros)* | Activa el papel pijama estándar (filas alternas) |
| `-` | Desactiva el papel pijama (cuando está activo globalmente) |
| `NO` | Desactiva el papel pijama (cuando está activo globalmente) |
| `número_columna` | Aplica greenbar cuando cambie el valor de esa columna |
| `nombre_campo` | Aplica greenbar cuando cambie el valor de ese campo |

## Comportamiento

### Modo estándar
- **Filas alternas**: Alterna colores de fondo entre filas pares e impares
- **Mejora legibilidad**: Facilita el seguimiento visual de datos en listados largos

### Modo condicional por columna
- **Cambio de valor**: Solo cambia el color cuando el valor de la columna especificada cambia
- **Agrupación visual**: Agrupa visualmente filas con el mismo valor en la columna seleccionada
- **Más eficiente**: Para listados ordenados por una columna específica

## Ejemplos

### Ejemplo 1: Activar papel pijama estándar
```
[GreenBar]
```
Alterna colores de fondo en cada fila del listado.

### Ejemplo 2: Desactivar (método 1)
```
[GreenBar] -
```
Desactiva el papel pijama aunque esté configurado globalmente.

### Ejemplo 3: Desactivar (método 2)
```
[GreenBar] NO
```
Alternativa para desactivar el papel pijama globalmente activo.

### Ejemplo 4: GreenBar por columna numérica
```
[GreenBar] 3
```
Cambia el color de fondo cada vez que cambie el valor de la tercera columna.

### Ejemplo 5: GreenBar por nombre de campo
```
[GreenBar] categoria
```
Cambia el color de fondo cada vez que cambie el valor del campo 'categoria'.

## Casos de uso recomendados

- **Listados largos**: Para mejorar la legibilidad de tablas con muchas filas
- **Datos agrupados**: Usar modo condicional cuando los datos están ordenados por una columna específica
- **Reportes**: Especialmente útil en reportes financieros o de inventario
- **Dashboards**: Para distinguir visualmente diferentes secciones de datos