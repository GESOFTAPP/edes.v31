# .css()

## SINTAXIS
```javascript
S().css(dim, valor)
```

## DESCRIPCIÓN
Establece una propiedad CSS en el elemento seleccionado

## PARÁMETROS
- **dim** (string): Nombre de la propiedad CSS
- **valor** (string): Valor a asignar a la propiedad

## EJEMPLO
```javascript
// Establecer color de texto
S("#miDiv").css("color", "red");

// Establecer ancho
S(".container").css("width", "100px");

// Establecer múltiples propiedades
S("p").css("font-size", "16px");
S("p").css("margin", "10px");
```