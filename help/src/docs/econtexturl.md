# eContextUrl

## Descripción
Registra y devuelve una URL para poder ejecutarla, especialmente útil cuando no se tiene el contexto (en un PHP personal). También permite configurar verificaciones de variables de sesión.

## Sintaxis
```php
eContextUrl( $url )
```

## Parámetros
- `$url` (string): URL a registrar y contextualizar

## Funcionalidad
Registra URLs para ejecución segura y permite configurar verificaciones de sesión mediante "session.ini" con la matriz SESS::$CHECK.

## Ejemplos
```php
// Ejemplo 1: Registro y ejecución de URL
echo "<script>";
echo "top.eCallSrv( window, '".eContextUrl("edes.php?D:operacion")."' );";
echo "</script>";

// Ejemplo 2: URL con parámetros
$urlContextualizada = eContextUrl("edes.php?Fa:fpago.edf");
echo "<a href='" . $urlContextualizada . "'>Acceder</a>";

// Ejemplo 3: Configuración en session.ini
/*
SESS::$CHECK = array(
    "cd_cli"=>"_Cli_",
    "usuario"=>"_User_",
    "perfil"=>"_Profile_"
);
*/
```