# S.serialize

## SINTAXIS
```javascript
S.serialize(dim)
```

## DESCRIPCIÓN
Serializa datos complejos (objetos, arrays) en una cadena de texto para almacenamiento o transmisión.

## PARÁMETROS
- `dim` (object|array): Datos a serializar

## EJEMPLO
```javascript
S.serialize({name: "Juan", age: 30})      // "name=Juan&age=30"
S.serialize([1, 2, 3, 4])                 // "0=1&1=2&2=3&3=4"
S.serialize({items: ["a", "b"]})          // "items[0]=a&items[1]=b"
```