# Label

## Sintaxis

```
[Label] Field | Texto a mostrar
```

## Descripción

La etiqueta `[Label]` permite definir externamente las etiquetas descriptivas de los campos cuando estas contienen mucho texto o código HTML complejo. Su propósito principal es mantener la legibilidad y organización del código en la sección `[Fields]`, evitando que las definiciones de campos se vuelvan excesivamente anchas y difíciles de leer.

**Beneficios principales:**

- **Código más limpio**: Las definiciones en `[Fields]` se mantienen organizadas y legibles
- **Flexibilidad de contenido**: Permite usar HTML, texto largo o contenido complejo
- **Mejor mantenimiento**: Separación clara entre estructura de campos y contenido descriptivo
- **Formateo avanzado**: Soporte completo para HTML en las etiquetas

## Parámetros

| Parámetro | Descripción |
|-----------|-------------|
| **Field** | Nombre del campo al que se aplicará la etiqueta |
| **Texto a mostrar** | Contenido de la etiqueta, puede incluir texto plano, HTML, saltos de línea, etc. |

## Ejemplo de Implementación

### Sin usar [Label] (problemático)
```
[Fields]
Nombre                                    | field1 | N | T | 20 || Q |||
<b>Dirección comercial</b><br>para los envíos de paquetería | field2 | N | T | 20 || Q |||
```
*Resultado: Código difícil de leer y mantener*

### Usando [Label] (recomendado)
```
[Label] field2 | <b>Dirección comercial</b><br>para los envíos de paquetería

[Fields]
Nombre | field1 | N | T | 20 || Q |||
       | field2 | N | T | 20 || Q |||
```

## Ejemplos Avanzados

### Etiquetas con HTML complejo
```
[Label] descripcion_producto | 
<div style="background-color: #f0f0f0; padding: 5px; border-radius: 3px;">
    <strong>Descripción del Producto</strong><br>
    <small>Incluye características técnicas, dimensiones y especificaciones</small>
</div>

[Fields]
Código    | codigo      | N | T | 10 || Q |||
          | descripcion_producto | N | A | 500 || Q |||
Precio    | precio      | N | T | 8  || Q |||
```

### Múltiples etiquetas personalizadas
```
[Label] info_cliente | 
<span style="color: #0066cc;">
    <strong>Información del Cliente</strong>
</span><br><small>Datos principales de contacto</small>

[Label] direccion_envio | 
<span style="color: #cc6600;">
    <strong>Dirección de Envío</strong>
</span><br><small>Donde se realizará la entrega</small>

[Fields]
         | info_cliente   | N | T | 50 || Q |||
Teléfono | telefono       | N | T | 15 || Q |||
         | direccion_envio| N | T | 100|| Q |||
Ciudad   | ciudad         | N | T | 30 || Q |||
```

## Casos de Uso Recomendados

La etiqueta `[Label]` es ideal para:

- **Etiquetas con HTML**: Cuando se necesita formateo avanzado con estilos CSS
- **Texto explicativo largo**: Descripciones detalladas o instrucciones
- **Contenido multilínea**: Etiquetas que requieren saltos de línea
- **Formateo condicional**: Estilos que cambian según el contexto
- **Separación de responsabilidades**: Mantener estructura y contenido separados
- **Proyectos grandes**: Formularios complejos con muchos campos descriptivos

## Ventajas vs Desventajas

### ✅ Ventajas
- Código `[Fields]` más limpio y legible
- Soporte completo para HTML y CSS
- Fácil mantenimiento de contenido descriptivo
- Mejor organización en proyectos grandes
- Reutilización potencial de etiquetas complejas

### ⚠️ Consideraciones
- Requiere definición adicional fuera de `[Fields]`
- Puede separar demasiado la estructura del contenido
- Para etiquetas simples puede ser innecesario

## Notas Técnicas

- Las definiciones `[Label]` deben aparecer antes de la sección `[Fields]`
- El nombre del campo debe coincidir exactamente entre `[Label]` y `[Fields]`
- Se puede combinar con campos que tienen etiqueta directa (algunos con `[Label]`, otros sin ella)
- Soporte completo para HTML, CSS inline y entidades HTML
- No hay límite en el número de etiquetas `[Label]` que se pueden definir
- El contenido HTML se renderiza tal como se define