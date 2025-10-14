# FreeFields

## Sintaxis

```
[FreeFields] Field [ , Field, ... ]
```

## Descripción

La etiqueta **FreeFields** permite especificar qué campos desactivados pueden ser modificados en el servidor, superando las restricciones de seguridad normales.

### Funcionamiento Normal
Por defecto, cuando los campos llegan al usuario desactivados en el formulario:
- **Protección automática**: Al enviar el formulario al servidor, estos campos no pueden cambiar su contenido
- **Seguridad**: Previene modificaciones no autorizadas de campos deshabilitados
- **Comportamiento estándar**: Los campos desactivados mantienen sus valores originales

### Con FreeFields
Los campos especificados en esta etiqueta:
- **Excepción de seguridad**: Pueden cambiar su contenido aunque lleguen desactivados
- **Modificación permitida**: El servidor aceptará cambios en estos campos específicos
- **Control granular**: Solo afecta a los campos explícitamente listados

## Parámetros

| Parámetro | Descripción |
|-----------|-------------|
| **Field** | Nombre del campo que puede ser modificado aunque esté desactivado |

**Nota**: Se pueden especificar múltiples campos separados por comas.

## Casos de Uso

### Campos Calculados Dinámicos
```
[FreeFields] total_calculado, importe_final
```
Permite que campos calculados por JavaScript puedan ser actualizados en el servidor aunque aparezcan deshabilitados.

### Campos de Sistema
```
[FreeFields] fecha_actualizacion, usuario_modificacion
```
Campos de auditoría que se actualizan automáticamente pero aparecen deshabilitados al usuario.

### Campos Condicionalmente Editables
```
[FreeFields] campo_especial, observaciones_admin
```
Campos que pueden ser habilitados/deshabilitados dinámicamente según condiciones específicas.

## Ejemplos Prácticos

### Ejemplo 1: Formulario de Pedido
```
[FreeFields] precio_total, descuento_aplicado
```

**Escenario**: 
- El usuario ve los campos `precio_total` y `descuento_aplicado` deshabilitados
- JavaScript calcula estos valores automáticamente
- Al enviar el formulario, el servidor puede procesar estos valores calculados

### Ejemplo 2: Sistema de Aprobaciones
```
[FreeFields] estado_aprobacion, fecha_aprobacion, aprobado_por
```

**Escenario**:
- Los campos de aprobación aparecen deshabilitados para usuarios normales
- El sistema puede actualizar estos campos según la lógica de negocio
- Los valores se procesan correctamente en el servidor

### Ejemplo 3: Campos de Auditoría
```
[FreeFields] ultima_modificacion, contador_cambios
```

**Escenario**:
- Campos de seguimiento que el usuario no puede editar directamente
- Se actualizan automáticamente por el sistema
- Requieren procesamiento en el servidor aunque estén deshabilitados

## Consideraciones de Seguridad

### Uso Responsable
- **Validación**: Siempre validar los datos de campos FreeFields en el servidor
- **Autorización**: Verificar que el usuario tiene permisos para modificar estos campos
- **Sanitización**: Aplicar filtros de seguridad a los valores recibidos

### Riesgos Potenciales
- **Manipulación**: Los campos listados pueden ser modificados mediante herramientas de desarrollo
- **Bypass de controles**: Puede saltarse validaciones del lado cliente
- **Inyección**: Requiere validación adicional para prevenir ataques

## Implementación Técnica

### En el Cliente
```html
<!-- Campo deshabilitado pero incluido en FreeFields -->
<input type="text" name="campo_calculado" disabled="disabled" value="100.00">
```

### En el Servidor
```php
// El servidor procesa el campo aunque llegue deshabilitado
if (in_array('campo_calculado', $freeFields)) {
    // Procesar y validar el valor
    $valor = validar_campo($_POST['campo_calculado']);
}
```

## Buenas Prácticas

### Validación Obligatoria
```
[FreeFields] total_importe
```
**Recomendación**: Siempre validar que `total_importe` sea correcto según los cálculos del servidor.

### Campos Específicos
```
[FreeFields] campo1, campo2
```
**Evitar**: No usar `[FreeFields] *` o patrones genéricos. Especificar campos concretos.

### Documentación
```
[FreeFields] estado_proceso  # Campo actualizado por workflow automático
```
**Recomendación**: Documentar por qué cada campo necesita estar en FreeFields.

## Alternativas

### JavaScript para Habilitar Campos
```javascript
// En lugar de FreeFields, habilitar dinámicamente
document.getElementById('campo').disabled = false;
```

### Campos Ocultos
```html
<!-- Usar campos hidden para valores calculados -->
<input type="hidden" name="valor_calculado" value="123.45">
```

### Validación Condicional
```php
// Validar en servidor según contexto
if ($esCalculoAutomatico) {
    // Procesar campo aunque venga deshabilitado
}
```

## Notas Importantes

- **Solo para casos específicos**: Usar únicamente cuando sea necesario por la lógica de la aplicación
- **Seguridad**: No compromete la seguridad si se implementa con validaciones adecuadas
- **Rendimiento**: No afecta al rendimiento del formulario
- **Compatibilidad**: Funciona con todos los tipos de campos de formulario
- **Combinación**: Puede combinarse con otras etiquetas de configuración de campos

## Resumen

FreeFields es una herramienta poderosa para casos específicos donde se necesita procesar campos deshabilitados en el servidor. Su uso debe ser cuidadoso y siempre acompañado de validaciones de seguridad apropiadas.