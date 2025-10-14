# .nodeEnd

**SINTAXIS**
```javascript
S().nodeEnd([objParent])
```

**DESCRIPCIÓN**
Inserta un elemento al final de un elemento padre.

**PARÁMETROS**
- `objParent` (opcional): Elemento padre donde insertar. Por defecto es el body.

**EJEMPLO**
```javascript
// Inserta al final del body
S("<span style='display:inline-block;border:1px solid green'>green</span>").nodeEnd();

// Inserta al final del objeto especificado
S("<span style='display:inline-block;border:1px solid green'>green</span>").nodeEnd(S("#prueba").obj);

// El objeto se puede definir como cadena
S("<span style='display:inline-block;border:1px solid green'>green</span>").nodeEnd("#prueba");
```