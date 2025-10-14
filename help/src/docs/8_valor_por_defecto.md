# Valor por Defecto

## DESCRIPCIÓN
Si introducimos alguna información será la que se mostrará por defecto en el **alta de un formulario** y dejará el campo **visible pero no editable**.

### Comportamiento Básico
- **Funciona solo en el alta** por defecto
- Campo queda **no editable** automáticamente
- Se puede hacer **editable** con la etiqueta `[NoEditFilled]`
- Se puede extender a **otros modos** con la etiqueta `[DefaultVal]`

---

## ETIQUETAS ASOCIADAS

| Etiqueta | Función |
|----------|---------|
| `[Assign]` | Asignar variables por defecto en un modo distinto de "a" |
| `[NoEditFilled]` | Permite editar los valores por defecto |
| `[DefaultVal]` | Valor por defecto para los campos indicados |

### Ejemplo Práctico
```
[NoEditFilled] c,m,b
[Fields]
Local | cd_gs_node | 0 | S | 7 || -Q | *Node | # |
```
*Al consultar, modificar o dar de baja un usuario, obliga a que sea solo los usuarios de su nodo.*

---

## VALORES DEL LADO DEL SERVIDOR

### 📅 Fechas y Horas
| Valor | Descripción | Formato |
|-------|-------------|---------|
| `#today#` | Fecha del sistema | `dd-mm-yyyy` |
| `#clock#` | Hora del sistema | Según longitud del campo |
| `#sy2s#` | Inicio del día en timestamp | `yyyy-mm-dd 00:00:00` |
| `#y2s#` | Timestamp actual | `yyyy-mm-dd hh:mm:ss` |
| `#y2m#` | Año-mes actual | `yyyy-mm` |

### Ejemplos
```
Fecha Alta | fec_alta | N | T | 10 | 100 | A | #today# | |
Hora Registro | hora_reg | N | T | 8 | 80 | A | #clock# | |
```

---

## VARIABLES DE SESIÓN

### Sintaxis con Asterisco (`*`)
Si empieza por `*`, se interpreta como **variable de sesión**:

```
Campo | nombre_campo | tipo | control | long | ancho | modo | *VariableSesion | |
```

### Ejemplo
```
Usuario | usuario | N | T | 20 | 150 | A | *User | |
```

---

## SENTENCIAS PHP

### Sintaxis con Mayor Que (`>`)
Si empieza por `>`, se ejecuta como **sentencia PHP**:

```
Año | ano | + | T | 4 || - | >date('Y') ||
```

### Casos de Uso
- Cálculos dinámicos
- Funciones PHP personalizadas
- Valores computados en tiempo real

---

## VARIABLES DE URL

### Sintaxis con Dólar (`$`)
Se puede usar el valor mandado por la URL comenzando con `$`:

```
Grupo de datos | grupo | + | T | 3 || * | $Grupo ||
```

### Variables Incrustadas en Texto
Para **múltiples variables** en un texto, usar corchetes:
```
Descripción | desc | N | T | 50 | 200 | A | Grupo [$Grupo] - Usuario [$User] ||
```

### Ejemplo de Llamada
```
#c:script&Grupo=1&User=admin
```

---

## VALORES ALTERNATIVOS PARA CONSULTAS

### Sintaxis con Barra Invertida (`\`)
Se puede definir un **valor alternativo** separado por `\` que solo tiene efecto en **consultas**:

```
Local | cd_gs_node | 0 | S | 7 || -Q | *Node\ | # |
```

### Comportamiento
- **Mantenimiento**: Solo si eres de ese local
- **Consulta**: Permite ver todos los locales

---

## VALORES SOLO MODIFICABLES POR WEBMASTER

### Sintaxis con Arroba (`@`)
Si empieza por `@`, solo el **WebMaster** puede modificarlo:

```
Local | cd_gs_node | 0 | S | 7 || -Q | @*Node | # |
```

### Condición
- Campo `gs_user.webmaster` debe valer `"S"` (Sí)
- **Usuarios normales**: Valor fijo
- **WebMaster**: Puede modificar en modos `c,m,b`

---

## SENTENCIAS SQL

### Consultas Dinámicas
Se puede poner una **sentencia SQL** como valor por defecto:

```
Periodo de Liquidación | periodo | P4 | SV | 7 | | Q | select liq_actual from config | |
```

### Casos de Uso
- Valores desde configuración
- Datos calculados de otras tablas
- Valores dinámicos según contexto

---

## VALORES LITERALES

### Sintaxis con Igual (`=`)
Si empieza por `=`, se quita el símbolo y se deja el resto **sin interpretar**:

```
Constante | constante | N | T | 10 | 100 | A | =VALOR_FIJO | |
```

### Utilidad
- Valores que coinciden con sintaxis especiales
- Textos literales que empiezan con símbolos reservados

---

## EJEMPLOS COMPLETOS

### 📋 Caso Básico
```
[Fields]
Fecha | fecha | N | T | 10 | 100 | A | #today# | |
Usuario | usuario | N | T | 20 | 150 | A | *User | |
```

### 🔒 Caso con Restricciones
```
[NoEditFilled] c,m,b
[Fields]
Nodo | nodo | 0 | S | 7 || -Q | @*Node | # |
```

### 🔄 Caso con Alternativas
```
[Fields]
Sucursal | sucursal | 0 | S | 5 || -Q | *Sucursal\0 | # |
```

### 📊 Caso con SQL
```
[Fields]
Ejercicio | ejercicio | N | T | 4 || A | select year(now()) | |
```

---

## PRIORIDAD DE INTERPRETACIÓN

1. **`=`** → Valor literal (sin interpretar)
2. **`@`** → Solo WebMaster puede modificar
3. **`*`** → Variable de sesión
4. **`>`** → Sentencia PHP
5. **`$`** → Variable de URL
6. **`#`** → Funciones del servidor
7. **SQL** → Sentencia de base de datos

---

## NOTAS IMPORTANTES

> ⚠️ **Comportamiento por defecto:** Solo funciona en **alta** (`modo "a"`).

> 🔧 **Extensión a otros modos:** Usar `[DefaultVal]` para aplicar en otros modos.

> 🔒 **Seguridad:** Los valores con `@` requieren permisos de WebMaster.

> 💡 **Variables PHP:** Se pueden crear variables en `[PHPForm]` para usar como valores por defecto.

> 🌐 **Variables URL:** Útiles para pasar contexto desde otros formularios o árboles de navegación.