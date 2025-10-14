# .toTag

## SINTAXIS
```javascript
S().toTag(tag, saltar)
```

## DESCRIPCIÓN
Navega hacia un elemento específico de tipo tag.

## PARÁMETROS
- `tag`: Tipo de tag hacia el que navegar
- `saltar`: Parámetro para saltar elementos

## EJEMPLO
```javascript
S("#elemento").toTag("div", 1);
S(".item").toTag("span", false);
```