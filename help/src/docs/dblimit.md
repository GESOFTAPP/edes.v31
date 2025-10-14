# DBLimit

## SINTAXIS

```
[DBLimit] MaxRec [, Number [, MinRec [, Texto ] ] ]
```

## DESCRIPCIÓN

Modifica el límite máximo de filas que se envían al navegador, sobrescribiendo la configuración por defecto del archivo `sql.ini`. Controla la paginación y el número de registros mostrados.

### Comportamiento por defecto:
- Sin `[DBLimit]` ni `[MaxRec]`: Pagina con las filas que caben en la página
- Si el número de filas > `$_DBLIMIT`: Muestra mensaje para añadir más condiciones o los primeros registros hasta `$_DBLIMIT`
- **No afecta**: Salidas en PDF o XLS

## PARÁMETROS

| Parámetro | Descripción |
|-----------|-------------|
| **MaxRec** | Máximo número de registros a enviar al cliente. Admite separador de miles con `.` (ej: `1.000`) |
| **Number** | Registros por página. Si es **negativo**, muestra solo los "n" primeros registros. Si no se define y existe `$_MaxVisibleRows`, calcula automáticamente las filas que caben en el navegador |
| **MinRec** | Mínimo número total de registros para activar paginación. Si hay menos registros, no pagina |
| **Texto** | Texto personalizado cuando se muestra una muestra (`MaxRec` negativo). Por defecto: "Muestra de # Registros" |

## FUNCIONAMIENTO

### Paginación normal
- `Number > 0`: Pagina de `Number` en `Number` registros
- `MinRec`: Si total ≤ `MinRec`, muestra todo sin paginar

### Muestra limitada
- `Number < 0`: Solo muestra los primeros `|Number|` registros
- No hay paginación, solo una muestra de los primeros registros

## EJEMPLOS

### Ejemplo 1: Límite simple
```
[DBLimit] 1.000
```
**Resultado**: Limita a 1000 registros máximo

### Ejemplo 2: Paginación completa
```
[DBLimit] 500, 50, 60
```
**Resultado**: 
- Máximo 500 registros
- Paginados de 50 en 50
- Si hay ≤ 60 registros, muestra todo sin paginar

### Ejemplo 3: Solo primeros registros
```
[DBLimit] 50.000, -100
```
**Resultado**:
- De máximo 50.000 registros
- Solo muestra los primeros 100
- Mensaje: "Muestra de 100 Registros"

### Ejemplo 4: Con texto personalizado
```
[DBLimit] 10.000, -50, , Primeros registros encontrados
```
**Resultado**:
- Muestra solo los primeros 50 registros
- Mensaje: "Primeros registros encontrados"

### Ejemplo 5: Paginación automática
```
[DBLimit] 2.000, , 100
```
**Resultado**:
- Máximo 2000 registros
- Paginación automática según `$_MaxVisibleRows`
- No pagina si hay ≤ 100 registros

## CASOS DE USO

### Listados grandes con paginación
```
[DBLimit] 5.000, 25, 50
```
Para tablas con muchos registros, pagina de 25 en 25.

### Vista previa rápida
```
[DBLimit] 1.000, -20, , Vista previa de resultados
```
Muestra solo los primeros 20 para una vista rápida.

### Reportes con límite alto
```
[DBLimit] 100.000, 100
```
Para reportes que necesitan muchos datos pero paginados.

## VARIABLES RELACIONADAS

- **`$_DBLIMIT`**: Límite por defecto del sistema
- **`$_MaxVisibleRows`**: Filas visibles calculadas automáticamente
- Configuración en **`sql.ini`**: Valores por defecto del sistema

## NOTAS IMPORTANTES

- **PDF/XLS**: Esta etiqueta no afecta exportaciones a PDF o Excel
- **Separador de miles**: Usar `.` para números grandes (ej: `10.000`)
- **Number negativo**: Cambia completamente el comportamiento a "muestra"
- **Rendimiento**: Limitar registros mejora la velocidad de carga
- **Usabilidad**: La paginación mejora la experiencia del usuario con datasets grandes