## Variables del Sistema
### Variables de Sesión
- **No se utilizan variables `$_SESSION`** tradicionales
- Se utiliza la clase estática **`SESS`** disponible públicamente en todo el sistema
- **Excepción**: En scripts PHP independientes debe globalizarse dentro de las funciones

### Variables de Configuración
- Las variables del archivo `group.var` están disponibles mediante la clase estática **`SETUP`**
- Mismas condiciones de acceso que `SESS`

---

## Sistema de Login

### Acceso como Desarrollador
Para acceder como desarrollador se requiere:
1. Estar activo como usuario de la aplicación
2. Después del password de usuario, usar **Shift + "&"** seguido de la clave de desarrollo
3. El nombre del usuario debe coincidir con el nombre del desarrollador

### Configuración del Login
- Las características del campo login se definen en `login.css` mediante la regla `#LOGITUD`
- Se pueden definir longitudes máxima y mínima, y tipos de caracteres permitidos
- Puede configurarse para usar DNI, email u otros identificadores

### Acceso por URL
Parámetros que se pueden pasar en la URL separados por "&":
- Login
- Password de aplicación (siempre en **MAYÚSCULAS**)
- Password de desarrollo (siempre en **minúsculas**)

### Carácter Desencadenante
En "Modificar clave" se puede definir un carácter desencadenante que permite introducir la clave de 3 formas:
1. **Clave normal**: tal como está
2. **Clave con prefijo**: `[caracteres]` + `[desencadenante]` + `[clave]`
3. **Clave con prefijo y sufijo**: `[caracteres]` + `[desencadenante]` + `[clave]` + `[desencadenante]` + `[caracteres]`

### Activación de Modo Desarrollador
Si no has entrado como desarrollador:
1. Poner el foco en el top
2. Pulsar `&#developer;`
3. Introducir la clave de confirmación

---

## Sintaxis y Comentarios

### Comentarios
- **Punto (.)** como primer carácter anula una línea o la convierte en comentario
- **Excepción**: En la etiqueta `[CSSAdd]` el punto no es comentario
- **Comentarios alternativos**: `//` y contenido entre comillas

### Delimitadores de Parámetros
- **Barra vertical (|)** se usa como delimitador
- **Escape**: Para usar `|` literal, anteponer barra invertida `\|`

### Partición de Líneas
- Usar **guión bajo (_)** al final de línea para continuar en la siguiente
- Permite comentarios del tipo `// ...` que se ignoran
- **Restricción**: El último carácter de una etiqueta no puede ser `|`

---

## Parámetros y Configuración

### Parámetro Modo
En etiquetas que contienen el parámetro Modo:
- **Modo único**: especificar directamente
- **Múltiples modos**: separar por comas
- **Todos los modos**: usar asterisco `*`

### Notación de Parámetros
- **Dos puntos (:)**: indican parámetros excluyentes
- **Corchetes []**: indican parámetros opcionales

**Ejemplo:**
```
[Width] C:E | NomCampo | AnchoEnPixels
```

### Caracteres Especiales
Para caracteres que forman parte de la sintaxis, usar códigos UTF-8:
```
// En lugar de:
2 Nombre | nombre | N | T | 30 | | M | | |

// Usar:
&#50; Nombre | nombre | N | T | 30 | | M | | |
```

---

## Gestión de Archivos

### Trayectorias de Archivos
La función `eScript()` maneja las rutas según el prefijo:

| Prefijo | Ubicación |
|---------|-----------|
| `//` | Subdirectorio paralelo terminado en `.file` |
| `/` | Desde la raíz de la aplicación |
| `=` | Directorio paralelo a la aplicación |
| `$` | Dentro del directorio del motor |
| *otros* | Dentro del directorio `d` de datos |

### Estructura de Directorios

#### Directorio de la Aplicación
- **`http`**: Archivos públicos (iconos, imágenes, CSS)
- **`d`**: Scripts principales (puede contener subdirectorios)
- **`_datos`**: Datos de configuración
- **`_tmp`**: Archivos temporales
- **`_d_`**: Datos de desarrolladores

#### Directorio `.file`
Separado de la aplicación para archivos masivos.

### Campos Tipo File
- Nombre del archivo temporal: `$_FILES[NmField]['tmp_name']` o `$[NmField]_tmp_name`
- **Funcionalidades**: deselección, indicador de cierre en subventanas

---

## Código Condicional

### Métodos de Condicionamiento

#### 1. Interrogaciones (`??`)
```php
? $GLOBALS['_variable_de_sesion_']=='...' ? | cd_gs_node | + | T | 8|250,27| Q* |_Node||
```

#### 2. Etiqueta `[cc]` (Create Condition)
```php
// Variables de sesión, get y post
[cc] #q | $_variable_=='...'

// Otras variables
[cc] #q | $GLOBALS['_variable_']=='...'
```

#### 3. Condiciones por Modo
```php
// Condición simple
#(a,bR,cR,mR) | cd_gs_node | + | T | 8 | 250,27 | Q* |_Node||

// Condición de bloque
#(a,bR,cR,mR) ¿
    | cd_gs_node  | + | T  | 8 | 250,27| Q* |_Node||
    Distrito | cd_distrito | 0 | Ss | 8 | 150   | A  |     ||
?
```

### Formatos de Condicionamiento

| Formato | Descripción |
|---------|-------------|
| `#(Modo,Modo,,,)` | Condición por modo |
| `#Variable` | Condición por variable |
| `#!Variable` | Condición negada |
| `¿ condición ?` | Condición inline |
| `¿ condición ?¿ ... ?` | Condición if-else |

### Modificadores Especiales
- **`P` o `PDF`**: Cuando se pasa a PDF
- **`X` o `XLS`**: Cuando se pasa a Excel
- **`H` o `HTM`**: Cuando la salida es HTML
- **`*`, `?`, `?R`, `?l`**: Comodines para modos

### Condiciones Avanzadas
```php
#(c,u20,u23,n15,w,t2,d,D,S)
// c: consultas, u20: usuario 20, n15: nodo 15, w: webMaster, etc.
```

---

## Funcionalidades Avanzadas

### Lenguajes Múltiples
- **En PHP**: se puede salir a Javascript o HTML
- **En Javascript**: se puede salir a HTML
- **En HTML**: se puede salir a Javascript

### Incrustación de Código
En Javascript y HTML se puede incrustar PHP:
```javascript
// Sintaxis básica
alert(<?= $valor ?>);

// Variables
alert('Mi nombre es {$nombre}');

// Includes
#include()
```

### Relación entre Ventanas
- **`_WOPENER`**: Variable que relaciona ventana hija con padre
- **`window.frameElement.WOPENER`**: Para páginas fuera del motor
- **Funciones**: `ePPF()` y `ePGF()`

### Directiva Include
```php
#include( Mode ) NomScript [ | FileOpcional=false ]
```
- Incluye código eDes hasta etiqueta `[Note]` o final de archivo
- `NomScript` puede contener variables `{$...}`
- Cualquier nivel de anidamiento

### Páginas Personales
- Cargar con `top.S.edes(window);` como primer script
- Terminar PHP con `eEnd()` en lugar de `exit` o `die()`
- Comenzar con `eCheckUser()` para control de usuarios

### IFrames
- Definir `eNORESIZE=true` en la definición del iframe

---

## Funcionalidades del Sistema

### Línea de Estado del Desktop
- Muestra trayectoria de la última opción
- Icono configurable en `desktop.ini`: `$_AddNameIconsStatus = "_status"`
- Acceso para repetir última opción y ejecutar último submenú

### Descarga de Archivos en Windows XP
Para descargas con `edes.php?E:` añadir `DOWNLOAD=1` al final de la URL:
```javascript
top.eCallSrv(window, 'edes.php?E:doc_zip.php&cd_contra='+eGF('cd_contra')+'&DOWNLOAD=1');
```

### Valores Especiales
- **`NULL`**: Enviar cadena "NULL" en mayúsculas graba valor nulo
- **Condiciones de búsqueda**:
  - `*`: hace `like`
  - `=`: busca cadena vacía
  - `<` o `NULL`: busca nulos
  - `(...)`: busca con `in (...)`
  - `)(...)`: busca con `not in (...)`
  - `[...]`: busca con `matches`

### Proceso por Lotes (Diario)
Tareas automáticas en el primer acceso del día:
- Borrar archivos en `../_tmp/cch` con 1 día de antigüedad
- Borrar archivos en `../_tmp/log` con 1 día de antigüedad
- Borrar archivos en `../_tmp/pdf` con 1 día de antigüedad
- Borrar archivos en `../_tmp/php` con 1 día de antigüedad
- Borrar archivos en `../_tmp/exp` con 1 semana de antigüedad
- Borrar archivos en `../_tmp/zip` con 1 semana de antigüedad
- Renombrar `/_tmp/err/_log.err` cada trimestre

---

## Seguridad

### Características de Seguridad
- **Protocolo**: Todo sobre HTTP
- **Instalación**: Puede requerir login/password y filtrado por IP
- **Encriptación**: Password viaja encriptado
- **Carácter desencadenante**: Activable al teclear password
- **Bloqueo por IP**: Individual, múltiple o rangos por usuario
- **Control de MAC**: Acceso por direcciones MAC específicas
- **Horarios**: Restricción por franjas horarias y días
- **Documentos**: Firma de seguridad para protección de datos
- **Registro**: Todas las descargas y modificaciones
- **Inyección SQL**: Protección en el login
- **URLs**: No hay URLs visibles
- **Permisos**: Mapa de opciones configurable por usuario
- **Exportación**: Control de quién puede extraer XLS, PDF e imprimir
- **Caducidad**: Días para cambio obligatorio de clave
- **Inactividad**: Días sin acceso para caducidad

### Servidor de Respaldo
- Posibilidad de servidor Apache de respaldo en tiempo real
- Acceso automático a intranet en caso de caída del servidor principal

### Balanceador de Carga
Configuración en `/_datos/config/balancer.ini`:
```
http://localhost/aplicacion_1/http/
http://localhost/aplicacion_2/http/
http://localhost/aplicacion_n/http/
```

---

## Configuración Avanzada

### Scripts del Sistema
- Scripts que empiezan por `$` son del sistema
- Si existe `nombreScript.ini` en `/_datos/config`, se ejecuta después del parseo

### Scripts EDF del Motor
- Modificar comportamiento creando archivo `.ini` en `/_datos/config`
- Se carga después de parsear el script original

### Salida de la Aplicación
- Función Javascript `user_eClose()` se ejecuta al salir
- El usuario debe llamar a `top._eClose()` para cerrar completamente

### Tipo de Dato Fecha
- **Formato único**: `DD-MM-AAAA`

---

## Buenas Prácticas

### Recomendaciones Generales
- **No cambiar directorio** en PHP (las ventanas pueden llamarse desde varios contextos)
- **Maximizar código generado por eDes** para prestaciones homogéneas
- **Campos únicos**: En grupo de fichas no puede haber nombres iguales excepto campo de relación
- **Comillas dobles**: Usar como delimitador de variables
- **Función `qCuote()`**: Para asignar variables alfanuméricas

### Verificación de Sintaxis
- eDes **NO** verifica sintaxis de etiquetas ni funciones
- **Sí** detecta errores de sintaxis en etiquetas con PHP
- Verificación debe realizarse en tiempo de desarrollo

### Construcción al Vuelo
- eDes genera páginas dinámicamente de forma secuencial
- Optimización automática del código generado