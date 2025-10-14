# ExtForm

## Sintaxis

```
[ExtForm] Mode | Filename
```

## Descripción

La etiqueta `ExtForm` permite reemplazar el formulario HTML generado automáticamente por el motor con un formulario personalizado. Esta funcionalidad ofrece control total sobre la presentación y estructura del formulario.

### Flujo de trabajo

1. **Generación inicial**: El motor genera un formulario HTML estándar usando `[SaveForm]`
2. **Personalización**: El archivo generado se modifica según las necesidades específicas
3. **Inclusión**: `ExtForm` incluye el archivo personalizado mediante un `include`
4. **Renderizado**: El formulario personalizado se muestra en lugar del generado automáticamente

> **⚠️ Limitación**: Esta opción no está disponible en el grupo de fichas.

## Parámetros

| Parámetro | Descripción | Obligatorio |
|-----------|-------------|-------------|
| **Mode** | Modo de ejecución del formulario externo | ✓ |
| **Filename** | Nombre del archivo que contiene el formulario personalizado | ✓ |

## Ejemplos de uso

### Formulario personalizado básico
```
[ExtForm] cR | custom_form.php
```

### Formulario con diferentes modos
```
[ExtForm] mR | edit_form.html
[ExtForm] aR | add_form.php
[ExtForm] bR | search_form.html
```

### Formulario con ruta específica
```
[ExtForm] cR | forms/cliente_personalizado.php
[ExtForm] mR | templates/modificar_usuario.html
```

## Proceso de implementación

### 1. Generar formulario base
Primero, usar `[SaveForm]` para generar el formulario HTML base:

```
[SaveForm] base_form.html
```

### 2. Personalizar el formulario
Editar el archivo generado para:
- Modificar el diseño y layout
- Añadir CSS personalizado
- Incluir JavaScript específico
- Reorganizar campos
- Añadir elementos adicionales

### 3. Implementar formulario personalizado
```
[ExtForm] cR | base_form.html
```

## Casos de uso comunes

### Formularios con diseño específico
Cuando se requiere un diseño particular que no se puede lograr con el formulario generado automáticamente.

### Validaciones personalizadas del lado cliente
Para implementar validaciones JavaScript específicas o complejas.

### Integración con frameworks CSS
Para usar frameworks como Bootstrap, Foundation, o CSS personalizado.

### Formularios multipaso
Para crear formularios divididos en múltiples pasos o pestañas.

### Campos dinámicos
Para implementar campos que se muestran/ocultan según las selecciones del usuario.

## Estructura típica del archivo personalizado

```html
<!-- Ejemplo de formulario personalizado -->
<div class="custom-form-wrapper">
    <form method="post" action="<?php echo $action_url; ?>">
        
        <!-- Campos personalizados -->
        <div class="form-group">
            <label for="campo1">Etiqueta personalizada:</label>
            <input type="text" name="campo1" id="campo1" class="form-control">
        </div>
        
        <!-- JavaScript personalizado -->
        <script>
            // Validaciones personalizadas
            function validateForm() {
                // Lógica de validación
            }
        </script>
        
        <!-- Botones de acción -->
        <div class="form-actions">
            <button type="submit" class="btn btn-primary">Guardar</button>
            <button type="reset" class="btn btn-secondary">Limpiar</button>
        </div>
        
    </form>
</div>
```

## Ventajas

- **Control total**: Personalización completa del diseño y comportamiento
- **Flexibilidad**: Posibilidad de usar cualquier framework o librería
- **Reutilización**: Los formularios personalizados se pueden reutilizar
- **Mantenimiento**: Separación clara entre lógica y presentación

## Consideraciones

- **Compatibilidad**: Asegurar que el formulario personalizado mantiene la funcionalidad esperada
- **Validaciones**: Implementar tanto validaciones del lado cliente como del servidor
- **Accesibilidad**: Mantener los estándares de accesibilidad web
- **Responsive**: Asegurar que el formulario funcione en diferentes dispositivos