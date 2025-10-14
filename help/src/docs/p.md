# P

## Sintaxis

### Código PHP personalizado
```
{P} RefName [ | NoTD ]
```

### Captcha integrado
```
{P} captcha [ longitud=número ]
```

## Descripción

La sub-etiqueta `{P}` permite insertar código PHP personalizado dentro de una fila de la rejilla del formulario. Es una sub-etiqueta de `[Fields]` que funciona mediante un sistema de referencias, similar a `{H}` y `{J}` pero específicamente para código PHP del lado del servidor.

**Funcionalidades principales:**

1. **Código PHP personalizado**: Mediante sistema de referencias para cualquier lógica PHP
2. **Captcha integrado**: Funcionalidad especial para generar captchas de seguridad

**Proceso de implementación para código personalizado:**

1. **Dentro de `[Fields]`**: Se define `{P}` seguido de un nombre de referencia
2. **Después de `[Fields]`**: Se inserta `[P]` con el mismo nombre de referencia
3. **Código PHP**: En las líneas siguientes se incluye el código PHP deseado

## Parámetros

### Para código PHP personalizado

| Parámetro | Descripción |
|-----------|-------------|
| **RefName** | Nombre identificativo de referencia que conecta la definición con el código PHP |
| **NoTD** | *(Opcional)* Modificador de comportamiento:<br>• **Sin NoTD**: Crea automáticamente una celda única con colspan correspondiente<br>• **Con NoTD**: El desarrollador debe definir manualmente todos los elementos TD de la fila |

### Para Captcha

| Parámetro | Descripción |
|-----------|-------------|
| **longitud** | Número de caracteres del captcha (por defecto: 5) |

## Ejemplos de Implementación

### Código PHP personalizado
```
[Fields]
    Client Code | cd_cli | ...
    {P} myRef
    ...

[P] myRef
echo "This is a test";
```

### Captcha de seguridad
```
[Fields]
    Usuario    | usuario | ...
    Contraseña | password | ...
    {P} captcha | 7
    Código     | codigo_captcha | ...
```

## Ejemplos Avanzados

### Validación de datos del servidor
```
[Fields]
    Email | email | ...
    {P} validateServerEmail
    ...

[P] validateServerEmail
<?php
if ($_POST['email']) {
    $email = filter_var($_POST['email'], FILTER_VALIDATE_EMAIL);
    if (!$email) {
        echo '<div style="color: red;">Email inválido</div>';
    } else {
        echo '<div style="color: green;">Email válido</div>';
    }
}
?>
```

### Contenido dinámico desde base de datos
```
[Fields]
    Categoría | categoria | ...
    {P} showSubcategories
    ...

[P] showSubcategories
<?php
if (isset($_POST['categoria']) && $_POST['categoria']) {
    $sql = "SELECT * FROM subcategorias WHERE categoria_id = " . intval($_POST['categoria']);
    $result = mysqli_query($conexion, $sql);
    echo '<select name="subcategoria">';
    while ($row = mysqli_fetch_assoc($result)) {
        echo '<option value="' . $row['id'] . '">' . $row['nombre'] . '</option>';
    }
    echo '</select>';
}
?>
```

### Cálculos del servidor
```
[Fields]
    Precio Base | precio_base | ...
    {P} calcularImpuestos
    Total | total | ...

[P] calcularImpuestos
<?php
if (isset($_POST['precio_base']) && is_numeric($_POST['precio_base'])) {
    $precio = floatval($_POST['precio_base']);
    $impuesto = $precio * 0.21; // 21% IVA
    $total = $precio + $impuesto;
    echo '<tr><td><strong>IVA (21%):</strong></td><td>' . number_format($impuesto, 2) . ' €</td></tr>';
}
?>
```

## Funcionalidad Captcha

### Características especiales
- **Generación automática**: Crea un captcha visual con la longitud especificada
- **Variable de sesión**: Almacena el valor en `SESS::$tmp['CAPTCHA']` para validación posterior
- **Seguridad**: Previene envíos automatizados y spam

### Ejemplo de validación
```php
// Validación del captcha en el procesamiento del formulario
if (isset($_POST['codigo_captcha']) && isset(SESS::$tmp['CAPTCHA'])) {
    if (strtolower($_POST['codigo_captcha']) == strtolower(SESS::$tmp['CAPTCHA'])) {
        // Captcha correcto
        echo "Verificación exitosa";
    } else {
        // Captcha incorrecto
        echo "Código de verificación incorrecto";
    }
}
```

## Casos de Uso Recomendados

La etiqueta `{P}` es ideal para:

- **Validaciones del servidor**: Verificaciones que requieren acceso a base de datos
- **Contenido dinámico**: Elementos que cambian según datos del servidor
- **Seguridad**: Captchas y validaciones anti-spam
- **Cálculos complejos**: Operaciones que requieren precisión del servidor
- **Integración con sistemas**: Conexión con servicios externos
- **Lógica de negocio**: Reglas específicas que deben ejecutarse en el servidor

## Consideraciones de Seguridad

- **Validación de entrada**: Siempre validar y sanitizar datos de usuario
- **Escape de salida**: Usar `htmlspecialchars()` para prevenir XSS
- **Preparación de consultas**: Usar prepared statements para evitar SQL injection
- **Autenticación**: Verificar permisos antes de ejecutar código sensible
- **Logs de errores**: Registrar pero no mostrar errores del sistema al usuario

## Notas Técnicas

- La referencia `RefName` debe ser única dentro del formulario
- El código PHP se ejecuta en el servidor antes de enviar la respuesta
- Compatible con todas las funciones y bibliotecas PHP disponibles
- El captcha genera automáticamente la imagen y la variable de sesión
- Se puede combinar con otras etiquetas de Fields
- Requiere servidor con soporte PHP
- Para captcha, la longitud por defecto es 5 caracteres si no se especifica