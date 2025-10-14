# DBView

## Sintaxis
```
[DBView] NmView, Field1, Field2, ...
```

## Descripción
Permite buscar y consultar datos de otra tabla mediante una vista de base de datos. Esta función es especialmente útil para trabajar con datos relacionados de múltiples tablas de forma transparente, como si fueran una sola tabla.

## Parámetros

| Parámetro | Tipo | Descripción | Ejemplo |
|-----------|------|-------------|---------|
| **NmView** | `string` | Nombre de la vista de base de datos a utilizar | `view_tareas`, `vista_usuarios_completa` |
| **Field1, Field2, ...** | `string[]` | Lista de campos que deben estar accesibles en la vista desde la tabla definida en `[DBTable]` | `dni`, `nombre`, `apellidos` |

## Ejemplo Práctico

### Escenario
Tienes dos tablas:
- **`personas`**: contiene `dni`, `nombre`, `apellidos`
- **`tareas`**: contiene datos de las tareas asignadas

### Configuración
```
[DBTable] tareas
[DBView] view_tareas, dni, nombre, apellidos
[OnChange] a | dni | ChequeaDNI_Ok_y_PoneNombreYApellidos()
```

### Vista de Base de Datos
La vista `view_tareas` debe crearse previamente en la base de datos combinando:
- **Todos los campos** de la tabla `tareas`
- **Los campos específicos** de la tabla `personas`: `dni`, `nombre`, `apellidos`

```sql
-- Ejemplo de vista SQL
CREATE VIEW view_tareas AS
SELECT 
    t.*,                    -- Todos los campos de tareas
    p.dni,                  -- Campo específico de personas
    p.nombre,               -- Campo específico de personas
    p.apellidos             -- Campo específico de personas
FROM tareas t
LEFT JOIN personas p ON t.persona_id = p.id;
```

## Casos de Uso Comunes

### 📋 **Gestión de Tareas con Datos de Usuario**
```
[DBTable] tareas
[DBView] view_tareas_completas, dni, nombre, email, departamento
```

### 👥 **Usuarios con Roles y Permisos**
```
[DBTable] usuarios
[DBView] view_usuarios_roles, rol_nombre, permisos, nivel_acceso
```

### 📦 **Productos con Categorías**
```
[DBTable] productos
[DBView] view_productos_categoria, categoria_nombre, categoria_descripcion
```

## Consideraciones Importantes

### ✅ **Requisitos Previos**
- La vista debe existir previamente en la base de datos
- Los campos especificados deben estar disponibles en la vista
- La tabla principal debe estar definida con `[DBTable]`

### ⚠️ **Operaciones de Alta/Inserción**
- Al crear nuevos registros, debe existir la relación en la tabla padre
- Es necesario definir correctamente las claves primarias (PK)
- Los campos de la vista relacionada deben tener datos válidos

### 🔍 **Funcionalidad**
- **Lectura**: Acceso transparente a datos de múltiples tablas
- **Búsqueda**: Filtros y consultas sobre campos relacionados  
- **Validación**: Posibilidad de validar datos mediante eventos como `OnChange`

## Flujo de Trabajo Típico

1. **Crear la vista** en la base de datos combinando las tablas necesarias
2. **Definir DBTable** con la tabla principal
3. **Configurar DBView** especificando la vista y campos adicionales
4. **Implementar validaciones** con eventos como `OnChange` si es necesario
5. **Gestionar relaciones** asegurando que los datos padre existan

## Beneficios

- 🚀 **Simplicidad**: Trabajo con datos relacionados como una sola tabla
- 🔄 **Reutilización**: Una vista puede usarse en múltiples formularios
- 📊 **Consultas eficientes**: Las vistas pueden optimizar las consultas SQL
- 🛡️ **Seguridad**: Control de acceso a campos específicos