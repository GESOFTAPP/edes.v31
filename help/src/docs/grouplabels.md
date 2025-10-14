# GroupLabels

## Sintaxis

```
[GroupLabels] NomEti-1 [ | NomEti-2 ] ...
NomCampo [ | DefNomEti-1 ] ...
```

## Descripción

Agrupa etiquetas para definirlas todas a la vez, permitiendo aplicar configuraciones masivas a múltiples campos de forma eficiente. Es especialmente útil cuando se necesita aplicar la misma configuración a varios campos relacionados.

## Parámetros

### NomEti (Nombres de Etiquetas)

Las etiquetas que se pueden agrupar son:

| Etiqueta | Descripción |
|----------|-------------|
| `Align` | Configuración de alineación de columnas |
| `Format` | Formateo de datos de columnas |
| `TipTh` | Texto para cabeceras de listados (separador `\` en [Fields]) |
| `ColsWidth` | Ancho de columnas |
| `ColsColor` | Colores de columnas |

### NomCampo
Campo existente en la etiqueta `[Fields]` al que se aplicará la configuración.

### DefNomEti
Parámetros específicos en función de las etiquetas definidas en el parámetro `EDESLabel`.

## Estructura del ejemplo

El ejemplo muestra la estructura típica:

1. **Primera línea**: Define las etiquetas a agrupar
2. **Líneas siguientes**: Cada línea representa un campo con sus parámetros

## Ejemplo detallado

```
[GroupLabels] Align | TipTH
nm_gs_tree      | | Nombre del Arbol
fichero         | | Nombre del Fichero  
cd_gs_tree      |d| Número
avisos          |c| Minutos entre sincronizaciones
permiso         |c| Permiso
extraer         |c| Extraer datos
imprimir        |c| Imprimir
excel           |c| Pasar a Excel
novedades       |c| Novedades
correo          |c| Correo
```

### Interpretación del ejemplo

- **Etiquetas agrupadas**: `Align` y `TipTH`
- **Campos configurados**:
  - `nm_gs_tree`: Sin alineación específica, título "Nombre del Arbol"
  - `fichero`: Sin alineación específica, título "Nombre del Fichero"
  - `cd_gs_tree`: Alineación `d`, título "Número"
  - `avisos`: Alineación `c`, título "Minutos entre sincronizaciones"
  - Y así sucesivamente...

## Ventajas del agrupamiento

- **Eficiencia**: Define múltiples configuraciones en una sola estructura
- **Mantenibilidad**: Cambios centralizados en lugar de múltiples etiquetas individuales
- **Legibilidad**: Vista organizada de la configuración de campos relacionados
- **Consistencia**: Asegura que campos relacionados mantengan configuraciones coherentes

## Casos de uso recomendados

- **Listados con muchos campos**: Cuando se necesita configurar numerosos campos
- **Configuraciones similares**: Campos que comparten patrones de formato o alineación
- **Mantenimiento simplificado**: Para facilitar futuras modificaciones masivas
- **Documentación clara**: Cuando se requiere una vista consolidada de la configuración