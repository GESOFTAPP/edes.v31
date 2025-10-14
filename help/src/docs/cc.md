# CC

## Sintaxis

```
[CC] #ConditionName | Condition
```

## Descripción

Asigna el resultado de la condición a evaluar al nombre de la condición. El uso habitual es crear una condición para posteriormente utilizarla tantas veces como deseemos simplemente utilizando su nombre, por ejemplo para omitir porciones de código dentro de un archivo EDF. Los operadores lógicos "and" y "or" hay que ponerlos en formato texto y no con los símbolos "&" ni "|" pues el símbolo "|" se utiliza para separar parámetros.

## Parámetros

| Parámetro | Tipo | Descripción |
|-----------|------|-------------|
| #ConditionName | String | Nombre de la condición que deseamos crear. Debemos introducir la almohadilla "#" como primer carácter para que EDES detecte que es una condición |
| Condition | Expression | Expresión condicional con resultado true o false en PHP. Los operadores lógicos hay que ponerlos con letra (and, or, ..) al usar el carácter '|' como delimitador. Si se ha creado la variable por ejemplo "#da" también se puede usar "#!da" para hacer un not al valor de la variable. La condición también puede ser un SQL que devuelva un 0 para false y distinto de 0 para true |

## Ejemplos

### Ejemplo completo del manual
```php
[PHPStart] *
function userFunction(){
    // ... lógica personalizada
    return true/false;
}

[CC] #da  | $_Modo!='a'  and $_Modo!='A'
[CC] #ic  | $_Modo=='c'  or  $_Modo=='cR'
[CC] #c1 | select count(*) from gs_user where cd_gs_user={$_User}
[CC] #c2 | qCount('gs_user','cd_gs_user={$_User}');
[CC] #c3 | userFunction()

[Fields]
#da ¿
    // Campos solo cuando NO es alta
    ...
?
¿ #ic ?
    // Campos solo en consulta
    ...
¿ #!ic ?
    // Campos cuando NO es consulta
    ...
```

### Ejemplo con variables predefinidas
```php
$_Variable['#GPForm'] = true;
// Se puede dar el valor que se quiera a una variable

[CC] #GPForm | $_Variable['#GPForm']

[Fields]
#GPForm ¿
    // Campos que solo aparecen cuando GPForm es true
    ...
?
```

### Ejemplo básico - Condiciones por modo
```php
[CC] #esAlta | $_Modo=='a' or $_Modo=='A'
[CC] #esEdicion | $_Modo=='m' or $_Modo=='M'
[CC] #esConsulta | $_Modo=='c' or $_Modo=='cR'

[Fields]
#esAlta ¿
    Código | cd_registro | + | T | 10 || * |||
?
#esEdicion ¿
    Código | cd_registro | - | T | 10 || M |||
?
#esConsulta ¿
    Código | cd_registro | - | T | 10 || MQ |||
?
```

### Ejemplo con consultas SQL
```php
[CC] #tienePermisos | select count(*) from permisos where usuario='{$_User}' and tabla='{$_Table}'
[CC] #esAdministrador | select count(*) from usuarios where codigo='{$_User}' and perfil='admin'

[Fields]
#tienePermisos ¿
    // Campos solo para usuarios con permisos
    Estado | estado | N | S | 1 || M |||
?
#esAdministrador ¿
    // Campos solo para administradores
    Configuración | config | X | T | 255 || M |||
?
```

### Ejemplo con funciones personalizadas
```php
[PHPStart] *
function puedeEditar($tabla, $registro) {
    global $_User;
    // Lógica compleja de permisos
    return verificarPermisos($_User, $tabla, $registro);
}

[CC] #puedeEditar | puedeEditar('{$_Table}', '{$cd_registro}')
[CC] #soloLectura | !puedeEditar('{$_Table}', '{$cd_registro}')

[Fields]
#puedeEditar ¿
    Observaciones | observaciones | X | T | 500 || M |||
?
#soloLectura ¿
    Observaciones | observaciones | X | T | 500 || MQ |||
?
```

### Ejemplo con negación
```php
[CC] #noEsBorrador | $_POST['estado'] != 'borrador'
[CC] #esBorrador | $_POST['estado'] == 'borrador'

[Fields]
#noEsBorrador ¿
    Fecha Publicación | fe_publicacion | F4 | T | 10 || M |||
?
#!noEsBorrador ¿  // Equivalente a #esBorrador
    Fecha Borrador | fe_borrador | F4 | T | 10 || M |||
?
```

### Ejemplo con múltiples condiciones
```php
[CC] #usuarioEspecial | $_User=='admin' or $_User=='supervisor'
[CC] #periodoActivo | date('Y-m-d') >= '{$fecha_inicio}' and date('Y-m-d') <= '{$fecha_fin}'
[CC] #mostrarCampos | #usuarioEspecial and #periodoActivo

[Fields]
#mostrarCampos ¿
    Campo Especial | campo_especial | X | T | 100 || M |||
?
```

## Uso en Otras Secciones

Las condiciones definidas con CC pueden usarse en:
- **[Fields]**: Mostrar/ocultar campos condicionalmente
- **[PHPStart]**, **[PHPEnd]**: Ejecutar código PHP condicionalmente
- **[JSStart]**, **[JSEnd]**: Ejecutar JavaScript condicionalmente
- **[HTMStart]**, **[HTMEnd]**: Incluir HTML condicionalmente

## Operadores Permitidos

- **Comparación**: `==`, `!=`, `<`, `>`, `<=`, `>=`
- **Lógicos**: `and`, `or` (no usar `&&` ni `||`)
- **Negación**: `!` o usar `#!nombreCondicion`