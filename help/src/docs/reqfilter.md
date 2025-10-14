# ReqFilter

## Descripción General

Activa el filtro obligatorio para las búsquedas, obligando al usuario a introducir condiciones en los formularios de búsqueda antes de ejecutar la consulta. Esta funcionalidad mejora el rendimiento al evitar búsquedas sin criterios que puedan devolver grandes volúmenes de datos.

## Sintaxis

```
[ReqFilter]
```

## Comportamiento

### Funcionamiento
- **Obligatorio**: El usuario debe introducir al menos una condición de búsqueda
- **Valores por defecto**: No se consideran como filtros válidos del usuario
- **Campos ocultos**: No cuentan como filtros para cumplir el requisito
- **Sin etiqueta**: Si no se incluye, las búsquedas no requieren filtros obligatorios

### En Multifichas
En aplicaciones con múltiples fichas, la etiqueta se debe colocar en el archivo **GDF** (Global Definition File).

## Casos de Uso

### Ventajas
- **Rendimiento**: Evita consultas masivas sin criterios
- **Usabilidad**: Fuerza al usuario a ser específico en sus búsquedas
- **Recursos**: Reduce la carga en el servidor y base de datos
- **Control**: Previene búsquedas accidentales que devuelvan todos los registros

### Escenarios Típicos
- Catálogos con gran volumen de datos
- Bases de datos de clientes extensas
- Sistemas de inventario con muchos productos
- Aplicaciones con tablas de referencia grandes

## Implementación

### Archivo Único
```
[ReqFilter]

[Fields]
    Campo1 | campo1 | D | T | 20 | | M | | |
    Campo2 | campo2 | D | T | 30 | | M | | |
```

### Multifichas (en GDF)
```
[ReqFilter]

[MultiForm]
    Ficha1 | ficha1.edf
    Ficha2 | ficha2.edf
```

## Validación de Filtros

### Criterios Válidos
- Campos visibles con valores introducidos por el usuario
- Selecciones realizadas en combos/listas
- Fechas especificadas en campos de fecha
- Rangos numéricos definidos

### Criterios NO Válidos
- Valores por defecto establecidos automáticamente
- Campos ocultos (aunque tengan valores)
- Campos calculados automáticamente
- Valores heredados de sesiones anteriores

## Ejemplo Práctico

### Búsqueda de Clientes
```
[ReqFilter]

[Title] Búsqueda de Clientes

[Fields]
    Nombre     | nombre    | D | T | 40 | | M | | | Nombre del cliente
    CIF/NIF    | documento | D | T | 15 | | M | | | Documento de identidad
    Provincia  | provincia | D | S | 20 | | M | | | {provincias,cd_prov,nm_prov}
    Fecha Alta | fec_alta  | D | F | 10 | | M | | | Fecha de alta
```

**Comportamiento:**
- El usuario debe introducir al menos uno de los campos visibles
- No puede ejecutar la búsqueda sin especificar criterios
- Los valores por defecto no cuentan como filtros válidos

### Búsqueda de Productos
```
[ReqFilter]

[Title] Catálogo de Productos

[Fields]
    Código      | codigo     | D | T | 10 | | M | | | Código del producto
    Descripción | descripcion| D | T | 50 | | M | | | Descripción
    Categoría   | categoria  | D | S | 20 | | M | | | {categorias,cd_cat,nm_cat}
    Precio Min  | precio_min | D | N | 10 | | M | | | Precio mínimo
    Precio Max  | precio_max | D | N | 10 | | M | | | Precio máximo
```

**Escenario:**
- Base de datos con 100,000+ productos
- Sin filtros obligatorios, cargaría todos los registros
- Con `ReqFilter`, el usuario debe especificar al menos un criterio

## Mensajes al Usuario

### Comportamiento Típico
Cuando el usuario intenta buscar sin filtros:
- **Mensaje**: "Debe introducir al menos un criterio de búsqueda"
- **Acción**: La búsqueda no se ejecuta
- **Interfaz**: Los campos requeridos pueden resaltarse

## Consideraciones Técnicas

### Rendimiento
- Reduce significativamente la carga del servidor
- Evita consultas SQL complejas sin WHERE
- Mejora los tiempos de respuesta generales

### Base de Datos
- Previene consultas que devuelvan tablas completas
- Optimiza el uso de índices
- Reduce el tráfico de red

### Experiencia de Usuario
- Fuerza búsquedas más específicas y útiles
- Reduce tiempos de espera en resultados
- Mejora la precisión de los datos mostrados

## Alternativas y Combinaciones

### Con Filtros por Defecto
```
[ReqFilter]
[DefaultFilter] estado='A'

[Fields]
    Estado | estado | 0 | H | 1 | A | | | | Campo oculto con valor por defecto
    Nombre | nombre | D | T | 40 | | M | | | Campo visible requerido
```

**Nota**: El campo `estado` con valor por defecto 'A' no cuenta como filtro del usuario.

### Con Campos Obligatorios
```
[ReqFilter]

[Fields]
    Fecha Desde | fec_desde | D | F | 10 | | MQ | | | Fecha obligatoria
    Fecha Hasta | fec_hasta | D | F | 10 | | M  | | | Fecha opcional
```

## Notas Importantes

- Es una medida de protección contra consultas masivas
- No afecta a las operaciones de alta, modificación o consulta individual
- Solo aplica a formularios de búsqueda y listados
- Los administradores pueden configurar excepciones según el contexto
- Especialmente útil en aplicaciones web con grandes volúmenes de datos