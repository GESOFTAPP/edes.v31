# JSGatewayOne

## Sintaxis

```
[JSGatewayOne] Mode
```

## Descripción

Esta etiqueta sólo tiene validez en archivos EDF simples (no en grupos de fichas). Cuando se solicita una búsqueda desde un formulario y se encuentra UN SOLO registro, se ejecuta el script JavaScript y se cierra la subventana. Es equivalente a la etiqueta DBGatewayOne pero se define en JavaScript.

**Importante:** Las variables JavaScript que empiezan con dos "$" hacen referencia a los campos del formulario padre, mientras que las variables del tipo `{$campo}` son variables PHP del formulario solicitado.

## Parámetros

| Parámetro | Tipo | Descripción |
|-----------|------|-------------|
| Mode | String | Modo de aplicación (cR=consulta/resultado, etc.) |
| ... | JavaScript | Código JavaScript que asigna valores a campos del formulario padre |

## Sintaxis de Variables

| Tipo | Formato | Descripción |
|------|---------|-------------|
| Campo padre | `$$campo` | Campo del formulario que abrió la búsqueda |
| Campo actual | `{$campo}` | Campo PHP del registro encontrado |

## Ejemplos

### Ejemplo básico - Asignación de empresa
```javascript
[JSGatewayOne] cR
$$cd_empre = '{$cd_empre}';
$$nm_empre = '{$nm_empre}';
```

### Ejemplo completo - Datos de empresa con todos los campos
```javascript
[JSGatewayOne] cR
$$cd_empre  = '{$cd_empre}';
$$_nif      = '{$cif}';
$$_nm_empre = '{$nm_empre}';
$$_nombre   = '{$rsocial}';
$$_dir      = '{$otros}';
$$_pob      = '{$nm_loca}';
$$_cp       = '{$cd_postal}';
$$_cd_prov  = '{$cd_prov}';
$$cd_pago   = '{$cd_pago}';
```

### Ejemplo con cliente
```javascript
[JSGatewayOne] cR
$$cd_cliente = '{$cd_cliente}';
$$nm_cliente = '{$nombre}';
$$telefono   = '{$telefono}';
$$email      = '{$email}';
$$direccion  = '{$direccion}';
```

### Ejemplo con producto
```javascript
[JSGatewayOne] cR
$$cd_producto = '{$cd_producto}';
$$nm_producto = '{$descripcion}';
$$precio      = '{$precio}';
$$stock       = '{$stock_actual}';
$$iva         = '{$tipo_iva}';
```

### Ejemplo con validación condicional
```javascript
[JSGatewayOne] cR
if ('{$activo}' == '1') {
    $$cd_proveedor = '{$cd_proveedor}';
    $$nm_proveedor = '{$razon_social}';
    $$contacto     = '{$persona_contacto}';
} else {
    alert('El proveedor seleccionado no está activo');
}
```