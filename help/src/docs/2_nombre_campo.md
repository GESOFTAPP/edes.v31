# Nombre del Campo

## Descripción

Es el nombre real del campo en la tabla.

## Campos Virtuales

Si empieza por un **"_" (subrayado)**, el valor del campo no será grabado en el servidor, aunque se enviará en el caso de las fichas pero no en las multifichas. Para mandar al servidor un campo virtual que luego no se grabe tendrá que empezar su nombre por **tres guiones bajos "___"**. Esto permite crear campos de uso local en el lado del cliente.

**Nota**: eDes no tratará nombres de campos de tablas que empiecen o acaben por guión "_".

## Relaciones con Tablas

Si el tipo del control del campo es un **select** de una tabla de la BBDD, en este mismo parámetro se puede definir cómo se relacionan las dos tablas (la que trata la ficha actual y la tabla del select). Ver parámetro 4 (tipo de control).

## Ejemplos

### Selects Básicos
```
Operación  | cd_operacion                                                | 0  | S |  3|||||
```

### Selects con Relaciones Complejas
```
Asesor     | cd_gs_user{gs_user,cd_gs_user,user_surname,', ',user_name}  | 0  | S |  3|||||
Asesor     | cd_gs_user{gs_user,cd_gs_user,user_name as nombre}          | 0  | S |  3|||||
Asesor     | cd_gs_user{gs_user,cd_gs_user,user_name} alias              | 0  | S |  3|||||
Asesor     | cd_gs_user{gs_user,cd_gs_user,user_name} as alias           | 0  | S |  3|||||
```

### Referencias a Otras Tablas
```
Label      | gs_user:cd_gs_user                                          | ...
Label      | gs_user:cd_gs_user alias                                    | ...
Label      | gs_user:cd_gs_user as alias                                 | ...
Label      | #gs_user                                                    | ...
```

### Campos con Alias
```
Label      | dt_alta as udt_alta                                         | F4 | T | 10|||||
Label      | dt_alta udt_alta                                            | F4 | T | 10|||||
```

### Referencias con Tabla y Campo
```
Label      | Tabla.Campo                                                 | ...
Label      | A.Campo                                                     | ...
```

## Definiciones Auxiliares

La definición del campo que le precede un **"#"** indica que la definición se encuentra en el fichero **"/_datos/config/defaux.ini"** con la siguiente estructura:

```ini
#usuario  | gs_user{gs_user,cd_gs_user,user_surname,', ',user_name}
#cd_prov  | prov{prov,cd_prov,nm_prov}
...
#ETIQUETA | DEFINICION DEL CAMPO
```

## Plugins

### Ejemplo de Plugin
```
[Fields]
. | Field       | TE | TC | Lng       | Px      | Mod | Default | Cnd | Msg Error
  | pk          | +  | T  | 5         |         | *   |         |     |
< | tiny[texto] | o  | A  | -1,100,30 | 900,500 | M   |         |     |
```

Define un plugin como un objeto, cargará un plugin denominado **"/_datos/config/tiny.plugin"** que cargará las variables necesarias para instanciarlo y grabarlo. Al cargar el plugin llamará a la función:

```php
function tiny($Mode, &$Field, &$value="");
```