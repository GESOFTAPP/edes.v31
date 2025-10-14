# SelectMultiple

## Sintaxis

```
[SelectMultiple] a,?R | Field | LongitudDelCampo[,maxItem] [BOX] [ | SQL [ | Sort=false [ | minHeight[,maxHeight] ] ] ]
[SelectMultiple] ? | ListaFields
```

## Descripción

Componente de mantenimiento que permite seleccionar múltiples opciones de una lista. Tiene dos comportamientos según el modo:

- **Modos consulta (c,b,m)**: Permite selección múltiple con Ctrl+Click
- **Otros modos**: Muestra un select que permite seleccionar múltiples opciones, mostrando las opciones fuera del select pero almacenando todas las claves seleccionadas en el mismo campo separadas por comas (comenzando y terminando por coma)

**Activación global**: Se puede activar SelectMultiple en todos los select definiendo `$_SelectMultiple = true;` en el archivo `sql.ini`.

**Manipulación individual**: Se pueden añadir y eliminar elementos individuales con los prefijos "+" y "-":
- `S(campo).val("+01")` - Añade elemento "01"
- `S(campo).val("-01")` - Quita elemento "01"  
- `S(campo).val("-01,+02,+03")` - Quita "01" y añade "02" y "03"

## Parámetros

### Mode
- **Tipo**: String
- **Descripción**: Modo/s en los que está activa la etiqueta
- **Valores**: `*` (todos), `a` (alta), `c` (consulta), `b` (baja), `m` (modificación), `?` (consulta especial)
- **Obligatorio**: Sí

### Field
- **Tipo**: String
- **Descripción**: Nombre del campo que almacenará las selecciones
- **Obligatorio**: Sí

### LongitudDelCampo
- **Tipo**: Integer[,Integer] [BOX]
- **Descripción**: Longitud del campo donde se guardarán las selecciones separadas por coma
- **Formato**:
  - `Número`: Longitud del campo
  - `Número,MaxItem`: Longitud del campo y máximo número de elementos
  - `BOX`: Todos los elementos dentro del campo
- **Obligatorio**: Sí

### SQL
- **Tipo**: String
- **Descripción**: Consulta SQL para extraer los elementos a seleccionar
- **Obligatorio**: No (puede usar tabla relacionada o AddOption)

### Sort
- **Tipo**: Boolean
- **Descripción**: Ordenar la selección
- **Por defecto**: `false`
- **Obligatorio**: No

### minHeight,maxHeight
- **Tipo**: Integer,Integer
- **Descripción**: Altura mínima y máxima del contenedor de selección
- **Por defecto**: Altura del contenido
- **Obligatorio**: No

### ListaFields
- **Tipo**: String (campos separados por coma)
- **Descripción**: Lista de campos que serán SelectMultiple en modo consulta
- **Obligatorio**: Sí (cuando se usa sintaxis con `?`)

## Ejemplos

### Ejemplo Básico con Tabla Relacionada
```
[SelectMultiple] * | multi_provincia | 12

[Fields]
    Multiples provincias | multi_provincia:cd_prov | X | S | 40 || M |||
```
El select se rellena de una tabla relacionada.

### Ejemplo con AddOption
```
[SelectMultiple] a | share_group | 30

[AddOption] a | share_group | C,Consultas;M,Modificaciones;B,Borrado

[Fields] a
    Compartir con Grupos | share_group | X | SV | 60 || M |||
```
El select se rellena con las opciones definidas en `[AddOption]`.

### Ejemplo con Relación IDA
```
[SelectMultiple] * | multi_provincia | 12

[Fields]
    Multiples provincias | multi_provincia{prov,cd_prov,nm_prov} | X | S | 40 || M |||
```
El select se rellena usando relación IDA con tabla específica.

### Ejemplo de Consulta Específica
```
[SelectMultiple] ? | cd_auto,cd_prov

[Fields] ?
    Autonomía | cd_auto | 0 | S  | 2 | 24,200 | QI | _Auto_ | | 
    Provincia | cd_prov | 0 | Ss | 2 | 24,200 | QI | _Prov_ | |
    Tipo      | cd_tipo | + | S  | 3 |        | QI |        | |
```
Solo los campos `cd_auto` y `cd_prov` son de multiselección para búsqueda, mientras que `cd_tipo` permite una sola selección.

### Ejemplo con SQL y BOX
```
[SelectMultiple] * | cd_auto | 20,3 box | select cd_auto,nm_auto from auto order by nm_auto

[Fields]
    Autonomía | cd_auto | 0 | SV | 2 | 200 | M | _Auto_ | |
```

## Ejemplo Completo de Implementación

```
[Title]    Datos especiales de usuario
[DBTable]  gs_user
[DBIndex]  cd_gs_user
[DBSerial] cd_gs_user
[DBLog]    cd_gs_user

[SelectMultiple] * | filtro | 50

[AddOption] * | filtro | ;1,Empresas A;2,Empresas B;3,Empresas C;4,Personas A;5,Personas B;6,Personas C;7,Usuarios A;8,Usuarios B;9,Usuarios C;10,Usuarios D

[Fields] 3
    Traslados\T               | traslados           | X | C  | 1  |     | MQ |  |  | 
 ,2 Gestión                   | gestion             | X | C  | 1  |     | MQ |  |  | 
 ,3 Cobros                    | cobros              | X | C  | 1  |     | MQ |  |  | 
    Empresas                  | empresas            | X | C  | 1  |     | MQ |  |  | 
 ,2 Emitir                    | emitir              | X | C  | 1  |     | MQ |  |  | 
 ,3 Recuperaciones            | recu                | X | C  | 1  |     | MQ |  |  | 
    Recibos                   | recibos             | X | C  | 1  |     | MQ |  |  | 
 ,2 Alta Web\A WEB            | alta_web            | X | C  | 1  |     | MQ |  |  | 
 ,3 Pagos                     | pagos               | X | C  | 1  |     | MQ |  |  | 
    Webmaster                 | webmaster           | X | C  | 1  |     | MQ |  |  | 
 ,2 Devoluciones              | devolucion          | X | C  | 1  |     | MQ |  |  | 
 ,3 Gestión Usuarios          | gestion_usu         | X | C  | 1  |     | MQ |  |  | 
-| Comunicaciones
    Filtros de envío          | filtro      | X | SV | 2  | 298 | M  |  |  |
```

## Comportamiento Técnico

### Almacenamiento de Datos
- Los valores se almacenan separados por comas
- Formato: `,valor1,valor2,valor3,`
- Siempre comienza y termina con coma

### Manipulación JavaScript
```javascript
// Añadir elemento
S('campo').val("+01");

// Quitar elemento  
S('campo').val("-01");

// Operaciones múltiples
S('campo').val("-01,+02,+03");
```

### Tipos de Fuentes de Datos
1. **Tabla relacionada**: Usando `:campo_relacionado`
2. **Relación IDA**: Usando `{tabla,campo_codigo,campo_descripcion}`
3. **AddOption**: Lista de opciones estáticas
4. **SQL**: Consulta personalizada

### Modos de Visualización
- **BOX**: Elementos dentro del campo
- **Estándar**: Elementos fuera del select
- **Consulta**: Ctrl+Click para selección múltiple

## Configuración Global

Para activar SelectMultiple en todos los select del sistema:
```php
// En archivo sql.ini
$_SelectMultiple = true;
```

## Casos de Uso Comunes

1. **Permisos de usuario**: Múltiples roles o permisos
2. **Filtros de búsqueda**: Múltiples criterios de selección
3. **Categorización**: Múltiples categorías para un elemento
4. **Configuración**: Múltiples opciones de configuración
5. **Comunicaciones**: Filtros de envío múltiples
6. **Clasificación**: Múltiples tipos o estados

## Ventajas

- **Flexibilidad**: Múltiples fuentes de datos
- **Usabilidad**: Diferentes modos según contexto
- **Manipulación**: Control programático individual
- **Integración**: Compatible con sistema de campos existente
- **Escalabilidad**: Manejo de listas grandes con altura controlable