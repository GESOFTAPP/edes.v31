# CallSrv

## Sintaxis

```
[CallSrv] NomEtiqueta
```

## Descripción

Desde la función `top.eCallSrv()` se puede llamar a zonas de un DF. Cada zona se identifica por un `NomEtiqueta` y todo el código a ejecutar se encuentra dentro de la etiqueta `[CallSrv]`.

## Parámetros

| Parámetro | Tipo | Descripción |
|-----------|------|-------------|
| NomEtiqueta | String | Identificador único de la zona de código que será llamada desde JavaScript |

## Ejemplos

### Ejemplo completo - Sistema de gestión de asambleas
```javascript
// Llamada desde JavaScript
[JSSelRow] cl | cen/gestion_pago.edf
top.eCallSrv( *WOPENER, 'NmAsa='+*aTR[12], window );
```

```php
// Código PHP ejecutado
[CallSrv] NmAsa
// Código para poner el nombre de la Asamblea
$UserCdAsambleaR = $NmAsa;
$arAU = mb_substr($UserCdAsambleaR,0,2);
$arPR = mb_substr($UserCdAsambleaR,2,2);
$arCO = mb_substr($UserCdAsambleaR,4,2);
$arMU = mb_substr($UserCdAsambleaR,6,3);
$arDI = mb_substr($UserCdAsambleaR,9,2);

$UserCdAsambleaR = $arAU.'·'.$arPR.'·'.$arCO.'·'.$arMU.'·'.$arDI;

qQuery( "select nm_asamblea from asamblea where cd_auto='{$arAU}' and cd_prov='{$arPR}' and cd_coma='{$arCO}' and cd_muni='{$arMU}' and cd_distri='{$arDI}'" );
list( $UserNmAsamblea ) = qArray();

echo '<script>';
echo "window.frameElement.WOPENER.document.all.nm_asamblea.value = '{$UserNmAsamblea}';";
echo '</script>';
```

### Ejemplo básico - Validación de datos
```php
[CallSrv] ValidarDatos
$codigo = $_GET['codigo'] ?? '';
if (empty($codigo)) {
    echo '<script>alert("Código obligatorio");</script>';
    exit;
}

$existe = qRecord("SELECT COUNT(*) as total FROM productos WHERE codigo = '{$codigo}'");
if ($existe['total'] > 0) {
    echo '<script>';
    echo "window.frameElement.WOPENER.document.getElementById('existe').value = 'SI';";
    echo '</script>';
} else {
    echo '<script>alert("Código no encontrado");</script>';
}
```

### Ejemplo - Cálculo de precios
```php
[CallSrv] CalcularPrecio
$cantidad = floatval($_GET['cantidad'] ?? 0);
$precio_unitario = floatval($_GET['precio'] ?? 0);
$descuento = floatval($_GET['descuento'] ?? 0);

$subtotal = $cantidad * $precio_unitario;
$importe_descuento = $subtotal * ($descuento / 100);
$total = $subtotal - $importe_descuento;

echo '<script>';
echo "var opener = window.frameElement.WOPENER.document;";
echo "opener.getElementById('subtotal').value = '{$subtotal}';";
echo "opener.getElementById('descuento_aplicado').value = '{$importe_descuento}';";
echo "opener.getElementById('total').value = '{$total}';";
echo '</script>';
```

### Ejemplo - Búsqueda de cliente
```php
[CallSrv] BuscarCliente
$nif = $_GET['nif'] ?? '';
$cliente = qRecord("SELECT * FROM clientes WHERE nif = '{$nif}'");

if ($cliente) {
    echo '<script>';
    echo "var doc = window.frameElement.WOPENER.document;";
    echo "doc.getElementById('nombre').value = '{$cliente['nombre']}';";
    echo "doc.getElementById('direccion').value = '{$cliente['direccion']}';";
    echo "doc.getElementById('telefono').value = '{$cliente['telefono']}';";
    echo "doc.getElementById('email').value = '{$cliente['email']}';";
    echo '</script>';
} else {
    echo '<script>alert("Cliente no encontrado");</script>';
}
```

### Ejemplo - Actualización de stock
```php
[CallSrv] ActualizarStock
$producto = $_GET['producto'] ?? '';
$cantidad = intval($_GET['cantidad'] ?? 0);

// Verificar stock actual
$stock_actual = qRecord("SELECT stock FROM productos WHERE codigo = '{$producto}'");

if ($stock_actual && $stock_actual['stock'] >= $cantidad) {
    // Actualizar stock
    qExecute("UPDATE productos SET stock = stock - {$cantidad} WHERE codigo = '{$producto}'");
    
    // Obtener nuevo stock
    $nuevo_stock = qRecord("SELECT stock FROM productos WHERE codigo = '{$producto}'");
    
    echo '<script>';
    echo "window.frameElement.WOPENER.document.getElementById('stock_disponible').value = '{$nuevo_stock['stock']}';";
    echo "alert('Stock actualizado correctamente');";
    echo '</script>';
} else {
    echo '<script>alert("Stock insuficiente");</script>';
}
```

## Flujo de Trabajo

1. **JavaScript**: Llama a `top.eCallSrv()` con parámetros
2. **Servidor**: Ejecuta el código PHP de la etiqueta correspondiente
3. **Respuesta**: Genera JavaScript para actualizar la ventana padre
4. **Cliente**: Ejecuta el JavaScript devuelto