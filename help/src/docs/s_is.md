# S.is

## SINTAXIS
```javascript
S.is(c, txt [, contiene/L/R])
```

## DESCRIPCIÓN
Realiza comparaciones de texto con diferentes opciones de búsqueda.

## PARÁMETROS
- `c` (string): Carácter o cadena a buscar
- `txt` (string): Texto donde buscar
- `contiene/L/R` (string, opcional): Tipo de búsqueda
  - `contiene`: Búsqueda por contenido
  - `L`: Búsqueda por la izquierda (Left)
  - `R`: Búsqueda por la derecha (Right)

## EJEMPLO
```javascript
// Verificar si contiene
if (S.is('admin', usuario, 'contiene')) {
    console.log('Usuario es administrador');
}

// Verificar inicio (Left)
if (S.is('www', url, 'L')) {
    console.log('URL comienza con www');
}
```