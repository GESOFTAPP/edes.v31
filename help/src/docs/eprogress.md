# eProgress

## Descripción
Muestra una barra de progreso para procesos que tardan mucho tiempo. Permite informar al usuario del paso en el que se encuentra el proceso.

## Sintaxis
```php
eProgress($Realizado, $Titulo='', $TextoEnBarra='', $TextoDetalle='', $Sound='M')
```

## Parámetros
- **$Realizado**: Porcentaje realizado del 0 al 100, o cadena en formato "n/total" (ej: "3/10")
- **$Titulo**: Título de la barra de progreso
- **$TextoEnBarra**: Si se pone "%", mostrará el porcentaje numérico actual
- **$TextoDetalle**: Nombre del subproceso que se está ejecutando
- **$Sound**: Por defecto ejecuta `eSound("M")`. Para evitar sonido, pasar cadena vacía

## Funcionalidad
Para iniciar el proceso, el primer valor debe ser "0". Para terminar y ocultar la barra, usar "100" o llamar a `eProgressHidden()`. La barra se actualiza dinámicamente conforme avanza el proceso.

## Ejemplos
```php
// Ejemplo básico de progreso
eProgress(0, 'Procesando archivos', '%', 'Iniciando...');
eProgress(25, 'Procesando archivos', '%', 'Leyendo datos...');
eProgress(50, 'Procesando archivos', '%', 'Analizando...');
eProgress(75, 'Procesando archivos', '%', 'Generando reporte...');
eProgress(100, 'Procesando archivos', '%', 'Completado');

// Ejemplo con formato "n/total"
eProgress('1/10', 'Importando registros', '%', 'Registro 1 de 10');
eProgress('5/10', 'Importando registros', '%', 'Registro 5 de 10');
eProgress('10/10', 'Importando registros', '%', 'Completado');

// Ejemplo sin sonido
eProgress(50, 'Proceso silencioso', '%', 'Trabajando...', '');
```