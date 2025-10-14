# .calendar

**SINTAXIS**
```javascript
S().calendar(o)
```

**DESCRIPCIÓN**
Crea un calendario interactivo.

**PARÁMETROS**
- `o`: Objeto de configuración del calendario

**EJEMPLO**
```javascript
S("#contenedor-calendario").calendar({
    fecha: new Date(),
    formato: "dd/mm/yyyy"
});
```