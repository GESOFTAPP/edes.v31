# .fixed()

## SINTAXIS
```javascript
S().fixed(x, y)
```

## DESCRIPCIÓN
Posiciona el elemento de forma fija en la ventana del navegador usando `position: fixed` y establece las coordenadas left y top.

## PARÁMETROS
- **x** (number): Posición horizontal desde el borde izquierdo de la ventana (en píxeles)
- **y** (number): Posición vertical desde el borde superior de la ventana (en píxeles)

## EJEMPLO
```javascript
// Posicionar en esquina superior izquierda
S("#menu").fixed(0, 0);

// Posicionar en esquina superior derecha (necesita ajustar con CSS adicional)
S("#boton").fixed(10, 10);

// Crear overlay fijo
S("#overlay").fixed(0, 0);

// Barra de navegación fija
S("#navbar").fixed(0, 0);

// Botón flotante en esquina inferior derecha
S("#flotante").fixed(20, 20); // Luego ajustar con right y bottom en CSS
```