# H

## Sintaxis

```
{H} RefName [ | NoTD ]
```

## Descripción

La sub-etiqueta `{H}` permite insertar código HTML personalizado dentro de una fila de la rejilla del formulario. Es una sub-etiqueta de `[Fields]` que funciona mediante un sistema de referencias.

**Proceso de implementación:**

1. **Dentro de `[Fields]`**: Se define `{H}` seguido de un nombre de referencia (ej: `{H} myRef`)
2. **Después de `[Fields]`**: Se inserta `[H]` con el mismo nombre de referencia
3. **Código HTML**: En las líneas siguientes se incluye el código HTML deseado

Este método permite introducir código HTML personalizado en cualquier fila de la rejilla del formulario, ofreciendo flexibilidad total para elementos visuales específicos.

## Parámetros

| Parámetro | Descripción |
|-----------|-------------|
| **RefName** | Nombre identificativo de referencia que conecta la definición con el código HTML |
| **NoTD** | *(Opcional)* Modificador de comportamiento:<br>• **Sin NoTD**: Crea automáticamente una celda única con colspan correspondiente<br>• **Con NoTD**: El desarrollador debe definir manualmente todos los elementos TD de la fila |

## Ejemplo de Implementación

```
[Fields]
    Client Code | cd_cli | ...
    {H} myRef
    ...

[H] myRef
<table border="1">
    <tr>
        <td height="10" width="600" cellpadding="1" cellspacing="1" align="center">
            <strong>
                <font color="#ff0f00" size="3">AVISO</font>
            </strong>
        </td>
    </tr>
</table>
```

## Casos de Uso Recomendados

La etiqueta `{H}` es ideal para:

- **Avisos personalizados**: Insertar mensajes destacados o alertas visuales
- **Elementos gráficos**: Añadir tablas, imágenes o elementos decorativos
- **Separadores visuales**: Crear divisiones temáticas en formularios largos
- **Contenido dinámico**: Integrar elementos HTML que no se pueden lograr con campos estándar
- **Branding**: Insertar elementos corporativos o de marca

## Notas Técnicas

- La referencia `RefName` debe ser única dentro del formulario
- El nombre de referencia en `{H} RefName` y `[H] RefName` debe coincidir exactamente
- Sin el parámetro `NoTD`, el sistema gestiona automáticamente el colspan de la celda
- Con `NoTD`, se requiere control manual completo de la estructura de la fila
- El código HTML se inserta tal como se define, permitiendo cualquier elemento HTML válido
- Se puede usar múltiples veces en el mismo formulario con diferentes referencias