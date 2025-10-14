# Exit

## Sintaxis

```
[Exit]
```

## Descripción

En los DF (Data Files) anidados, utilizando la directiva `#include()`, al encontrar la etiqueta `[Exit]` terminará de parsear el DF actual y regresará al DF padre o finalizará el procesamiento si se encuentra en el nivel raíz.

## Parámetros

| Parámetro | Tipo | Descripción | Obligatorio | Valor por defecto |
|-----------|------|-------------|-------------|-------------------|
| N/A | - | Esta directiva no acepta parámetros | - | - |

## Ejemplos

### Ejemplo 1: Salida básica en DF anidado

**archivo_principal.df:**
```
#include("configuracion.df")
[Proceso]
Continuar procesamiento...
```

**configuracion.df:**
```
[Config]
Parametro1=Valor1
Parametro2=Valor2
[Exit]
[ConfigAdicional]
Esta sección no se procesará
```

**Resultado:** El procesamiento se detendrá en `[Exit]` y la sección `[ConfigAdicional]` será ignorada.

### Ejemplo 2: Control de flujo condicional

**main.df:**
```
#include("validaciones.df")
[ProcesamientoPrincipal]
Datos principales...
```

**validaciones.df:**
```
[Validacion]
Check1=OK
Check2=OK
[Exit]
[ValidacionesExtendidas]
Estas validaciones no se ejecutarán
```

**Resultado:** Solo se procesarán las validaciones básicas antes de `[Exit]`.