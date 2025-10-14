# JPCheck

## Sintaxis

```
[JPCheck] Mode [ | ListaVarSession ]
```

## Descripción

La etiqueta `JPCheck` permite ejecutar validaciones tanto en el cliente (JavaScript) como en el servidor (PHP), garantizando coherencia en ambos entornos. Se ejecuta inmediatamente después de `[JSCheck]` y está diseñada para validaciones críticas que deben verificarse en ambos lados.

### Características principales

- **Doble ejecución**: Se ejecuta tanto en cliente como en servidor
- **Sincronización**: Garantiza la misma lógica de validación en ambos entornos
- **Limitado a operaciones**: Solo activo en alta, modificación y borrado
- **Lenguaje híbrido**: JavaScript con acceso a funciones del sistema

## Parámetros

| Parámetro | Descripción | Obligatorio |
|-----------|-------------|-------------|
| **Mode** | Modo de ejecución: `A`/`a`, `M`/`m`, `B`/`b` | ✓ |
| **ListaVarSession** | Variables de sesión protegidas contra modificación por POST/GET | ✗ |

## Modos de ejecución

### Pares equivalentes
| Cliente | Servidor | Operación |
|---------|----------|-----------|
| `a` | `A` | Alta |
| `m` | `M` | Modificación |
| `b` | `B` | Borrado |

Un modo se ejecuta en el cliente y su equivalente en el servidor.

## Acceso a campos y variables

### Campos del formulario
```javascript
// Acceso al valor de un campo
$nombre_campo

// Cambiar valor (sin generar error)
ePF('nombre_campo', 'nuevo_valor');

// Generar mensaje de error
$nombre_campo = 'Mensaje de error';
// Equivale a: ePE('nombre_campo', 'Mensaje de error');
```

### Variables de sesión protegidas
```
[JPCheck] M | usuario_id,empresa_id,perfil
```
Las variables listadas no podrán ser modificadas por `$_POST` ni `$_GET`.

## Funciones permitidas

### Funciones del sistema
| Función | Descripción | Ejemplo |
|---------|-------------|---------|
| `eAddYearsToDate` | Añadir años a una fecha | `eAddYearsToDate($fecha, 5)` |
| `eConcat` | Concatenar cadenas | `eConcat($nombre, ' ', $apellido)` |
| `eDTS` | Conversión de fecha | `eDTS($fecha)` |
| `eGF` | Obtener valor de campo | `eGF('campo')` |
| `eGO` | Obtener opción | `eGO('opcion')` |
| `eIndexOf` | Buscar en cadena | `eIndexOf($texto, 'buscar')` |
| `eLength` | Longitud de cadena | `eLength($campo)` |
| `ePE` | Mostrar error | `ePE('campo', 'mensaje')` |
| `ePF` | Establecer valor | `ePF('campo', 'valor')` |
| `eSTD` | Conversión de fecha | `eSTD($fecha)` |
| `eSubstr` | Subcadena | `eSubstr($texto, 0, 5)` |
| `eSubstring` | Subcadena | `eSubstring($texto, 0, 5)` |
| `parseFloat` | Convertir a decimal | `parseFloat($precio)` |
| `parseInt` | Convertir a entero | `parseInt($cantidad)` |

### Constantes disponibles
| Constante | Descripción | Valor |
|-----------|-------------|-------|
| `*Hoy` | Fecha actual | Fecha del sistema |
| `*D2S` | Formato de fecha | Formato fecha a string |
| `*ymd` | Formato año-mes-día | YYYY-MM-DD |
| `*Time` | Hora actual | Hora del sistema |
| `*User` | Usuario actual | ID del usuario |
| `*Node` | Nodo actual | Identificador del nodo |
| `_Mode` | Modo actual | Modo de ejecución |

## Ejemplos de uso

### Validación básica de alta
```javascript
[JPCheck] A
    if (eLength($nombre) < 3) {
        $nombre = 'El nombre debe tener al menos 3 caracteres';
    }
    
    if (parseFloat($precio) <= 0) {
        $precio = 'El precio debe ser mayor que cero';
    }
```

### Validación con fechas
```javascript
[JPCheck] M
    var fechaLimite = eAddYearsToDate(*Hoy, -18);
    if ($fecha_nacimiento > fechaLimite) {
        $fecha_nacimiento = 'Debe ser mayor de 18 años';
    }
```

### Validación condicional
```javascript
[JPCheck] A
    if ($tipo_cliente == 'empresa') {
        if (eLength($cif) != 9) {
            $cif = 'El CIF debe tener 9 caracteres';
        }
    } else {
        if (eLength($dni) != 9) {
            $dni = 'El DNI debe tener 9 caracteres';
        }
    }
```

### Protección de variables de sesión
```javascript
[JPCheck] M | usuario_id,perfil_usuario
    // Validaciones adicionales
    if ($salario > 100000 && *User != 'admin') {
        $salario = 'Solo administradores pueden asignar salarios superiores a 100.000';
    }
```

### Validación con concatenación
```javascript
[JPCheck] A
    var nombreCompleto = eConcat($nombre, ' ', $apellidos);
    if (eLength(nombreCompleto) > 100) {
        $nombre = 'El nombre completo excede 100 caracteres';
    }
    
    // Establecer valor calculado
    ePF('nombre_completo', nombreCompleto);
```

### Validación de códigos únicos
```javascript
[JPCheck] A
    var codigo = eConcat($prefijo, '-', parseInt(*Time));
    ePF('codigo_producto', codigo);
    
    if (eIndexOf($descripcion, 'PROMOCION') >= 0 && $descuento == 0) {
        $descuento = 'Los productos en promoción deben tener descuento';
    }
```

### Validación de rangos de fechas
```javascript
[JPCheck] M
    if ($fecha_inicio >= $fecha_fin) {
        $fecha_fin = 'La fecha fin debe ser posterior a la fecha inicio';
    }
    
    var diasDiferencia = (eDTS($fecha_fin) - eDTS($fecha_inicio)) / 86400;
    if (diasDiferencia > 365) {
        $fecha_fin = 'El periodo no puede exceder un año';
    }
```

## Código avanzado con preprocesador

### Uso de PHP embebido
```javascript
[JPCheck] A
    var limiteCredito = <?= $limite_empresa ?>;
    if (parseFloat($credito_solicitado) > limiteCredito) {
        $credito_solicitado = 'Excede el límite de crédito autorizado';
    }
```

### Código condicional
```javascript
[JPCheck] M
    #(empresa_activa)
        if ($estado != 'activo') {
            $estado = 'Las empresas activas no pueden cambiar de estado';
        }
    #()
    
    ?admin?
        // Validaciones especiales para administradores
        if ($nivel_acceso > 5) {
            ePF('nivel_acceso', 5);
        }
    ?
```

## Casos de uso comunes

### Formulario de empleados
```javascript
[JPCheck] A | empresa_id,sucursal_id
    // Validar email corporativo
    if (eIndexOf($email, '@empresa.com') < 0) {
        $email = 'Debe usar email corporativo (@empresa.com)';
    }
    
    // Calcular código empleado
    var codigoEmp = eConcat('EMP', parseInt(*Time));
    ePF('codigo_empleado', codigoEmp);
```

### Formulario de productos
```javascript
[JPCheck] M
    // Validar margen mínimo
    var margen = (parseFloat($precio_venta) - parseFloat($precio_costo)) / parseFloat($precio_costo) * 100;
    if (margen < 20) {
        $precio_venta = 'El margen debe ser mínimo 20%';
    }
    
    // Actualizar fecha de modificación
    ePF('fecha_modificacion', *Hoy);
```

### Formulario de pedidos
```javascript
[JPCheck] A | cliente_id
    // Validar stock disponible
    if (parseInt($cantidad) > parseInt($stock_disponible)) {
        $cantidad = 'Cantidad excede stock disponible';
    }
    
    // Calcular total automáticamente
    var total = parseFloat($cantidad) * parseFloat($precio_unitario);
    ePF('total', total);
```

## Ventajas

- **Seguridad**: Validación tanto en cliente como servidor
- **Consistencia**: Misma lógica en ambos entornos
- **Protección**: Variables de sesión protegidas
- **Flexibilidad**: Acceso a funciones del sistema y constantes

## Consideraciones

- **Limitaciones de JavaScript**: Solo funciones permitidas, sin funciones de usuario
- **Sincronización**: Mantener código compatible en ambos entornos
- **Performance**: Considerar el impacto de ejecutar en ambos lados
- **Debugging**: Errores pueden ocurrir en cliente o servidor