# Stop

## Sintaxis

```
[Stop]
```

## Modo

**DESCRIPCION**

## Descripción

Mediante esta etiqueta se para el ciclo de las acciones de las fichas. Es útil cuando queremos que el usuario realice una acción específica (como modificar su clave) y una vez completada, queremos que se termine el proceso.

### Comportamiento

- **En ventana principal**: Detiene el ciclo de acciones de la ficha actual
- **En subventana**: La subventana se cerrará automáticamente después de mostrar el mensaje

### Envío por URL

También se puede enviar la orden mediante URL utilizando el parámetro `_STOP=1`:

```javascript
top.eSWOpen(window, 'edes.php?FmR:tipopersonas.edf&_SEEK&cd_tipopersonas=1&_STOP=1');
```

## Parámetros

Esta etiqueta no requiere parámetros adicionales.

## Ejemplo

### Uso básico
```
[Stop]
```

### Uso en proceso de modificación de clave
```
// Después de que el usuario modifique su clave
Usuario ha modificado su clave correctamente.
[Stop]
```

### Uso con JSEnd
```javascript
[JSEnd]
top.eSWOpen(window, 'edes.php?FmR:tipopersonas.edf&_SEEK&cd_tipopersonas=1&_STOP=1');
```

## Casos de uso comunes

1. **Finalizar procesos de modificación**: Después de actualizar datos críticos como contraseñas
2. **Cerrar subventanas**: Para cerrar ventanas modales después de completar una tarea
3. **Interrumpir flujos**: Cuando se necesita detener un proceso en un punto específico
4. **Control de navegación**: Para evitar que el usuario continúe con acciones no deseadas