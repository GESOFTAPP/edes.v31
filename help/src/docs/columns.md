# Columns

## Sintaxis

```
{Columns} { NoColumnas [ | Propiedades [ | Title [ | CódigoEnLinea ] ] ] ... }
```

## Descripción

La etiqueta `{Columns}` permite crear un diseño de múltiples columnas dentro del ámbito de la etiqueta `[Fields]`. Esta etiqueta es útil para organizar el contenido en columnas con diferentes configuraciones de visualización.

### Características principales:
- **Ámbito**: Funciona únicamente dentro de la etiqueta `[Fields]`
- **Cierre**: El final del bloque se marca con una llave de cierre `}`
- **Flexibilidad**: Permite configurar número de columnas, propiedades de visualización y estilos personalizados

## Parámetros

### NoColumnas
Número entero que especifica la cantidad de columnas a crear.

### Propiedades (Opcional)
Flags que modifican el comportamiento y apariencia de las columnas:

| Propiedad | Descripción |
|-----------|-------------|
| `center` | Centra el contenido (por defecto se justifica a la izquierda) |
| `100%` | Hace que ocupe el 100% del ancho disponible de la ficha |
| `border` | Añade un borde alrededor del contenido |

### Title (Opcional)
Título descriptivo para el grupo de columnas.

### CódigoEnLinea (Opcional)
Código CSS personalizado para estilizar las columnas.

## Ejemplo de uso

```
[Fields]
  ...
  {Columns}
  { 
    3 | 100% | TÍTULO DEL GRUPO | style='border: 1px solid red'
    ...
  }
  ...
```

### Explicación del ejemplo:
- **3**: Crea 3 columnas
- **100%**: Ocupa todo el ancho disponible
- **TÍTULO DEL GRUPO**: Establece un título para el conjunto de columnas
- **style='border: 1px solid red'**: Aplica un borde rojo sólido de 1px

## Casos de uso comunes

### Columnas básicas
```
{Columns}{ 2 }
```

### Columnas centradas con borde
```
{Columns}{ 3 | center | border }
```

### Columnas con título y estilo personalizado
```
{Columns}{ 4 | 100% | Información de contacto | style='background-color: #f0f0f0' }
```

## Ejemplo real de implementación

A continuación se muestra un ejemplo práctico extraído de un formulario de solicitud de alta de usuario:

```
[Fields] else | 2
   ...
   -                              | Permisos Especiales de Gestión |     | +  |          |         | ML  |          |   | 
{Columns}{ 4 | 100%
    Traslados\T                   | traslados                      | X   | C  | 1        |         | M   |          |   | 
 ,2 Gestor\G                      | gestor                         | X   | C  | 1        |         | M   |          |   | 
 ,3 Cobros\E                      | cobros                         | X   | C  | 1        |         | M   |          |   | 
    Empresas\EM                   | empresas                       | X   | C  | 1        |         | M   |          |   | 
 ,2 Emitir                        | emitir                         | X   | C  | 1        |         | M   |          |   | 
 ,3 Regularizaciones\REG          | regulariza                     | X   | C  | 1        |         | M   |          |   | 
 ,4 Gestorias                     | gestorias                      | X   | C  | 1        |         | M   |          |   | 
    Alta Web\AW                   | altaweb                        | X   | C  | 1        |         | M   |          |   | 
 ,2 Pagos                         | pagos                          | X   | C  | 1        |         | M   |          |   | 
 ,3 Webmaster\W                   | webmaster                      | X   | C  | 1        |         | M   |          |   | 
 ,4 Devoluciones\D                | devolucion                     | X   | C  | 1        |         | M   |          |   | 
}
   ...
```

### Análisis del ejemplo:
- **4 columnas**: Organiza 11 checkboxes de permisos en 4 columnas
- **100%**: Utiliza todo el ancho disponible para optimizar el espacio
- **Sin título específico**: En este caso no se define un título personalizado
- **Campos tipo checkbox**: Todos los campos son de tipo `C` (checkbox) con valor `1`
- **Distribución automática**: Los campos se distribuyen automáticamente entre las 4 columnas
- **Etiquetas abreviadas**: Utiliza tanto nombres completos como abreviaturas (ej: `\T`, `\G`, `\E`)