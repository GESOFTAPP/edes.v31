# JSInclude

## SINTAXIS

```
[JSInclude] Mode | FilesToInclude
```

## DESCRIPCIÓN

Incluye archivos JavaScript externos en el documento HTML. Esta etiqueta permite cargar múltiples archivos JavaScript especificados en una lista separada por comas, proporcionando funcionalidad adicional a la aplicación según el modo de ejecución especificado.

Los archivos se incluyen en el orden especificado y se cargan antes de que se ejecute el contenido de la página.

## PARÁMETROS

| Parámetro | Tipo | Descripción |
|-----------|------|-------------|
| **Mode** | Cadena | Modo de ejecución donde se incluirán los archivos JavaScript |
| **FilesToInclude** | Cadena | Lista de archivos JavaScript separados por comas |

## FORMATO DE ARCHIVOS

### Rutas relativas
```
js/archivo.js          ← Archivo en directorio js/
js/subdirectorio/file.js    ← Archivo en subdirectorio
```

### Rutas con variables
```
$js/archivo        ← Usando variable de directorio
$libs/libreria     ← Usando variable personalizada
```

### Archivos sin extensión
Los archivos se pueden especificar con o sin la extensión `.js`:
- `js/script` → se carga como `js/script.js`
- `js/script.js` → se carga tal como se especifica

## EJEMPLOS

### Incluir un archivo JavaScript
```
[JSInclude] * | js/utilities
```

### Incluir múltiples archivos
```
[JSInclude] c | $js/emodcss, js/moverdiv
```
Incluye `emodcss.js` y `moverdiv.js` solo en modo creación.

### Archivos para diferentes modos
```
[JSInclude] l | js/list-functions, js/filters
```
Incluye archivos específicos para el modo listado.

### Librerías externas y funciones personalizadas
```
[JSInclude] * | js/jquery.min, js/bootstrap.min, js/custom-functions
```

### Archivos condicionales por modo
```
[JSInclude] c,m | js/form-validation, js/date-picker
[JSInclude] l | js/table-sorting, js/export-functions
```

## CASOS DE USO COMUNES

- **Librerías de UI**: `[JSInclude] * | js/jquery, js/bootstrap`
- **Validación de formularios**: `[JSInclude] c,m | js/validation`
- **Funciones de listado**: `[JSInclude] l | js/table-utils, js/filters`
- **Utilidades globales**: `[JSInclude] * | js/common-functions`
- **Módulos específicos**: `[JSInclude] c | js/form-builder, js/autocomplete`

## ESTRUCTURA DE DIRECTORIOS TÍPICA

```
DirRaíz/
├── js/
│   ├── common/
│   │   ├── utilities.js
│   │   └── helpers.js
│   ├── forms/
│   │   ├── validation.js
│   │   └── autocomplete.js
│   ├── lists/
│   │   ├── sorting.js
│   │   └── filtering.js
│   └── libs/
│       ├── jquery.min.js
│       └── bootstrap.min.js
```

## ORDEN DE CARGA

Los archivos se cargan en el orden especificado:

```
[JSInclude] * | js/jquery, js/bootstrap, js/custom
```

1. `jquery.js` (se carga primero)
2. `bootstrap.js` (depende de jQuery)
3. `custom.js` (puede usar jQuery y Bootstrap)

## EJEMPLO COMPLETO

```html
<!-- Resultado generado por: [JSInclude] c | js/jquery, js/validation, js/form-utils -->
<script src="js/jquery.js"></script>
<script src="js/validation.js"></script>
<script src="js/form-utils.js"></script>
```

## VARIABLES DE DIRECTORIO

### Variables comunes
- `$js/` → Directorio JavaScript configurado
- `$libs/` → Directorio de librerías
- `$vendor/` → Directorio de terceros

### Ejemplo con variables
```
[JSInclude] * | $js/core, $libs/moment, js/custom
```

## CONSIDERACIONES

### Dependencias
Asegurar el orden correcto cuando hay dependencias:
```
[JSInclude] * | js/jquery, js/jquery-ui, js/custom
```

### Rendimiento
- Minimizar el número de archivos para reducir peticiones HTTP
- Usar archivos minificados en producción
- Considerar la carga asíncrona para archivos no críticos

### Compatibilidad
- Verificar compatibilidad entre librerías
- Probar en diferentes navegadores
- Incluir polyfills cuando sea necesario

## NOTAS IMPORTANTES

- **Orden**: Los archivos se cargan en el orden especificado
- **Dependencias**: Considerar las dependencias entre archivos
- **Rutas**: Las rutas son relativas al directorio raíz de la aplicación
- **Extensiones**: La extensión `.js` se agrega automáticamente si no se especifica
- **Variables**: Se pueden usar variables de directorio para mayor flexibilidad
- **Modos**: Especificar correctamente los modos donde se necesitan los archivos

## BUENAS PRÁCTICAS

- **Organización**: Agrupar archivos relacionados en subdirectorios
- **Nomenclatura**: Usar nombres descriptivos para los archivos
- **Documentación**: Comentar la funcionalidad de cada archivo incluido
- **Optimización**: Combinar archivos relacionados cuando sea posible
- **Testing**: Probar la funcionalidad después de incluir nuevos archivos