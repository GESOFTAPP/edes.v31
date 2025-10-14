# slColsWidth

## Sintaxis
```
{slColsWidth} AnchoCol1, AnchoCol2, ...
```

## Descripción
Dentro de una sublista, determina el ancho específico de cada columna según su posición. Permite controlar la presentación visual estableciendo dimensiones precisas para cada columna del listado.

## Parámetros

### AnchoCol - Ancho de Columna

#### Unidades de Medida
| Formato | Descripción | Ejemplo |
|---------|-------------|---------|
| `número` | Ancho en píxeles (px) | `300` |
| `número + "c"` | Ancho en caracteres | `10c` |
| (vacío) | Valor por defecto del sistema | `,` |

#### Ancho Condicional por Modo
Si en el `AnchoCol` está presente el carácter `\`, indica que:
- El número a la **izquierda** del `\` se aplica en los modos `"a"` y `"mR"`
- El número a la **derecha** del `\` se aplica en el resto de modos

**Formato:** `ancho_a_mR\ancho_otros`

## Ejemplos de Uso

### Ejemplo Básico
```
{slColsWidth} 300, 200, , , , 250, 10c
```

**Explicación:**
- **Columna 1:** `300` px de ancho
- **Columna 2:** `200` px de ancho
- **Columna 3:** Ancho por defecto (vacío)
- **Columna 4:** Ancho por defecto (vacío)
- **Columna 5:** Ancho por defecto (vacío)
- **Columna 6:** `250` px de ancho
- **Columna 7:** `10` caracteres de ancho

### Ejemplo con Anchos Condicionales
```
{slColsWidth} 100\200, 150, 80\120, 10c\15c
```

**Explicación:**
- **Columna 1:** 
  - Modos `"a"` y `"mR"`: `100` px
  - Otros modos: `200` px
- **Columna 2:** `150` px (todos los modos)
- **Columna 3:**
  - Modos `"a"` y `"mR"`: `80` px
  - Otros modos: `120` px
- **Columna 4:**
  - Modos `"a"` y `"mR"`: `10` caracteres
  - Otros modos: `15` caracteres

### Casos de Uso Prácticos

#### Listado de Productos
```sql
SELECT codigo, nombre, descripcion, precio, stock FROM productos
```
```
{slColsWidth} 80, 200, 300, 100, 80
```

#### Listado Responsive
```sql
SELECT id, titulo, fecha, autor, estado FROM documentos
```
```
{slColsWidth} 50\80, 150\250, 100\120, 120\150, 80\100
```

#### Combinando Unidades
```sql
SELECT ref, descripcion, obs, cantidad, precio FROM articulos
```
```
{slColsWidth} 8c, 250, , 10c\12c, 100
```

## Configuración por Tipos de Contenido

### Columnas de Código/ID
```
{slColsWidth} 80, ...    // Códigos cortos
{slColsWidth} 8c, ...    // 8 caracteres para códigos
```

### Columnas de Texto
```
{slColsWidth} , 250, ...     // Nombres/títulos
{slColsWidth} , 300, ...     // Descripciones
{slColsWidth} , 15c, ...     // Texto fijo de 15 caracteres
```

### Columnas Numéricas
```
{slColsWidth} , , 100, ...   // Cantidades
{slColsWidth} , , 120, ...   // Precios/importes
{slColsWidth} , , 10c, ...   // Números con ancho fijo
```

## Notas Importantes

- **Posición:** Cada ancho debe corresponder exactamente con la posición de la columna
- **Separadores:** Los anchos deben separarse por comas
- **Valores vacíos:** Use comas sin valor para aplicar el ancho por defecto
- **Píxeles vs Caracteres:** 
  - Píxeles ofrecen control preciso
  - Caracteres se adaptan mejor a diferentes fuentes
- **Modos condicionales:** Útil para crear diseños responsive
- **Compatibilidad:** Considere el ancho total disponible en diferentes dispositivos

## Recomendaciones

### Diseño Responsive
```
{slColsWidth} 80\100, 150\200, 100\150, 80\100
```

### Diseño Fijo Optimizado
```
{slColsWidth} 8c, 25c, 12c, 10c, 8c
```

### Diseño Mixto
```
{slColsWidth} 80, 20c, 250, 100, 12c
```