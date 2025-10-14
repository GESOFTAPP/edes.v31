# .nodeBefore

**SINTAXIS**
```javascript
S().nodeBefore(oAqui)
```

**DESCRIPCIÓN**
Inserta un elemento antes del elemento especificado.

**PARÁMETROS**
- `oAqui`: Elemento antes del cual se insertará el nodo

**EJEMPLO**
```javascript
S("<span>Nuevo elemento</span>").nodeBefore("#elemento-existente");
S("<div>Contenido</div>").nodeBefore(S("#referencia").obj);
```