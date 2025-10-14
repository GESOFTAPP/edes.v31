# HelpMarkdown

## Sintaxis

```
[HelpMarkdown] IdHelp
ContenidoMarkdown
```

## Descripción

La función `HelpMarkdown` permite definir contenido de ayuda usando la sintaxis Markdown directamente dentro del código del sistema. Esta función combina la simplicidad de escritura de Markdown con la flexibilidad de incluir ayuda contextual sin necesidad de archivos externos.

Markdown es un lenguaje de marcado ligero que permite crear contenido formateado de manera sencilla y legible. El sistema convierte automáticamente el contenido Markdown a HTML para su visualización, manteniendo la facilidad de escritura y edición del contenido de ayuda.

## Parámetros

| Parámetro | Tipo | Descripción | Obligatorio |
|-----------|------|-------------|-------------|
| `IdHelp` | String | Identificador único para el contenido de ayuda | Sí |
| `ContenidoMarkdown` | Markdown | Contenido en formato Markdown (líneas siguientes) | Sí |

## Ejemplos

### Ayuda básica para aplicación
```php
[TitleIcon] * | H | | aplicacion
[HelpMarkdown] aplicacion
## Información de la aplicación

Esta aplicación permite **gestionar datos de usuarios** y realizar operaciones básicas de CRUD.

### Funcionalidades principales:
- Crear nuevos registros
- Editar información existente
- Eliminar registros obsoletos
- Consultar información detallada

> **Nota importante:** Todos los cambios se guardan automáticamente.
```
**Descripción**: Define ayuda en Markdown para el identificador "aplicacion" con formato estructurado.

### Ayuda para formulario con validaciones
```php
[HelpMarkdown] formulario_usuario
# Formulario de Usuario

## Campos obligatorios

| Campo | Requisitos | Ejemplo |
|-------|------------|---------|
| **Nombre** | Mínimo 3 caracteres | Juan Pérez |
| **Email** | Formato válido | usuario@email.com |
| **Teléfono** | 9-15 dígitos | 123456789 |

### Validaciones automáticas:
1. El email debe tener formato válido
2. El teléfono solo acepta números
3. Los campos marcados con `*` son obligatorios

---
*Para más información, consulte el manual de usuario.*
```
**Descripción**: Ayuda con tabla informativa y lista numerada para un formulario.

### Documentación técnica con código
```php
[HelpMarkdown] api_endpoints
# API Endpoints

## Autenticación

Para acceder a la API necesita un token válido:

```bash
curl -X POST /api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"username": "user", "password": "pass"}'
```

### Respuesta esperada:
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "expires_in": 3600
}
```

## Endpoints disponibles

### GET /api/usuarios
Obtiene lista de usuarios activos.

**Parámetros opcionales:**
- `page`: Número de página (default: 1)
- `limit`: Elementos por página (default: 10)
- `filter`: Filtro de búsqueda

**Ejemplo de uso:**
```
GET /api/usuarios?page=1&limit=5&filter=admin
```

> ⚠️ **Importante:** Todos los endpoints requieren autenticación Bearer token.
```
**Descripción**: Documentación técnica completa con ejemplos de código y parámetros.

### Tutorial paso a paso
```php
[HelpMarkdown] tutorial_inicio
# 🚀 Tutorial de Inicio Rápido

## Paso 1: Acceso al sistema
1. Abra su navegador web
2. Navegue a la URL del sistema
3. Introduzca sus credenciales

## Paso 2: Navegación principal
- Utilice el **menú lateral** para acceder a diferentes módulos
- El **panel central** muestra el contenido activo
- La **barra superior** contiene herramientas de usuario

## Paso 3: Primeras acciones
### Crear un nuevo registro:
1. Haga clic en el botón `+ Nuevo`
2. Complete los campos requeridos
3. Presione `Guardar` para confirmar

### Buscar información:
- Use la barra de búsqueda en la parte superior
- Aplique filtros usando los controles laterales
- Ordene resultados haciendo clic en las columnas

---
## 📋 Checklist de verificación
- [ ] Credenciales verificadas
- [ ] Menú principal explorado
- [ ] Primer registro creado
- [ ] Búsqueda realizada

> 💡 **Consejo:** Use `Ctrl+H` para acceder rápidamente a la ayuda desde cualquier pantalla.
```
**Descripción**: Tutorial interactivo con emojis, checklist y consejos útiles.

### Ayuda para herramientas específicas
```php
[HelpMarkdown] calculadora_impuestos
# 🧮 Calculadora de Impuestos

## Descripción
Herramienta para calcular impuestos automáticamente según la legislación vigente.

## Campos de entrada

### Base Imponible
Cantidad sobre la que se aplicará el impuesto (sin IVA incluido).

*Formato:* Número decimal con hasta 2 decimales
*Ejemplo:* 1000.50

### Tipo de IVA
Seleccione el porcentaje de IVA aplicable:

| Tipo | Porcentaje | Aplicación |
|------|------------|------------|
| General | 21% | Mayoría de productos |
| Reducido | 10% | Productos básicos |
| Superreducido | 4% | Productos esenciales |

## Cálculo automático
El sistema calculará automáticamente:
- **IVA:** Base × Porcentaje
- **Total:** Base + IVA

### Fórmula aplicada:
```
Total = Base Imponible × (1 + Tipo IVA/100)
```

---
📞 **Soporte:** Para dudas fiscales contacte con el departamento contable.
```
**Descripción**: Ayuda específica para herramienta con fórmulas y referencias.

### Ayuda contextual para campos
```php
[HelpMarkdown] campo_fecha
# 📅 Campo de Fecha

## Formatos aceptados

El sistema acepta múltiples formatos de fecha:

### Formatos principales:
- `DD/MM/AAAA` → 15/03/2024
- `DD-MM-AAAA` → 15-03-2024  
- `AAAA-MM-DD` → 2024-03-15

### Formatos alternativos:
- `DD/MM/AA` → 15/03/24
- `DD.MM.AAAA` → 15.03.2024

## Herramientas disponibles

### Selector de calendario
Haga clic en el icono 📅 para abrir el selector visual.

### Teclas rápidas:
- `Hoy` → Fecha actual
- `+7` → Fecha + 7 días
- `-30` → Fecha - 30 días

> 💡 **Tip:** El sistema valida automáticamente las fechas introducidas y muestra errores si el formato no es correcto.

---
*Última actualización: Sistema v2.1*
```
**Descripción**: Ayuda contextual detallada para un campo específico con múltiples opciones.

### Ayuda con diagramas ASCII
```php
[HelpMarkdown] flujo_proceso
# 🔄 Flujo del Proceso

## Diagrama de flujo

```
┌─────────────┐    ┌──────────────┐    ┌─────────────┐
│   Inicio    │───▶│ Validación   │───▶│ Procesado   │
└─────────────┘    └──────────────┘    └─────────────┘
                           │                   │
                           ▼                   ▼
                   ┌──────────────┐    ┌─────────────┐
                   │    Error     │    │  Finalizado │
                   └──────────────┘    └─────────────┘
```

## Estados del proceso

### 🟡 Inicio
El proceso se inicia automáticamente al enviar el formulario.

### 🔵 Validación
- Verificación de campos obligatorios
- Validación de formatos
- Comprobación de permisos

### 🟢 Procesado
- Guardado en base de datos
- Generación de reportes
- Notificaciones automáticas

### 🔴 Error
Si ocurre un error, el proceso se detiene y muestra el mensaje correspondiente.

### ✅ Finalizado
Proceso completado exitosamente.

---
## Tiempos estimados
- **Validación:** 1-2 segundos
- **Procesado:** 5-10 segundos
- **Finalización:** 1 segundo
```
**Descripción**: Ayuda con diagrama ASCII y descripción detallada de procesos.

## Elementos de sintaxis Markdown soportados

### Texto y formato
- **Negrita:** `**texto**` o `__texto__`
- *Cursiva:* `*texto*` o `_texto_`
- `Código inline:` `` `código` ``
- ~~Tachado:~~ `~~texto~~`

### Encabezados
```markdown
# Encabezado 1
## Encabezado 2  
### Encabezado 3
```

### Listas
```markdown
- Lista no ordenada
- Otro elemento

1. Lista ordenada
2. Segundo elemento
```

### Enlaces e imágenes
```markdown
[Texto del enlace](URL)
![Texto alternativo](ruta/imagen.jpg)
```

### Tablas
```markdown
| Columna 1 | Columna 2 |
|-----------|-----------|
| Dato 1    | Dato 2    |
```

### Citas y código
```markdown
> Cita o nota importante

```javascript
// Bloque de código
function ejemplo() {
  return "código";
}
```
```

## Notas importantes

- El contenido Markdown se convierte automáticamente a HTML
- Se soportan todos los elementos estándar de Markdown
- Los emojis Unicode se renderizan correctamente
- Las tablas deben seguir la sintaxis estándar
- Los bloques de código admiten resaltado de sintaxis
- Para ayudas muy extensas, considere usar archivos externos con `[Help]`
- El contenido se procesa en tiempo real al mostrar la ayuda