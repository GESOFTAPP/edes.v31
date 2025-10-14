# PagTitle

## Sintaxis

```
[PagTitle] Titulo
```

## Descripción

Define el título de la página impresa. Por defecto se toma el valor de la variable "$_CopyRight". Para definir una configuración general se añadirá la variable en el fichero de configuración "sql.ini".

## Parámetros

| Parámetro | Tipo | Descripción | Requerido | Valor por defecto |
|-----------|------|-------------|-----------|-------------------|
| Titulo | String | Texto que aparecerá como título en la página impresa | No | Valor de $_CopyRight |

## Ejemplos

### Ejemplo básico
```
[PagTitle] Informe de Ventas Mensual
```

### Ejemplo con título personalizado
```
[PagTitle] Reporte de Inventario - Diciembre 2024
```

### Configuración en sql.ini
Para definir un título por defecto de forma global:
```ini
[Configuracion]
PagTitle=Título por defecto del sistema
```

### Uso de variable por defecto
```
[PagTitle]
```
*En este caso utilizará el valor de la variable $_CopyRight*