# AccessFields

## Sintaxis

```
[AccessFields] ListaFields [ | NombreTabla ]
```

## Descripción

En los listados, al realizar una exportación a Access, permite definir el nombre de la tabla y personalizar los nombres de los campos que se exportarán.

## Parámetros

| Parámetro | Descripción |
|-----------|-------------|
| **ListaFields** | Lista de campos a exportar, separados por comas |
| **NombreTabla** | Nombre que tendrá la tabla en Access (opcional) |

### Formato de ListaFields

#### Formato simple
Los campos se listan directamente:
```
campo1, campo2, campo3, campo4
```

#### Formato con alias
Se puede asignar un nombre personalizado a cada campo:
```
alias1=campo1, alias2=campo2, alias3=campo3
```

## Ejemplos

### Ejemplo 1: Exportación simple
```
[AccessFields] opcion, op_mode, op_add, op_del | arbol_opciones
```
- Exporta los campos: `opcion`, `op_mode`, `op_add`, `op_del`
- La tabla en Access se llamará `arbol_opciones`

### Ejemplo 2: Exportación con nombres personalizados
```
[AccessFields] caption=opcion, acceso=op_mode, seq_insert=op_add, seq_delete=op_del | arbol_opciones
```
- Campo `opcion` se exportará como `caption`
- Campo `op_mode` se exportará como `acceso`
- Campo `op_add` se exportará como `seq_insert`
- Campo `op_del` se exportará como `seq_delete`
- La tabla en Access se llamará `arbol_opciones`

## Notas importantes

- Si no se especifica `NombreTabla`, se usará un nombre por defecto
- Los alias permiten tener nombres más descriptivos en la exportación
- Esta etiqueta solo afecta a las exportaciones a Microsoft Access
- Los nombres de campos deben seguir las convenciones de nomenclatura de Access