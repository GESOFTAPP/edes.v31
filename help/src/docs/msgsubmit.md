# MsgSubmit

## Sintaxis

```
[MsgSubmit] Mode | Message/FunctionJS [ [ [ | CondicionJS ] | AnchoPx [ | TextAlign ] ]
```

## Descripción

La etiqueta `MsgSubmit` permite mostrar un mensaje de confirmación al usuario antes de realizar el envío del formulario (submit). Este mensaje se presenta como un diálogo de confirmación que el usuario debe aceptar o cancelar.

### Características principales

- **Confirmación previa**: Solicita confirmación del usuario antes del envío
- **Personalizable**: El mensaje puede ser texto estático o generado dinámicamente
- **Condicional**: Se puede mostrar solo cuando se cumplan ciertas condiciones
- **Variable JavaScript**: El contenido del mensaje se puede modificar mediante la variable `_MsgSubmit`
- **Archivos externos**: Soporte para mensajes almacenados en archivos externos
- **Multiidioma**: Soporte automático para archivos de idioma (.LNG)

## Parámetros

| Parámetro | Descripción |
|-----------|-------------|
| **Mode** | Modo en el que se muestra el mensaje |
| **Message/FunctionJS** | Mensaje a mostrar o función JavaScript que lo genere |
| **CondicionJS** | Condición JavaScript para mostrar el mensaje (opcional) |
| **AnchoPx** | Ancho del diálogo en píxeles (opcional) |
| **TextAlign** | Alineación del texto (left, center, right, justify) (opcional) |

### Message/FunctionJS

Este parámetro puede contener:

1. **Texto directo**: Mensaje estático a mostrar
2. **Función JavaScript**: Nombre de función que retorna el mensaje
3. **Archivo externo**: Si comienza con `>`, especifica un archivo externo
4. **Archivo de idioma**: Si la extensión es `.LNG`, se sustituye por las siglas del idioma del usuario

### CondicionJS

Condición JavaScript que debe evaluarse como `true` para mostrar el mensaje de confirmación. Si no se especifica, el mensaje se mostrará siempre.

## Variable JavaScript

- **`_MsgSubmit`**: Variable global que permite modificar dinámicamente el contenido del mensaje desde el lado del cliente

## Ejemplos

### Ejemplo 1: Mensaje simple
```
[MsgSubmit] a,mR | ¿Confirmar....?
```

### Ejemplo 2: Mensaje con formato personalizado
```
[MsgSubmit] a,mR | ¿Confirmar....? | | 450 | justify
```
*Muestra el mensaje en un diálogo de 450px de ancho con texto justificado*

### Ejemplo 3: Mensaje condicional
```
[MsgSubmit] a,mR | ¿Confirmar....? | uBorrar==true
```
*Solo muestra el mensaje cuando la variable `uBorrar` sea `true`*

### Ejemplo 4: Mensaje con función de condición
```
[MsgSubmit] a,mR | ¿Confirmar....? | MostrarConfirmacion()

function MostrarConfirmacion(){ 
    // Lógica para determinar si mostrar el mensaje
    return true; 
}
```

### Ejemplo 5: Mensaje generado por función
```
[MsgSubmit] a,mR | uConfirmacion()

function uConfirmacion(){ 
    return 'Texto a mostrar'; 
}
```

## Archivos externos

### Archivo HTML/Texto
```
[MsgSubmit] a,mR | >confirmacion.htm
```

### Archivo de idioma
```
[MsgSubmit] a,mR | >mensajes.LNG
```
*Se sustituirá automáticamente por `mensajes.ES`, `mensajes.EN`, etc. según el idioma del usuario*

## Casos de uso comunes

### Confirmación de eliminación
```
[MsgSubmit] D | ¿Está seguro de que desea eliminar este registro?
```

### Confirmación condicional de envío
```
[MsgSubmit] a,mR | ¿Confirmar el envío? | $importe > 1000

function ValidarImporte(){
    return parseFloat(eGF("importe")) > 1000;
}
```

### Mensaje dinámico
```javascript
[MsgSubmit] a,mR | GenerarMensaje()

function GenerarMensaje(){
    var nombre = eGF("nombre");
    var importe = eGF("importe");
    return `¿Confirmar el pedido de ${nombre} por ${importe}€?`;
}
```

## Funciones relacionadas

- **`eGF(campo)`**: Obtiene el valor de un campo
- **Eventos de formulario**: Se integra con el sistema de validación del formulario
- **Variables globales**: Acceso a variables del formulario y del sistema

## Notas adicionales

- El mensaje se muestra antes de cualquier validación de formulario
- Si el usuario cancela, no se realiza el submit
- Compatible con validaciones JavaScript personalizadas
- Permite combinación con otros sistemas de confirmación
- El diálogo es modal y bloquea la interacción hasta que el usuario responda