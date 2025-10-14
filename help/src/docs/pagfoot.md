# PagFoot

## Sintaxis

```
[PagFoot] PieDePagina
```

## Descripción

La función `PagFoot` permite establecer el contenido del pie de página para documentos e informes generados por el sistema. Proporciona control total sobre el formato, alineación y contenido dinámico del pie de página.

El sistema utiliza un pie de página por defecto con el formato `"&b&bPág. &p/&P"` que muestra la paginación centrada. Para establecer una configuración global para toda la aplicación, se puede definir la variable correspondiente en el archivo de configuración `sql.ini`.

## Parámetros

| Parámetro | Tipo | Descripción | Obligatorio |
|-----------|------|-------------|-------------|
| `PieDePagina` | String | Texto del pie de página con códigos de formato y variables dinámicas | Sí |

## Códigos de formato y variables

### Códigos de alineación
| Código | Descripción | Efecto |
|--------|-------------|--------|
| `&b` | Centrar texto siguiente | El texto después de `&b` se centra horizontalmente |
| `&b&b` | Centrar y justificar | Primer `&b` centra, segundo `&b` justifica a la derecha |

### Variables dinámicas
| Variable | Descripción | Formato | Ejemplo |
|----------|-------------|---------|---------|
| `&p` | Página actual | Número entero | 1, 2, 3... |
| `&P` | Total de páginas | Número entero | 5, 10, 25... |
| `&h` | Hora actual | HH:MM | 14:30, 09:15 |
| `&D` | Fecha formato europeo | DD-MM-AAAA | 15-03-2024 |
| `&d` | Fecha formato americano | MM/DD/AAAA | 03/15/2024 |

## Ejemplos

### Pie de página básico (por defecto)
```php
[PagFoot] &b&bPág. &p/&P
```
**Resultado**: `                    Pág. 1/5                    `
**Descripción**: Muestra la paginación centrada en el pie de página.

### Pie de página con información completa
```php
[PagFoot] Sistema de Gestión &b Pág. &p de &P &b Fecha: &D - &h
```
**Resultado**: 
```
Sistema de Gestión          Pág. 1 de 5          Fecha: 15-03-2024 - 14:30
```
**Descripción**: Información del sistema a la izquierda, paginación centrada, fecha y hora a la derecha.

### Pie de página corporativo
```php
[PagFoot] © 2024 Mi Empresa S.L. &b&b Confidencial - Página &p/&P
```
**Resultado**:
```
© 2024 Mi Empresa S.L.                           Confidencial - Página 1/5
```
**Descripción**: Copyright a la izquierda, información confidencial y paginación a la derecha.

### Pie de página para reportes
```php
[PagFoot] Reporte generado el &D a las &h &b&b Página &p de &P
```
**Resultado**:
```
Reporte generado el 15-03-2024 a las 14:30                    Página 1 de 5
```
**Descripción**: Información de generación a la izquierda, paginación a la derecha.

### Pie de página para documentos oficiales
```php
[PagFoot] Documento oficial - Ministerio de Hacienda &b &D &b Pág. &p/&P - ORIGINAL
```
**Resultado**:
```
Documento oficial - Ministerio de Hacienda    15-03-2024    Pág. 1/5 - ORIGINAL
```
**Descripción**: Encabezado oficial, fecha centrada, paginación y marca a la derecha.

### Pie de página minimalista
```php
[PagFoot] &b&p
```
**Resultado**: `                              1                              `
**Descripción**: Solo muestra el número de página actual centrado.

### Pie de página con formato americano
```php
[PagFoot] Generated: &d &h &b&b Page &p of &P
```
**Resultado**:
```
Generated: 03/15/2024 14:30                                  Page 1 of 5
```
**Descripción**: Información de generación con formato americano a la izquierda, paginación en inglés a la derecha.

### Pie de página para facturas
```php
[PagFoot] Factura válida sin firma electrónica &b &D &b Hoja &p de &P
```
**Resultado**:
```
Factura válida sin firma electrónica         15-03-2024         Hoja 1 de 5
```
**Descripción**: Texto legal, fecha centrada, numeración de hojas a la derecha.

### Pie de página multiidioma
```php
[PagFoot] Documento bilingüe / Bilingual document &b&b Pág./Page &p/&P
```
**Resultado**:
```
Documento bilingüe / Bilingual document                      Pág./Page 1/5
```
**Descripción**: Texto en dos idiomas a la izquierda, paginación bilingüe a la derecha.

## Configuración global en sql.ini

Para establecer un pie de página por defecto para toda la aplicación:

```ini
; Configuración de pie de página global
$_PagFoot = "© 2024 Mi Empresa &b&b Página &p de &P - &D"
```

## Casos de uso comunes

### Para informes ejecutivos
```php
[PagFoot] CONFIDENCIAL - Solo para uso interno &b &D &h &b Página &p/&P
```

### Para documentos legales
```php
[PagFoot] Este documento tiene validez legal &b Generado: &D &h &b &p/&P
```

### Para reportes técnicos
```php
[PagFoot] Sistema v2.1 - Reporte automatizado &b&b &D &h - Pág. &p/&P
```

### Para documentos de auditoría
```php
[PagFoot] Auditoría interna - Documento controlado &b Fecha: &D &b Rev. &p/&P
```

## Notas importantes

- El formato por defecto es `"&b&bPág. &p/&P"` si no se especifica ningún pie de página
- Los códigos `&b` deben usarse estratégicamente para lograr la alineación deseada
- Las variables se evalúan en tiempo de generación del documento
- La configuración en `sql.ini` se aplica globalmente a menos que se sobrescriba localmente
- El texto entre códigos de alineación determina qué contenido va en cada sección
- La hora y fecha se generan automáticamente según la configuración del sistema
- Se recomienda probar el formato antes de implementarlo en producción