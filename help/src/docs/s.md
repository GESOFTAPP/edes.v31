# S

## SINTAXIS
```javascript
S( query [ , context ] )
S."metodo( ... )"
```

## DESCRIPCIÓN
Función de acceso al motor javascript. Permite seleccionar elementos del DOM y aplicar métodos sobre ellos, similar a jQuery pero usando S como selector principal.

## PARÁMETROS
- **query** (string): Selector CSS para encontrar elementos
- **context** (optional): Contexto donde buscar los elementos

## EJEMPLO
```javascript
// Seleccionar elemento por ID
S('#miElemento')

// Seleccionar por clase
S('.miClase')

// Seleccionar con contexto
S('p', document.getElementById('contenedor'))

// Usar hide()
S('#miElemento').hide()

// Usar show()
S('.miClase').show()

// Usar addClass()
S('p').addClass('activo')

// Encadenar métodos
S('#miElemento').hide().show().addClass('oculto')
```