# DBLog

## Sintaxis
```
[DBLog] Key, [Key1] ... [,KeyN] [ [ | ScriptPHP ] | NmTable ]
```

## Descripción
Activa la grabación de todas las sentencias SQL en la tabla `gs_log`. Los campos índice indicados como **Key** servirán para localizar posteriormente la información introducida en el log.

### Características principales:
- 📝 **Registro automático**: Todas las operaciones SQL quedan registradas
- 🔍 **Búsqueda indexada**: Mediante las claves definidas
- 👁️ **Visualización**: Icono de acceso al log en la ficha (requiere activar "Log Historial" en el usuario)
- 📊 **Múltiples tipos**: Log historial y log de usuario con diferentes modalidades

## Parámetros

| Parámetro | Tipo | Descripción | Ejemplo |
|-----------|------|-------------|---------|
| **Key** | `string` | Campo(s) clave para indexar el log | `dni`, `id_usuario`, `codigo` |
| **Key1...KeyN** | `string` | Campos adicionales de indexación | `id_empresa`, `fecha` |
| **ScriptPHP** | `string` | Script PHP opcional para formatear la salida | Conversión de códigos a literales |
| **NmTable** | `string` | Nombre de la tabla donde grabar. Si no se especifica, usa `[DBTable]` | `mi_tabla_log` |

## Tipos de Log

### 1. 📋 **Log Historial** (`gs_log`)
Registro completo de todas las operaciones SQL realizadas.

```php
[DBLog] dni
```

**Requisitos:**
- Activar "Log Historial" en el usuario
- Acceso mediante icono en la ficha

### 2. 👤 **Log Usuario** (3 modalidades)

#### **Modalidad 1: Análisis del Log**
Muestra quién dio el alta y quién modificó por última vez la ficha.

```php
[PHPIni] cR,mR
$_LogUser = 'I:[LabelAlta], U:[LabelModificación], D:[LabelBaja]';
```

**Ejemplo:**
```php
$_LogUser = 'I:Creado por, U:Modificado por, D:Eliminado por';
```

#### **Modalidad 2A: Campos en la Tabla (Específicos)**
Inserta 6 campos específicos en la tabla: fecha y usuario para alta, modificación y baja.

```php
$_LogUser = '[CampoFechaAlta],[CampoUserAlta],[CampoFechaModificación],[CampoUserModificación],[CampoFechaBaja],[CampoUserBaja]|[LabelAlta],[LabelModificación],[LabelBaja]';
```

**Ejemplo:**
```php
$_LogUser = 'dt_alta,user_alta,dt_modificacion,user_modificacion,dt_baja,user_baja|Alta,Modificación,Baja';
```

#### **Modalidad 2B: Campos en la Tabla (Prefijos)**
Usa prefijos para generar automáticamente los nombres de los campos.

```php
$_LogUser = '[PrefijoFecha],[PrefijoUser]|[SufijoAlta],[SufijoModificación],[SufijoBaja]|[LabelAlta],[LabelModificación],[LabelBaja]';
```

**Ejemplo:**
```php
$_LogUser = 'dt_,user_|alta,modificacion,baja|Alta,Modificación,Baja';
```

**Campos generados:**
- `dt_alta`, `user_alta`
- `dt_modificacion`, `user_modificacion`
- `dt_baja`, `user_baja`

#### **Modalidad 3: Datos Ocultos**
Muestra campos ocultos de la ficha en el log.

```php
$_LogUser = 'hidden|[Campo],[Campo],...|[Label],[Label],...|[Tipo],[Tipo],...';
```

**Tipos disponibles:**
- `T`: Texto
- `F`: Fecha
- `N`: Numérico (se puede añadir número de decimales, ej: `N2`)

**Ejemplo:**
```php
$_LogUser = 'hidden|precio_coste,margen_beneficio|Precio Coste,Margen|N2,N';
```

## Ejemplos Completos

### Ejemplo 1: Log Básico
```php
[DBTable] usuarios
[DBLog] dni
```
Activa la grabación SQL indexada por el campo `dni`.

### Ejemplo 2: Log con Múltiples Claves
```php
[DBTable] facturas
[DBLog] numero_factura, cliente_id, fecha
```
Indexa el log por número de factura, cliente y fecha.

### Ejemplo 3: Log de Usuario Completo
```php
[Fields]
#(a),    | dt_alta           | F4 | T | 10 |     | * | #today# |   |
#(a),    | user_alta         | +  | T | 4  |     | * | _User   |   |
#(mR),   | dt_modificacion   | F4 | T | 10 |     | * | #today# |   |
#(mR),   | user_modificacion | +  | T | 4  |     | * | _User   |   |

[Assign] mR | dt_modificacion,user_modificacion

[PHPIni] cR,mR
$_LogUser = 'dt_,user_|alta,modificacion,baja|Creación,Modificación,Eliminación';

[DBLog] id_registro
```

### Ejemplo 4: Log con Script de Formateo
```php
[DBLog] codigo_producto | 
// Convertir código a descripción
if (isset($_vF['codigo_producto'])) {
    $desc = obtenerDescripcionProducto($_vF['codigo_producto']);
    return "Producto: " . $desc . " (Código: " . $_vF['codigo_producto'] . ")";
}
```

### Ejemplo 5: Log en Tabla Personalizada
```php
[DBLog] user_id | | log_usuarios_especial
```

## Configuración de Campos

### 📅 **Campos de Fecha**
```php
[Fields]
#(a),  | dt_alta         | F4 | T | 10 | | * | #today# | |
#(mR), | dt_modificacion | F4 | T | 10 | | * | #today# | |
```

### 👤 **Campos de Usuario**
```php
[Fields]
#(a),  | user_alta         | + | T | 4 | | * | _User | |
#(mR), | user_modificacion | + | T | 4 | | * | _User | |
```

### 🔄 **Asignación en Modificación**
```php
[Assign] mR | dt_modificacion,user_modificacion
```

## Requisitos de Usuario

### 📊 **Log Historial**
- ✅ Activar casilla **"Log Historial"** en la configuración del usuario
- 🔍 Acceso mediante icono en la ficha

### 👤 **Log Usuario**
- ✅ Activar casilla **"Log Usuario"** en la configuración del usuario
- 📋 Acceso desde la propia ficha

## Variables del Sistema

| Variable | Descripción | Ejemplo |
|----------|-------------|---------|
| `$_LogUser` | Configuración del log de usuario | Ver modalidades arriba |
| `_User` | Usuario actual del sistema | Valor automático |
| `#today#` | Fecha actual | Valor automático |

## Mejores Prácticas

### ✅ **Recomendaciones**
- Usar claves específicas y únicas para facilitar la búsqueda
- Implementar campos de auditoría desde el diseño inicial
- Configurar permisos de usuario apropiados
- Usar nombres descriptivos para los labels

### ⚠️ **Consideraciones**
- **Rendimiento**: El log puede aumentar significativamente el tamaño de la BD
- **Privacidad**: Considerar qué información se registra
- **Mantenimiento**: Implementar rutinas de limpieza periódica
- **Acceso**: Solo usuarios autorizados deben ver logs sensibles

## Integración con Otros Componentes

DBLog se integra con:
- **[DBTable]**: Define la tabla principal
- **[Fields]**: Campos de auditoría
- **[PHPIni]**: Configuración de $_LogUser
- **[Assign]**: Asignación automática de valores