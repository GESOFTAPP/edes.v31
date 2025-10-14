# eTHColSpan

## Descripción
Genera dinámicamente con PHP una fila de TH uniendo varias columnas, similar a la etiqueta [THColSpan]. Crea agrupaciones de columnas con títulos descriptivos.

## Sintaxis
```php
eTHColSpan($Definicion)
```

## Parámetros
- **$Definicion**: String con la definición de columnas agrupadas
  - Formato: "FieldBegin, FieldEnd, Title [ | FieldBegin, FieldEnd, Title |...]"
  - **FieldBegin**: Campo inicial del grupo
  - **FieldEnd**: Campo final del grupo
  - **Title**: Título del grupo de columnas

## Funcionalidad
Genera una fila de cabecera (TH) que une varias columnas bajo un título común. Si el nombre del campo se define con llaves como "cd_prove{prove,cd_prove,cif}", el nombre del campo será "cif". El literal del "Label" del colspan no puede repetirse en los "Label" de la segunda línea de TH. Se desactiva si se ha puesto [MaxRec] FULL.

## Ejemplos

### Ejemplo 1: Agrupación simple
```php
eTHColSpan("fecha_inicio, fecha_fin, PERÍODO");
```

### Ejemplo 2: Múltiples agrupaciones
```php
eTHColSpan("nombre, apellido, DATOS PERSONALES | salario, bonus, RETRIBUCIÓN");
```

### Ejemplo 3: Campos con definición compleja
```php
eTHColSpan("cd_prove{prove,cd_prove,cif}, nm_prove, PROVEEDOR | fecha_alta, fecha_baja, FECHAS");
```