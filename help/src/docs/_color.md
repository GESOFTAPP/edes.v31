# .color()

## SINTAXIS
```javascript
S().color(lapiz, papel)
```

## DESCRIPCIÓN
Establece los colores de texto y fondo de un elemento

## PARÁMETROS
- **lapiz** (string): Color del texto (foreground)
- **papel** (string, opcional): Color de fondo (background)

## EJEMPLO
```javascript
// Solo color de texto
S("#miDiv").color("red");

// Color de texto y fondo
S("#miDiv").color("white", "black");

// Con nombres de colores
S(".texto").color("blue", "yellow");

// Con códigos hexadecimales
S("p").color("#333", "#f0f0f0");
```