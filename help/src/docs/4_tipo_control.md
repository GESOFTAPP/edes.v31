# Tipo de control

## Descripción General

Define el tipo de control visual que contendrá el campo en la interfaz de usuario.

---

## Tipos de Control Básicos

| Código | Nombre | Descripción |
|--------|--------|-------------|
| `T` | **Text** | Campo de texto simple |
| `A` | **TextArea** | Área de texto. Longitud: "LongMax,ColAncho,LinAlto" |
| `R` | **RadioButton** | Botón de opción |
| `C` | **Checkbox** | Casilla de verificación (graba "S" o vacío) |
| `P` | **Password** | Campo de contraseña |
| `H` | **TextArea HTML** | Editor HTML con control de imágenes |

### Configuración HTML
Para el control HTML, variables disponibles:
- `_MaxImageSize`: Tamaño máximo de imagen
- `_MaxImageLength`: Longitud máxima de imagen

Para usar checkbox: `$_EDCHECKBOX = true;`

---

## Tipos de Control de Archivos

| Código | Nombre | Descripción |
|--------|--------|-------------|
| `F` | **File sencillo** | Subida de archivo individual |
| `f` | **File múltiple** | Subida de múltiples archivos |
| `IMG` | **Imagen** | Archivo de imagen visible en listados |
| `ICON` | **Icono** | Archivo accesible mediante icono |
| `I` | **Icono en lista** | Solo en listados, muestra icono para ver archivo |

### Configuración de Imágenes
- Desactivar utilidades: `_ImgNoTools = true`

### Ejemplo de Control de Icono
```
[UploadFile] fichero | /_doc_/str | cd_gs_store | 500.000 | | gif,jpg,png,bmp,avi,txt,doc,pdf,xls,htm,html,pps,ppt,js

[Fields]
Fichero   | fichero      | f | F | 40 | | MQDCPSU | | |
#(l) Tipo | fichero tipo | X | I |    | | -       | | |
```

---

## Tipos de Control Especiales

| Código | Nombre | Descripción |
|--------|--------|-------------|
| `G` | **Gráfico** | Control gráfico personalizado |
| `-` | **Range izquierdo** | Campo range con valor a la izquierda |
| `=` | **Range tooltip** | Campo range con tooltip superior |

### Configuración de Gráfico
En la definición `[Fields]`:
- **Posición 2**: Nombre del gráfico (directorio "g")
- **Posiciones 5-6**: Ancho y alto (opcional)
- **Posición 10**: Función al hacer click (opcional)

### Configuración de Range
```
[Fields]
Range 1 | range_1 | + | - | 0,25,100,5 | 300 | M | | |  // min,default,max,step
Range 2 | range_2 | + | = | 0,25,100,5 | 300 | M | | |
```

---

## Controles Espejo y Calco

| Código | Descripción |
|--------|-------------|
| `[]` | **Campo espejo** (texto/select) |
| `[S]` | **Campo calco select** |
| `[*]` | **Campo calco texto** |
| `[NomSubList]` | **Nombre de SubList** |

---

## Modos de Búsqueda (Columna 7)

| Código | Descripción |
|--------|-------------|
| `B` | Búsqueda con condiciones (busca en d/NomCampo.fdf) |
| `b` | Búsqueda simple (busca en d/NomCampo.ldf) |
| `c` | Permite copiar contenido |
| `p` | Permite pegar contenido |
| `q` | Inserta línea de gráfico |

---

## Controles SELECT

### Tipos de SELECT

| Código | Nombre | Descripción |
|--------|--------|-------------|
| `S` | **Select normal** | Selección simple estándar |
| `Ss` | **SubSelect** | Select con dependencia automática |
| `SS` | **SubSelect ventana** | Select con dependencia en subventana |
| `ST` | **SelectTree** | Árbol de selección |
| `SV` | **Select virtual** | Select vacío rellenado con AddOption |
| `SX` | **Select especial** | Select programado personalizado |
| `SL` | **Select local** | Select cargado en iframe auxiliar |
| `SP` | **Select personalizado** | Select con configuración específica |
| `s` | **Select tabulado** | Requiere campos NIVEL y ORDEN |
| `M` | **Select múltiple** | Selección múltiple |
| `X` | **Select iframe** | Selección desde iframe auxiliar |

### Configuración Global de SELECT

#### Selección Múltiple
```javascript
_SelectMultiple = true;                    // Todos los select
_SelectMultipleField["campo"] = true;      // Campo específico
```

#### Evitar Carga de Options
```php
$_NOSELECTFILL['*'] = true;               // Todos los campos
$_NOSELECTFULL['campo'] = true;           // Campo específico
```

#### Altura Máxima
```php
$_MaxRowSelect = 15;                      // En sql.ini
```

### Dimensiones de SELECT
En columna 5 (Ancho en caracteres): `ancho_interior,ancho_select,alto_lineas`

```
[Fields]
Nombre | name    | #D | SV | 20,,5   | | AQ   ||| // Solo alto
Pais   | cd_pais | #D | S  | 3,30,15 | | AQI  ||| // Completo
```

### Formatos de SELECT

#### Formato 1: Información Implícita
```
[DBTable] prod
[Fields]
Zona | cd_zona | D | S | 30|| MQ |||
```
- Tabla `zona` con campos `cd_zona` y `nm_zona`
- Muestra `nm_zona`, graba `cd_zona`

#### Formato 2: Referencia por Nombre
```
codprov:cd_prov
```
- Campo `codprov` referencia tabla `prov`
- Muestra `nm_prov`, graba `cd_prov`

#### Formato 3: Definición Explícita
```
medio{medios,cd_medio,nm_medio}
medio{medios,cd_medio,nm_medio,', ',field2}  // Con concatenación
```

### SELECT Especializados

#### SubSelect (Ss)
```
[DBTable] prod
[RelationFields] cd_tinmueble,cd_stinmueble

[Fields]
Tipo de inmueble | cd_tinmueble  | D | S  | 4 || MQ |||
,Subtipo         | cd_stinmueble | D | Ss | 4 || MQ |||
```

#### Select Virtual (SV)
```
[AddOption] a,mR,cR | tipo_operacion | ,; V,Venta; A,Alquiler; X,Venta o Alquiler

[Fields]
Tipo de operación | tipo_operacion | D | SV | 15 || M |||
```

#### SelectTree (ST)
```
[Fields]
Arbol | serial | + | ST | 4,40 | | iM | | # |

[SelectTree] * | serial
load_level:2                         // Niveles a leer
load_view:1                          // Niveles a mostrar
table:motivos                        // Tabla
index:cd_reds_motivos_visita         // Campo clave
caption:nm_reds_motivos_visita       // Campo visual
level:nivel                          // Campo nivel
parent:dependencia                   // Campo padre
order:orden,nm_reds_motivos_visita   // Ordenación
type:tipo                            // Tipo (f=folder, O=opción)
icon_op:g/d5_doc_0.png              // Icono opcional
```

### Configuraciones Avanzadas

#### Filtrado Automático
```
[AddCode] * | campo | I | eFilter=1
[PHPIni] *
$_DBLIMITSELECT = 100;
```

#### Despliegue con Foco
```
[AddCode] * | campo | I | eFocusOpen=1
```

#### Columnas Condicionales
```
[AddOption] * | sexo | ,; H,Hombre; M,Mujer
[SelectColLabel] sexo,cd_profe | nm_profe_m | M

[Fields]
Sexo       | sexo                                | X | SV | 10 | | M | | # |
SelectSexo | cd_profe{profe,cd_profe,nm_profe_h} | X | S  | 60 | | M | | # |
```

---

## Configuraciones Especiales

### CHECKBOX Personalizado
```
[AddCode] * | Campo | I | uValue="Valor1|Valor2|Valor3"
```
- **Valor1**: Sin clickear
- **Valor2**: Un click
- **Valor3**: Dos clicks

Desactivar 3 estados en búsqueda: `_Question = false;`

### FILE Configuración
Variable `$_DefaultPathType`:
- **G (Global)**: Configuración única por usuario
- **S (Script)**: Configuración por usuario y script
- `$_DefaultPathFile`: Nombre del archivo de configuración

### Controles con Valores Internos
Columna 7 con "i" o "I":
- **i**: Solo visualizar valor real
- **I**: Editar valor real
- Formato ancho: `AnchoSelect,AnchoVisor`

### Configuración de Imágenes
```
[UploadFile] imagen | /d/_check/ddbb | pk | 1.000.000 | Selecciona imagen | gif,jpg,png,svg | img_

[Fields]
Imagen | imagen | f | IMG | 50 | 300,200/100,50 | MDUF | | | // F=FIT contenedor
Imagen | imagen | f | IMG | 50 | 300,200/100,50 | MDUH | | | // H=100% alto
Imagen | imagen | f | IMG | 50 | 300,200/100,50 | MDUW | | | // W=100% ancho
```

### Límites y Configuraciones
- **LongMax = -1**: Sin límite de longitud
- **Columna Px**: Define ancho y alto en formularios y listados
- `[AddOption]`: Añade opciones al select
- `[DelOption]`: Elimina opciones del select

---

## Notas Importantes

- Los select sin opción vacía se consideran obligatorios en alta/modificación
- F3 expande los select al máximo
- Color naranja indica select con filtro activo
- Los select en modo consulta pueden ser de selección múltiple
- SelectTree solo disponible en modos: b, c, m