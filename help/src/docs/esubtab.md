# eSubTab

## Descripción
Crea uno o más tabs (pestañas) con configuración personalizada para caption, acción, iconos, visibilidad y títulos.

## Sintaxis
```php
eSubTab($xCaption, $xAction, $xIcon, $xShow, $xTitle, $SubTab)
```

## Parámetros
- **$xCaption**: Array con los textos a mostrar en cada tab
- **$xAction**: Array con las acciones para cada tab
- **$xIcon**: Array con los iconos para cada tab
- **$xShow**: Array con la visibilidad de cada tab
- **$xTitle**: Array con los títulos (tooltips) para cada tab
- **$SubTab**: Contenedor de datos para los tabs

## Funcionalidad
Esta función genera un conjunto de pestañas navegables con configuración completa. Permite definir el contenido, comportamiento y apariencia de cada tab individualmente.

## Ejemplos
```php
// Ejemplo completo con múltiples tabs
eSubTab(
    array('Datos Generales', 'Configuración', 'Reportes'),  // Captions
    array('showGeneral()', 'showConfig()', 'showReports()'), // Actions
    array('user', 'settings', 'chart'),                      // Icons
    array(true, true, false),                                // Show/Hide
    array('Información general', 'Configuración del sistema', 'Reportes disponibles'), // Titles
    $_TCol
);

// Ejemplo básico con dos tabs
eSubTab(
    array('Tab 1', 'Tab 2'),
    array('', ''),
    array('', ''),
    array('', ''),
    array('Primer tab', 'Segundo tab'),
    $_TCol
);

// Ejemplo con tabs condicionales
$tabs = array('Principal', 'Avanzado');
$actions = array('loadMain()', 'loadAdvanced()');
$show = array(true, ePermission('AdminAccess'));
eSubTab($tabs, $actions, array('', ''), $show, array('Principal', 'Opciones avanzadas'), $_TCol);
```