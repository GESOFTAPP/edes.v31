# Width

## SINTAXIS
```
[Width] L:F | Field [,Field2, Field3,...] | Width / = [| MínimoAncho]
```

## DESCRIPCIÓN
Define el ancho de la columna del control (Field) o su etiqueta (Label) en el formulario. Permite establecer anchos fijos, automáticos basados en contenido, o alineaciones entre campos para crear layouts consistentes y visualmente equilibrados.

## PARÁMETROS

| Parámetro | Descripción |
|-----------|-------------|
| **L:F** | Especifica el elemento a modificar:<br>• **L**: Label (etiqueta del campo)<br>• **F**: Field (control/campo) |
| **Field** | Lista de campos separados por comas o **\*** para aplicar a todos los campos |
| **Width** | Tipo de ancho a aplicar:<br>• **Número**: Ancho fijo en píxeles<br>• **=**: Aplica el ancho más desfavorable del grupo<br>• **NombreCampo**: Alinea con el ancho de otro campo específico |
| **MínimoAncho** | *(Opcional)* Solo con Width="=". Define ancho mínimo en píxeles si el calculado es menor |

## CASOS DE USO
- **Alineación visual**: Crear columnas uniformes en formularios complejos
- **Optimización de espacio**: Ajustar anchos para maximizar el uso del espacio disponible
- **Consistencia de layout**: Mantener proporciones coherentes entre diferentes secciones
- **Responsive design**: Establecer anchos mínimos para mantener legibilidad

## EJEMPLOS

### Ancho fijo para un campo
```
[Width] F | dt_alta | 200
```
La columna donde se ubica el campo `dt_alta` tendrá una anchura de 200 píxeles.

### Ancho automático basado en contenido (labels)
```
[Width] L | cd_auto,cd_prov,cd_coma,cd_muni,cd_distri | =
```
Aplica el ancho más desfavorable (el mayor necesario) entre todos los labels especificados.

### Ancho automático con mínimo
```
[Width] L | cd_auto,cd_prov,cd_coma,cd_muni,cd_distri | = | 150
```
Aplica el ancho más desfavorable, pero con un mínimo de 150 píxeles si el calculado es menor.

### Alineación con otro campo
```
[Width] L | cd_auto,cd_prov,cd_coma,cd_muni,cd_distri | direccion
```
Alinea todos los labels especificados con el ancho del campo `direccion`.

## ESTRATEGIAS DE LAYOUT

### Para formularios con múltiples secciones:
```
# Alinear labels de datos personales
[Width] L | nombre,apellidos,dni,telefono | =

# Alinear labels de dirección con ancho mínimo
[Width] L | calle,numero,piso,cp | = | 120

# Campo de observaciones con ancho fijo amplio
[Width] F | observaciones | 400
```

### Para campos relacionados:
```
# Todos los campos de código con el mismo ancho
[Width] F | cd_prov,cd_muni,cd_distri | cd_prov

# Labels de fechas alineados
[Width] L | dt_alta,dt_baja,dt_modif | =
```

## NOTAS IMPORTANTES
- El ancho se aplica a la columna completa, no solo al contenido
- Usar "=" es útil para crear alineaciones automáticas sin calcular manualmente
- La alineación por campo de referencia mantiene consistencia visual
- El parámetro MínimoAncho evita columnas demasiado estrechas en dispositivos pequeños