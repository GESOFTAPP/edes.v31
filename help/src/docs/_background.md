# .background()

## SINTAXIS
```javascript
S().background(valor)
```

## DESCRIPCIÓN
Establece el "background" de un objeto.

## PARÁMETROS
- **valor** (string): Valor del background (color, imagen, etc.)

## EJEMPLO
```javascript
S("#objeto").background("red");

// Otros ejemplos
S("#miDiv").background("blue");
S(".container").background("#f0f0f0");
S("body").background("url('imagen.jpg')");
S("#header").background("linear-gradient(to right, red, blue)");
```