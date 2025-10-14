# Fields

## Sintaxis

```
[Fields] [ TCol / ISubList / Condition / card ] [ | Mode ] [ | XLS/XML/PDF/MDB/TXT/CSV/iSubList/MIX/TRIM/GRID/TFOOT ]
[Fields] XLS/XML/PDF/MDB/TXT/CSV [ | ListaCamposOrdenacion ]
```

## Descripción

Define los campos de un formulario o listado. Cada campo se especifica con 10 parámetros separados por barras verticales (|):

| Posición | Parámetro | Descripción |
|----------|-----------|-------------|
| 1 | Etiqueta | Texto que se muestra como etiqueta del campo |
| 2 | Nombre del campo | Nombre del campo en la base de datos |
| 3 | Tipo de edición | Tipo de validación y formato del campo |
| 4 | Tipo de control | Tipo de control HTML (T=texto, S=select, C=checkbox, etc.) |
| 5 | Longitud | Longitud máxima del campo |
| 6 | Ancho en pixels | Ancho del control en pixels |
| 7 | Modo | Modos en los que se muestra el campo |
| 8 | Valor por defecto | Valor inicial del campo |
| 9 | Condición del campo | Condición PHP para validar el campo |
| 10 | Mensaje de error | Mensaje mostrado si falla la validación |

**ATENCIÓN**: Cada campo debe estar en una sola línea. Los parámetros pueden ir en cualquier orden y los dos últimos son opcionales.

## Parámetros

### TCol
Total de columnas en el que se divide el formulario. Se entiende por columna la combinación "Label" + "Control". Si se omite se considera como una columna.

### Mode
Puede contener cualquier modo más el modo particular `else` para cuando se definen varias etiquetas [Fields] en el mismo DF. Si se omite entrará en todos los modos.

**Modos especiales:**
- `else`: Para cualquier modo no representado anteriormente
- `?`: Tendrá en cuenta las condiciones definidas en la columna 9
- **Condiciones mediante [CC]**: `[CC] #Etiqueta | Condición php`
- **Condiciones PHP directas**: `[Fields] $_TipoListado=="n"`

### ISubList
Cuando el parámetro es ISubList, las columnas cambian de sentido:
- **Columna 5**: Ancho en px
- **Columna 7**: Color de la columna
- **Columna 8**: Operadores de la etiqueta [ColsOp]

## Parámetros de exportación

- **XLS/XML/PDF/MDB/TXT/CSV**: Define el listado a extraer según el tipo de dato
- **iSubList**: Solo se tiene en cuenta si se está ejecutando una SubList
- **MIX**: El comportamiento de las columnas cambia a 3 columnas
- **TRIM**: Los campos de longitud variable tendrán el menor ancho posible
- **GRID**: Pone líneas verticales en el listado
- **TFOOT**: Los totales se verán en la primera y última fila

## Ejemplos

### Ejemplo 1: Formulario con dos columnas
```
[Fields] 2
```

### Ejemplo 2: Modo "else" para casos no contemplados
```
[Fields] else
```
Esta definición debe estar la última.

### Ejemplo 3: Usando variables condicionadas
```php
$_Variable['#GPForm'] = true;
[CC] #GPForm | $_Variable['#GPForm']

[Fields] #GPForm
...
```

### Ejemplo 4: Condición PHP directa
```
[Fields] $_TipoListado=='n'
    DNI | dni | D | T | 9 | | - | | |
```
Las etiquetas [Fields] y [DBOrder] se ejecutan solo cuando la expresión es verdadera.

### Ejemplo 5: Modo listado con MIX
```
[Fields] l | | mix
. | | | | | ColsWidth | | ColsColor | ColsOp |
```
Si el modo es "l" y el 3º parámetro es "mix", hay 3 columnas que cambian su significado.

### Ejemplo 6: Solo para ISubList
```
[Fields] ISubList
. | | | | | ColsWidth | | ColsColor | ColsOp |
```

### Ejemplo 7: Exportación PDF con ordenación
```
[Fields] PDF | email
    DNI / NIE | dni   | D | T | 9  | | - | | |
    E-Mail    | email | @ | T | 65 | | - | | |
```
Define los campos a extraer en formato PDF ordenados por "email".

### Ejemplo 8: Visualización en tarjetas (card)
```php
[PHPIni] l
function uFunc($row){
    ?>
    <TABLE border=0px cellspacing=1px cellpadding=0px style="display:table">
    <tbody>
    <TR><TD rowspan=2><img src="g/background_clipri.png" height=100px></TD><TD class='title-color'><?=$row[1]?></TD></TR>
    <TR><TD style="font-weight:normal"><?=$row[2]?></TD></TR>
    </tbody>
    </TABLE>
    <?PHP
}

[Fields] card
. | cd_dele_semanal | 0 | T |  9 | | * | | |
.-| Titulo2
.=| cd_visita       | X | S | 30 | | - | | |
     >uFunc
     -
     Razón Visita    | cd_visita   | X | S | 30 | | - | | |
.    -
     Delegado        | cd_delegado | X | S | 50 | | - | | |
     Empresa Visitada| cd_empre    | + | S | 60 | | - | | |
     Fecha           | dt_visita   | F4| T | 10 | | - | | |
     Ver             | fichero as icon | X | T | 5 | | - | | |

. Fichero | fichero | X | T | 50 | | * | | |
. Cliente | cd_cli  | 0 | T |  5 | | * | | |
```

### Ejemplo 9: Comunicaciones con modo condicional
```
[Fields] ?
    Tipo comunicación  | tipo       | X | SV | 1  | 50    | Q |  |  |
    Idioma             | cd_idioma  | 0 | SV | 4  | 200   | Q |  |  |

[Fields] l
    Id         | id_textos_comunicacion | + | T  | 9        |  | * |  |  |
    Asunto     | asunto                 | # | A  | 255,80,3 |  | M |  |  |
    Canal      | tipo                   | X | SV | 1        |  | M |  |  |
    Idioma     | cd_idioma              | 0 | SV | 4        |  | M |  |  |

[Fields] else
. Label       | Field                  | TE | TC | Lng         | Px    | Mod | Default | Cnd | Msg Error
  Id          | id_textos_comunicacion | +  | T  | 9           |       | *   |         |     |
  Canal       | tipo                   | X  | SV | 1           | 50    | M   |         | #   |
  Idioma      | cd_idioma              | 0  | SV | 4           | 200   | M   |         | #   |
  Asunto      | asunto                 | #  | A  | 255,80,3    | +tipo | M   |         |     |
  Cuerpo      | cuerpo                 | #  | A  | 5000,150,20 | +tipo | ML  |         |     |
```

### Ejemplo 10: Manual con campos condicionales y funciones especiales
```
[Fields]
    Código           | cd_manual                             | *  | T  | 9        |          | *      |         |   |
#!(c,m,b) Fecha·Alta | fecha                                 | F4 | T  | 10       | 81       | MQF    | #today# | # |
#(c,m,b) Fecha·Alta  | fecha                                 | F4 | T  | 10       | 81       | MQF    |         |   |
#!(c) ,Privado       | privado                               | X  | C  | 1        |          | MQL    |         |   |
    ,Activo           | activo                                | N  | C  | 1        | <nm_guia | MQ     | S       |   |
    Guía rápida      | cd_guia                               | 0  | S  | 9        | 300      | MQ     |         |   |
    Aplicacion       | cd_aplicacion{gs_op,cd_gs_op,caption} | 0  | Ss | 9        | +cd_guia | MQ     |         |   |
    Grupo            | cd_grupomanual                        | X  | SV | 2        | +cd_guia | MQ     |         |   |
    Manual           | nm_manual                             | X  | T  | 50       | +cd_guia | MQ     |         | # |
    Descripción      | descripcion                           | #  | A  | 500,80,3 | +cd_guia | MQ     |         | # |
    Documento        | fichero                               | f  | F  | 60       | +cd_guia | MDUCPL |         | # |
#(l) Ver             | fichero                               | f  | F  | 60       | +nm_guia | MDUCP  |         |   |
                     | cd_manual                             | +  | T  | 5        |          | *Q     |         |   |
```

## Notas Importantes

- Cada campo debe definirse en una sola línea
- Los parámetros 9 y 10 son opcionales
- Para modo "?" se evalúan las condiciones de la columna 9
- El modo `else` debe ser la última definición
- En listados con atributo `card` se muestra la visualización personalizada
- Variable global `$_ColsTrim = true` en "sql.ini" para aplicar TRIM globalmente