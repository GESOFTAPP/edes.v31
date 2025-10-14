# FieldBrowser

## Sintaxis

```
[FieldBrowser] Field | ListFieldsAsign | SQL/Function [ | NRowsVisible [ | NColsVisible [ | NmFieldsToSend ] ] ]
```

## Descripción

Selección de uno o más datos mediante un browser interactivo. Si la etiqueta se quisiera utilizar en los modos "R" habría que acompañarla de la etiqueta `[ShowFields]` para poder ver el dato al cargar la ficha.

Si al campo "Field" se le ha asignado la variable "Include" con un nombre de fichero (mediante `[AddCode] * | Field | I | Include=NombreFichero`), al buscar en el lado del servidor se hará un include de este fichero.

## Parámetros

| Parámetro | Descripción |
|-----------|-------------|
| **Field** | Nombre del campo a obtener la prestación. Siempre tipo "T" (Texto), normalmente es un campo virtual |
| **ListFieldsAsign** | Lista de campos a asignar valores o función de usuario. Se puede dejar un campo en blanco (se le pasará una matriz con todos los valores de la selección) |
| **SQL/Function** | Sentencia SQL para buscar los datos poniendo "#" sin comillas donde está la cadena a buscar, o función de usuario (con sus paréntesis) que devolverá la sentencia SQL a ejecutar |
| **NRowsVisible** | *(Opcional)* Altura del browser en número de líneas |
| **NColsVisible** | *(Opcional)* Número de columnas visibles, por defecto es una |
| **NmFieldsToSend** | *(Opcional)* Valores de campos a enviar, cada valor se sustituirá en #1, #2, etc. |

> **Nota:** FilterDinamic es una prestación futura

## Ejemplos

### Ejemplo 1: Browser básico con SQL directo

```
[FieldBrowser] _nombre | nombre,apel1,apel2 | select concat(nombre," ",apel1," ",apel2),nombre,apel1,apel2 from persona where concat(nombre," ",apel1," ",apel2) like # order by 1 | 7
```

**MySQL/MariaDB:**
```
[FieldBrowser] _nombre | nombre,apel1,apel2 | select concat(nombre," ",apel1," ",apel2),nombre,apel1,apel2 from persona where concat(nombre," ",apel1," ",apel2) like # order by 1 | 7
```

**PostgreSQL:**
```
[FieldBrowser] _nombre | nombre,apel1,apel2 | select nombre||' '||apel1||' '||apel2,nombre,apel1,apel2 from persona where nombre||' '||apel1||' '||apel2 like # order by 1 | 7
```

### Ejemplo 2: Campo en blanco en la asignación

```
[FieldBrowser] *cd*gs_user | cd_gs_user | select concat(user_name," ",user_surname),cd_gs_user from gs_user where concat(user_name," ",user_surname) like # order by 1 | 7

[Fields]
    cd_gs_user          | cd_gs_user   | 0 | T  | 9  | | *Q* | | |
    Usuario             | *cd*gs_user  | N | T  | 50 | | QM  | | |
    Tipo permiso        | license_type | N | SV | 9  | | QM  | | # |
    ,Permisos activos   | solo_activos | N | C  | 1  | | QM  | | |
```

**Resultado:** En la lista de campos a asignar el primero se ha dejado en blanco, el literal del nombre no se asigna a ningún campo, solo el código de usuario.

### Ejemplo 3: Usando función de usuario

```
[PHPIni] *
function SqlUser(){
    return 'select concat(user_name," ",user_surname),cd_gs_user from gs_user where concat(user_name," ",user_surname) like # order by 1';
}

[FieldBrowser] *cd*gs_user | cd_gs_user | SqlUser() | 7

[Fields]
    cd_gs_user | cd_gs_user  | 0 | T | 9  | | *Q* | | |
    Usuario    | *cd*gs_user | N | T | 50 | | QM  | | |
```

**Resultado:** En la función de usuario se puede cambiar dinámicamente tanto las condiciones como los campos a extraer.

### Ejemplo 4: Enviando parámetros adicionales

```
[PHPIni] *
function SqlUser(){
    return 'select concat(user_name," ",user_surname),cd_gs_user from gs_user where cd_departamento="#1" and concat(user_name," ",user_surname) like # order by 1';
}

[FieldBrowser] *cd*gs_user | cd_gs_user | SqlUser() | 7 || cd_departamento

[Fields]
    Departamento | cd_departamento | 0 | S | 20 | | Q   | | |
    cd_gs_user   | cd_gs_user      | 0 | T | 9  | | *Q* | | |
    Usuario      | *cd*gs_user     | N | T | 50 | | QM  | | |
```

**Resultado:** El valor del campo `cd_departamento` se sustituye por `#1` en la consulta SQL, permitiendo filtros dinámicos.

## Notas Importantes

- El símbolo "#" en la SQL se sustituye automáticamente por la cadena de búsqueda
- Los parámetros adicionales se sustituyen por #1, #2, etc. en orden
- Para modos "R" se requiere usar `[ShowFields]` para visualizar el dato
- Las funciones de usuario permiten mayor flexibilidad en la construcción de consultas
- El campo principal siempre debe ser de tipo "T" (Texto)