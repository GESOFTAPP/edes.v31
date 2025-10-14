# RowColor

## Descripción

En un listado podemos modificar el color de las filas en función de ciertas condiciones, por ejemplo para resaltar valores negativos. Esta funcionalidad permite aplicar estilos CSS dinámicamente a las filas de una tabla según criterios específicos.

## Sintaxis

```
[RowColor] Condition | CSS
```

## Parámetros

| Parámetro | Descripción |
|-----------|-------------|
| **Condition** | Condición PHP que determina cuándo aplicar el estilo. También puede ser una función PHP, en cuyo caso solo se especifica el nombre de la función y esta debe devolver las instrucciones CSS. |
| **CSS** | Instrucciones de hoja de estilo que se aplicarán al elemento `<tr>`. Puede incluir `style`, `id` o `class`. **Nota:** Si el listado tiene cursor, solo se pueden usar `id` y `class`, ya que `style` será anulado al pasar el cursor por encima. |

## Ejemplos

### Ejemplos básicos con condiciones

```php
[RowColor] estado=='T' | style='color:blue'
```

```php
[RowColor] $row[3]=='00' | id='p'
```

```php
[RowColor] cd_field=='03' | style='color:#FF0000'
```

### Ejemplos con funciones de cadena

```php
[RowColor] mb_substr(cd_field,0,1)=='0' | style='color:#FF0000'
```

```php
[RowColor] cd_field[0]=='0' | style='color:#FF0000'
```

```php
[RowColor] cd_field[0]=='0' | class='Pie'
```

### Ejemplo con función personalizada

```php
[RowColor] ColorFila($row)

[PHPIni] l
    function ColorFila($row){
        if( $row[0]=='...' ) return 'style="color:blue"';
        if( ... ) return 'style="color:red"';
        if( ... ) return 'class="Pie"';
        if( ... ) return 'id="Negativo"';
    }
```

## Consideraciones importantes

- **Cursor en listados**: Si el listado tiene cursor habilitado, evita usar el atributo `style` ya que será anulado por los efectos hover. En su lugar, utiliza `id` o `class`.
- **Funciones personalizadas**: Cuando uses una función personalizada, esta debe devolver una cadena con las instrucciones CSS completas (incluyendo `style=""`, `class=""` o `id=""`).
- **Condiciones PHP**: Puedes usar cualquier expresión PHP válida en la condición, incluyendo comparaciones, funciones de cadena, y acceso a arrays.
