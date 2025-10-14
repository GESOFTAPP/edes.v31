# .cssVal()

## SINTAXIS
```javascript
S().cssVal(prop)
```

## DESCRIPCIÓN
Obtiene el valor de la propiedad del css de un objeto

## PARÁMETROS
- **prop** (string): Nombre de la propiedad CSS a obtener

## EJEMPLO
```javascript
S(".Class").cssVal("color")
// Obtiene el color del objeto ".Class"

// Otros ejemplos
S("#miDiv").cssVal("width");
S(".container").cssVal("margin-top");
S("p").cssVal("font-size");
```