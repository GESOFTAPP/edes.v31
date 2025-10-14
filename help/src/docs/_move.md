# .move

## SINTAXIS
```javascript
S().move(zona, captura, p)
```

## DESCRIPCIÓN
Permite mover elementos arrastrándolos por la página.

## PARÁMETROS
- `zona`: Zona donde se puede arrastrar
- `captura`: Elemento que captura el movimiento
- `p`: Parámetros adicionales

## EJEMPLO
```javascript
S("#ventana").move("#cabecera", true, {
    constrainTo: "#contenedor"
});
```