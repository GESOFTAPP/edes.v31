# .isParent

## SINTAXIS
```javascript
S().isParent(oHijo)
```

## DESCRIPCIÓN
Verifica si el elemento actual es padre del elemento especificado.

## PARÁMETROS
- `oHijo`: Elemento hijo a verificar

## EJEMPLO
```javascript
if (S("#contenedor").isParent("#elemento")) {
    console.log("Es padre");
}
```