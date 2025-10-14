# .zIndex()

## SINTAXIS
```javascript
S().zIndex(valor)
```

## DESCRIPCIÓN
Establece la propiedad z-index del elemento para controlar el orden de apilamiento en el eje Z.

## PARÁMETROS
- **valor** (number): Valor numérico del z-index
  - Valores positivos: Elemento por encima
  - Valores negativos: Elemento por debajo
  - `0`: Nivel base

## EJEMPLO
```javascript
// Poner elemento al frente
S("#modal").zIndex(999);

// Poner elemento detrás
S("#fondo").zIndex(-1);

// Nivel intermedio
S("#overlay").zIndex(10);

// Resetear a nivel base
S("#normal").zIndex(0);
```