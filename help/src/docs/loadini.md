# LoadIni

## Sintaxis

```
[LoadIni] <ListaDeFicherosACargar>
```

## Descripción

Permite especificar una lista de ficheros que se cargarán automáticamente durante el arranque del sistema. Esta funcionalidad es útil para inicializar recursos, configuraciones o módulos necesarios al inicio de la aplicación.

## Parámetros

| Parámetro | Tipo | Descripción | Requerido |
|-----------|------|-------------|-----------|
| ListaDeFicherosACargar | string | Ruta del fichero o lista de ficheros separados por comas que se cargarán en el arranque. Puede incluir rutas relativas o absolutas | Sí |

## Ejemplos

### Ejemplo básico
```
[LoadIni] midir/carga_empresas.php
```

### Ejemplo con múltiples ficheros
```
[LoadIni] config/database.php, modules/authentication.php, utils/helpers.php
```

### Ejemplo con rutas relativas
```
[LoadIni] ../config/app_config.php, ./startup/init_modules.php
```