# Documentación gsEdit

## Índice
1. [General](#general)
2. [Intérprete SQL](#intérprete-sql)
3. [Intérprete EDF Etiquetas](#intérprete-edf-etiquetas)
4. [Intérprete PHP](#intérprete-php)

## General

### Funciones básicas
- Al visualizar la ayuda se copia la etiqueta en el clipboard
- La tecla F9 memoriza la posición actual y F8 salta de posición en posición
- Si es Mayúsculas+F8 saltará hacia atrás
- Con Control+F8 vas a la función y con Alt+F8 regresas
- Si marcas una etiqueta con corchetes y pulsas F1 se abre la ayuda de esa etiqueta
- Control+F1 abre la ayuda en formato "chm"
- Con F10 se graba la hoja actual, Control+F10 graba formateando la etiqueta [FIELDS]

### Atajos de teclado principales

| Función | Atajo |
|---------|-------|
| Copiar | Control+Insert / Control+C |
| Pegar | Shift+Insert / Control+V |
| Siguiente solapa | Control+Tab |
| Solapa anterior | Control+Shift+Tab |
| Ejecutar script | F10 |
| Grabar archivo | F10 |
| Grabar con formato | Control+F10 |

### Funciones avanzadas
- Dispone de ventana de ejecución inmediata de PHP, HTML con JavaScript y SQL
- En buscar cadena en servidor: usar "|" delante de la cadena para buscar solo dentro de [Fields]
- Seleccionar nombre de fichero con Alt pulsada abre el fichero
- Control+click en música sube/baja de 10 en 10
- Si grabas un fichero vacío lo borrará de disco
- Soporte multiusuario con detección de cambios antes de grabar

### Editores externos
Para utilizar otros editores (en arbol.ini):
```
$_ExternalApps[] = array('EditPlus', 'd:/EdPlus/editplus.exe', 'S');
$_ExternalApps[] = array(Etiqueta, DirExe, TipoAplicación);
```

| Tipo | Descripción |
|------|-------------|
| S | Código fuente (Source) |
| P | Picture (gráficos) |
| '' | Otras aplicaciones |

### Etiquetas especiales
- **[LoadIni]**: Lista de ficheros a cargar en el arranque
- **[LoadSel]**: Lista de ficheros a cargar al seleccionar la etiqueta con corchetes
- **[DBGateway]** y **[DBGatewayOne]**: Al seleccionar la etiqueta se carga el fuente en el editor

## Intérprete SQL

### Límites y configuración
- Todas las sentencias "select" se limitan por defecto a 500 registros
- Se pueden encadenar sentencias SQL separadas por ";"

### Comentarios

| Tipo | Sintaxis | Descripción |
|------|----------|-------------|
| Línea | . | Comentario de una línea si empieza por "." |
| Línea | // | Comentario de una línea si empieza por "//" |
| Multilínea | /* */ | Línea que empieza por "/*" y termina con "*/" |
| Fin código | [note] | Desde esta línea hasta el final es comentario |

### Líneas de separación

| Carácter | Descripción |
|----------|-------------|
| - | Línea de separación fina |
| = | Línea de separación media |
| # | Línea de separación gruesa |

### Comandos especiales

| Comando | Descripción |
|---------|-------------|
| `NombreTabla` | Ejecutará "select * from NombreTabla" |
| `N# NombreTabla` | Muestra solo los primeros "N#" registros |
| `NombreTabla=Valor` | Para tablas IDA: "select * from [NombreTabla] where cd_[NombreTabla]='[Valor]'" |
| `time[,N#]: sentencia SQL` | Tiempo invertido en ejecutar la sentencia, repetir N# veces |
| `limit N#` | Limita la salida al número de registros especificados |
| `=select ...` | No añade LIMIT/ROWNUM/FIRST para no limitar registros |

### Variables y cursores
- `$NomVariable = "..Valor.."` - Declarar variable para usar como `{$NomVariable}`
- `$row = select * from tabla` - Cursor, luego usar `$row[NomCampo]`

### Comandos de base de datos

| Comando | Descripción |
|---------|-------------|
| `tables [patrón]` | Lista tablas que cumplan el patrón |
| `tables -r` | Lista tablas con número de registros |
| `structure NomTabla[,...]` | Muestra estructura de las tablas |
| `edit structure [NomTabla]` | Copia estructura al editor SQL |
| `fields [ListaCampos]` | Lista campos de todas las tablas |

### Funciones especiales

| Función | Descripción |
|---------|-------------|
| `eUpper(tabla.campo)` | Convierte a mayúsculas |
| `eLower(tabla.campo)` | Convierte a minúsculas |
| `eUpperLower(tabla.campo)` | Capitaliza la primera letra |
| `eMaxLeng(tabla.campo)` | Longitud máxima del contenido |
| `eChange(tabla.campo, TxtOld, TxtNew)` | Sustituye cadena/carácter |
| `eChr(tabla.campo)` | Cadena con todos los caracteres usados |

### Comandos de configuración

| Comando | Descripción |
|---------|-------------|
| `db: [NmFile]` | Nombre del fichero de definición de BBDD |
| `xls: / excel:` | Salida en fichero Excel |
| `pdf:` | Salida en fichero PDF |
| `blob:` | Activa visualización de campos de texto largo |
| `savesql:` | Graba sentencia en sql.log |
| `exesql` | Ejecuta sentencias pendientes |
| `echo` | Activa/desactiva impresión de comandos |

### Comandos de ayuda

| Comando | Descripción |
|---------|-------------|
| `help / ?` | Muestra la ayuda |
| `help sql` | Ayuda del gestor de BBDD activo |
| `help mysql` | Ayuda específica de MySQL |
| `help informix` | Ayuda específica de Informix |
| `help oracle` | Ayuda específica de Oracle |

## Intérprete EDF Etiquetas

### Teclas rápidas de script

| Atajo | Función |
|-------|---------|
| Ctrl+U | Convertir a mayúsculas |
| Ctrl+L | Convertir a minúsculas |
| F1 | Ayuda |
| F10 | Grabar/Ejecutar |
| Ctrl+S | Grabar (save) |
| Ctrl+F | Diálogo Buscar |
| Ctrl+H | Buscar y Reemplazar |
| F3 | Siguiente búsqueda |
| Shift+F3 | Búsqueda anterior |
| F2 | Siguiente etiqueta |
| Shift+F2 | Etiqueta anterior |

### Puntos de salto

| Atajo | Función |
|-------|---------|
| Ctrl+K+K | Poner/Quitar punto de salto F9 |
| Ctrl+K+N | Siguiente punto de salto (F4) |
| Ctrl+K+P | Punto de salto anterior (Alt+F4) |
| Ctrl+K+1/2/... | Pone punto de salto numérico |
| Ctrl+1/2/... | Salta a punto de salto numérico |

### Edición

| Atajo | Función |
|-------|---------|
| Ctrl+C | Copiar |
| Ctrl+V | Pegar |
| Ctrl+X | Borra línea o selección |
| Ctrl+Z | Deshacer |
| Ctrl+Shift+Z | Rehacer |
| Ctrl+J | Duplicar línea |
| Ctrl+G | Ir a línea número... |
| Ctrl+W | Marcar palabra |
| Ctrl+A | Marcar todo |

### Navegación

| Atajo | Función |
|-------|---------|
| Ctrl+-> | Siguiente palabra |
| Ctrl+<- | Palabra anterior |
| Ctrl+Arriba/Abajo | Desplaza hoja una línea |
| Shift+Cursor | Marcar texto |

### Ventanas especiales

| Atajo | Función |
|-------|---------|
| Ctrl+F5 | Nueva ventana SQL |
| Ctrl+F6 | Nueva ventana PHP |
| Ctrl+F7 | Ver SQL |
| Ctrl+F8 | Ver TRON |
| Ctrl+M | Ejecutar macro |
| Ctrl+T | Buscar traducción |
| Ctrl+Space | Mostrar ventana Tags |
| Ctrl+O | Listado desarrolladores |

### Listado de macros (Ctrl+M)

| Macro | Descripción |
|-------|-------------|
| `for var1 var2` | Bucle FOR (php/js) |
| `edes.js` | Script JavaScript externo |
| `JS` | JavaScript externo |
| `js / script` | JavaScript interno |
| `CSS` | Hoja de estilo externa |
| `css / style` | Hoja de estilo interna |
| `html` | Esquema página HTML |
| `table` | Tabla HTML vacía (2 columnas, 3 filas) |
| `try` | JavaScript try |
| `switch / case` | JavaScript/PHP switch |
| `iframe down` | Divide pantalla (iframe inferior) |
| `iframe up` | Divide pantalla (iframe superior) |
| `iframe left` | Divide pantalla (iframe izquierda) |
| `iframe right` | Divide pantalla (iframe derecha) |
| `[NombreCampo]` | Genera columnas de [Fields] |

## Intérprete PHP

### Comandos en primera línea

| Comando | Descripción |
|---------|-------------|
| `db: [NmFile]` | Controlador de BBDD alternativo |
| `load: [NmScript]` | Recupera el script |
| `ls:` | Lista tus scripts |
| `rm: [NmScript]` | Borra el script |
| `save: [NmScript]` | Graba y ejecuta el script |

### Búsqueda en servidor
- La opción "Búsqueda en el servidor" - "Cadena" busca por defecto en el directorio "d"
- Para otro directorio se define encerrando entre llaves el path

### Opciones de archivo encontrado
- **Click**: Ver el archivo
- **Control+Botón derecho**: Editar con gsEdit
- **Control+Alt+Botón derecho**: Editar con editor asociado (configurable en "edes.ini")

### Copias de seguridad
- Se hacen por defecto por día de la semana
- Si grabas un fichero vacío lo borrará de disco