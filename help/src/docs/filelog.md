# FileLog

## Sintaxis

```
[FileLog] tabla, fichero, cdi, user, maxNumCopias
```

## Descripción

La etiqueta **FileLog** permite guardar un historial de versiones de un archivo, manteniendo un número determinado de modificaciones. 

Esta funcionalidad proporciona:
- **Versionado automático**: Guarda copias de las modificaciones del archivo
- **Acceso visual**: Icono de acceso al lado del campo para consultar el historial
- **Gestión integrada**: Sublista con iconos de gestión para cada versión
- **Control de espacio**: Límite configurable del número de versiones a conservar

## Parámetros

| Parámetro | Descripción |
|-----------|-------------|
| **tabla** | Nombre de la tabla donde se guarda el nombre del archivo |
| **fichero** | Campo donde se guarda el nombre del archivo |
| **cdi** | Campo que registra el instante de la grabación |
| **user** | Campo que identifica al usuario que hace la modificación |
| **maxNumCopias** | Máximo número de modificaciones a guardar. Si se pone "-1" se guardarán todas |

## Configuración de maxNumCopias

| Valor | Comportamiento |
|-------|----------------|
| **Número positivo** | Guarda ese número de versiones anteriores + la actual |
| **-1** | Guarda todas las versiones (sin límite) |
| **0** | No guarda versiones anteriores (solo la actual) |

## Ejemplo Completo

### Configuración de Carga de Archivos
```
[UploadFile] fichero | /_doc_/str | cd_gs_store | 5.000.000.000 | Seleccionar... | gif,jpg,png,bmp,avi,wav,mp3,mp4,txt,doc,docx,xls,xlsx,xml,pdf,htm,html,pps,ppt,js,css,zip | pre_
```

### Configuración del Log de Versiones
```
[FileLog] gs_store, fichero, cdi, cd_gs_user, 3
```

### Definición de Campos
```
[Fields]
Descripción | nm_gs_store  | #D | T | 80 |  | MQ       |       | # |
Fichero     | fichero      | f  | F | 60 |  | MD       |       | # |
cdi         | cdi          | #  | T | 60 |  | -L       | #y2s# |   |
Usuario     | cd_gs_user   | +  | T | 5  |  | -L       | _User |   |
```

### Resultado del Ejemplo
Con `maxNumCopias = 3`, se mantendrán:
- **1 versión actual** (la más reciente)
- **3 versiones históricas** (las 3 modificaciones anteriores)
- **Total: 4 versiones** disponibles para consulta

## Casos de Uso

### Documentos Corporativos
```
[FileLog] documentos, archivo_doc, fecha_mod, usuario_mod, 5
```
Mantiene las 5 últimas versiones de documentos importantes.

### Archivos de Configuración
```
[FileLog] config_files, nombre_config, timestamp, admin_user, -1
```
Guarda todas las modificaciones de archivos de configuración críticos.

### Imágenes de Producto
```
[FileLog] producto_imgs, imagen, fecha_cambio, cd_usuario, 2
```
Conserva 2 versiones anteriores de imágenes de productos.

## Funcionalidades del Historial

### Interfaz de Usuario
- **Icono de historial**: Aparece junto al campo del archivo
- **Sublista de versiones**: Muestra todas las versiones disponibles
- **Iconos de gestión**: Acciones disponibles para cada versión

### Información por Versión
- **Nombre del archivo**: Identificación de la versión
- **Fecha y hora**: Momento de la modificación
- **Usuario**: Quien realizó el cambio
- **Acciones**: Descargar, restaurar, eliminar (según permisos)

## Ventajas

1. **Trazabilidad**: Registro completo de cambios en archivos
2. **Recuperación**: Posibilidad de restaurar versiones anteriores
3. **Auditoría**: Seguimiento de quién y cuándo modificó cada archivo
4. **Gestión de espacio**: Control del número de versiones a conservar
5. **Integración**: Funciona automáticamente con UploadFile

## Consideraciones Técnicas

### Almacenamiento
- Cada versión se guarda como un archivo independiente
- El control de espacio se basa en el número de versiones, no en el tamaño
- Las versiones más antiguas se eliminan automáticamente al superar el límite

### Rendimiento
- El acceso al historial es instantáneo
- La limpieza de versiones antiguas es automática
- No afecta al rendimiento de la aplicación principal

## Relación con UploadFile

FileLog funciona en conjunto con UploadFile para proporcionar un sistema completo de gestión de archivos:

```
UploadFile → Carga el archivo → FileLog → Guarda la versión anterior
```

## Notas Importantes

- **Requiere UploadFile**: FileLog debe usarse junto con la configuración UploadFile
- **Tabla de respaldo**: La tabla especificada debe existir y tener los campos requeridos
- **Permisos**: Los usuarios deben tener permisos adecuados para acceder al historial
- **Espacio en disco**: Considerar el espacio necesario según el número de versiones y tamaño de archivos