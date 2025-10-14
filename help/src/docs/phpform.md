# PHPForm

## SINTAXIS
```
[PHPForm] Mode [[ | NomDF/else,... ] | UNIQUE/Condition ] ...
```

## DESCRIPCIÓN
Permite incluir código PHP para manipular la matriz que genera el formulario. El código se ejecuta **justo antes** de que el formulario sea generado, convirtiéndola en una herramienta fundamental para modificar dinámicamente la estructura, comportamiento y apariencia de los formularios.

En formularios **Multifichas**, esta función se ejecuta una vez por cada solapa, permitiendo personalizar cada pestaña individualmente.

## PARÁMETROS DE LA FUNCIÓN
Al ejecutarse, PHPForm recibe automáticamente los siguientes parámetros:

| Parámetro | Tipo | Descripción |
|-----------|------|-------------|
| **&$_Form** | Array (referencia) | Matriz del formulario que se puede modificar |
| **$Opcion** | String | Opción actual del formulario |
| **$Fichero** | String | Nombre del archivo del formulario |
| **$nHoja** | Integer | Número de hoja (en multifichas) |
| **&$_vF** | Array (referencia) | Variables virtuales del formulario |

## ESTRUCTURA DE $_Form
La matriz `$_Form` se organiza como `$_Form[NombreCampo][NumCol]`, donde NumCol puede ser:

| Constante | Valor | Descripción |
|-----------|--------|-------------|
| **_LABEL** | 0 | Etiqueta del campo |
| **_FIELD** | 1 | Nombre del campo |
| **_EDITION** | 2 | Tipo de edición |
| **_CONTROL** | 3 | Tipo de control |
| **_SIZE** | 4 | Tamaño del campo |
| **_WIDTH** | 5 | Ancho en pixels |
| **_MODE** | 6 | Modo del campo |
| **_DEFAULT** | 7 | Valor por defecto |
| **_CONDITION** | 8 | Condición del campo |
| **_MESSAGE** | 9 | Mensaje de error |

## VARIABLES VIRTUALES ($_vF)
Puede definir variables virtuales que estarán disponibles en el formulario:
```php
$_vF['_NomVariable'] = 'Valor de la variable';
```

## PARÁMETRO UNIQUE
El parámetro **UNIQUE** evita la ejecución múltiple del código cuando hay funciones declaradas, previniendo errores de "función ya declarada".

## EJEMPLOS

### Ejemplo básico - Modificar modo según permisos
```
[PHPForm] a,mR
<?php
if (ePermission('BorrarFile')) {
    $_Form['fichero'][_MODE] = $_Form['fichero'][_MODE] . 'd';
}
?>
```
*Si el usuario tiene permiso para borrar ficheros, añade 'd' al modo del campo fichero*

### Ejemplo - Modificar etiquetas dinámicamente
```
[PHPForm]
<?php
// Cambiar etiqueta según el contexto
if ($Opcion == 'nuevo') {
    $_Form['codigo'][_LABEL] = 'Nuevo Código';
} else {
    $_Form['codigo'][_LABEL] = 'Código Existente';
}

// Hacer campo obligatorio
$_Form['email'][_CONDITION] = 'required';
?>
```

### Ejemplo - Variables virtuales
```
[PHPForm]
<?php
// Definir variables virtuales
$_vF['_FechaActual'] = date('Y-m-d');
$_vF['_UsuarioActual'] = $_SESSION['usuario_nombre'];
$_vF['_TotalRegistros'] = contarRegistros('tabla_principal');

// Modificar valores por defecto
$_Form['fecha_creacion'][_DEFAULT] = $_vF['_FechaActual'];
$_Form['creado_por'][_DEFAULT] = $_vF['_UsuarioActual'];
?>
```

### Ejemplo - Formulario condicional según permisos
```
[PHPForm]
<?php
// Configurar campos según nivel de usuario
if (ePermission('AdminTotal')) {
    // Administrador: todos los campos editables
    $_Form['precio'][_MODE] = 'e';
    $_Form['descuento'][_MODE] = 'e';
} elseif (ePermission('Editor')) {
    // Editor: solo algunos campos
    $_Form['precio'][_MODE] = 'r';  // Solo lectura
    $_Form['descuento'][_MODE] = 'e';
} else {
    // Usuario básico: solo visualización
    $_Form['precio'][_MODE] = 'h';     // Oculto
    $_Form['descuento'][_MODE] = 'h';  // Oculto
}
?>
```

### Ejemplo - Modificar según hoja en multifichas
```
[PHPForm]
<?php
// Comportamiento diferente según la pestaña
switch ($nHoja) {
    case 1: // Primera pestaña - Datos básicos
        $_Form['nombre'][_CONDITION] = 'required';
        $_Form['email'][_CONDITION] = 'required|email';
        break;
        
    case 2: // Segunda pestaña - Datos avanzados
        if (!ePermission('DatosAvanzados')) {
            $_Form['configuracion'][_MODE] = 'h';
        }
        break;
        
    case 3: // Tercera pestaña - Reportes
        $_vF['_TotalVentas'] = calcularTotalVentas();
        $_Form['total_ventas'][_DEFAULT] = $_vF['_TotalVentas'];
        break;
}
?>
```

### Ejemplo - Función única para validaciones
```
[PHPForm] | | UNIQUE
<?php
function validarCodigoUnico($codigo, $tabla, $id_actual = null) {
    global $conexion;
    $sql = "SELECT COUNT(*) FROM $tabla WHERE codigo = ?";
    $params = [$codigo];
    
    if ($id_actual) {
        $sql .= " AND id != ?";
        $params[] = $id_actual;
    }
    
    $stmt = $conexion->prepare($sql);
    $stmt->execute($params);
    return $stmt->fetchColumn() == 0;
}
?>

[PHPForm]
<?php
// Usar la función definida arriba
if (isset($_POST['codigo'])) {
    if (!validarCodigoUnico($_POST['codigo'], 'productos', $_POST['id'])) {
        $_Form['codigo'][_MESSAGE] = 'El código ya existe';
        $_Form['codigo'][_CONDITION] = 'error';
    }
}
?>
```

## CASOS DE USO COMUNES
- **Control de permisos**: Mostrar/ocultar campos según privilegios del usuario
- **Validaciones dinámicas**: Aplicar reglas de validación según contexto
- **Valores calculados**: Establecer defaults basados en cálculos
- **Formularios adaptativos**: Cambiar estructura según datos existentes
- **Variables de contexto**: Pasar información adicional al formulario
- **Multiformularios**: Personalizar cada pestaña independientemente

## MODOS DE CAMPO COMUNES
| Modo | Descripción |
|------|-------------|
| **e** | Editable |
| **r** | Solo lectura |
| **h** | Oculto |
| **d** | Borrable (con icono de eliminar) |
| **o** | Obligatorio |

## BUENAS PRÁCTICAS
- **Use UNIQUE** para funciones que se declaran una sola vez
- **Valide permisos** antes de modificar campos sensibles
- **Documente las modificaciones** para facilitar el mantenimiento
- **Use variables virtuales** para pasar datos calculados
- **Mantenga la lógica simple** para facilitar el debugging
- **Teste en multifichas** para asegurar comportamiento correcto

## RELACIÓN CON OTRAS ETIQUETAS
- **PHPIni**: Para funciones globales utilizadas en PHPForm
- **PHPCheck**: Para validaciones posteriores al envío
- **Fields**: Define la estructura base que PHPForm modifica
- **FormCheck**: Para validaciones del lado cliente

## NOTAS IMPORTANTES
⚠️ **Consideraciones**:
- El código se ejecuta **antes** de generar el formulario
- En multifichas se ejecuta **una vez por pestaña**
- Las modificaciones a `$_Form` afectan la estructura final del formulario
- Las variables virtuales (`$_vF`) están disponibles en toda la aplicación
- Use referencias (&) para modificar los arrays correctamente