# FormAction

## Sintaxis

```
[FormAction] Mode | Action [ | AnAction ]
```

## Descripción

La etiqueta `FormAction` permite modificar el valor por defecto de la acción del formulario, especificando una URL o función personalizada a ejecutar en lugar de la acción predeterminada.

### Características importantes

- **Desactivación automática**: Por defecto desactiva la etiqueta `[FormButtons]`
- **Variables PHP**: Permite usar variables PHP sin `$` encerradas entre llaves `{variable}`
- **Limitación con funciones**: Si `Action` es una función, no se puede llamar a `eOkTab()` desde ella
- **Alternativa**: Para casos que requieran `eOkTab()`, usar `[MsgSubmit]` en lugar de `[FormAction]`
- **Anulación**: Esta etiqueta es anulada por `[OptionsInList]`

## Parámetros

| Parámetro | Descripción | Obligatorio |
|-----------|-------------|-------------|
| **Mode** | Modo en el que se ejecutará la etiqueta | ✓ |
| **Action** | Orden a ejecutar (ver tipos de acción) | ✓ |
| **AnAction** | Palabra clave para dejar solo la acción principal | ✗ |

## Tipos de Action

### 1. Script a ejecutar
Ejecuta un script PHP específico.

### 2. Función a ejecutar
Llama a una función JavaScript personalizada.

### 3. Variable JavaScript
Una variable que contiene el valor a ejecutar.

### 4. Auto-completado de rutas
Si `Action` termina en `:`, se añade automáticamente:
- El nombre del script
- `edes.php?` si no está presente

### 5. Palabras clave especiales

| Palabra clave | Descripción |
|---------------|-------------|
| **SubList** | Divide la pantalla: ficha de búsqueda arriba, listado abajo con opciones de mantenimiento |
| **NoSubList** | Desactiva la ejecución de sublista con botón derecho |
| **DOWNLOAD** | Acción de descarga |

## Ejemplos de uso

### Variables PHP
```
[FormAction] c | {_ExeExtract}
```
Usa una variable PHP llamada `_ExeExtract`.

### Scripts específicos
```
[FormAction] cR | edes.php?E:facura/recuento.php
[FormAction] c  | edes.php?Fc:auto.edf
```
Ejecuta scripts específicos con diferentes operaciones.

### Funciones JavaScript
```
[FormAction] a | FunctionJS()
```
Llama a una función JavaScript personalizada.

### Auto-completado de rutas
```
[FormAction] c | Ll:
[FormAction] c | edes.php?Ll:
[FormAction] c | Fc:auto.edf
```
El sistema completa automáticamente las rutas.

### Funcionalidades especiales
```
[FormAction] c | SubList
[FormAction] c | DOWNLOAD
[FormAction] * |  | AnAction
```

## Ejemplo avanzado con confirmación

### Definición de la acción
```
[FormAction] mR | MostrarConfirmacion()
```

### Implementación JavaScript
```javascript
[JSIni] mR
    function MostrarConfirmacion(){
        // Lógica de validación previa
        // ...
        
        // Mostrar diálogo de confirmación
        top.eAlert("MENSAJE", "Confirmar Submit", "accept,cancel", "sys_info.gif", uSubmit);
    }
    
    function uSubmit(Op){
        if(Op == 2) {
            // Usuario confirmó la acción
            eSubmit('edes.php?FM:[script].edf');
        }
        // Si Op != 2, el usuario canceló
    }
```

## Casos de uso comunes

### Validación previa
```javascript
[FormAction] mR | ValidarAntesDeProcesar()

[JSIni] mR
    function ValidarAntesDeProcesar(){
        if(validarDatos()){
            eSubmit('edes.php?FM:procesar.edf');
        } else {
            top.eAlert("Error", "Datos inválidos", "accept", "error.gif");
        }
    }
```

### Procesamiento personalizado
```
[FormAction] cR | edes.php?E:reportes/generar_informe.php
```

### Descarga de archivos
```
[FormAction] c | DOWNLOAD
```

### Interfaz dividida
```
[FormAction] c | SubList
```
Útil para formularios de búsqueda que necesitan mostrar resultados inmediatamente.

### Solo acción principal
```
[FormAction] mR | ProcessForm() | AnAction
```
Elimina acciones secundarias del botón submit.

## Flujo de trabajo típico

### 1. Definir la acción
```
[FormAction] mR | MiAccionPersonalizada()
```

### 2. Implementar la función
```javascript
[JSIni] mR
    function MiAccionPersonalizada(){
        // Validaciones
        // Procesamiento
        // Redirección o mensaje
    }
```

### 3. Manejar respuestas
```javascript
function ManejarRespuesta(resultado){
    if(resultado.success){
        top.eAlert("Éxito", "Operación completada", "accept", "success.gif");
    } else {
        top.eAlert("Error", resultado.message, "accept", "error.gif");
    }
}
```

## Consideraciones importantes

### Variables PHP
- Las variables deben estar disponibles en el contexto de ejecución
- No usar el símbolo `$` dentro de las llaves
- Pueden formar parte de cadenas más largas

### Funciones JavaScript
- Deben estar definidas antes de ser llamadas
- No pueden usar `eOkTab()` directamente
- Para casos complejos, considerar usar `[MsgSubmit]`

### Compatibilidad
- Verificar compatibilidad con otras etiquetas del formulario
- `[OptionsInList]` anula esta etiqueta
- Por defecto desactiva `[FormButtons]`

## Ventajas

- **Flexibilidad**: Control total sobre la acción del formulario
- **Personalización**: Permite lógica de negocio específica
- **Integración**: Fácil integración con JavaScript y PHP
- **Validación**: Posibilidad de validaciones previas al envío