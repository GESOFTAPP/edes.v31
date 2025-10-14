# DBAddFields

## Sintaxis
```
[DBAddFields] [Prefijo] | FieldsList
```

## Descripción
Permite añadir más campos de cualquier tabla del contexto actual a la sentencia SQL principal. Es especialmente útil para obtener información adicional de tablas auxiliares o relacionadas sin crear vistas complejas.

### Características principales:
- 🔗 **Extensión de consultas**: Añade campos de tablas relacionadas
- 🏷️ **Prefijos**: Evita conflictos de nombres de campos
- 📊 **Contexto actual**: Trabaja con todas las tablas disponibles
- 🔄 **Integración transparente**: Los campos aparecen como parte de la consulta principal

## Parámetros

| Parámetro | Tipo | Descripción | Ejemplo |
|-----------|------|-------------|---------|
| **Prefijo** | `string` (opcional) | Prefijo para evitar conflictos de nombres | `u_`, `cli_`, `prop_` |
| **FieldsList** | `string` | Lista de campos o consulta SQL completa | `nombre, apellidos` o `select * from...` |

## Funcionamiento

### Sin Prefijo
```sql
-- Consulta original
SELECT * FROM inmueble WHERE id = 123

-- Con DBAddFields
SELECT *, nombre, apellidos FROM inmueble 
LEFT JOIN cliente ON inmueble.cd_propietario = cliente.cd_cliente
WHERE inmueble.id = 123
```

### Con Prefijo
```sql
-- Con prefijo "u_"
SELECT *, u_nombre, u_apellidos FROM inmueble 
LEFT JOIN cliente ON inmueble.cd_propietario = cliente.cd_cliente
WHERE inmueble.id = 123
```

## Ejemplos

### Ejemplo 1: Campos Específicos con Prefijo
```php
[DBTable] inmueble
[DBAddFields] u_ | nombre, apellidos, telefono, email
```

**Resultado:**
- Los campos del cliente aparecen como: `u_nombre`, `u_apellidos`, `u_telefono`, `u_email`
- No hay conflicto con campos similares de la tabla principal

### Ejemplo 2: Consulta SQL Completa
```php
[DBTable] inmueble
[DBAddFields] u_ | select * from cliente where cd_propietario = {$cd_propietario}
```

**Uso en Fields:**
```php
[Fields] 
    Dirección           | direccion     | N | T | 100 | 400        | - |      |   |
    Superficie          | superficie    | N | T | 10  | 80         | - |      |   |
   -                    | Datos del Propietario |   | + |     |            | M |      |   |
    Nombre              | u_nombre      | N | S | 50  | 200        | - |      |   |
    Apellidos           | u_apellidos   | N | S | 50  | +u_nombre  | - |      |   |
    Teléfono            | u_telefono    | T | S | 15  | 150        | - |      |   |
```

### Ejemplo 3: Múltiples Tablas Relacionadas
```php
[DBTable] pedido
[DBAddFields] cli_ | nombre, apellidos, email
[DBAddFields] prod_ | descripcion, precio, categoria

[Fields] 
    Nº Pedido           | numero_pedido  | N | T | 20  | 100        | A |      |   |
    Fecha               | fecha_pedido   | F | T | 10  | 120        | - |      |   |
   -                    | Datos del Cliente |   | + |     |            | M |      |   |
    Cliente             | cli_nombre     | N | S | 50  | 200        | - |      |   |
    Apellidos           | cli_apellidos  | N | S | 50  | +cli_nombre| - |      |   |
    Email               | cli_email      | E | S | 100 | 250        | - |      |   |
   -                    | Datos del Producto|   | + |     |            | M |      |   |
    Producto            | prod_descripcion| N | S | 100| 300        | - |      |   |
    Precio              | prod_precio    | € | S | 10  | 100        | - |      |   |
```

### Ejemplo 4: Información de Auditoría
```php
[DBTable] documento
[DBAddFields] usr_ | select nombre, apellidos from usuario where id = {$usuario_creacion}
[DBAddFields] mod_ | select nombre, apellidos from usuario where id = {$usuario_modificacion}
```

## Casos de Uso Comunes

### 🏠 **Inmuebles con Datos del Propietario**
```php
[DBTable] inmueble
[DBAddFields] prop_ | nombre, apellidos, telefono, email, dni

[Fields]
// Datos del inmueble
, | direccion      | T | T | 100 | | | | |
, | precio         | N | T | 10  | | | | |

// Datos del propietario (solo lectura)
, | prop_nombre    | T | S | 50  | | | Propietario | |
, | prop_apellidos | T | S | 50  | | | Apellidos | |
, | prop_telefono  | T | S | 15  | | | Teléfono | |
```

### 📦 **Productos con Información de Categoría**
```php
[DBTable] producto
[DBAddFields] cat_ | nombre as categoria_nombre, descripcion as categoria_desc

[Fields]
, | nombre          | T | T | 100 | | | | |
, | precio          | N | T | 10  | | | | |
, | cat_nombre      | T | S | 50  | | | Categoría | |
, | cat_descripcion | T | S | 200 | | | Descripción | |
```

### 📋 **Pedidos con Cliente y Vendedor**
```php
[DBTable] pedido
[DBAddFields] cli_ | select nombre, apellidos, email from cliente where id = {$cliente_id}
[DBAddFields] ven_ | select nombre, apellidos from usuario where id = {$vendedor_id}

[Fields]
, | numero_pedido  | T | T | 20  | | | | |
, | fecha_pedido   | F | T | 10  | | | | |
, | cli_nombre     | T | S | 50  | | | Cliente | |
, | ven_nombre     | T | S | 50  | | | Vendedor | |
```

### 🏢 **Empleados con Departamento y Jefe**
```php
[DBTable] empleado
[DBAddFields] dep_ | nombre as departamento, ubicacion
[DBAddFields] jefe_ | nombre, apellidos, email

[Fields]
, | nombre           | T | T | 50  | | | | |
, | puesto           | T | T | 50  | | | | |
, | dep_nombre       | T | S | 50  | | | Departamento | |
, | jefe_nombre      | T | S | 50  | | | Jefe | |
, | jefe_email       | T | S | 100 | | | Email Jefe | |
```

## Ventajas vs Alternativas

### ✅ **DBAddFields vs DBView**

| Aspecto | DBAddFields | DBView |
|---------|-------------|--------|
| **Configuración** | Inmediata, en el DF | Requiere crear vista en BD |
| **Flexibilidad** | Alta, cambios rápidos | Media, requiere ALTER VIEW |
| **Rendimiento** | Bueno para pocos campos | Mejor para consultas complejas |
| **Mantenimiento** | Centralizado en el DF | Distribuido (DF + BD) |

### ✅ **DBAddFields vs Joins Manuales**

| Aspecto | DBAddFields | Joins Manuales |
|---------|-------------|----------------|
| **Simplicidad** | Muy simple | Complejo |
| **Prefijos automáticos** | Sí | Manual |
| **Integración** | Transparente | Requiere configuración |

## Consideraciones Técnicas

### 🔍 **Variables de Contexto**
```php
// En FieldsList puedes usar variables del contexto actual
[DBAddFields] cli_ | select * from cliente where id = {$cliente_id}
[DBAddFields] usr_ | select nombre from usuario where id = {$_SESSION['user_id']}
```

### 🎯 **Optimización de Consultas**
```php
// Mejor: campos específicos
[DBAddFields] u_ | nombre, apellidos, email

// Evitar: select * innecesarios
[DBAddFields] u_ | select * from tabla_muy_grande where...
```

### 🔧 **Alias para Claridad**
```php
[DBAddFields] cat_ | nombre as categoria, codigo as codigo_categoria
```

## Mejores Prácticas

### ✅ **Recomendaciones**
- **Usar prefijos descriptivos** para evitar confusión
- **Campos específicos** mejor que `SELECT *`
- **Nombres claros** para los alias de campo
- **Documentar relaciones** complejas

### ⚠️ **Consideraciones**
- **Rendimiento**: Muchos JOIN pueden impactar la velocidad
- **Mantenimiento**: Documentar las relaciones entre tablas
- **Consistencia**: Usar convenciones de nomenclatura uniformes
- **Testing**: Verificar que las relaciones funcionen correctamente

## Integración con Otros Componentes

DBAddFields se integra con:
- **[DBTable]**: Define la tabla principal
- **[Fields]**: Muestra los campos adicionales
- **[DBJoinTable]**: Para joins más complejos
- **[DBView]**: Alternativa para consultas complejas
- **[List]**: Los campos aparecen en listados