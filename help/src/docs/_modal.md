# .modal

## SINTAXIS
```javascript
S().modal([objectKeys])
```

## DESCRIPCIÓN
Crea o configura un modal con el elemento seleccionado.

## PARÁMETROS
- `objectKeys`: Objeto con configuraciones del modal
  - `css`: Estilos CSS del modal
  - `close`: Función de cierre
  - `function`: Función que recibe parámetros del objeto padre y la tapa

## EJEMPLO
```javascript
S("#miModal").modal({
    css: "z-index: 1000;",
    close: function() { console.log("Modal cerrado"); },
    function: function(padre, tapa) { 
        // Lógica del modal
    }
});
```