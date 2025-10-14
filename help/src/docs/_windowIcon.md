# .windowIcon

## SINTAXIS
```javascript
S().windowIcon(op, xObj, func)
```

## DESCRIPCION
Gestiona el icono de una ventana.

## PARAMETROS
- `op`: Operación a realizar con el icono
- `xObj`: Objeto o referencia del icono
- `func`: Función a ejecutar relacionada con el icono

## EJEMPLO
```javascript
S().windowIcon('set', 'icon.png', function() {
    console.log('Icono establecido');
});
```