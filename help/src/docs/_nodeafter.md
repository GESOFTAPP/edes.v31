# .nodeAfter

**SINTAXIS**
```javascript
S().nodeAfter(oAqui)
```

**DESCRIPCIÓN**
Inserta un elemento después del elemento especificado.

**PARÁMETROS**
- `oAqui`: Elemento después del cual se insertará el nodo

**EJEMPLO**
```javascript
S("<span>Nuevo elemento</span>").nodeAfter("#elemento-existente");
S("<div>Contenido</div>").nodeAfter(S("#referencia").obj);
```