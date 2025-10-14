# AddLTools

## Sintaxis
```
[AddLTools] [icon] Label | function
```

## Descripción
Añade opciones personalizadas al icono de opciones del listado. Permite agregar herramientas adicionales que aparecen en el menú contextual de opciones de las listas, mejorando la funcionalidad disponible para el usuario.

## Parámetros

| Parámetro | Tipo | Descripción |
|-----------|------|-------------|
| `icon` | String | (Opcional) Icono a mostrar junto a la opción |
| `Label` | String | Texto que se muestra en la opción del menú |
| `function` | String | Función JavaScript que se ejecuta al seleccionar la opción |

## Formatos de iconos

### 1. Icono predefinido
```
[icon_name]
```
Utiliza un icono del conjunto predefinido del sistema.

### 2. Ruta de imagen personalizada
```
[ruta/imagen.png]
```
Especifica la ruta completa a un archivo de imagen personalizado.

### 3. Sin icono
Omitir el parámetro de icono para mostrar solo texto.

## Ejemplos de uso

### Ejemplo 1: Con icono predefinido
```
[AddLTools] [user] Buscar usuarios | uSeekUser()
```
Añade una opción "Buscar usuarios" con el icono predefinido "user" que ejecuta la función `uSeekUser()`.

### Ejemplo 2: Con imagen personalizada
```
[AddLTools] [g/seek.png] Buscar usuarios | uSeekUser()
```
Añade una opción "Buscar usuarios" con la imagen personalizada ubicada en `g/seek.png` que ejecuta la función `uSeekUser()`.

### Ejemplo 3: Solo texto
```
[AddLTools] Buscar usuarios | uSeekUser()
```
Añade una opción "Buscar usuarios" sin icono que ejecuta la función `uSeekUser()`.

## Implementación de funciones

Las funciones referenciadas deben estar definidas en las secciones JavaScript del formulario:

```javascript
[JSIni] *
function uSeekUser() {
    // Lógica de búsqueda de usuarios
    // Puede abrir ventanas modales, realizar consultas, etc.
    alert('Buscando usuarios...');
}

function exportData() {
    // Función para exportar datos
    window.open('export.php?table=' + _TableName);
}

function customReport() {
    // Función para generar reportes personalizados
    generateCustomReport();
}
```

## Ejemplos avanzados

### Múltiples herramientas
```
[AddLTools] [user] Buscar usuarios | uSeekUser()
[AddLTools] [export] Exportar datos | exportData()
[AddLTools] [report] Reporte personalizado | customReport()
[AddLTools] [g/calculator.png] Calculadora | openCalculator()
```

### Con parámetros dinámicos
```
[AddLTools] [edit] Editar seleccionados | editSelected()

[JSIni] *
function editSelected() {
    var selectedRows = getSelectedRows();
    if (selectedRows.length > 0) {
        // Procesar filas seleccionadas
        processSelectedRows(selectedRows);
    } else {
        alert('Seleccione al menos una fila');
    }
}
```

## Ubicación en la interfaz

Las opciones añadidas con `AddLTools` aparecen en:
- El menú desplegable del icono de opciones en la parte superior del listado
- Generalmente representado por un icono de engranaje o menú
- Se muestran en el orden en que fueron definidas

## Casos de uso comunes

1. **Búsquedas especializadas**: Formularios de búsqueda avanzada
2. **Exportación de datos**: PDF, Excel, CSV con formatos específicos
3. **Operaciones masivas**: Acciones sobre múltiples registros
4. **Reportes personalizados**: Generación de informes específicos
5. **Herramientas de análisis**: Calculadoras, estadísticas
6. **Integraciones externas**: Conexión con otros sistemas
7. **Utilidades de mantenimiento**: Limpieza, validación de datos

## Consideraciones técnicas

- Las funciones JavaScript deben estar definidas antes de su uso
- Los iconos predefinidos dependen del conjunto disponible en el sistema
- Las rutas de imágenes son relativas al directorio de la aplicación
- Se pueden añadir múltiples herramientas al mismo listado
- Las funciones tienen acceso a las variables globales del listado

## Interacción con otros comandos

`AddLTools` se complementa con:
- `[ColsOp]` - Para operaciones por columna
- `[RowsOp]` - Para operaciones por fila
- `[ListMultiSelect]` - Para operaciones sobre selecciones múltiples
- `[JSIni]` - Para definir las funciones JavaScript

## Notas importantes

- Las herramientas aparecen solo cuando hay datos en el listado
- Los permisos de usuario pueden afectar la visibilidad de las opciones
- Las funciones deben manejar adecuadamente los errores y validaciones
- Es recomendable incluir confirmaciones para operaciones destructivas