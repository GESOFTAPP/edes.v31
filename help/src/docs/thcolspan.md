# THColSpan

## Descripción

Genera una fila de encabezados TH uniendo varias columnas. Une desde el campo inicial (`FieldBegin`) hasta el campo final (`FieldEnd`), asignando un título (`Title`) como nombre del grupo de columnas.

### Características especiales:
- Si el nombre del campo se define con llaves `{tabla,campo,alias}`, el nombre efectivo del campo será el alias. Ejemplo: `cd_prove{prove,cd_prove,cif}` → el campo será `cif`
- El literal del "Label" del colspan no puede repetirse en los "Label" de la segunda línea de TH
- Se desactiva automáticamente si se ha configurado `[MaxRec]`

## Sintaxis

```
[THColSpan] FieldBegin, FieldEnd, Title [ | FieldBegin, FieldEnd, Title |...]
```

## Parámetros

| Parámetro | Descripción |
|-----------|-------------|
| `FieldBegin` | Campo inicial o posición del campo desde donde comenzar la unión |
| `FieldEnd` | Campo final o posición del campo hasta donde terminar la unión |
| `Title` | Título que se mostrará para el grupo de columnas unidas |

### Notas sobre parámetros:
- Se pueden definir múltiples grupos de columnas separándolos con el símbolo `|`
- Cada grupo debe seguir el formato: `FieldBegin, FieldEnd, Title`

## Ejemplos

### Ejemplo 1: Múltiples grupos de columnas

```
[THColSpan] nombre, apellidos, CLIENTE | telefono1, fax, TELEFONOS
[AddCode] * | fax | B | &nbsp;&nbsp;&nbsp;Fax
[Fields]               
| cd_cliente | 0   | T |  8 || *    ||   |     DNI       
| dni        | DNI | T |  8 || AQcp || = |    ,N         
| nif        | NIF | T |  1 || AL   ||   |    ,Nombre    
| nombre     | X   | T | 20 || MQ   || # |    ,Apellidos 
| apellidos  | X   | T | 30 || MQ   || # |
{FS}{ Teléfonos    <]         
| telefono1  | T   | T |  9 || M    || % |    ,]         
| telefono2  | T   | T |  9 || M    || % |    ,]         
| telefono3  | T   | T |  9 || M    || % |    ,]         
| fax        | T   | T |  9 || M    || % | }
```

### Ejemplo 2: Grupo único con campos relacionales

```
[THColSpan] cif, nm_prove, PROVEEDOR
[Fields] 
| cd_prove   | cd_prove                          | 0   | T |   9 |     | *   | |   
| cd_factu   | cd_factu                          | *   | T |   9 |     | *   | |   
| Nºorden    | norden                            | #D  | T |  20 |     | MQ  | |   
| Fecha alta | dt_entrada                        | F4  | T |  10 |     | MQF | |   
| Obra       | cd_obra                           | 0   | S |   4 |     | MQ  | | # 
| CIF        | cd_prove{prove,cd_prove,cif}      | CIF | S |   9 | 100 | MBQ | | # 
| Nombre     | cd_prove{prove,cd_prove,nm_prove} | #   | S | 255 | 300 | -MQ | |   
```

## Resultado

La directiva `[THColSpan]` genera una fila de encabezados donde las columnas especificadas se unen visualmente bajo un título común, mejorando la organización y legibilidad de las tablas con múltiples campos relacionados.