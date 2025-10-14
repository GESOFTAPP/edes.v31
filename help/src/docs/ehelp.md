# eHelp

## Descripción

Muestra el contenido de un fichero de ayuda, el cual desaparecerá al pulsar una tecla o hacer clic con el ratón. El fichero de ayuda se edita con gsHelp.

## Sintaxis

```php
eHelp(NmFileHelp)
```

## Parámetros

- **NmFileHelp**: Nombre del fichero de ayuda que se va a mostrar

## Funcionalidad

- Muestra contenido de ayuda contextual
- Se cierra automáticamente al pulsar cualquier tecla o hacer clic
- Los archivos de ayuda se editan usando gsHelp
- Proporciona ayuda contextual para diferentes funcionalidades

## Ejemplos

### Ejemplo 1: Mostrar ayuda general
```php
eHelp('ayuda_general');
```

### Ejemplo 2: Ayuda específica de formulario
```php
eHelp('formulario_usuario');
```

### Ejemplo 3: Ayuda contextual desde botón
```php
<button onclick="eHelp('proceso_facturacion')" title="Ayuda">
    <img src="g/help.gif" alt="Ayuda">
</button>
```