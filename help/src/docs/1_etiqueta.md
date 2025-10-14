# Etiqueta

## Descripción

Es el texto a mostrar en la columna (PROMPT). La etiqueta puede contener código HTML.

**Ejemplo:**
```
Días pares | ...
Días<br>pares | ...
```

## Generación Condicional de Campos

Ver su propio apartado.

## Prefijos de Ubicación

Si comienza por:

- **"," (coma)**: La etiqueta y su control se ubicarán a continuación del último elemento definido y en su misma columna. Ver también la etiqueta :EL:

- **"," ó "+" (coma / signo más)** y un número mayor que uno: Se pondrán en la línea actual en la columna indicada por el número. El número de columnas se define en la etiqueta [FIELDS].

- **"1,2.." (número)**: Se pondrán en la columna indicada por el número (1 es el valor por defecto) de la siguiente línea. En caso de que la etiqueta se quiera que empiece por un número se pondrá como carácter escapado (Ej: `\1` = 1).

- **"]"**: La etiqueta del campo se colocará encima del control.

- **"<"**: Salta el "< td >" de la etiqueta.

## Prefijo de Alineación

- **"=" (símbolo igual)**: El "Label" se formateará a la izquierda (por defecto se formatea a la derecha).

## Línea Horizontal de Separación de Contenidos

Si el contenido es un **"-" (guión)**, el motor generará una línea horizontal para separar los campos en base a conceptos diferentes. Si esta línea se quiere que esté dentro de un grupo {tab} tendremos que poner **"-{tab}"** para indicar que está contenida en el grupo.

### Funcionalidad de Expansión/Compresión

El contenido que hay entre dos líneas o desde una línea hasta el final del formulario puede **comprimirse (ocultarse) y expandirse (mostrarse)** haciendo click sobre la propia línea.

### Elementos de Configuración

- **Columna 2 (campo)**: Si se introduce un texto, se mostrará en el medio de la línea horizontal. Aquí se pueden meter variables entre llaves para dar un valor variable a este Label.

- **Columna 3 (tipo edición)**: Se puede incluir código que irá dentro de la definición de la etiqueta.

- **Columna 7 (modo)**: Si hay un "Q", este texto será visible al preguntar.

- **Columna 5 (longitud del campo)**: Se puede poner un número indicando a cuántos píxeles se coloca el texto de la línea o ponerlo con un tanto por ciento.

### Ejemplos de Líneas Horizontales

```
- | DATOS EMPRESA | color=red size=2 NOSHADE |    |  |   |Q  | title | |
- | DATOS EMPRESA | id=LineaTipo1            |    |  |   |Q  |       | |
- | DATOS EMPRESA | id=LineaTipo1            |[+-]|  |   |Q  |       | |
- | DATOS EMPRESA | id=LineaTipo1            | +? |  |   |Q  |       | |
- |               |                          | *  |  |   |   |       | | // La línea estará oculta
xxx| apellidos    | N                        | T  |30|230|AQ |       | |
```

### Controles de Expansión

El signo más **"+"** o el signo menos **"-"** en la **columna 4 (tipo de control)** sirve para indicar que la línea se puede pulsar:

- **"+"**: Por defecto saldrá visible y expandirá (visualizar) el contenido
- **"-"**: Por defecto ocultará los datos y comprimirá (ocultar) el contenido
- **"+?"**: Solo dejará un grupo visible a la vez
- **Sin signo**: El contenido se visualizará expandido por defecto

### Iconos en Líneas

Cuando la línea tiene funciones de expandirse y comprimirse, se puede utilizar la directiva **"{ICON}"** para poner un icono en el título de la línea. Si el icono se pone en HTML, tendrá que haber dos iconos:
- `[NmIcon]_0.[Ext]` para minimizar
- `[NmIcon]_1.[Ext]` para maximizar

Además del `title`, necesita atributos `titleOn` y `titleOff` para los títulos cuando el icono se puede maximizar y minimizar.

## Creación de Tabs

```
{Tab} Caption | Action/Color | Icon | Show | Title
```

- Si en **"Action"** está el comodín **"#"**, será sustituido por el número del subtab (ej: `uFuncion(#)`)
- En **"Caption"** puede ir un icono dentro del texto: `[setup]` / `[g/buscar.gif]` / `[Ä]`

**Ejemplo:**
```
{Tab} [Ä] Caption
```

Mediante la variable global **`$_IconTab`** se puede definir para todos los {Tab}.

## Listados

### Cabeceras de Listado

El carácter **"\" (barra invertida o backslash)** seguido de un texto, hace de éste la cabecera (o header) en los listados para este campo y el "TextoEnFichas" lo pondrá como tip en el TH del listado.

**Ejemplo:**
```
TextoEnFichas\TextoEnListados | | ...
```

### Espacios y Saltos de Línea

El carácter comodín **"?"** define un espacio en las fichas y un salto de línea en los listados.

**Ejemplo:**
```
Fecha?de alta | | ...
```

### Campos de Condición

En un listado que se quiera mostrar las condiciones de campos que no saldrán en el listado de forma visible ni oculta, mediante una **"c"** en la columna modo indicamos el label de la condición de campos que se rellenen.

**Ejemplo:**
```
DNI/NIE   | dni    | | | | | c | | |
Nombre    | nombre | | | | | c | | |
Apellidos | apel1  | | | | | c | | |
```

## Al Chequear Errores

El segundo carácter **"\" (barra invertida o backslash)** seguido de un texto, hace de éste el label del campo al informar de los errores de la ficha.

**Ejemplo:**
```
TextoEnFichas\TextoEnListados\TextoEnChequeos | | ...
```

## Fieldset (Agrupaciones de Campos)

Agrupa los campos que existan entre `:FS:` y `:FS`, poniéndoles un marco alrededor e insertando el Título en la parte superior izquierda del mismo.

**Sintaxis:**
```
{FS}{ Titulo
...
}
```

Ver la definición de la etiqueta :FS:

## Cambiar el Número de Columnas en una Sección

Agrupa los campos con un número determinado de columnas, distinto al valor por defecto.

**Sintaxis:**
```
{Columns}{ NºColumnas NºColumnas [, Propiedades [, Title [, CódigoEnLínea ] ] ]
...
}
```

## Incrustar Iconos Dentro del Label

Se pueden incrustar iconos dentro del label usando la sintaxis de llaves.

**Ejemplo:**
```
Fichero\{doc} | fichero | f | ICON | 50 | +nm_conta | MDS | | |
```