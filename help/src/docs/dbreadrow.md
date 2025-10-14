# DBReadRow

## Sintaxis

```
[DBReadRow] Mode | NmFunction
```

## Descripción

En los listados, antes de generar cada fila, ejecuta una función de usuario que permite aplicar un filtro adicional o modificar los datos a mostrar. La función debe devolver un valor lógico indicando si el registro se mostrará o no.

Esta etiqueta proporciona un control granular sobre qué registros se muestran en el listado, más allá de los filtros estándar de la consulta SQL.

## Parámetros

| Parámetro | Descripción |
|-----------|-------------|
| **Mode** | Modo de operación del listado |
| **NmFunction** | Nombre de la función de usuario a ejecutar |

### Función de usuario

La función debe tener la siguiente estructura:

```javascript
function nombreFuncion(registro) {
    // Lógica de filtrado o modificación
    return true;  // Mostrar el registro
    // return false; // No mostrar el registro
}
```

## Comportamiento

1. **Ejecución**: Se ejecuta antes de generar cada fila del listado
2. **Filtrado**: Permite ocultar registros que cumplan ciertos criterios
3. **Modificación**: Permite alterar los datos antes de mostrarlos
4. **Control granular**: Opera a nivel de registro individual

## Casos de uso

### Filtrado avanzado
- Aplicar lógica de negocio compleja para mostrar/ocultar registros
- Filtros que dependen de múltiples campos
- Condiciones que no se pueden expresar fácilmente en SQL

### Modificación de datos
- Formateo especial de campos antes de mostrar
- Cálculos dinámicos basados en otros campos
- Aplicación de reglas de presentación específicas

### Control de acceso
- Mostrar/ocultar registros según permisos del usuario
- Aplicar filtros de seguridad a nivel de fila

## Ejemplo básico

```
[DBReadRow] l | filtrarRegistros

[JSIni] l
function filtrarRegistros(registro) {
    // Ejemplo: solo mostrar registros con estado activo
    if (registro.estado == 'A') {
        return true;  // Mostrar registro
    }
    return false;     // No mostrar registro
}
```

## Ejemplo con modificación de datos

```
[DBReadRow] l | procesarFila

[JSIni] l
function procesarFila(registro) {
    // Modificar datos antes de mostrar
    if (registro.precio) {
        registro.precio_formateado = formatearPrecio(registro.precio);
    }
    
    // Aplicar filtro
    return registro.visible == '1';
}
```

## Ejemplo con lógica compleja

```
[DBReadRow] l | validarAcceso

[JSIni] l
function validarAcceso(registro) {
    // Lógica compleja de filtrado
    var mostrar = true;
    
    // Filtro por fecha
    if (registro.fecha_caducidad && new Date(registro.fecha_caducidad) < new Date()) {
        mostrar = false;
    }
    
    // Filtro por permisos de usuario
    if (registro.nivel_acceso > usuarioActual.nivel) {
        mostrar = false;
    }
    
    // Modificar datos si se va a mostrar
    if (mostrar && registro.descripcion) {
        registro.descripcion = registro.descripcion.toUpperCase();
    }
    
    return mostrar;
}
```

## Consideraciones importantes

- **Rendimiento**: La función se ejecuta para cada registro, por lo que debe ser eficiente
- **Orden de ejecución**: Se ejecuta antes de aplicar otros formateos del listado
- **Acceso a datos**: Tiene acceso a todos los campos del registro actual
- **Modificaciones**: Los cambios realizados solo afectan a la visualización, no a la base de datos
- **Compatibilidad**: Funciona con todas las otras etiquetas de listado

## Ventajas

- **Flexibilidad**: Permite aplicar cualquier lógica de filtrado o modificación
- **Granularidad**: Control a nivel de registro individual
- **Dinámico**: Puede usar variables de sesión, contexto del usuario, etc.
- **No invasivo**: No modifica los datos originales en la base de datos

## Limitaciones

- **Rendimiento**: Puede afectar el rendimiento en listados muy grandes
- **Debugging**: Errores en la función pueden afectar todo el listado
- **Mantenimiento**: La lógica está separada de la consulta SQL principal