# JSHead

## SINTAXIS

```
[JSHead] Mode [ | NomDF/else,... [ | UNIQUE/Condition ] ] ...
```

## DESCRIPCIÓN

Añade código JavaScript al final de la etiqueta `<head>` del documento HTML. Esta funcionalidad permite insertar scripts personalizados que se ejecutarán antes de que se cargue el contenido de la página.

### Características especiales
En todas las etiquetas multilínea de JavaScript se pueden asignar variables PHP de las siguientes formas:
- **Formato 1**: `{$variable}` 
- **Formato 2**: `{$variable;}` (con punto y coma al final)

## PARÁMETROS

### Mode
Especifica el modo en el que está activa la etiqueta:

| Valor | Descripción |
|-------|-------------|
| `*` | Todos los modos |
| `a` | Modo alta (creación) |
| `m` | Modo modificación |
| `R` | Modo consulta/lectura |
| `c` | Modo consulta |
| `?` | Fichas de consulta |

### NomDF/else (opcional)
- **Tipo**: Cadena condicional
- **Descripción**: Nombre del campo o condición alternativa
- **Formato**: Puede incluir múltiples valores separados por comas

### UNIQUE/Condition (opcional)
- **Tipo**: Cadena
- **Descripción**: Condición única o específica para la ejecución
- **UNIQUE**: Ejecuta el código solo una vez
- **Condition**: Condición personalizada

## EJEMPLOS

### Ejemplo 1: Variable global simple
```javascript
[JSHead] *
_ChrDni = "XIPD";
```
Define una variable JavaScript global `_ChrDni` en todos los modos.

### Ejemplo 2: Variables con datos PHP
```javascript
[JSHead] cR
var precio = {$precio_producto};
var descuento = {$descuento_aplicado;};
var total = {$total_final};
```
En modos de consulta, asigna valores PHP a variables JavaScript.

### Ejemplo 3: Código JavaScript multilínea
```javascript
[JSHead] *
// Configuración global
var configApp = {
    version: "{$app_version}",
    debug: {$debug_mode;},
    usuario: "{$usuario_actual}"
};

// Función de utilidad
function formatearPrecio(precio) {
    return "€" + precio.toFixed(2);
}

// Inicialización
document.addEventListener('DOMContentLoaded', function() {
    console.log('Aplicación iniciada v' + configApp.version);
});
```

### Ejemplo 4: JavaScript condicional
```javascript
[JSHead] m | campo_activo | UNIQUE
if (typeof validacionEspecial === 'undefined') {
    function validacionEspecial() {
        var valor = {$valor_campo};
        return valor > 0 && valor < 1000;
    }
}
```

### Ejemplo 5: Librerías y configuraciones
```javascript
[JSHead] *
// Configuración de librerías externas
var chartConfig = {
    data: {$datos_graficos;},
    options: {
        responsive: true,
        maintainAspectRatio: false
    }
};

// Configuración de validación
var validationRules = {
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    telefono: /^[0-9]{9}$/,
    dni: "{$patron_dni}"
};
```

## MEJORES PRÁCTICAS

### Inserción de variables PHP
```javascript
// ✅ Correcto - Variables numéricas
var cantidad = {$cantidad};
var precio = {$precio;};

// ✅ Correcto - Variables de texto (con comillas)
var nombre = "{$nombre_usuario}";
var descripcion = "{$descripcion_producto}";

// ✅ Correcto - Variables booleanas
var activo = {$campo_activo} ? true : false;
```

### Gestión de errores
```javascript
[JSHead] *
// Manejo seguro de variables PHP
var datosUsuario = {
    id: {$user_id} || 0,
    nombre: "{$user_name}" || "Invitado",
    permisos: {$user_permissions;} || []
};
```

### Funciones de utilidad
```javascript
[JSHead] *
// Funciones globales útiles
window.AppUtils = {
    formatearFecha: function(fecha) {
        return new Date(fecha).toLocaleDateString();
    },
    
    validarFormulario: function(formId) {
        var form = document.getElementById(formId);
        return form.checkValidity();
    },
    
    mostrarError: function(mensaje) {
        console.error('Error:', mensaje);
        // Lógica adicional de manejo de errores
    }
};
```

## CASOS DE USO COMUNES

- **Configuración global**: Variables y constantes accesibles desde cualquier script
- **Datos dinámicos**: Pasar información PHP al frontend JavaScript
- **Librerías externas**: Configuración de bibliotecas como Chart.js, DataTables, etc.
- **Validación**: Reglas de validación basadas en configuración del servidor
- **Inicialización**: Código que debe ejecutarse antes de la carga de la página
- **APIs**: Configuración de endpoints y parámetros de API

## NOTAS IMPORTANTES

- El código se inserta en el `<head>`, por lo que se ejecuta antes del DOM
- Las variables PHP se interpolan en tiempo de renderizado
- Usar `UNIQUE` para evitar la duplicación de código en múltiples renderizados
- Siempre validar y escapar las variables PHP para evitar problemas de seguridad