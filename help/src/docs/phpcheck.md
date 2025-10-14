# PHPCheck

## Sintaxis

```
[PHPCheck] Mode [ | NomDF,... [ | UNIQUE/Condition ] ]
```

## Descripción

La etiqueta `PHPCheck` permite incluir código PHP personalizado para validar formularios en el servidor antes del procesamiento de datos. Funciona de manera similar a la etiqueta `JSCheck` pero se ejecuta en el lado del servidor usando PHP en lugar de JavaScript en el cliente.

### Características principales

- **Validación del servidor**: Se ejecuta en el servidor después del envío del formulario
- **Código PHP**: Permite usar toda la funcionalidad de PHP para validaciones complejas
- **Control de procesamiento**: Puede detener el procesamiento del formulario si encuentra errores
- **Acceso a datos**: Tiene acceso completo a los datos enviados y a la base de datos
- **Validaciones únicas**: Soporte especial para validaciones de unicidad (UNIQUE)
- **Condiciones personalizadas**: Permite validaciones con lógica compleja

### Orden de ejecución

La validación PHPCheck se ejecuta en el servidor después de:
1. Las validaciones básicas de campos
2. Las validaciones JSCheck (lado cliente)
3. El envío del formulario al servidor

## Parámetros

| Parámetro | Descripción |
|-----------|-------------|
| **Mode** | Modo(s) de operación donde aplicar la validación |
| **NomDF** | Nombre del formulario (opcional) |
| **UNIQUE/Condition** | Condición de unicidad o validación personalizada |

### Tipos de validación

- **UNIQUE**: Valida que un campo o combinación de campos sea único en la base de datos
- **Condition**: Condición PHP personalizada para validaciones complejas

## Funciones disponibles

Al igual que en JSCheck, se pueden usar funciones específicas para:
- **Acceso a campos**: Variables PHP con los valores de los campos
- **Mensajes de error**: Funciones para establecer mensajes de error
- **Acceso a base de datos**: Consultas para validaciones contra datos existentes

## Ejemplos

### Ejemplo 1: Validación básica
```php
[PHPCheck] a,m 
if( $_POST['envio_pack'] == "S" && empty($_POST['permiso_pack']) ){ 
    $error_permiso_pack = "Para realizar el envío hace falta el código del permiso del PACK";
}
```

### Ejemplo 2: Validación de unicidad
```php
[PHPCheck] a,m | | UNIQUE
// Valida que el registro sea único según criterios predefinidos
```

### Ejemplo 3: Validación con consulta a base de datos
```php
[PHPCheck] a 
$email = $_POST['email'];
$query = "SELECT COUNT(*) FROM usuarios WHERE email = '$email'";
if( ejecutar_consulta($query) > 0 ){
    $error_email = "Este email ya está registrado";
}
```

### Ejemplo 4: Validación condicional compleja
```php
[PHPCheck] m 
if( $_POST['tipo_usuario'] == 'admin' && !validar_permisos_admin($_SESSION['user_id']) ){
    $error_tipo_usuario = "No tiene permisos para asignar rol de administrador";
}
```

### Ejemplo 5: Validación con múltiples campos
```php
[PHPCheck] a,m 
$fecha_inicio = $_POST['fecha_inicio'];
$fecha_fin = $_POST['fecha_fin'];

if( strtotime($fecha_fin) <= strtotime($fecha_inicio) ){
    $error_fecha_fin = "La fecha de fin debe ser posterior a la fecha de inicio";
}
```

## Casos de uso comunes

### Validación de unicidad de email
```php
[PHPCheck] a | | UNIQUE
// Automáticamente valida que el email sea único
```

### Validación de permisos
```php
[PHPCheck] a,m 
if( !tiene_permisos($_SESSION['user_id'], 'crear_usuarios') ){
    $error_general = "No tiene permisos para realizar esta acción";
}
```

### Validación de integridad referencial
```php
[PHPCheck] a,m 
$categoria_id = $_POST['categoria_id'];
if( !existe_categoria($categoria_id) ){
    $error_categoria_id = "La categoría seleccionada no existe";
}
```

### Validación de reglas de negocio
```php
[PHPCheck] a,m 
$precio = floatval($_POST['precio']);
$descuento = floatval($_POST['descuento']);

if( $descuento > $precio * 0.5 ){
    $error_descuento = "El descuento no puede ser mayor al 50% del precio";
}
```

## Variables disponibles

- **`$_POST`**: Array con todos los datos enviados del formulario
- **`$_SESSION`**: Variables de sesión del usuario
- **`$_FILES`**: Archivos subidos (si los hay)
- **Variables de error**: `$error_[nombre_campo]` para establecer errores específicos

## Funciones relacionadas

- **Funciones de base de datos**: Para consultas y validaciones
- **Funciones de sesión**: Para validar permisos y estado del usuario
- **Funciones de validación**: Funciones auxiliares para validar datos
- **JSCheck**: Validación complementaria en el lado cliente

## Diferencias con JSCheck

| Aspecto | JSCheck | PHPCheck |
|---------|---------|----------|
| **Ejecución** | Cliente (navegador) | Servidor |
| **Lenguaje** | JavaScript | PHP |
| **Acceso a BD** | Limitado | Completo |
| **Seguridad** | Puede ser evadida | Segura |
| **Performance** | Inmediata | Requiere envío |
| **Validaciones** | UX y básicas | Críticas y complejas |

## Consideraciones importantes

- **Seguridad**: Las validaciones PHP no pueden ser evadidas por el usuario
- **Performance**: Se ejecuta después del envío, por lo que hay latencia
- **Complementario**: Se recomienda usar junto con JSCheck para mejor UX
- **Acceso a datos**: Tiene acceso completo a la base de datos y sesión
- **Mensajes de error**: Los errores se muestran después del envío del formulario

## Notas adicionales

- Es la última línea de validación antes del procesamiento final
- Ideal para validaciones que requieren acceso a la base de datos
- Esencial para validaciones de seguridad y integridad de datos
- Se puede combinar con validaciones JavaScript para una experiencia completa
- Los errores detienen el procesamiento y devuelven al formulario