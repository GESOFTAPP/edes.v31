# slGreenBar

## Sintaxis

```
{slGreenBar}
```

## Descripción

La función `slGreenBar` aplica el efecto de "papel pijama" (zebra striping) a las filas de las SubList. Este efecto consiste en alternar colores de fondo entre filas para mejorar la legibilidad de las tablas con muchos datos.

### Configuración Global

Se puede activar el efecto de papel pijama para todas las sublistas del sistema definiendo la variable global en el archivo de configuración:

```ini
$_SLGREENBAR = true
```

Esta configuración debe agregarse al archivo `sql.ini` para que afecte a todas las sublistas de la aplicación.

## Parámetros

Esta función no requiere parámetros adicionales.

| Parámetro | Requerido | Descripción |
|-----------|-----------|-------------|
| Ninguno | - | La función se activa simplemente incluyéndola en la configuración |

## Ejemplo de Uso

### Uso Individual en SubList

```ini
[SubList]
{slGreenBar}
...
```

### Configuración Global

```ini
# En el archivo sql.ini
$_SLGREENBAR = true
```

## Funcionamiento

El efecto de papel pijama funciona de la siguiente manera:

- **Filas pares**: Mantienen el color de fondo original
- **Filas impares**: Reciben un color de fondo alternativo (generalmente más claro)
- **Resultado**: Patrón visual alternado que facilita la lectura horizontal de datos

## Ventajas del Papel Pijama

- **Mejora la legibilidad**: Facilita el seguimiento visual de filas largas
- **Reduce errores**: Disminuye la posibilidad de leer datos de la fila incorrecta
- **Experiencia de usuario**: Proporciona una apariencia más profesional y ordenada
- **Accesibilidad**: Ayuda a usuarios con dificultades de seguimiento visual

## Casos de Uso Recomendados

- Tablas con muchas columnas
- Listas largas de datos
- Reportes con información densa
- Formularios de entrada de datos tabulares
- Cualquier SubList donde la legibilidad sea importante

## Configuración Avanzada

### Aplicación Selectiva

```ini
# SubList con papel pijama
[SubList usuarios]
{slGreenBar}
...

# SubList sin papel pijama
[SubList productos]
...
```

### Combinación con Otros Estilos

```ini
[SubList]
{slGreenBar}
{slFormatExe} formatearFilas
...
```

## Notas Importantes

- **Precedencia**: La configuración individual en cada SubList tiene prioridad sobre la configuración global
- **Compatibilidad**: Funciona con otros modificadores de estilo como `slFormatExe`
- **Performance**: No afecta significativamente el rendimiento de la aplicación
- **Personalización**: Los colores específicos del papel pijama pueden depender del tema CSS activo

## Alternativas de Implementación

### Solo para SubLists Específicas
```ini
[SubList importante]
{slGreenBar}
```

### Para Toda la Aplicación
```ini
# En sql.ini
$_SLGREENBAR = true
```

### Desactivar Globalmente pero Activar Individualmente
```ini
# sql.ini: Sin configuración global

# SubList específica
[SubList especial]
{slGreenBar}
```