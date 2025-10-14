# ePlugin

## Descripción
Permite la carga de plugins, normalmente configurados en el Desktop a través del fichero "desktop_user".

## Sintaxis
```php
ePlugin($PluginName, $arg1, $arg2, ...)
```

## Parámetros
- **$PluginName**: Nombre del plugin a cargar
- **$arg1, $arg2, ...**: Lista de argumentos opcionales que se pasarán al plugin

## Funcionalidad
Esta función carga un plugin específico y le pasa los argumentos proporcionados. Los parámetros generarán variables en JavaScript con el formato:
- `var pluginArg_1='...Valor...';`
- `var pluginArg_2='...Valor...';`

## Ejemplos
```php
// Cargar plugin básico sin argumentos
ePlugin('ReportGenerator');

// Cargar plugin con argumentos
ePlugin('EmailSender', 'destinatario@email.com', 'Asunto del mensaje', 'high');

// Cargar plugin de gráficos con configuración
ePlugin('ChartPlugin', 'bar', 'sales_data', 'monthly', true);
```