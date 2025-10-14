# TitleIcon

## Sintaxis

```
[TitleIcon] Mode | IconoHtml [ | NomDF,... / else ]
[TitleIcon] Mode | HPCV [ [ [ | NomDF,... / else ] | FileHelp ] | ClaveHelp ]
```

## Descripción

A la derecha del título de la ficha se puede poner uno o más iconos de acceso rápido, así como en los listados a la izquierda de los lTools.

## Parámetros

| Parámetro | Descripción |
|-----------|-------------|
| `Mode` | Modo de visualización |
| `IconoHtml` | HTML del icono a mostrar |
| `HPCV` | Iniciales para tipos de archivo: **(H)**tml, **(P)**DF, **(C)**HM, **(V)**ideo. Se puede usar una, varias o asterisco (*) para indicar los cuatro tipos |
| `NomDF` | Condiciona la etiqueta si viene de tal DF o "else" si no se ha inicializado |
| `FileHelp` | Nombre del fichero de ayuda cuando se define HPCV:<br>- Si se deja en blanco será el nombre del script y el del modo<br>- Se puede llamar a una función<br>- Si el nombre lleva extensión será un fichero externo en `/help/tip/`<br>- Para ayuda interna usar etiquetas `[HelpHTML]` o `[HelpMarkdown]` |
| `ClaveHelp` | Para formato CHM, permite saltar a una zona particular |

## Ejemplos

### Ejemplo 1: Icono HTML básico
```
[TitleIcon] * | <img title="..." src="g/historico.png" />
```

### Ejemplo 2: Icono de ayuda con submenú
```
[TitleIcon] * | HP | | distribuir
```
Se mostrará un icono de ayuda que al pulsar saldrá un submenú para ver la ayuda en formato HTML o PDF.

### Ejemplo 3: Icono con texto personalizado
```
[TitleIcon] * | <span title="Usuarios">u</span>
```

### Ejemplo 4: Icono con función onclick
```
[TitleIcon] ?R | [@, title='Histórico de emails de {$_User}' onclick='top.eSWOpen(window,"Ll:...")']
```
El icono es una fuente, es como usar eIcon().

### Ejemplo 5: Con función de usuario
```
[TitleIcon] * | H | | userFunction()
```

### Ejemplo 6: Fichero externo markdown
```
[TitleIcon] * | H | | aplication.mark
```
Fichero externo en formato markdown en el directorio `/help/tip/`.

### Ejemplo 7: Fichero interno markdown
```
[TitleIcon] * | H | | aplicacion

[HelpMarkdown] aplicacion
## Información de la aplicación
```
Fichero interno en formato markdown.