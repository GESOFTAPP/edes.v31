# Documentación de Propiedades HTML para Ventanas con Motor

## Descripción General

Cuando se implementa una ventana con un elemento visible que llama a un objeto del motor, es necesario configurar propiedades específicas en el elemento IFRAME para asegurar el correcto funcionamiento.

## Propiedades Requeridas

### Configuración del IFRAME

Al integrar un objeto del motor en una ventana visible, el elemento IFRAME debe incluir las siguientes propiedades obligatorias:

| Propiedad | Valor | Descripción |
|-----------|-------|-------------|
| `eNORESIZE` | `true` | Evita el redimensionamiento automático del iframe |
| `WOPENER` | `window` | Establece la referencia a la ventana padre |

## Implementación

### Ejemplo de Código

```html
<iframe 
    src="ruta/al/objeto/motor"
    eNORESIZE="true"
    WOPENER="window"
    width="800"
    height="600">
</iframe>
```

### Casos de Uso

| Escenario | Configuración Recomendada |
|-----------|---------------------------|
| Ventana modal con motor | `eNORESIZE=true` + `WOPENER=window` |
| Ventana emergente | `eNORESIZE=true` + `WOPENER=window` |
| Iframe embebido | `eNORESIZE=true` + `WOPENER=window` |

## Consideraciones Técnicas

### Propiedades Detalladas

#### eNORESIZE
- **Tipo**: Boolean
- **Valor requerido**: `true`
- **Función**: Deshabilita el redimensionamiento automático del iframe cuando se carga el objeto del motor
- **Importancia**: Crítica para mantener la estabilidad visual

#### WOPENER
- **Tipo**: Object reference
- **Valor requerido**: `window`
- **Función**: Establece la conexión con la ventana padre para comunicación bidireccional
- **Importancia**: Esencial para el funcionamiento del motor

### Compatibilidad

| Navegador | Soporte eNORESIZE | Soporte WOPENER |
|-----------|-------------------|-----------------|
| Chrome | ✅ | ✅ |
| Firefox | ✅ | ✅ |
| Safari | ✅ | ✅ |
| Edge | ✅ | ✅ |

## Mejores Prácticas

### Configuración Completa

```html
<iframe 
    src="objeto-motor.html"
    eNORESIZE="true"
    WOPENER="window"
    frameborder="0"
    scrolling="no"
    width="100%"
    height="100%"
    style="border: none;">
</iframe>
```

### Atributos Adicionales Recomendados

| Atributo | Valor Sugerido | Propósito |
|----------|----------------|-----------|
| `frameborder` | `0` | Elimina bordes visuales |
| `scrolling` | `no` | Evita barras de desplazamiento |
| `style` | `border: none` | Limpia la presentación |

## Solución de Problemas

### Problemas Comunes

| Problema | Causa Probable | Solución |
|----------|----------------|----------|
| Iframe se redimensiona | Falta `eNORESIZE=true` | Añadir la propiedad |
| Motor no responde | Falta `WOPENER=window` | Verificar la referencia |
| Ventana no se comunica | Propiedades mal configuradas | Revisar sintaxis |

### Validación

Para verificar que las propiedades están correctamente configuradas:

```javascript
// Verificar propiedades del iframe
const iframe = document.querySelector('iframe');
console.log('eNORESIZE:', iframe.getAttribute('eNORESIZE'));
console.log('WOPENER:', iframe.getAttribute('WOPENER'));
```

## Notas Importantes

- **Obligatorio**: Ambas propiedades son requeridas para el correcto funcionamiento
- **Orden**: No importa el orden de las propiedades en el HTML
- **Valores**: Los valores deben escribirse exactamente como se especifica
- **Compatibilidad**: Estas propiedades son específicas para objetos del motor

## Recursos Adicionales

- Consultar la documentación del motor específico para configuraciones avanzadas
- Probar en diferentes navegadores para asegurar compatibilidad
- Considerar implementar fallbacks para navegadores más antiguos