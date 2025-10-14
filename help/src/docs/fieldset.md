# FieldSet

## Sintaxis

### Etiqueta independiente
```
[FieldSet] Mode | FromField, ToField, Title
```

### Sub-etiqueta dentro de Fields
```
{FS}{ Title | Styles
  campo1 | ... |
  campo2 | ... |
  ...
}
```

## Descripción

La etiqueta `[FieldSet]` agrupa campos dentro de la etiqueta `[Fields]` colocando un marco visual alrededor de ellos con un título en la parte superior izquierda. Proporciona una forma de organizar visualmente campos relacionados dentro del formulario.

### Características principales:
- **Marco visual**: Crea un borde alrededor de los campos agrupados
- **Título integrado**: Muestra un título en la esquina superior izquierda
- **Dos implementaciones**: Como etiqueta independiente `[FieldSet]` o como sub-etiqueta `{FS}` dentro de `[Fields]`
- **Organización**: Mejora la estructura visual y lógica del formulario

## Parámetros

### Para [FieldSet]
- **Mode**: Modo de operación del fieldset
- **FromField**: Primer campo que está dentro del fieldset
- **ToField**: Último campo que está dentro del fieldset  
- **Title**: Texto que aparece en la parte superior izquierda del marco

### Para {FS}
- **Title**: Texto del título del fieldset
- **Styles**: Estilos CSS para personalizar la apariencia (ancho, padding, etc.)

## Ejemplos de uso

### Ejemplo con etiqueta independiente
```
[FieldSet] 1 | dni, telefono, Datos Personales
```

### Ejemplo con sub-etiqueta {FS}

#### Agrupación de datos de persona
```
{FS}{Persona | WIDTH:450; PADDING-LEFT:15; PADDING-BOTTOM:2; PADDING-TOP:2;
   <DNI o NIE       | dni                | X   | T  | 8   | 62  | LMcp |   | # | 
    Apellidos       | apellido           | N   | T  | 30  | 230 | -    |   |   | 
    Nombre          | nombre             | N   | T  | 30  | 230 | -    |   |   | 
    Número          | persona            | X   | T  | 8   |     | *    |   |   | 
}
```

#### Agrupación de datos de origen
```
{FS}{Datos de origen | WIDTH:450; PADDING-LEFT:15; PADDING-BOTTOM:2; PADDING-TOP:2;
   <Empresa         | cd_empresa_origen  | #D  | T  | 9   | 70  | -ML  |   |   | 
    Centro          | cd_centro_origen   | -   | T  | 9   | 70  | -L   |   |   | 
    ,               | *nm*centro_orige   | D   | T  | 60  | 250 | -    |   |   | 
    Departamento    | depart_origen      | X   | T  | 8   | 70  | -ML  |   |   | 
   ,                | *depart*origen     | X   | T  | 45  | 250 | -ML  |   |   | 
                    | cd_muni_origen     | #D  | T  | 3   |     | *    |   |   | 
}
```

#### Agrupación de datos de destino
```
{FS}{Datos de destino | WIDTH:450; PADDING-LEFT:15; PADDING-BOTTOM:2; PADDING-TOP:2;
   <Empresa         | cd_empresa_destino | #D  | T  | 9   | 70  | -ML  |   |   | 
    Centro          | cd_centro_destino  | -   | T  | 9   | 70  | ML   |   | # | 
    ,               | *nm*centro_destino | D   | T  | 60  | 250 | -    |   |   | 
    Departamento    | depart_destino     | X   | T  | 8   | 70  | -ML  |   |   | 
   ,                | *depart*destino    | X   | T  | 45  | 250 | -ML  |   |   | 
                    | cd_muni_destino    | #D  | T  | 3   |     | *    |   |   | 
}
```

## Ejemplo completo de implementación
```
[Fields] else
...
{FS}{Persona | WIDTH:450; PADDING-LEFT:15; PADDING-BOTTOM:2; PADDING-TOP:2;
   <DNI o NIE       | dni                                                        | X   | T  | 8        | 62     | LMcp |        | # | 
    Apellidos       | apellido                                                   | N   | T  | 30       | 230    | -    |        |   | 
    Nombre          | nombre                                                     | N   | T  | 30       | 230    | -    |        |   | 
    Número          | persona                                                    | X   | T  | 8        |        | *    |        |   | 
}
{FS}{Datos de origen | WIDTH:450; PADDING-LEFT:15; PADDING-BOTTOM:2; PADDING-TOP:2;
   <Empresa         | cd_empresa_origen                                          | #D  | T  | 9        | 70     | -ML  |        |   | 
    Centro          | cd_centro_origen                                           | -   | T  | 9        | 70     | -L   |        |   | 
    ,               | *nm*centro_orige                                           | D   | T  | 60       | 250    | -    |        |   | 
    Departamento    | depart_origen                                              | X   | T  | 8        | 70     | -ML  |        |   | 
   ,                | *depart*origen                                             | X   | T  | 45       | 250    | -ML  |        |   | 
                    | cd_muni_origen                                             | #D  | T  | 3        |        | *    |        |   | 
}
{FS}{Datos de destino | WIDTH:450; PADDING-LEFT:15; PADDING-BOTTOM:2; PADDING-TOP:2;
   <Empresa         | cd_empresa_destino                                         | #D  | T  | 9        | 70     | -ML  |        |   | 
    Centro          | cd_centro_destino                                          | -   | T  | 9        | 70     | ML   |        | # | 
    ,               | *nm*centro_destino                                         | D   | T  | 60       | 250    | -    |        |   | 
    Departamento    | depart_destino                                             | X   | T  | 8        | 70     | -ML  |        |   | 
   ,                | *depart*destino                                            | X   | T  | 45       | 250    | -ML  |        |   | 
                    | cd_muni_destino                                            | #D  | T  | 3        |        | *    |        |   | 
}
...
```

## Estilos CSS comunes

### Estilos básicos
- `WIDTH:450`: Ancho fijo de 450 píxeles
- `PADDING-LEFT:15`: Espaciado interno izquierdo
- `PADDING-BOTTOM:2`: Espaciado interno inferior
- `PADDING-TOP:2`: Espaciado interno superior

### Estilos adicionales
- `BORDER:1px solid #ccc`: Borde personalizado
- `BACKGROUND-COLOR:#f9f9f9`: Color de fondo
- `MARGIN:10px`: Margen externo

## Casos de uso comunes

- **Agrupación lógica**: Organizar campos relacionados (datos personales, direcciones, etc.)
- **Formularios complejos**: Dividir formularios largos en secciones manejables
- **Datos relacionados**: Agrupar información de origen y destino, como en el ejemplo
- **Mejora visual**: Proporcionar estructura visual clara al formulario
- **Organización por categorías**: Separar diferentes tipos de información
- **Formularios de traslados**: Diferenciar claramente datos de origen y destino