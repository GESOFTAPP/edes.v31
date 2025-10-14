# EditMirror

## Sintaxis
```
[EditMirror] FieldsList
```

## Descripción
Sólo en fichas que componen grupos de fichas. Funciona de la misma forma que la etiqueta [Mirror] pero el usuario puede escribir en los campos indicados. 

Para poder utilizar un EditMirror, se debe colocar el código adecuado en dos ficheros de definición:

- **En el fichero de definición donde tenemos originariamente el campo que queremos calcar**: debemos incluir el campo afectado como parámetro de la etiqueta [EditMirror]
- **En el fichero de definición donde vamos a calcar nuestro campo**: el nombre del campo destino (parámetro 2 de la etiqueta [Fields]) debe ser el mismo que el originario pero comenzando con "_", y en el parámetro 4 de la etiqueta [Fields] se debe colocar el signo de campo calco ([*]), también puede ser "[S]" para indicar un select y "[SV]" para indicar Select Virtual

Si se define un [SV] se ha de poner en esa solapa la definición del select con [AddOption].

## Parámetros

| Parámetro | Tipo | Obligatorio | Descripción |
|-----------|------|-------------|-------------|
| FieldsList | String | Sí | Serie de campos separados por comas que se van a sincronizar entre las fichas del grupo |

## Tipos de campo destino

| Tipo | Descripción |
|------|-------------|
| [*] | Campo calco estándar |
| [S] | Select |
| [SV] | Select Virtual (requiere definición con [AddOption]) |

## Ejemplo

### Definición de la ficha cliente.gdf
```
[Tab] acm | Personales| cl/cliente
[Tab] acm | Gestion   | cl/gestion  
[Tab] acm | Banco     |-cl/banco

[DBTable]  cliente
[DBIndex]  dni
[DBSerial] numero
[DBLimit]  100
```
*Nota: El guión en cl/banco es para ocultar la solapa*

### Definición en la ficha del cliente correspondiente al grupo de fichas (cliente.edf)
```
[DBTable] cliente

Entidad Bancaria | *cd*banco | 0  | [*] | 4  |36| M |||
,Sucursal        | *cd*suc   | 0  | [*] | 4  |36| M |||
,Control         | *control  | DC | [*] | 2  |18| M |||
,Nº Cuenta       | *num_cta  | 0  | [*] |10  |  | M |||
```

### Definición en la ficha de datos bancarios correspondiente al grupo de fichas (banco.edf)
```
[DBTable]  banco
[DBIndex] dni

[EditMirror] cd_banco,cd_suc,control,num_cta

[Fields]
Entidad Bancaria | cd_banco | 0  | T |  4|| M |||
,Sucursal        | cd_suc   | 0  | T |  4|| M |||
,Control         | control  | DC | T |  2|| M |||
,Nº Cuenta       | num_cta  | 0  | T | 10|| M |||
```

## Funcionamiento

1. **Ficha origen**: Define los campos con [EditMirror] y tipos normales (T)
2. **Ficha destino**: Define los campos espejo con nombres precedidos por "_" y tipo [*]
3. **Sincronización**: Los cambios realizados en cualquiera de las fichas se reflejan automáticamente en la otra
4. **Edición**: A diferencia de [Mirror], el usuario puede escribir directamente en los campos de ambas fichas

## Notas importantes

- Solo funciona en grupos de fichas
- Los nombres de campo en la ficha destino deben comenzar con "_"
- Se pueden usar selects ([S]) y selects virtuales ([SV])
- Los selects virtuales requieren definición adicional con [AddOption]