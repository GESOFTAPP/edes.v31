# .toScroll()

## SINTAXIS
```javascript
S().toScroll(x, y)
```

## DESCRIPCIÓN
Hace scroll del elemento o la ventana a las coordenadas especificadas.

## PARÁMETROS
- **x** (number): Posición horizontal del scroll (píxeles desde la izquierda)
- **y** (number): Posición vertical del scroll (píxeles desde arriba)

## EJEMPLO
```javascript
// Scroll al inicio de la página
S(window).toScroll(0, 0);

// Scroll a posición específica
S(window).toScroll(0, 500);

// Scroll horizontal y vertical
S("#contenedor").toScroll(100, 200);

// Solo scroll vertical
S(document.body).toScroll(0, 1000);

// Scroll a elemento específico (aproximado)
S(window).toScroll(0, S("#seccion").offsetTop);
```