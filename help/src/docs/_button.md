# .button

## SINTAXIS
```javascript
S().button(prm)
```

## DESCRIPCIÓN
Configura o crea elementos de tipo botón.

## PARÁMETROS
- `prm`: Parámetros de configuración del botón

## EJEMPLO
```javascript
S("#miBoton").button({
    text: "Hacer clic",
    onclick: function() { alert("Botón presionado"); }
});
```