# DBIni

## Sintaxis
```
[DBIni] Mode [ | NomEDF, ... / else [ | UNIQUE/Condition ] ...
```

## Descripción
Este código se ejecuta **justo antes** de atacar a la base de datos, una vez realizado el submit del formulario. Es la función ideal para manipular datos antes de que sean grabados en la base de datos.

### Características principales:
- ⚡ **Ejecución**: Antes de la operación de base de datos
- 🔧 **Manipulación**: Modificación de valores mediante la variable `$_vF`
- 🚫 **Restricciones**: No se ejecuta en los modos `c` (consulta), `b` (browse) ni `m` (modificación simple)
- 🛡️ **Validación de borrado**: En modo `B`, si está definida `$_CHECKDELETE`, realiza validación antes del borrado

## Parámetros

| Parámetro | Tipo | Descripción | Uso |
|-----------|------|-------------|-----|
| **Mode** | `string` | Modo de operación (`A`, `B`, `M`, `*`) | Define cuándo se ejecuta el código |
| **NomEDF** | `string` | Nombre del archivo EDF para SubSelect | Usado en tipos de edición "Ss" |
| **UNIQUE/Condition** | `string` | Condición única o específica | Filtros adicionales de ejecución |

## Modos de Operación

| Modo | Descripción | Cuándo se ejecuta |
|------|-------------|-------------------|
| `A` | **Alta/Inserción** | Antes de insertar un nuevo registro |
| `B` | **Baja/Borrado** | Antes de borrar un registro |
| `M` | **Modificación** | Antes de actualizar un registro |
| `*` | **Todos los modos** | En cualquier operación de escritura |

## Variable Principal: `$_vF`

La variable asociativa `$_vF` (Variable de Formulario) contiene todos los valores del formulario:

```php
// Estructura de $_vF
$_vF = [
    'campo1' => 'valor1',
    'campo2' => 'valor2',
    'campo3' => 'valor3'
];
```

## Ejemplos

### Ejemplo 1: Modificación de Campos en Alta
```php
[DBIni] A
$_vF['fecha_creacion'] = date('Y-m-d H:i:s');
$_vF['usuario_creacion'] = $_SESSION['user_id'];
$_vF['estado'] = 'ACTIVO';

// Validación de datos
if (empty($_vF['email'])) {
    $_vF['email'] = $_vF['usuario'] . '@empresa.com';
}
```

### Ejemplo 2: Validación Compleja Antes del Borrado
```php
[DBIni] B
$_CHECKDELETE = 'La persona "' . $nm_persona . '" no se puede dar de baja por estar activa en:

📋 **Obras**
   Código | cd_obra2 | T
   Obra   | nm_obra | T

👥 **Dirección facultativa**
   Código | cd_obra2 | T
   Obra   | nm_obra | T

🏢 **Proveedores**
   CIF       | cif      | T
   Proveedor | nm_prove | T

🏠 **Propiedades**
   Código    | cd_propi  | T
   Propiedad | nm_propi  | T

📄 **Contratos**
   Nº Contrato  | n_contrato | T
   Código       | cd_obra{obra,cd_obra,cd_obra2} | S
   Obra         | cd_obra    | S
   Descripción  | cd_anexo   | S
   Proveedor    | cd_prove   | S
';
```

### Ejemplo 3: Configuración de SubSelect
```php
[DBIni] * | muni.edf
echo 'eAddOption( "municipio", Array( Array( 0, "-- Seleccionar --" ), Array( 12, "Madrid" ) ) );';
```

## Casos de Uso Comunes

### 🔒 **Auditoría y Trazabilidad**
```php
[DBIni] A
$_vF['created_at'] = date('Y-m-d H:i:s');
$_vF['created_by'] = $_SESSION['user_id'];
$_vF['ip_address'] = $_SERVER['REMOTE_ADDR'];
```

### 🔢 **Generación de Códigos Automáticos**
```php
[DBIni] A
// Generar código único
$_vF['codigo'] = 'USR' . date('Y') . sprintf('%04d', $_vF['id']);
$_vF['referencia'] = strtoupper(substr($_vF['nombre'], 0, 3)) . date('md');
```

### ✅ **Validación y Normalización**
```php
[DBIni] *
// Normalizar datos
$_vF['email'] = strtolower(trim($_vF['email']));
$_vF['telefono'] = preg_replace('/[^0-9]/', '', $_vF['telefono']);

// Validación de negocio
if ($_vF['edad'] < 18 && $_vF['tipo'] == 'RESPONSABLE') {
    $_vF['tipo'] = 'MENOR';
}
```

### 🧮 **Cálculos Automáticos**
```php
[DBIni] A,M
// Calcular totales
$_vF['subtotal'] = $_vF['cantidad'] * $_vF['precio'];
$_vF['impuestos'] = $_vF['subtotal'] * 0.21;
$_vF['total'] = $_vF['subtotal'] + $_vF['impuestos'];
```

## Funciones Útiles

### 📝 **Manipulación de Options (SubSelect)**
```php
// Añadir opciones al principio de un select
echo 'eAddOption( "campo", Array( Array( valor, "texto" ) ) );';

// Ejemplo práctico
echo 'eAddOption( "provincia", Array( 
    Array( 0, "-- Todas las provincias --" ),
    Array( 28, "Madrid" ),
    Array( 8, "Barcelona" )
) );';
```

## Mejores Prácticas

### ✅ **Recomendaciones**
- Siempre validar datos antes de modificar `$_vF`
- Usar `$_CHECKDELETE` para validaciones complejas de borrado
- Implementar logs de auditoría en operaciones críticas
- Normalizar datos de entrada (emails, teléfonos, etc.)

### ⚠️ **Consideraciones**
- **Rendimiento**: Evitar consultas pesadas en `DBIni`
- **Seguridad**: Validar y escapar datos de entrada
- **Consistencia**: Mantener la lógica de negocio centralizada
- **Debugging**: Usar logs para rastrear modificaciones

## Variables del Sistema

| Variable | Descripción | Ejemplo |
|----------|-------------|---------|
| `$_vF` | Valores del formulario | `$_vF['campo'] = 'valor'` |
| `$_CHECKDELETE` | Mensaje de validación de borrado | Ver ejemplo 2 |
| `$_SESSION` | Variables de sesión | `$_SESSION['user_id']` |
| `$_SERVER` | Variables del servidor | `$_SERVER['REMOTE_ADDR']` |

## Integración con Otros Componentes

DBIni se integra perfectamente con:
- **[DBTable]**: Define la tabla objetivo
- **[Fields]**: Campos del formulario
- **[DBEnd]**: Código posterior a la operación
- **[FormCheck]**: Validaciones del lado cliente