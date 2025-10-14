# I

## Sintaxis

```
{I} CódigoHTML
```

## Descripción

La sub-etiqueta `{I}` permite insertar código HTML directamente en una fila del formulario de manera inmediata. A diferencia de `{H}` que usa referencias, `{I}` incluye el código HTML en la misma línea donde se define, proporcionando una forma rápida y directa de añadir elementos HTML personalizados.

Esta etiqueta es ideal para insertar contenido HTML simple sin necesidad de crear referencias separadas.

## Parámetros

| Parámetro | Descripción |
|-----------|-------------|
| **CódigoHTML** | Código HTML que se insertará directamente en la fila del formulario |

## Ejemplo de Implementación

```
[Fields]
    AUTONOMIA      | cd_auto     | 0  | S |  2|,20| iQM |_Auto_||
    {I} <tr><td>Celda de información</td></tr>
    PROVINCIA      | cd_prov     | 0  | SS|  2|,20| iQM |_Prov_||
```

## Comparación con {H}

| Característica | {I} | {H} |
|----------------|-----|-----|
| **Definición** | Código HTML en la misma línea | Sistema de referencias separadas |
| **Complejidad** | Ideal para HTML simple | Mejor para HTML complejo |
| **Reutilización** | No reutilizable | Reutilizable mediante referencias |
| **Legibilidad** | Menos legible con HTML extenso | Más legible para código largo |

## Casos de Uso Recomendados

La etiqueta `{I}` es ideal para:

- **HTML simple**: Celdas informativas, separadores básicos
- **Inserción rápida**: Cuando se necesita añadir HTML sin complejidad
- **Elementos únicos**: Contenido que no se va a reutilizar
- **Mensajes cortos**: Avisos o información breve entre campos
- **Prototipos rápidos**: Durante desarrollo y pruebas

## Casos donde preferir {H}

- Código HTML extenso o complejo
- Contenido que se reutiliza en múltiples lugares
- Estructuras HTML que requieren mejor organización
- Cuando se necesita el control de TD con NoTD

## Notas Técnicas

- El código HTML se inserta tal como se define en la línea
- No requiere referencias adicionales como `{H}`
- Ideal para contenido HTML corto y directo
- Se puede combinar con otras etiquetas de Fields
- El HTML debe ser válido para evitar problemas de renderizado
- Se ejecuta inmediatamente al procesar la fila del formulario