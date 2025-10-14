# PersistentVar

## Sintaxis

```
[PersistentVar] NomVar[ ,NomVar, ...]
```

## Descripción

Preserva el valor de la variable que se envíe por URL por todos los modos. Estas variables deben empezar por barra baja, se especifica el nombre de variable sin "$", y el nombre no puede coincidir con ningún campo del formulario. Si es una multificha se pondrá en el GDF.

## Parámetros

| Parámetro | Tipo | Descripción | Requerido | Valor por defecto |
|-----------|------|-------------|-----------|-------------------|
| NomVar | String | Nombre de la variable (sin $ y debe empezar por _) | Sí | - |

## Reglas importantes

- Las variables deben empezar por barra baja (_)
- Se especifica el nombre sin el símbolo "$"
- El nombre no puede coincidir con ningún campo del formulario
- En multifichas se define en el archivo GDF
- Se mantiene el valor a través de todos los modos del formulario

## Ejemplos

### Ejemplo básico

**Opción de menú:**
```
Opción de Menú | #c:script.edf?_NmVar=123
```

**En el script "script.edf":**
```
[PersistentVar] _NmVar

¿ $_NmVar==123 ?
    [Title] Formulario para Variable 123
¿ else ?
    [Title] Formulario General
¿ fin ?
```

### Ejemplo con múltiples variables
```
[PersistentVar] _TipoUsuario, _Empresa, _Sucursal

[DBTable] usuarios
[DBIndex] id

¿ $_TipoUsuario == 'admin' ?
    [Fields] m
        Login     | login      | @ | T | 30 | | M | | # |
        Password  | password   | X | P | 20 | | M | | # |
        Empresa   | cd_empresa | # | SV| 50 | | M | | # |
¿ else ?
    [Fields] m
        Login     | login      | @ | T | 30 | | M | | # |
        Password  | password   | X | P | 20 | | M | | # |
¿ fin ?
```

### Ejemplo en multificha (GDF)
**Archivo: usuarios.gdf**
```
[PersistentVar] _Departamento, _NivelAcceso

[Title] Gestión de Usuarios - Departamento: $_Departamento

[GroupForm]
    Datos Personales | usuarios_datos.edf
    Permisos        | usuarios_permisos.edf
    Configuración   | usuarios_config.edf
```

### Llamada desde menú con parámetros
```
Usuarios Admin    | GmR:usuarios.gdf?_TipoUsuario=admin&_NivelAcceso=1
Usuarios Básicos  | GmR:usuarios.gdf?_TipoUsuario=user&_NivelAcceso=3
Usuarios Invitados| GcR:usuarios.gdf?_TipoUsuario=guest&_NivelAcceso=5
```

### Ejemplo con validación condicional
```
[PersistentVar] _ModuloActivo

[DBTable] configuracion
[DBIndex] id

¿ $_ModuloActivo == 'facturacion' ?
    [Fields] m
        -             | Configuración Facturación |   |   |    |  |   |  |   |
        Serie Facturas| serie_facturas            | X | T | 10 |  | M |  | # |
        IVA Defecto   | iva_defecto              | # | N | 5,2|  | M |  | # |
        Numeración    | auto_numeracion          | # | C | 1  |  | M |  | # |
¿ $_ModuloActivo == 'inventario' ?
    [Fields] m
        -               | Configuración Inventario |   |   |    |  |   |  |   |
        Control Stock   | control_stock           | # | C | 1  |  | M |  | # |
        Alertas Mínimo  | alertas_minimo          | # | C | 1  |  | M |  | # |
        Costo Promedio  | costo_promedio          | # | C | 1  |  | M |  | # |
¿ else ?
    [Fields] m
        -          | Configuración General |   |   |    |  |   |  |   |
        Empresa    | nombre_empresa       | X | T | 100|  | M |  | # |
        Dirección  | direccion            | X | A | 200|  | M |  | # |
¿ fin ?
```

### Uso en JavaScript
```
[PersistentVar] _IdCliente

[JSIni] ?
    function validarCliente() {
        var idCliente = <?php echo json_encode($_PersistentVar['_IdCliente'] ?? ''); ?>;
        if (idCliente) {
            // Lógica específica para el cliente
            console.log('Cliente ID: ' + idCliente);
        }
    }
```

## Casos de uso comunes

1. **Filtros por contexto**: Mantener filtros específicos entre modos
2. **Configuración por usuario**: Personalizar formularios según tipo de usuario
3. **Módulos específicos**: Adaptar formularios según módulo activo
4. **Jerarquías**: Mantener relaciones padre-hijo entre formularios
5. **Estados de aplicación**: Preservar estado específico de la aplicación
6. **Parámetros de configuración**: Mantener configuraciones específicas

## Ventajas

- **Persistencia**: Los valores se mantienen entre cambios de modo
- **Flexibilidad**: Permite formularios dinámicos según contexto
- **Simplicidad**: Fácil implementación de comportamientos condicionales
- **Reutilización**: Un mismo script puede comportarse diferente según parámetros

## Notas técnicas

- Las variables se mantienen en la sesión del formulario
- Compatible con todos los modos (consulta, modificación, etc.)
- Se pueden combinar con condiciones PHP para crear formularios dinámicos
- Útil para crear aplicaciones modulares y configurables