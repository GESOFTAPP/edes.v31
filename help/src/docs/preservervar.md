# PreserverVar

## Sintaxis

```
[PreserverVar] [Variable,,,]
```

## Descripción

Preserva el valor de todas las variables que le llegan al listado, pudiendo poner como parámetro otras variables. Esto se utiliza por ejemplo si el título del listado es variable y se tiene la opción de pasarlo a PDF, etc. Las variables preservadas mantienen su valor a través de las diferentes operaciones del listado.

## Parámetros

| Parámetro | Descripción |
|-----------|-------------|
| **Variable** | Lista de variables a preservar, separadas por comas. Si no se especifica, preserva todas las variables que llegan al listado |

## Ejemplos

### Ejemplo básico
```php
[PreserverVar] titulo, usuario, fecha
```
Preserva las variables `titulo`, `usuario` y `fecha` a través de las operaciones del listado.

### Ejemplo sin parámetros
```php
[PreserverVar]
```
Preserva todas las variables que llegan al listado.

### Ejemplo completo con variables persistentes
```php
[PreserverVar] _accion, _modo

[PHPStart] a
    $_accion=alta;

[PHPStart] b,bR
    $_modo='FbR'; 
    $_accion=baja; 

[PHPStart] c,cR
    $_modo='FcR';
    $_accion=consulta;

[PHPStart] m,mR
    $_modo='FmR';
    if ($_accion==""){
        $_accion=modificacion;
    }
```
En este ejemplo se preservan las variables `*accion` y `*modo`, y se definen diferentes valores según la operación (alta, baja, consulta, modificación) que se está ejecutando. Las variables se mantienen disponibles durante toda la sesión del listado.