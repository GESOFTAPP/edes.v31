# .sequence

## SINTAXIS
```javascript
S().sequence(evento)
```

## DESCRIPCIÓN
Ejecuta una secuencia de eventos en el elemento.

## PARÁMETROS
- `evento`: Evento o secuencia de eventos a ejecutar

## EJEMPLO
```javascript
S("#animacion").sequence("fadeIn fadeOut");
```