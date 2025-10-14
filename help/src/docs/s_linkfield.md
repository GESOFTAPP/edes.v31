# S.linkField

## SINTAXIS
```javascript
S.linkField(o)
```

## DESCRIPCIÓN
Establece una vinculación entre campos de formulario, creando dependencias o relaciones entre elementos.

## PARÁMETROS
- `o` - Objeto de configuración que define la vinculación entre campos

## EJEMPLO
```javascript
// Vincular campo precio con campo total
S.linkField({
    origen: 'precio',
    destino: 'total',
    operacion: 'multiplicar',
    factor: 1.21
});

// Vincular campos de dirección
S.linkField({
    origen: 'codigoPostal',
    destino: ['ciudad', 'provincia'],
    tipo: 'busqueda'
});
```