# S.createHTML

## SINTAXIS
```javascript
S.createHTML(html, win)
```

## DESCRIPCIÓN
Crea elementos HTML dinámicamente en el DOM de una ventana específica.

## PARÁMETROS
- `html` (string): Código HTML a crear
- `win` (Window): Objeto ventana donde crear el HTML

## EJEMPLO
```javascript
S.createHTML('<div class="mensaje">Hola mundo</div>', window);
```