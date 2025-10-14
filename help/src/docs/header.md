# Header

## Sintaxis
```
[Header] Definition
```

## Descripción
Genera la función `header()` de PHP, permitiendo enviar cabeceras HTTP personalizadas al navegador.

## Parámetros
- **Definition**: La definición de la cabecera HTTP que se enviará

## Ejemplos

### Ejemplo básico - Tipo de contenido
```
[Header] Content-Type: text/html; charset=utf-8
```
Establece el tipo de contenido como HTML con codificación UTF-8.

### Otros ejemplos comunes

#### Redireccionar a otra página
```
[Header] Location: https://example.com/nueva-pagina
```

#### Establecer tipo de contenido JSON
```
[Header] Content-Type: application/json; charset=utf-8
```

#### Forzar descarga de archivo
```
[Header] Content-Disposition: attachment; filename="archivo.pdf"
```

#### Configurar cache
```
[Header] Cache-Control: no-cache, must-revalidate
```

#### Establecer cookies
```
[Header] Set-Cookie: usuario=admin; path=/; secure
```

## Casos de uso típicos
- 🌐 **Tipo de contenido**: Definir Content-Type para diferentes formatos
- 🔄 **Redirecciones**: Redirigir usuarios a otras páginas
- 📁 **Descargas**: Forzar descarga de archivos
- 🍪 **Cookies**: Establecer cookies de sesión
- 🚫 **Cache**: Controlar el comportamiento de cache
- 🔒 **Seguridad**: Configurar cabeceras de seguridad
- 📱 **APIs**: Establecer cabeceras para servicios web

## Cabeceras HTTP más utilizadas

| Cabecera | Propósito | Ejemplo |
|----------|-----------|---------|
| `Content-Type` | Tipo de contenido | `text/html`, `application/json` |
| `Location` | Redirección | `https://example.com` |
| `Content-Disposition` | Comportamiento de descarga | `attachment; filename="file.pdf"` |
| `Cache-Control` | Control de cache | `no-cache`, `max-age=3600` |
| `Set-Cookie` | Establecer cookies | `name=value; path=/` |

## Consideraciones importantes
- ⚠️ **Antes del contenido**: Las cabeceras deben enviarse antes de cualquier salida HTML
- 🔄 **Redirecciones**: Para redirecciones, usar `Location` con código de estado apropiado
- 📝 **Codificación**: Especificar charset para evitar problemas de codificación
- 🛡️ **Seguridad**: Validar datos antes de incluirlos en cabeceras
- 📱 **Compatibilidad**: Verificar que las cabeceras sean compatibles con diferentes navegadores

## Buenas prácticas
- ✅ **UTF-8**: Usar UTF-8 como codificación estándar
- 🎯 **Específicas**: Ser específico con los tipos de contenido
- 🔍 **Validación**: Validar parámetros antes de generar cabeceras
- 📋 **Documentación**: Documentar el propósito de cabeceras personalizadas
- 🚨 **Errores**: Manejar errores apropiadamente en redirecciones

## Equivalencia PHP
```php
// La etiqueta [Header] Content-Type: text/html; charset=utf-8
// Es equivalente a:
header('Content-Type: text/html; charset=utf-8');
```