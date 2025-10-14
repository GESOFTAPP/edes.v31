# eMail

## Descripción
Función para enviar correos electrónicos con soporte para múltiples destinatarios, copias y archivos adjuntos. Proporciona una interfaz simplificada para el envío de emails desde aplicaciones PHP.

## Sintaxis
```php
eMail($Para, $Asunto, $Texto, $De, $cc='', $bcc='', $ArrayFiles)
```

## Parámetros
- **$Para** (string): Dirección de correo electrónico del destinatario principal
- **$Asunto** (string): Asunto del correo electrónico
- **$Texto** (string): Contenido del mensaje (puede ser texto plano o HTML)
- **$De** (string): Dirección de correo electrónico del remitente
- **$cc** (string, opcional): Direcciones de correo para copia (separadas por coma si son múltiples)
- **$bcc** (string, opcional): Direcciones de correo para copia oculta (separadas por coma si son múltiples)
- **$ArrayFiles** (array, opcional): Array con las rutas de los archivos a adjuntar

## Funcionalidad
Esta función encapsula la funcionalidad de envío de correos electrónicos, gestionando automáticamente las cabeceras, el formato del mensaje y los archivos adjuntos. Simplifica el proceso de envío de emails complejos desde aplicaciones PHP.

## Ejemplos

### Ejemplo 1: Envío básico
```php
eMail('usuario@ejemplo.com', 'Bienvenido', 'Gracias por registrarte en nuestro sitio', 'admin@misite.com');
```
Envía un correo básico sin copias ni archivos adjuntos.

### Ejemplo 2: Envío con copias
```php
eMail(
    'cliente@empresa.com', 
    'Factura #001', 
    'Adjunto encontrará su factura', 
    'facturacion@miempresa.com',
    'contabilidad@miempresa.com',
    'backup@miempresa.com'
);
```
Envía un correo con copia a contabilidad y copia oculta a backup.

### Ejemplo 3: Envío con archivos adjuntos
```php
$archivos = ['/ruta/factura.pdf', '/ruta/contrato.doc'];
eMail(
    'cliente@empresa.com',
    'Documentos importantes',
    'Le enviamos los documentos solicitados',
    'admin@miempresa.com',
    '',
    '',
    $archivos
);
```
Envía un correo con múltiples archivos adjuntos.