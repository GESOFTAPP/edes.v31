# LocalSelect

## Sintaxis

```
[LocalSelect] Field=NomSelect [, Field=NomSelect] ..... [, Field=NomSelect]
```

## Descripción

Optimiza el rendimiento de la aplicación enviando elementos `<SELECT>` con datos al cliente una sola vez, permitiendo reutilizar esos mismos datos sin necesidad de que el servidor los reenvíe en cada petición. Esta funcionalidad es especialmente útil para tablas de datos que se utilizan frecuentemente, como catálogos, listas de países, provincias, tipos de documentos, etc.

El select debe estar previamente configurado en el archivo `aux_page.ini`.

## Parámetros

| Parámetro | Descripción |
|-----------|-------------|
| **Field** | Nombre del campo existente en la etiqueta `[Fields]` |
| **NomSelect** | Nombre del select definido en el archivo `aux_page.ini` |

## Configuración Requerida

### 1. Definición en LocalSelect
```
[LocalSelect] campo=nombre_select
```

### 2. Configuración en Fields
```
[Fields] Etiqueta | campo | tipo | SL | longitud | ancho | modo | defecto | condicion | error
```
**Nota:** El tipo de control debe ser `SL` (Select Local).

### 3. Configuración en aux_page.ini
```php
eLoadSelect('nombre_select', 'tabla', 'campos', 'condicion', 'orden');
```

## Ejemplo Completo

### Definición del LocalSelect
```
[LocalSelect] cd_auto=autonomias
```

### Definición del Campo
```
[Fields] Autonomía | cd_auto | 0 | SL | 2 | | IMQ | | = |
```

### Configuración en aux_page.ini
```php
eLoadSelect('autonomias', 'auto', 'cd_auto,nm_auto', '', 'nm_auto');
```

## Múltiples LocalSelects

Es posible definir varios LocalSelects en una sola línea:

```
[LocalSelect] cd_pais=paises, cd_provincia=provincias, cd_ciudad=ciudades
```

Con sus respectivos campos:

```
[Fields] País      | cd_pais     | 0 | SL | 3 | 150 | M | | | 
[Fields] Provincia | cd_provincia| 0 | SL | 3 | 150 | M | | |
[Fields] Ciudad    | cd_ciudad   | 0 | SL | 5 | 200 | M | | |
```

Y configuración en aux_page.ini:

```php
eLoadSelect('paises', 'paises', 'cd_pais,nm_pais', '', 'nm_pais');
eLoadSelect('provincias', 'provincias', 'cd_provincia,nm_provincia', '', 'nm_provincia');
eLoadSelect('ciudades', 'ciudades', 'cd_ciudad,nm_ciudad', '', 'nm_ciudad');
```

## Casos de Uso Comunes

### 1. Datos Geográficos
```
[LocalSelect] cd_pais=paises, cd_comunidad=ccaa, cd_provincia=provincias

[Fields] País           | cd_pais     | 0 | SL | 3 | 120 | M | | |
[Fields] Comunidad Aut. | cd_comunidad| 0 | SL | 2 | 150 | M | | |
[Fields] Provincia      | cd_provincia| 0 | SL | 2 | 150 | M | | |
```

### 2. Clasificaciones y Tipos
```
[LocalSelect] tipo_cliente=tipos_cliente, estado_civil=estados_civiles

[Fields] Tipo Cliente | tipo_cliente | X | SL | 1 | 120 | M | | |
[Fields] Estado Civil | estado_civil | X | SL | 1 | 100 | - | | |
```

### 3. Configuraciones del Sistema
```
[LocalSelect] idioma=idiomas, moneda=monedas, zona_horaria=zonas

[Fields] Idioma      | idioma      | X | SL | 2 | 100 | M | ES | |
[Fields] Moneda      | moneda      | X | SL | 3 | 100 | M | EUR| |
[Fields] Zona Horaria| zona_horaria| X | SL | 20| 150 | M | | |
```

## Ventajas del LocalSelect

### ✅ Beneficios

1. **Mejor rendimiento:** Los datos se cargan una sola vez
2. **Menor tráfico de red:** Reduce las peticiones al servidor
3. **Respuesta más rápida:** Los selects se populan instantáneamente
4. **Mejor experiencia de usuario:** Interfaz más fluida
5. **Optimización de recursos:** Menor carga en el servidor

### ⚠️ Consideraciones

1. **Memoria del cliente:** Los datos se mantienen en memoria del navegador
2. **Datos estáticos:** Ideal para datos que no cambian frecuentemente
3. **Tamaño de datos:** No recomendado para listas muy grandes
4. **Actualización:** Los datos no se actualizan automáticamente durante la sesión

## Configuración en aux_page.ini

### Sintaxis de eLoadSelect
```php
eLoadSelect('nombre_select', 'tabla', 'campos', 'condicion', 'orden');
```

| Parámetro | Descripción |
|-----------|-------------|
| **nombre_select** | Nombre del select (debe coincidir con NomSelect) |
| **tabla** | Nombre de la tabla de la base de datos |
| **campos** | Campos a seleccionar (valor,texto) |
| **condicion** | Condición WHERE (opcional) |
| **orden** | Campo por el que ordenar |

### Ejemplos de Configuración

#### Select Simple
```php
eLoadSelect('paises', 'paises', 'cd_pais,nm_pais', '', 'nm_pais');
```

#### Select con Condición
```php
eLoadSelect('provincias_activas', 'provincias', 'cd_provincia,nm_provincia', 'activo=1', 'nm_provincia');
```

#### Select con Múltiples Campos
```php
eLoadSelect('clientes_vip', 'clientes', 'cd_cliente,CONCAT(nombre," ",apellidos)', 'tipo="VIP"', 'apellidos,nombre');
```

## Integración con JavaScript

Los LocalSelects pueden integrarse con funciones JavaScript para crear selects dependientes:

```javascript
function cambiarProvincia() {
    var pais = document.getElementById('cd_pais').value;
    // Filtrar provincias según el país seleccionado
    filtrarLocalSelect('cd_provincia', 'cd_pais', pais);
}
```

## Troubleshooting

### Problemas Comunes

1. **Select vacío:** Verificar que el nombre en LocalSelect coincida con aux_page.ini
2. **No se cargan datos:** Comprobar la sintaxis de eLoadSelect
3. **Datos desactualizados:** Los LocalSelects no se actualizan automáticamente
4. **Error de campo:** Asegurar que el tipo de control sea 'SL'

### Debugging

Para verificar que un LocalSelect está cargado correctamente:

```javascript
// En la consola del navegador
console.log(window.localSelects); // Ver todos los selects cargados
console.log(window.localSelects['nombre_select']); // Ver un select específico
```

## Mejores Prácticas

1. **Usar para datos estables:** Ideal para catálogos que no cambian frecuentemente
2. **Limitar el tamaño:** No usar para listas con más de 1000 elementos
3. **Nombrado consistente:** Usar nombres descriptivos y consistentes
4. **Documentar dependencias:** Mantener documentación de las relaciones entre selects
5. **Testear rendimiento:** Verificar que efectivamente mejora el rendimiento