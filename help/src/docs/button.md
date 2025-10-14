# Button 

## Descripción General

La etiqueta `Button` permite configurar el texto, icono y tooltip de los botones de submit en formularios. Proporciona flexibilidad para personalizar la apariencia y funcionalidad de los botones según el modo de operación.

## Sintaxis

```
[Button] Mode | [ButtonText] [ [ | Tip] | ModoDelIcono ]
```

## Parámetros

| Parámetro | Tipo | Descripción |
|-----------|------|-------------|
| **Mode** | Obligatorio | Modo de aplicación del botón |
| **ButtonText** | Obligatorio | Texto o contenido del botón |
| **Tip** | Opcional | Mensaje tooltip (atributo TITLE en HTML) |
| **ModoDelIcono** | Opcional | Modo específico del icono a mostrar |

## Modos de Aplicación

### Modos Disponibles

| Modo | Descripción |
|------|-------------|
| `*` | Todos los modos |
| `a` | Modo alta/inserción |
| `m` | Modo modificación |
| `c` | Modo consulta |
| `r` | Modo solo lectura |
| `d` | Modo eliminación |
| `mR` | Modo modificación restringida |

## Tipos de Contenido del Botón

### 1. Solo Texto
```
[Button] a | Guardar Registro
```

### 2. Solo Icono
```
[Button] a | [SAVE]
```

### 3. Icono con Texto
```
[Button] a | [SAVE] Guardar
```

### 4. Imagen Personalizada
```
[Button] a | <img src="iconos/guardar.png"> Guardar
```

### 5. HTML Personalizado
```
[Button] a | <span class="btn-custom">Procesar</span>
```

## Sistema de Iconos

### Configuración Global

La variable `$_IconsSubmit` en el archivo `sql.ini` controla el uso global de iconos:

```ini
; Activar iconos en botones submit
$_IconsSubmit = true
```

### Desactivar Iconos Específicos

Para desactivar iconos en un botón específico cuando están habilitados globalmente:

```
[Button] a | </> Texto sin icono
```

El prefijo `</>` indica que no se debe mostrar icono para ese botón.

### Iconos Disponibles

Los iconos se definen entre corchetes `[KEYICON]` donde `KEYICON` corresponde a las claves definidas en la etiqueta `[Icon]`.

#### Iconos Comunes

| Clave | Descripción | Uso Típico |
|-------|-------------|-----------|
| `[SAVE]` | Guardar | Botones de alta/modificación |
| `[DELETE]` | Eliminar | Botones de eliminación |
| `[SEARCH]` | Buscar | Botones de consulta |
| `[DOWNLOAD]` | Descargar | Exportación de datos |
| `[UPLOAD]` | Subir | Carga de archivos |
| `[PRINT]` | Imprimir | Generar reportes |
| `[EDIT]` | Editar | Modificación |
| `[ADD]` | Añadir | Nuevos registros |

## Ejemplos Prácticos

### Ejemplo 1: Botón con Texto y Tooltip
```
[Button] a | Duplicar factura | Generar duplicación de factura
```

**Resultado**:
- Modo: Alta
- Texto: "Duplicar factura"
- Tooltip: "Generar duplicación de factura"
- Ubicación: Parte inferior central de la ficha

### Ejemplo 2: Botón con Icono y Texto
```
[Button] a | [DOWNLOAD] Exportar
```

**Resultado**:
- Modo: Alta
- Icono: DOWNLOAD
- Texto: "Exportar"
- Combina icono visual con texto descriptivo

### Ejemplo 3: Botones por Modo
```
[Button] a | [SAVE] Crear Registro | Crear nuevo elemento
[Button] m | [SAVE] Actualizar | Guardar cambios realizados
[Button] d | [DELETE] Eliminar | Confirmar eliminación del registro
```

### Ejemplo 4: Botón sin Icono (con iconos globales activos)
```
[Button] a | </> Procesar sin icono | Procesamiento especial
```

### Ejemplo 5: Botones Múltiples
```
[Button] * | [SAVE] Guardar | Guardar los cambios
[Button] * | [CANCEL] Cancelar | Descartar cambios
[Button] a | [DUPLICATE] Duplicar | Crear copia del registro
```

## Configuración Avanzada

### Personalización de CSS

Los botones pueden personalizarse mediante CSS:

```css
/* Estilo personalizado para botones */
.btn-custom {
    background-color: #007bff;
    color: white;
    padding: 8px 16px;
    border-radius: 4px;
}

/* Botones con iconos */
.btn-icon {
    display: flex;
    align-items: center;
    gap: 8px;
}
```

### Botones Condicionales

```php
// En código PHP para mostrar botones condicionalmente
if($_SESSION['nivel_usuario'] >= 5) {
    echo '[Button] a | [ADMIN] Función Admin | Solo para administradores';
}
```

## Casos de Uso Específicos

### 1. Formulario de Registro
```
[Button] a | [USER_ADD] Crear Usuario | Registrar nuevo usuario en el sistema
[Button] a | [CANCEL] Cancelar | Volver sin guardar cambios
```

### 2. Gestión de Documentos
```
[Button] a | [UPLOAD] Subir Archivo | Cargar documento al servidor
[Button] m | [DOWNLOAD] Descargar | Obtener copia del archivo
[Button] d | [DELETE] Eliminar | Borrar archivo permanentemente
```

### 3. Procesamiento de Datos
```
[Button] * | [PROCESS] Procesar | Ejecutar procesamiento de datos
[Button] * | [EXPORT] Exportar CSV | Descargar datos en formato CSV
[Button] * | [PRINT] Imprimir | Generar reporte en PDF
```

### 4. Workflow de Aprobación
```
[Button] m | [APPROVE] Aprobar | Aprobar y continuar proceso
[Button] m | [REJECT] Rechazar | Rechazar y devolver
[Button] m | [HOLD] En Espera | Poner en lista de espera
```

## Integración con JavaScript

### Eventos Personalizados

```html
<script>
// Agregar eventos a botones personalizados
document.addEventListener('DOMContentLoaded', function() {
    const customButtons = document.querySelectorAll('.btn-custom');
    customButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Lógica personalizada
            console.log('Botón personalizado clickeado');
        });
    });
});
</script>
```

### Validación antes del Submit

```javascript
function validateForm() {
    // Validación personalizada antes del envío
    const required = document.querySelectorAll('[required]');
    let valid = true;
    
    required.forEach(field => {
        if (!field.value.trim()) {
            valid = false;
            field.classList.add('error');
        }
    });
    
    return valid;
}
```

## Mejores Prácticas

### 1. Consistencia de Iconos
- Use iconos consistentes en toda la aplicación
- Mantenga una biblioteca de iconos estándar
- Documente el significado de cada icono

### 2. Tooltips Descriptivos
- Proporcione tooltips claros y útiles
- Evite redundancia entre texto del botón y tooltip
- Use tooltips para explicar acciones complejas

### 3. Accesibilidad
```html
<!-- Ejemplo de botón accesible -->
<button type="submit" title="Guardar registro" aria-label="Guardar nuevo registro">
    <img src="save-icon.png" alt="Icono guardar"> Guardar
</button>
```

### 4. Responsive Design
- Considere cómo se ven los botones en dispositivos móviles
- Use texto corto para pantallas pequeñas
- Mantenga iconos legibles en todos los tamaños

## Solución de Problemas

### Problemas Comunes

| Problema | Causa | Solución |
|----------|-------|----------|
| Icono no aparece | Clave no definida en [Icon] | Verificar definición de iconos |
| Botón no se muestra | Modo incorrecto | Revisar modo de aplicación |
| Tooltip no funciona | Sintaxis incorrecta | Verificar parámetros |
| Estilos no aplican | CSS no cargado | Verificar hojas de estilo |

### Debug de Botones

```php
// Para debug: mostrar configuración de botones
echo "Modo actual: " . $current_mode . "\n";
echo "Iconos habilitados: " . ($_IconsSubmit ? 'Sí' : 'No') . "\n";
```

## Consideraciones de Rendimiento

- Los iconos deben optimizarse para web
- Use sprites CSS para múltiples iconos
- Considere lazy loading para imágenes grandes
- Cache iconos frecuentemente utilizados

---

*Esta documentación describe el sistema Button para la configuración personalizada de botones submit en formularios web.*