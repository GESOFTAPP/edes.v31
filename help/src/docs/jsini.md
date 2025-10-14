# JSIni

## SINTAXIS
```
[JSIni] Mode [ | NomDF/else,... [ | UNIQUE/Condition ] ] ...
```

## DESCRIPCIÓN
Permite insertar código JavaScript personalizado después de la etiqueta. Esta etiqueta se ejecuta en la inicialización del documento y permite definir funciones, variables y lógica JavaScript que será utilizada en el lado del cliente.

## PARÁMETROS

| Parámetro | Descripción |
|-----------|-------------|
| **Mode** | Modo de ejecución del código JavaScript |
| **NomDF** | Nombre del formulario de datos o condición específica |
| **else** | Condición alternativa si no se cumple la condición principal |
| **UNIQUE** | Indicador para ejecución única del código |
| **Condition** | Condición específica para la ejecución del código |

## FUNCIONAMIENTO
- Se ejecuta durante la inicialización del documento HTML
- Permite definir funciones JavaScript globales
- El código se inserta directamente en el HTML generado
- Soporta condiciones para ejecución condicional
- Puede utilizarse múltiples veces en el mismo documento

## ESTRUCTURA DEL CÓDIGO
El código JavaScript debe colocarse inmediatamente después de la etiqueta JSIni:

```
[JSIni] parametros
<script>
// Código JavaScript aquí
function miFuncion() {
    // Lógica de la función
}
</script>
```

## EJEMPLOS

### Ejemplo básico
```
[JSIni]
<script>
function validarFormulario() {
    alert('Validando formulario...');
    return true;
}
</script>
```

### Ejemplo con condición
```
[JSIni] | FormularioUsuario
<script>
function inicializarUsuario() {
    document.getElementById('usuario').focus();
}
</script>
```

### Ejemplo con ejecución única
```
[JSIni] | | UNIQUE
<script>
var configuracionGlobal = {
    version: '1.0',
    debug: true
};
</script>
```

## CASOS DE USO
- **Validaciones de formulario**: Crear funciones de validación personalizadas
- **Inicialización de componentes**: Configurar elementos de la interfaz
- **Variables globales**: Definir configuraciones compartidas
- **Funciones auxiliares**: Crear utilidades JavaScript reutilizables
- **Eventos personalizados**: Configurar manejadores de eventos específicos

## RELACIÓN CON OTRAS ETIQUETAS
- **JSHead**: Para código JavaScript en la sección `<head>`
- **JSEnd**: Para código JavaScript al final del documento
- **JSOnLoad**: Para código que se ejecuta cuando la página se carga completamente
- **JSCheck**: Para validaciones específicas de formularios

## NOTAS
⚠️ **Importante**: 
- El código JavaScript se ejecuta en el orden en que aparecen las etiquetas JSIni
- Asegúrese de que las funciones estén disponibles antes de ser llamadas
- Use condiciones para evitar conflictos en formularios específicos