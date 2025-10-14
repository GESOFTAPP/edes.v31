# .on

## SINTAXIS
```javascript
S().on(eventos, func)
```

## DESCRIPCION
Asigna un manejador de eventos a los elementos seleccionados.

## PARAMETROS
- `eventos`: Nombre del evento o eventos separados por espacios (string)
- `func`: Función a ejecutar cuando se dispare el evento

## EJEMPLO
```javascript
S('#miBoton').on('click', function() {
    console.log('Botón clickeado');
});
```