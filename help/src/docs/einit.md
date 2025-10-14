# eInit

## Descripción
Inicializa la generación de la página HTML limpiando la salida y preparando el entorno para la generación de contenido.

## Sintaxis
```php
eInit([$ConEDes=false [, $ConCabecera=false]])
```

## Parámetros
- `$ConEDes` (bool, opcional): Incluir el menú iTools en la salida (solo para desarrollo) (default: false)
- `$ConCabecera` (bool, opcional): Incluir cabecera HTML (default: false)

## Funcionalidad
Prepara el entorno para la generación de páginas HTML:
- Limpia el buffer de salida
- Inicializa las variables del sistema
- Configura la página para generación HTML
- Opcionalmente incluye herramientas de desarrollo
- Permite al usuario tomar control total de la generación

## Ejemplos
```php
// Ejemplo 1: Inicialización básica
eInit();
echo "<h1>Mi página personalizada</h1>";

// Ejemplo 2: Inicialización con herramientas de desarrollo
eInit(true);
echo "<div>Contenido con herramientas de desarrollo</div>";

// Ejemplo 3: Inicialización completa con cabecera
eInit(true, true);
echo "<main>Contenido principal</main>";
```