# .nodeBegin

**SINTAXIS**
```javascript
S().nodeBegin([objParent])
```

**DESCRIPCIÓN**
Inserta un elemento al principio del elemento padre especificado.

**PARÁMETROS**
- `objParent` (opcional): Elemento padre donde insertar. Por defecto es el body.

**EJEMPLO**
```javascript
// Inserta al principio del body
S("<span style='display:inline-block;border:1px solid green'>green</span>").nodeBegin();

// Inserta al principio del objeto especificado
S("<span style='display:inline-block;border:1px solid green'>green</span>").nodeBegin(S("#prueba").obj);

// El objeto se puede definir como cadena
S("<span style='display:inline-block;border:1px solid green'>green</span>").nodeBegin("#prueba");
```