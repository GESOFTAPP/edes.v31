# .display()

## SINTAXIS
```javascript
S().display(x)
```

## DESCRIPCIÓN
"x": puede ser 0/1/false/true/none/block y sin parámetros pondrá al objeto al contrario de como esté.

## PARÁMETROS
- **x** (opcional): Controla la visualización del elemento
  - `0` o `false`: Oculta el elemento
  - `1` o `true`: Muestra el elemento
  - `"none"`: Oculta el elemento
  - `"block"`: Muestra el elemento como bloque
  - Sin parámetro: Alterna el estado actual

## EJEMPLO
```javascript
// Ocultar elemento
S("#miDiv").display(0);
S("#miDiv").display("none");

// Mostrar elemento
S("#miDiv").display(1);
S("#miDiv").display("block");

// Alternar visualización
S("#miDiv").display(); // Toggle
```