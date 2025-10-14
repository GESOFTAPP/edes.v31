# JSCheck

## Sintaxis

```
[JSCheck] Mode [ | NomDF,... [ | ListaCampos ] ]
```

## Descripción

La etiqueta `JSCheck` permite incluir código JavaScript personalizado para validar formularios antes del envío (submit). Esta validación se ejecuta después de evaluar:

1. Las condiciones individuales de los campos (parámetro 9 de la etiqueta `[Fields]`)
2. Las condiciones marcadas en la etiqueta `[FormCheck]` (validaciones entre campos)

### Características principales

- **Ejecución**: Es el último código de validación que se ejecuta antes del submit
- **Control de envío**: Puede detener el envío del formulario mediante:
  - La función `ePE()` al finalizar todo el código de la etiqueta
  - `return false;` en cualquier momento durante la ejecución
- **Variables globales**: Todos los campos del formulario se globalizan automáticamente como variables JavaScript con el nombre del campo precedido de `$`
- **Modificación de valores**: Si se modifica una variable `$campo`, el efecto es equivalente a usar la función `ePE()`
- **Formato de errores**: Si el texto de error contiene una única zona entre comillas dobles, este texto se mostrará en **negrita**
- **Integración PHP**: Se pueden incluir líneas independientes de PHP dentro del JavaScript usando la sintaxis `<?php ... ?>`
- **Generación condicional**: Se puede utilizar generación condicional dentro del código JavaScript

### Parámetros

| Parámetro | Descripción |
|-----------|-------------|
| **Mode** | Modo de operación |
| **NomDF** | Nombre del formulario (opcional) |
| **ListaCampos** | Lista de campos obligatorios separados por coma |

### Variables especiales

- `$_MarkFieldRequired`: Marca los campos obligatorios (true/false/lista de campos)
- `$_MarkLabelRequired`: Marca las etiquetas de los campos obligatorios (true/false)

Los campos se marcarán automáticamente si en la columna condición del label `[Fields]` tienen alguna condición excepto la condición `%`.

## Funciones relacionadas

- **`ePE()`** (putError): Función JavaScript para establecer errores en campos
- **`eGF()`**: Función para obtener el valor de un campo
- **OpExe**: Operador de ejecución
- **Attribute "NoJsCheck"**: Atributo para botones que permite omitir la validación JSCheck

## Ejemplos

### Ejemplo 1: Usando la función eGF()

```javascript
[JSCheck] a,mR 
if( eGF("envio_pack")=="S" && eGF("permiso_pack")=="" ){ 
    ePE("permiso_pack", "Para realizar el envío hace falta el código del permiso del PACK");  
}
```

### Ejemplo 2: Usando variables globalizadas

```javascript
[JSCheck] a,mR 
if( $envio_pack=="S" && $permiso_pack=="" ){ 
    $permiso_pack = "Para realizar el envío hace falta el código del permiso del PACK";  
}
```

*Forma alternativa para obtener el valor de los campos y asignarles un error directamente.*

## Notas adicionales

- La validación JSCheck se puede omitir en botones específicos usando el atributo `NoJsCheck`
- Es la última capa de validación antes del envío del formulario
- Permite validaciones complejas que requieren lógica personalizada
- Compatible con generación condicional de código