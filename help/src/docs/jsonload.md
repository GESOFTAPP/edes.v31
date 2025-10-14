# JSOnLoad

## SINTAXIS
```
[JSOnLoad] Mode [ | NomDF/else,... [ | UNIQUE/Condition ] ] ...
```

## DESCRIPCIÓN
Permite insertar código JavaScript que se ejecuta automáticamente cuando la página se carga completamente (evento `onload`). Internamente, el sistema crea la función `_JSOnLoad()` donde se incluye todo el contenido de esta etiqueta, asegurando que el código se ejecute una vez que todos los elementos del DOM estén disponibles.

## PARÁMETROS

| Parámetro | Descripción |
|-----------|-------------|
| **Mode** | Modo de ejecución del código JavaScript |
| **NomDF** | Nombre del formulario de datos o condición específica |
| **else** | Condición alternativa si no se cumple la condición principal |
| **UNIQUE** | Indicador para ejecución única del código |
| **Condition** | Condición específica para la ejecución del código |

## FUNCIONAMIENTO
- Se ejecuta automáticamente cuando la página termina de cargar
- Todo el código se encapsula dentro de la función `_JSOnLoad()`
- Las funciones definidas dentro de JSOnLoad tienen **ámbito local** y solo son accesibles durante la carga
- Se ejecuta después de que todos los elementos HTML estén renderizados
- Ideal para inicialización de componentes que requieren elementos DOM

## ÁMBITO DE VARIABLES Y FUNCIONES
⚠️ **Importante**: Las funciones creadas dentro de JSOnLoad tienen ámbito limitado:

```javascript
[JSOnLoad]
function miFuncionLocal() {
    // Esta función solo será accesible durante la carga
    // No estará disponible para eventos posteriores
}
```

Para funciones globales, use `[JSIni]` en su lugar.

## EJEMPLOS

### Ejemplo básico - Inicialización de elementos
```
[JSOnLoad]
// Configurar elementos después de la carga
document.getElementById('campoTexto').focus();
document.getElementById('mensaje').style.display = 'block';
```

### Ejemplo con condición de formulario
```
[JSOnLoad] | FormularioUsuario
// Solo se ejecuta en el formulario de usuario
var campoUsuario = document.getElementById('usuario');
if (campoUsuario) {
    campoUsuario.focus();
    campoUsuario.select();
}
```

### Ejemplo con función local
```
[JSOnLoad]
function inicializarComponentes() {
    // Función solo accesible durante la carga
    configurarDatePickers();
    validarFormularioInicial();
}
// Ejecutar la función inmediatamente
inicializarComponentes();
```

### Ejemplo con ejecución única
```
[JSOnLoad] | | UNIQUE
// Este código se ejecuta solo una vez, incluso si hay múltiples JSOnLoad
console.log('Inicialización única completada');
localStorage.setItem('appInitialized', 'true');
```

## CASOS DE USO
- **Inicialización de elementos**: Configurar campos, botones y controles
- **Configuración de eventos**: Asignar manejadores de eventos a elementos
- **Validaciones iniciales**: Verificar estado inicial de formularios
- **Configuración de componentes**: Inicializar calendarios, selectores, etc.
- **Carga de datos**: Realizar peticiones AJAX para datos iniciales
- **Configuración de interfaz**: Mostrar/ocultar elementos según condiciones

## DIFERENCIAS CON OTRAS ETIQUETAS

| Etiqueta | Momento de ejecución | Ámbito de funciones |
|----------|---------------------|-------------------|
| **JSIni** | Al interpretar el HTML | Global |
| **JSOnLoad** | Al cargar la página | Local (solo durante carga) |
| **JSHead** | En la sección `<head>` | Global |
| **JSEnd** | Al final del documento | Global |

## ESTRUCTURA INTERNA
El sistema convierte automáticamente:

```javascript
[JSOnLoad]
// Tu código aquí
alert('Página cargada');
```

En:
```javascript
function _JSOnLoad() {
    // Tu código aquí
    alert('Página cargada');
}
// Se ejecuta automáticamente en el evento onload
```

## BUENAS PRÁCTICAS
- Use JSOnLoad para código que requiere elementos DOM completamente cargados
- Para funciones que necesiten ser accesibles globalmente, use JSIni
- Evite definir funciones complejas dentro de JSOnLoad si van a ser llamadas desde otros eventos
- Aproveche las condiciones para ejecutar código específico según el contexto

## NOTAS
⚠️ **Limitaciones**:
- Las funciones definidas dentro de JSOnLoad no estarán disponibles para eventos posteriores
- El código se ejecuta una sola vez al cargar la página
- Use con cuidado en aplicaciones de una sola página (SPA) donde el onload puede no ejecutarse en navegación interna