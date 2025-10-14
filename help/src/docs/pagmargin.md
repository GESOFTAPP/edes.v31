# PagMargin

## Sintaxis

```
[PagMargin] Top, Right, Bottom, Left
```

## Descripción

La función `PagMargin` permite establecer los márgenes de la página para documentos que se van a imprimir o generar en formato PDF. Define el espacio en blanco alrededor del contenido del documento, controlando la distancia desde los bordes de la página hasta el área de contenido.

Los valores por defecto del sistema son `"0.3, 0.2, 0.2, 0.4"` (medidos en pulgadas). Para establecer una configuración global para toda la aplicación, se puede definir la variable correspondiente en el archivo de configuración `sql.ini`.

## Parámetros

| Parámetro | Posición | Descripción | Unidad | Valor por defecto |
|-----------|----------|-------------|--------|-------------------|
| `Top` | Superior | Margen desde el borde superior de la página | Pulgadas | 0.3 |
| `Right` | Derecho | Margen desde el borde derecho de la página | Pulgadas | 0.2 |
| `Bottom` | Inferior | Margen desde el borde inferior de la página | Pulgadas | 0.2 |
| `Left` | Izquierdo | Margen desde el borde izquierdo de la página | Pulgadas | 0.4 |

## Ejemplos

### Márgenes por defecto del sistema
```php
[PagMargin] 0.3, 0.2, 0.2, 0.4
```
**Descripción**: Configuración estándar del sistema con margen superior de 0.3", derecho e inferior de 0.2", e izquierdo de 0.4".

### Márgenes uniformes
```php
[PagMargin] 0.5, 0.5, 0.5, 0.5
```
**Descripción**: Márgenes iguales de media pulgada en todos los lados, ideal para documentos simples.

### Márgenes para documentos oficiales
```php
[PagMargin] 1.0, 0.75, 1.0, 1.0
```
**Descripción**: Márgenes amplios apropiados para documentos oficiales, cartas formales o documentos que requieren encuadernación.

### Márgenes para informes técnicos
```php
[PagMargin] 0.8, 0.6, 0.8, 1.2
```
**Descripción**: Margen izquierdo amplio para encuadernación, márgenes superior e inferior generosos para claridad visual.

### Márgenes mínimos para maximizar contenido
```php
[PagMargin] 0.1, 0.1, 0.1, 0.1
```
**Descripción**: Márgenes mínimos para aprovechar al máximo el espacio de la página, útil para tablas extensas o listados.

### Márgenes para facturas comerciales
```php
[PagMargin] 0.4, 0.3, 0.5, 0.5
```
**Descripción**: Configuración balanceada para facturas, con margen inferior ligeramente mayor para información legal.

### Márgenes para presentaciones
```php
[PagMargin] 0.25, 0.25, 0.25, 0.25
```
**Descripción**: Márgenes reducidos y uniformes para presentaciones o documentos con mucho contenido visual.

### Márgenes para documentos con encabezado corporativo
```php
[PagMargin] 1.5, 0.5, 0.5, 0.5
```
**Descripción**: Margen superior amplio para acomodar membrete corporativo, logotipos o encabezados extensos.

### Márgenes para documentos legales
```php
[PagMargin] 1.2, 1.0, 1.2, 1.5
```
**Descripción**: Márgenes amplios requeridos para documentos legales, con espacio adicional para anotaciones y numeración.

### Márgenes para reportes financieros
```php
[PagMargin] 0.6, 0.4, 0.8, 0.8
```
**Descripción**: Configuración profesional para reportes financieros con espacio para gráficos y tablas complejas.

## Conversión de unidades

### Equivalencias comunes
| Pulgadas | Centímetros | Milímetros | Uso típico |
|----------|-------------|------------|------------|
| 0.1 | 0.25 | 2.5 | Margen mínimo |
| 0.2 | 0.51 | 5.1 | Margen estándar lateral |
| 0.3 | 0.76 | 7.6 | Margen estándar superior/inferior |
| 0.5 | 1.27 | 12.7 | Margen medio |
| 0.75 | 1.91 | 19.1 | Margen generoso |
| 1.0 | 2.54 | 25.4 | Margen amplio |
| 1.5 | 3.81 | 38.1 | Margen muy amplio |

### Ejemplos con medidas métricas (aproximadas)
```php
// Equivalente a 2cm en todos los lados
[PagMargin] 0.79, 0.79, 0.79, 0.79

// Equivalente a 1.5cm superior/inferior, 1cm laterales
[PagMargin] 0.59, 0.39, 0.59, 0.39

// Equivalente a 3cm izquierdo, 2cm otros lados
[PagMargin] 0.79, 0.79, 0.79, 1.18
```

## Configuración global en sql.ini

Para establecer márgenes por defecto para toda la aplicación:

```ini
; Configuración de márgenes globales (en pulgadas)
$_PagMargin = "0.5, 0.3, 0.3, 0.6"

; Configuración para documentos oficiales
$_PagMargin = "1.0, 0.75, 1.0, 1.0"

; Configuración para informes técnicos
$_PagMargin = "0.8, 0.6, 0.8, 1.2"
```

## Casos de uso por tipo de documento

### Documentos administrativos
```php
[PagMargin] 0.8, 0.6, 0.8, 1.0
```

### Cartas comerciales
```php
[PagMargin] 1.0, 0.8, 1.0, 1.0
```

### Listados y reportes
```php
[PagMargin] 0.4, 0.3, 0.4, 0.5
```

### Documentos con firma
```php
[PagMargin] 0.6, 0.5, 1.2, 0.8
```

### Certificados y diplomas
```php
[PagMargin] 1.5, 1.0, 1.5, 1.0
```

## Consideraciones de diseño

### Para impresión profesional
- Margen izquierdo mayor si se va a encuadernar
- Márgenes superiores amplios para membretes
- Margen inferior suficiente para pies de página

### Para documentos digitales
- Márgenes más reducidos para aprovechar pantalla
- Equilibrio entre legibilidad y espacio útil
- Consistencia con estándares web

### Para documentos oficiales
- Cumplir normativas específicas del sector
- Espacio para sellos y firmas
- Márgenes generosos para profesionalidad

## Notas importantes

- Las medidas se expresan en pulgadas (inches)
- Los valores por defecto son: Top=0.3, Right=0.2, Bottom=0.2, Left=0.4
- La configuración en `sql.ini` se aplica globalmente si no se especifica localmente
- Considerar el tipo de impresora y papel al definir márgenes
- Márgenes muy pequeños pueden causar problemas de impresión
- Para documentos con encuadernación, aumentar el margen izquierdo
- Verificar que el contenido no se corte con márgenes muy reducidos
- Los márgenes afectan tanto a la impresión como a la generación de PDF