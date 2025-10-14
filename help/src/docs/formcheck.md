# FormCheck

## Sintaxis

```
[FormCheck] Mode | JSCondition | Message
```

## Descripción

La etiqueta `FormCheck` permite definir condiciones de validación entre campos en el formulario. Cuando la condición especificada no se cumple, se muestra un mensaje de error y se marca el campo correspondiente como erróneo.

### Alternativas disponibles

Existen otras formas de implementar validaciones:

- **`[Fields]` parámetro 9**: Para condiciones individuales de campos
- **`[JSCheck]`**: Para condiciones JavaScript libre y más complejas

## Parámetros

| Parámetro | Descripción | Obligatorio |
|-----------|-------------|-------------|
| **Mode** | Modo de ejecución. Solo se permiten: `A`, `M` o `*` | ✓ |
| **JSCondition** | Condición en JavaScript con sintaxis especial | ✓ |
| **Message** | Mensaje de error a mostrar cuando no se cumple la condición | ✓ |

## Sintaxis de condiciones

### Sustitución de campos
- **`{NombreCampo}`**: Se sustituye automáticamente por el valor del campo

### Operadores lógicos especiales
| Operador estándar | Operador FormCheck | Descripción |
|-------------------|-------------------|-------------|
| `\|\|` | `or` | OR lógico (siempre en minúsculas) |
| `&&` | `and` | AND lógico (siempre en minúsculas) |

### Reglas de sintaxis
- **❌ Comillas dobles**: No se permiten en ningún lugar
- **✅ Comillas simples**: Para valores de texto
- **✅ Comparadores**: `==`, `!=`, `>`, `<`, `>=`, `<=`

## Ejemplos de uso

### Validación básica - Confirmación de contraseña
```
[FormCheck] M | {clave}=={_clave} | Las claves son distintas
```

**Comportamiento:**
- Si los valores de `clave` y `_clave` son diferentes, muestra el error
- Marca el campo `_clave` como erróneo (último campo en la condición)

### Validación inversa
```
[FormCheck] M | {_clave}=={clave} | Las claves no coinciden
```
- En este caso marcaría el campo `clave` como erróneo

### Validaciones con operadores lógicos
```
[FormCheck] A | {edad}>=18 and {edad}<=65 | La edad debe estar entre 18 y 65 años
[FormCheck] M | {email}!='' or {telefono}!='' | Debe proporcionar email o teléfono
```

### Validación de campos obligatorios condicionales
```
[FormCheck] A | {tipo_cliente}=='empresa' and {nif}!='' | Si es empresa, el NIF es obligatorio
[FormCheck] A | {tiene_descuento}=='si' and {codigo_descuento}!='' | Si tiene descuento, debe indicar el código
```

### Validaciones numéricas
```
[FormCheck] M | {precio_minimo}<{precio_maximo} | El precio mínimo debe ser menor que el máximo
[FormCheck] A | {cantidad}>0 and {precio}>0 | Cantidad y precio deben ser mayores que cero
```

### Validaciones de fechas (como texto)
```
[FormCheck] M | {fecha_inicio}<{fecha_fin} | La fecha de inicio debe ser anterior a la fecha fin
```

### Validaciones complejas con múltiples condiciones
```
[FormCheck] A | {tipo}=='premium' and ({credito}>1000 or {antiguedad}>12) | Cliente premium requiere crédito > 1000 o antigüedad > 12 meses
```

## Casos de uso comunes

### Confirmación de campos críticos
```
[FormCheck] M | {email}=={confirmar_email} | Los emails no coinciden
[FormCheck] A | {password}=={confirmar_password} | Las contraseñas no coinciden
```

### Validaciones de negocio
```
[FormCheck] M | {descuento}<=100 | El descuento no puede ser mayor al 100%
[FormCheck] A | {stock}>=0 | El stock no puede ser negativo
```

### Campos dependientes
```
[FormCheck] A | {envio_urgente}=='no' or {direccion_alternativa}!='' | Para envío urgente debe indicar dirección alternativa
[FormCheck] M | {facturacion_diferente}=='no' or {direccion_facturacion}!='' | Si facturación diferente, debe completar la dirección
```

### Validaciones de rangos
```
[FormCheck] A | {descuento}>=0 and {descuento}<=50 | El descuento debe estar entre 0% y 50%
[FormCheck] M | {plazo}>=30 and {plazo}<=365 | El plazo debe estar entre 30 y 365 días
```

## Determinación del campo marcado como erróneo

El sistema marca como erróneo el **último campo mencionado** en la condición:

```
[FormCheck] M | {campo1}=={campo2} | Error
```
- ❌ Marca `campo2` como erróneo

```
[FormCheck] M | {campo2}=={campo1} | Error
```
- ❌ Marca `campo1` como erróneo

### Para mayor control, usar condiciones específicas:
```
[FormCheck] M | {password}!='' and {password}=={confirm_password} | Las contraseñas no coinciden
```
- Marca `confirm_password` como erróneo

## Ejemplos prácticos completos

### Formulario de registro
```
[FormCheck] A | {usuario}!='' and {password}!='' | Usuario y contraseña son obligatorios
[FormCheck] A | {password}=={confirm_password} | Las contraseñas deben coincidir
[FormCheck] A | {email}=={confirm_email} | Los emails deben coincidir
[FormCheck] A | {edad}>=18 | Debe ser mayor de edad
```

### Formulario de producto
```
[FormCheck] M | {precio_venta}>{precio_costo} | El precio de venta debe ser mayor al costo
[FormCheck] M | {stock_minimo}>=0 and {stock_minimo}<{stock_actual} | Stock mínimo inválido
[FormCheck] M | {categoria}!='' or {subcategoria}!='' | Debe seleccionar categoría o subcategoría
```

### Formulario de cliente
```
[FormCheck] A | {tipo_cliente}=='persona' and {dni}!='' | Personas deben tener DNI
[FormCheck] A | {tipo_cliente}=='empresa' and {cif}!='' | Empresas deben tener CIF
[FormCheck] A | {facturacion}=='si' and {direccion_fiscal}!='' | Si requiere facturación, completar dirección fiscal
```

## Ventajas

- **Validación en tiempo real**: Se ejecuta antes del envío del formulario
- **Sintaxis simplificada**: Más fácil que JavaScript puro
- **Integración automática**: Se integra con el sistema de validación del formulario
- **Marcado visual**: Resalta automáticamente los campos con errores

## Consideraciones

- **Limitaciones de sintaxis**: No todas las funciones JavaScript están disponibles
- **Orden de campos**: El último campo en la condición es el que se marca como erróneo
- **Tipos de datos**: Los valores se comparan como texto, considerar conversiones si es necesario
- **Complejidad**: Para validaciones muy complejas, considerar usar `[JSCheck]`