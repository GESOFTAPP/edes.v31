# ListWidth

## Sintaxis

```
[ListWidth] px/%
```

## Descripción

Define el ancho total de un listado, permitiendo controlar el espacio que ocupa la tabla en la página o contenedor.

## Parámetros

| Parámetro | Descripción |
|-----------|-------------|
| `px/%` | Ancho del listado en píxeles (px) o porcentaje (%) |

### Unidades de medida

| Unidad | Descripción | Ejemplo |
|--------|-------------|---------|
| `px` | Píxeles - Valor absoluto fijo | `800px` |
| `%` | Porcentaje - Relativo al contenedor padre | `100%` |

## Comportamiento

- **Píxeles (px)**: Establece un ancho fijo independiente del tamaño del contenedor
- **Porcentaje (%)**: El ancho se adapta proporcionalmente al contenedor padre
- **Sin especificar**: El listado usa el ancho automático según su contenido

## Ejemplos

### Ejemplo 1: Ancho fijo en píxeles
```
[ListWidth] 800px
```
Establece el ancho del listado a exactamente 800 píxeles.

### Ejemplo 2: Ancho completo del contenedor
```
[ListWidth] 100%
```
El listado ocupará todo el ancho disponible del contenedor padre.

### Ejemplo 3: Ancho parcial del contenedor
```
[ListWidth] 75%
```
El listado ocupará el 75% del ancho del contenedor padre.

### Ejemplo 4: Ancho reducido fijo
```
[ListWidth] 600px
```
Establece un ancho fijo de 600 píxeles, útil para listados con pocas columnas.

### Ejemplo 5: Ancho mínimo responsivo
```
[ListWidth] 50%
```
El listado ocupará la mitad del ancho disponible, adaptándose a diferentes tamaños de pantalla.

## Casos de uso recomendados

- **Listados anchos**: Usar `100%` para aprovechar todo el espacio disponible
- **Listados compactos**: Usar valores fijos en píxeles para listados con pocas columnas
- **Diseño responsivo**: Usar porcentajes para adaptarse a diferentes tamaños de pantalla
- **Múltiples listados**: Usar porcentajes para colocar varios listados en la misma fila
- **Contenido limitado**: Usar píxeles fijos cuando el contenido no requiere mucho espacio

## Consideraciones

- **Responsive**: Los porcentajes se adaptan mejor a diferentes dispositivos
- **Scroll horizontal**: Anchos fijos pueden causar scroll horizontal en pantallas pequeñas
- **Columnas**: El ancho total se distribuye entre todas las columnas visibles
- **Compatibilidad**: Funciona en todos los formatos de salida (HTML, PDF, etc.)