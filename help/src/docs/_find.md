# .find

## SINTAXIS
```javascript
S().find(selector, context)
```

## DESCRIPCIÓN
Busca elementos dentro del contexto actual usando un selector.

## PARÁMETROS
- `selector`: Selector CSS para buscar elementos
- `context`: Contexto donde buscar (opcional)

## EJEMPLO
```javascript
S("#contenedor").find(".item");
S(document).find("div.especial", "#seccion");
```