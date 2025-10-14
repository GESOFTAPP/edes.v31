# S.write

## SINTAXIS
```javascript
S.write(w, obj, txt)
```

## DESCRIPCIÓN
Escribe o inserta texto en un elemento del DOM. Permite especificar dónde escribir (w), en qué objeto (obj) y qué texto insertar (txt). Útil para manipular dinámicamente el contenido de elementos HTML.

## PARÁMETROS
- **w** (string): Define dónde escribir el texto (ej: 'html', 'append', 'prepend', 'after', 'before')
- **obj** (element|string): El elemento DOM o selector donde se va a escribir
- **txt** (string): El texto o contenido HTML que se va a insertar

## EJEMPLO
```javascript
// Escribir contenido HTML en un elemento
S.write('html', '#miDiv', '<p>Nuevo contenido</p>');

// Agregar texto al final de un elemento
S.write('append', '.lista', '<li>Nuevo elemento</li>');

// Insertar texto al principio
S.write('prepend', '#contenedor', '<h1>Título principal</h1>');
```