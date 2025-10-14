# IDA - Intelligent Data Acquisition
## Convenciones de Nomenclatura y Estructura Morfológica
## Descripción General
**IDA (Intelligent Data Acquisition)** es un sistema que permite extraer más información de la aparente a través de la **estructura morfológica del nombre del objeto**. Esta metodología facilita la comprensión automática de las relaciones y comportamientos de los datos basándose en convenciones de nomenclatura específicas.

## Nomenclatura de Campos de Base de Datos

### Campos Virtuales
- **Restricción**: Los campos **NO pueden empezar por '_'** 
- **Propósito**: Los campos que empiezan por '_' son **campos virtuales**
- **Comportamiento**: 
  - No se graban en la base de datos
  - Sirven para enviar datos al script
  - No persisten en la DB

### Estructura de Tablas Auxiliares

Para establecer relaciones automáticas, las tablas auxiliares deben seguir esta estructura:

```sql
-- Ejemplo: Tabla auxiliar para "coche"
cd_coche    -- Código del coche
nm_coche    -- Nombre del coche
```

**Ventaja**: En los SELECT solo hace falta conocer el nombre del campo para que SUID identifique automáticamente la relación.

### Prefijos Estándar de Campos

| Prefijo | Significado | Descripción | Ejemplo |
|---------|-------------|-------------|---------|
| `cd_` | **Código** | Identificador único | `cd_cliente` |
| `nm_` | **Nombre** | Denominación descriptiva | `nm_cliente` |
| `dt_` | **Fecha** | Campos de fecha/date | `dt_nacimiento` |
| `pr_` | **Período** | Rangos temporales | `pr_vigencia` |
| `tf_` | **True/False** | Campos booleanos | `tf_activo` |
| `ds_` | **Date to Seconds** | Fecha convertida a segundos | `ds_timestamp` |
| `nt_` | **Note** | Campos de notas/observaciones | `nt_comentarios` |
| `dct_` | **Dictionary** | Campos de palabras clave | `dct_busqueda` |

---

## Funcionalidad DCT (Dictionary)

### Descripción
Los campos que empiezan por **`dct_`** son campos especiales que almacenan **listas de palabras clave** separadas por comas.

### Características Principales

#### Almacenamiento
- **Formato**: Lista de palabras separadas por comas
- **Propósito**: Búsqueda de registros por palabras clave
- **Indexación**: Cada palabra se guarda con referencia al registro

#### Funcionalidad de Búsqueda
- **Búsqueda parcial**: Encuentra registros que contengan palabras que **empiecen** por cada término de búsqueda
- **Ordenación inteligente**: Ordena los resultados por **número de ocurrencias**
- **Disponibilidad**: Solo funciona en **fichas y listados**

#### Requisitos Técnicos
- **Nombre único**: El campo debe ser único en toda la BBDD
- **Convención**: Normalmente `dct_[NombreTabla]`
- **Índice**: El campo índice debe ser de tipo **serial**

### Personalización con Sufijos

Es posible añadir sufijos dinámicos al nombre del campo:

```php
[PHPStart]
$_DCT_SUFFIX = '_'.$_GET['_Type'];
```

**Ejemplo de uso**: `dct_productos_electronicos`, `dct_productos_textiles`

---

## Estructura de Subdirectorios

### Convenciones para Versionado de Producción

Al crear la versión de producción, SUID procesa los subdirectorios según estas reglas:

| Nomenclatura | Comportamiento | Descripción | Ejemplo |
|--------------|----------------|-------------|---------|
| `Directorio` | **Se copia todo** | Contenido completo | `scripts/` |
| `_Directorio` | **Solo subdirectorios** | Copia la estructura, no el contenido | `_tmp/` |
| `_Directorio_` | **No se copia nada** | Documentación/fuentes de desarrollo | `_docs_/` |

### Casos de Uso

#### Directorio Estándar
```
scripts/
├── main.js
├── utils.js
└── config.js
```
**Resultado**: Se copia todo el contenido

#### Directorio con Prefijo
```
_tmp/
├── cache/
├── logs/
└── temp_file.txt
```
**Resultado**: Se crean las carpetas `cache/` y `logs/` pero no `temp_file.txt`

#### Directorio de Desarrollo
```
_documentation_/
├── manual.pdf
├── diagramas.png
└── notas.txt
```
**Resultado**: No se copia nada

---

## Nomenclatura de Iconos

### Desktop Tipo "0" y "1"

#### Iconos con Dos Estados
- **Convención**: Terminan en `_0`
- **Estados disponibles**:
  - `icono_0`: Opción sin pulsar
  - `icono_1`: Opción actual/seleccionada

#### Iconos Flotantes
- **Convención**: Empiezan por `_of_` (opción flotante)
- **Comportamiento**: 
  - Clic derecho crea una copia movible
  - Mantiene posición entre sesiones
- **Estados disponibles**:
  - `_of_icono_0`: Sin pulsar, posición original
  - `_of_icono_1`: Seleccionado, posición original
  - `_of_icono_2`: Sin pulsar, posición flotante
  - `_of_icono_3`: Seleccionado, posición flotante

#### Carpetas Flotantes
- **Convención**: Empiezan por `_mf_`
- **Estados**: Cuatro estados igual que los iconos flotantes
- **Funcionalidad**: Carpetas que pueden moverse por la pantalla

### Barra de Iconos del Desktop

Los iconos de la barra de herramientas tienen **tres estados**:
- **Estado 0**: Icono normal
- **Estado 1**: Icono seleccionado/activo
- **Estado 2**: Icono deshabilitado

---

## Ventajas del Sistema IDA

### Automatización
- **Relaciones automáticas**: Identificación de relaciones por nomenclatura
- **Búsquedas inteligentes**: Sistema DCT para palabras clave
- **Estados visuales**: Gestión automática de estados de iconos

### Mantenibilidad
- **Convenciones claras**: Nomenclatura estandarizada
- **Estructura predecible**: Fácil comprensión del código
- **Versionado inteligente**: Copia selectiva según necesidades

### Escalabilidad
- **Campos virtuales**: Datos temporales sin persistencia
- **Búsquedas optimizadas**: Indexación automática de palabras clave
- **Gestión de estados**: Múltiples estados de interfaz

---

## Implementación Práctica

### Ejemplo Completo: Tabla de Productos

```sql
-- Tabla principal
CREATE TABLE productos (
    cd_producto SERIAL PRIMARY KEY,
    nm_producto VARCHAR(100),
    dt_creacion DATE,
    tf_activo BOOLEAN,
    nt_descripcion TEXT,
    dct_productos TEXT
);

-- Tabla auxiliar: categorías
CREATE TABLE categorias (
    cd_categoria SERIAL PRIMARY KEY,
    nm_categoria VARCHAR(50)
);

-- Relación automática
ALTER TABLE productos ADD cd_categoria INTEGER;
```

### Directorio de Proyecto
```
mi_proyecto/
├── scripts/              # Se copia todo
├── _temp/               # Solo estructura
│   ├── cache/
│   └── logs/
├── _docs_/             # No se copia
│   └── manual.pdf
└── iconos/
    ├── producto_0.png   # Estado normal
    ├── producto_1.png   # Estado seleccionado
    └── _of_buscar_0.png # Icono flotante
```

El sistema IDA de SUID proporciona una metodología completa para el desarrollo eficiente y mantenible de aplicaciones, utilizando convenciones de nomenclatura inteligentes que facilitan tanto el desarrollo como el mantenimiento posterior.