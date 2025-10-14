# Help

## Sintaxis

```
[Help] Modo [| CódigoHelp]
```

## Descripción

La función `Help` proporciona acceso al sistema de ayuda contextual del sistema. Permite asociar documentación específica a diferentes partes de la aplicación basándose en modos de ejecución y códigos de ayuda personalizados.

El sistema de ayuda se controla mediante la variable `$_HelpType` en el archivo de configuración `sql.ini`, que activa o desactiva el uso de la ayuda para usuarios finales. Los desarrolladores siempre tienen acceso a la edición de ayuda independientemente de esta configuración.

### Características especiales:

- **Integración en páginas sin motor**: Se puede incorporar ayuda en páginas HTML mediante el atributo `onhelp` en el elemento `BODY`
- **Referencias cruzadas**: El contenido puede referenciar otros archivos de ayuda usando el carácter `>` seguido del nombre del archivo
- **Ayuda en uTools**: Los iconos pueden tener ayuda asociada usando el nombre del gráfico o el atributo `HELP`

## Parámetros

| Parámetro | Tipo | Descripción | Obligatorio | Valor por defecto |
|-----------|------|-------------|-------------|-------------------|
| `Modo` | String | Modo de ejecución del sistema (*, a, u, etc.) | Sí | - |
| `CódigoHelp` | String | Identificador específico para el archivo de ayuda | No | Ver reglas abajo |

### Reglas para CódigoHelp:

| Situación | Valor utilizado | Descripción |
|-----------|----------------|-------------|
| Sin etiqueta `[Help]` | Nombre del script | Usa automáticamente el nombre del archivo actual |
| Parámetro vacío | `"EDF" + "_" + "Modo"` | Ayuda específica por modo (ej: `miScript_a`, `miScript_u`) |
| Texto personalizado | Texto especificado | Usa exactamente el texto proporcionado |
| Contiene carácter `#` | Texto con `#` sustituido por modo | Permite plantillas dinámicas |

## Ejemplos

### Ayuda básica para todos los modos
```php
[Help] * | manual_usuario
```
**Descripción**: Asocia el archivo de ayuda `manual_usuario` para todos los modos de ejecución.

### Ayuda específica por modo (automática)
```php
[Help] *
```
**Descripción**: Genera automáticamente códigos de ayuda como `nombreScript_a` para admin, `nombreScript_u` para usuario, etc.

### Ayuda con plantilla dinámica
```php
[Help] * | ayuda_sistema_#
```
**Descripción**: El `#` se sustituye por el modo actual, generando `ayuda_sistema_a`, `ayuda_sistema_u`, etc.

### Ayuda específica para modo administrador
```php
[Help] a | admin_panel_help
```
**Descripción**: Solo en modo administrador se mostrará la ayuda del archivo `admin_panel_help`.

### Ayuda diferenciada por modo
```php
[Help] a | ayuda_admin
[Help] u | ayuda_usuario  
[Help] * | ayuda_general
```
**Descripción**: Define diferentes archivos de ayuda según el modo de acceso.

## Integración en páginas HTML

### Página sin motor con ayuda
```html
<body onhelp='return top.gsHelp("manual_formulario", event)'>
    <!-- Contenido de la página -->
</body>
```
**Descripción**: Integra ayuda contextual en páginas HTML que no usan el motor del sistema.

### Ayuda en uTools con atributo personalizado
```xml
<icon src="boton_guardar.png" HELP="ayuda_guardar" />
```
**Descripción**: El icono usará `ayuda_guardar` como código de ayuda en lugar del nombre del archivo gráfico.

## Referencias cruzadas en contenido de ayuda

### Archivo de ayuda con redirección
```
Este es el contenido principal de ayuda.

Para más información sobre configuración:
>configuracion_avanzada

Para temas de seguridad:
>manual_seguridad
```
**Descripción**: Al mostrar la ayuda, los enlaces `>nombreArchivo` permiten saltar a otros archivos de ayuda.

## Configuración del sistema

### En sql.ini
```ini
; Activar/desactivar ayuda para usuarios
$_HelpType = 1  ; 1 = activada, 0 = desactivada

; Los desarrolladores siempre tienen acceso independientemente de este valor
```

## Notas importantes

- La variable `$_HelpType` solo afecta a usuarios finales, no a desarrolladores
- Los archivos de ayuda deben estar en el directorio correspondiente del sistema
- El carácter `#` en CódigoHelp es especial y se sustituye por el modo actual
- Los iconos en uTools pueden usar el nombre del gráfico como código de ayuda por defecto