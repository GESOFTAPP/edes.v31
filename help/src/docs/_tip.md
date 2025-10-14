# .tip

**SINTAXIS**
```javascript
S().tip(txt, sg, error, soloRecuadro)
```

**DESCRIPCIÓN**
Muestra un mensaje tipo tip o consejo.

**PARÁMETROS**
- `txt`: Texto del tip
- `sg`: Segundo parámetro de configuración
- `error`: Indicador de tipo de mensaje
- `soloRecuadro`: Booleano para mostrar solo el recuadro

**EJEMPLO**
```javascript
S("#elemento").tip("Consejo útil", "info", false, true);
```