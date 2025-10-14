# eAddMenuOption

## Descripción
Permite definir opciones dinámicas en el árbol de opciones durante la carga del Desktop. Se utiliza definiendo la URL de la opción como "PHP:" más la función a ejecutar.

## Sintaxis
```php
eAddMenuOption( $Label, $HR='', $Icon='', $Title='', $Activo=true )
```

## Parámetros
- `$Label` (string): Texto de la opción del menú
- `$HR` (string): Acción o URL a ejecutar
- `$Icon` (string): Icono de la opción
- `$Title` (string): Título o tooltip
- `$Activo` (boolean): Si la opción está activa

## Funcionalidad
Inserta nuevas opciones en el menú dinámicamente desde funciones de usuario. Se activa mediante URLs tipo "PHP:nombreFuncion()".

## Ejemplos
```php
// Ejemplo 1: Función básica de menú
function uAltaMenus(){
    eAddMenuOption('Opcion - A', 'uURL("edes.php?Fa:fpago.edf", "CAJA1")');
    eAddMenuOption('Opcion - C', 'uURL("edes.php?Fc:fpago.edf", "CAJA2")');
    eAddMenuOption('-'); // Separador
    eAddMenuOption('Opcion - M', 'uURL("edes.php?Fm:fpago.edf", "CAJA3")');
}

// Ejemplo 2: Menú con iconos
function uMenuPersonalizado(){
    eAddMenuOption('Usuarios', 'mostrarUsuarios()', 'user', 'Gestión de usuarios');
    eAddMenuOption('Informes', 'abrirInformes()', 'chart', 'Ver informes');
}

// Ejemplo 3: Menú condicional
function uMenuCondicional(){
    if($permisos['admin']) {
        eAddMenuOption('Administrar', 'panelAdmin()', 'settings', 'Panel de administración');
    }
    eAddMenuOption('Perfil', 'editarPerfil()', 'profile', 'Editar perfil');
}
```