# ErrorLabel

## Sintaxis

```
[ErrorLabel] Label=Field | ...
```

## Descripción

La etiqueta `ErrorLabel` permite personalizar las etiquetas que se muestran en los mensajes de error del cliente cuando se hace referencia a campos específicos. Esta funcionalidad es especialmente útil cuando:

- Un campo no tiene etiqueta definida
- Se desea mostrar una etiqueta diferente a la predefinida en los mensajes de error
- Se requiere mayor claridad en la identificación de campos problemáticos

## Parámetros

| Parámetro | Descripción | Obligatorio |
|-----------|-------------|-------------|
| **Label** | Etiqueta personalizada que se mostrará en los mensajes de error | ✓ |
| **Field** | Nombre del campo al que se aplicará la etiqueta personalizada | ✓ |

## Formato de asignación

```
Label=Field
```

Se pueden definir múltiples asignaciones separándolas con el carácter `|`.

## Ejemplo de uso

### Definición de etiquetas personalizadas
```
[ErrorLabel] NIF=nif | Documento=dni

[Fields]
    DNI | dni | DNI | T | 8 | 55 | Acp ||#|
        | nif | NIF | T | 1 | 12 | AL  ||#|
```

### Comportamiento del ejemplo

En este caso:

1. **Campo `dni`**: Tiene definida la etiqueta "DNI" y validación obligatoria (`Acp`)
2. **Campo `nif`**: No tiene etiqueta definida pero es obligatorio (`AL`)

**Sin `ErrorLabel`**:
- Error en campo `dni`: "El campo DNI es obligatorio"
- Error en campo `nif`: "El campo es obligatorio" (sin identificar el campo)

**Con `ErrorLabel`**:
- Error en campo `dni`: "El campo DNI es obligatorio" (mantiene la etiqueta original)
- Error en campo `nif`: "El campo NIF es obligatorio" (usa la etiqueta personalizada)

## Casos de uso comunes

### Campos sin etiqueta
```
[ErrorLabel] Teléfono=telefono | Email=correo

[Fields]
    | telefono | | T | 1 | 15 | AL ||#|
    | correo   | | T | 1 | 50 | AL ||#|
```

### Etiquetas más descriptivas
```
[ErrorLabel] Código Postal=cp | Fecha de Nacimiento=fech_nac

[Fields]
    CP | cp       | CP | T | 5 | 5  | A ||#|
    FN | fech_nac | FN | D | 1 | 10 | A ||#|
```

### Múltiples campos relacionados
```
[ErrorLabel] Dirección=direccion | Población=poblacion | Provincia=provincia

[Fields]
    | direccion  | | T | 1 | 100 | AL ||#|
    | poblacion  | | T | 1 | 50  | AL ||#|
    | provincia  | | T | 1 | 30  | AL ||#|
```

## Ventajas

- **Mejora la experiencia del usuario**: Los mensajes de error son más claros y específicos
- **Flexibilidad**: Permite usar etiquetas diferentes sin modificar la definición del campo
- **Mantenimiento**: Centraliza la gestión de etiquetas de error
- **Consistencia**: Garantiza que todos los campos tengan una identificación clara en los errores