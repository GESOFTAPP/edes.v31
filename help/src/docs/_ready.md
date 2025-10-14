# .ready

## SINTAXIS
```javascript
S().ready(func)
```

## DESCRIPCIÓN
Ejecuta una función cuando el documento está listo.

## PARÁMETROS
- `func`: Función a ejecutar cuando el DOM esté listo

## EJEMPLO
```javascript
S(document).ready(function() {
    console.log("DOM listo");
    // Inicializar aplicación
});
```