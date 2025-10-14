# .info

**SINTAXIS**
```javascript
S().info(txt, sg, error)
```

**DESCRIPCIÓN**
Muestra un mensaje informativo.

**PARÁMETROS**
- `txt`: Texto del mensaje
- `sg`: Segundo parámetro (configuración)
- `error`: Indicador de tipo de mensaje

**EJEMPLO**
```javascript
S("#contenedor").info("Operación completada", "success", false);
```