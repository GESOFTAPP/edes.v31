# slGroupLabels

## Sintaxis

```
{slGroupLabels} LabelSubLista | LabelSubLista | ...
```

### Forma Abreviada

```
{slGL} LabelSubLista | LabelSubLista | ...
```

## Descripción

La función `slGroupLabels` funciona de manera similar a la etiqueta `[LabelSubLista]` pero está específicamente diseñada para sublistas. Su característica principal es que permite definir múltiples etiquetas de configuración de forma agrupada y organizada.

### Características Especiales

- **Símbolo "#"**: En las etiquetas `{slSql}` y `{slMenu}` se utiliza "#" como marcador de posición para datos a sustituir
- **Restricción en slSql**: En la columna de datos "slSql" no se puede incluir el campo de la tabla padre
- **Indicadores de modo en slTH**: Se puede usar la barra "/" para especificar qué mostrar según el modo:
  - `a` = Modo modificación 
  - `mR` = Modo consultas read-only
  - `cR/bR` = Otros modos de consulta
- **Prefijo opcional**: Las etiquetas pueden llevar o no el prefijo "sl" (ej: "slAlign" o "Align")

## Parámetros

| Parámetro | Tipo | Descripción |
|-----------|------|-------------|
| `LabelSubLista` | string | Etiquetas de configuración separadas por pipe (\|) |

### Etiquetas Soportadas

- `slSql` - Consulta SQL de la sublista
- `slAlign` - Alineación de columnas
- `slColsWidth` - Ancho de columnas
- `slFormat` - Formato de datos
- `slColsOp` - Operaciones de columnas
- `slMenu` - Menú de acciones
- `slTH` - Headers de tabla con modos condicionales

## Ejemplo Completo

```ini
[SubList] a,?R | _descom

{slGroupLabels} slSql | slAlign | slColsWidth | slFormat | slColsOp | slMenu | slTH

'' | CH | 27 | AMB() | |IMG |<IMG SRC="g/l_op_insert.gif" title="Selecciona Descompuesto" onclick="eSLAction('_descom','i')">
a.cd_albadet       | H |    |    |   |                   | 
a.cd_partida       | I | 80 |    |   | *cd*partida       | PARTIDA
b.cd_partida2      | H |    |    |   | *cd*partida2      | 
b.nm_partida       | H |    |    |   | *nm*partida       | 
a.cd_matobra       | H |    |    |   | *cd*matobra       | 
a.cantidad         | D | 80 | M2 |   | *cantidad         | CANTIDAD
a.precio           | D | 80 | M2 |   | *precio           | PRECIO
a.dias             | D |    | M  |   | *dias             | DIAS
a.importe          | D | 80 | M2 | + | *importe          | IMPORTE
a.alquiler         | C | 80 |    |   | *alquiler         | ALQUILER
a.dt*facturacion   | C |    |    |   | *dt*facturacion   | F.FACTURACION
a.dt_recogida      | C |    |    |   | *dt*recogida      | F.RECOGIDA
a.dias_facturacion | H |    |    |   | *dias*facturacion | 
a.obs              | H |    |    |   | _obs              |

{slSql} select # from albadet as a, partida as b where cd_albacab='{cd_albacab}' and a.cd_partida=b.cd_partida | a.cd_albadet

{slMenu} a,mR | Alta:i, Modificar:u, Borrar:d | # | | FormOnLine | <IMG SRC="g/l_op_update.gif" title="Modificar Descompuesto" onclick="eSLAction( '_descom','u' )"><IMG SRC="g/l_op_delete.gif" title="Borrar Descompuesto" onclick="eSLAction( '_descom','d' )">

{slWin} ,7
```

## Desglose del Ejemplo

### Configuración de Columnas

```ini
# Estructura: Campo | Align | Width | Format | Op | Variable | Header
a.cd_partida | I | 80 | | | *cd*partida | PARTIDA
a.cantidad   | D | 80 | M2 | | *cantidad | CANTIDAD  
a.precio     | D | 80 | M2 | | *precio | PRECIO
a.importe    | D | 80 | M2 | + | *importe | IMPORTE
```

### Consulta SQL

```sql
select # from albadet as a, partida as b 
where cd_albacab='{cd_albacab}' and a.cd_partida=b.cd_partida
```

### Configuración de Menú

```ini
{slMenu} a,mR | Alta:i, Modificar:u, Borrar:d | # | | FormOnLine | 
<IMG SRC="g/l_op_update.gif" title="Modificar" onclick="eSLAction('_descom','u')">
<IMG SRC="g/l_op_delete.gif" title="Borrar" onclick="eSLAction('_descom','d')">
```

## Códigos de Alineación

| Código | Descripción |
|--------|-------------|
| `H` | Hidden (Oculto) |
| `I` | Integer (Entero) |
| `D` | Decimal |
| `C` | Character (Texto) |
| `CH` | Character Header |

## Códigos de Formato

| Código | Descripción |
|--------|-------------|
| `M2` | Monetario con 2 decimales |
| `M` | Monetario |
| `AMB()` | Función de ambiente |

## Operaciones de Columna

| Símbolo | Descripción |
|---------|-------------|
| `+` | Sumar valores de la columna |
| `*variable*` | Vincular a variable |

## Modos Condicionales en slTH

```ini
# Sintaxis: HeaderModoA / HeaderModoConsulta
CANTIDAD a /mR CANT/bR TOTAL
```

## Ventajas de slGroupLabels

- **Organización**: Mantiene la configuración de sublistas organizada y legible
- **Flexibilidad**: Permite configuraciones complejas de forma estructurada  
- **Reutilización**: Facilita la copia y modificación de configuraciones
- **Mantenimiento**: Simplifica la actualización de configuraciones extensas
- **Legibilidad**: Hace más fácil entender la estructura de datos de la sublista

## Notas Importantes

- Use `#` como marcador de posición en `slSql` y `slMenu`
- No incluya campos de tabla padre en la columna de datos `slSql`
- Los prefijos "sl" son opcionales en las etiquetas
- La barra "/" en `slTH` permite headers condicionales según el modo
- Compatible con `{slWin}` y otras funcionalidades de sublista