# OnLoad

## Sintaxis

```
[OnLoad] Mode | LineaJavaScript/JavaScriptFunction
```

## Descripción

En los modos indicados, ejecuta una función o código JavaScript inmediatamente después de haber cargado la página. En las multifichas se definirá en el GDF.

## Parámetros

| Parámetro | Tipo | Descripción | Requerido | Valor por defecto |
|-----------|------|-------------|-----------|-------------------|
| Mode | String | Modo de ejecución (?, l, m, etc.) | Sí | - |
| LineaJavaScript/JavaScriptFunction | String | Código JavaScript o llamada a función | Sí | - |

## Ejemplos

### Ejemplo completo - Sistema de permisos

**Definición del formulario:**
```
[Title] Asignar permisos
[DBTable] usuarios
[DBIndex] id
[LoadINI] midir/carga_empresas.php
[OnLoad] ? | cargaRol();
[OnChange] ? | cd_rol | _cargaOpcion();
[FormButtons]
[JSIni] ?
    function cargaRol(){
        eCallSrv(window, 'midir/carga_rol.php');
    }
    function _cargaOpcion(){
        eCallSrv(window, 'midir/carga_opcion.php?'+eGF('cd_rol'));
    }
```

**Campos del formulario:**
```
[Fields] l
    DNI       | dni           | X | T | 8  |     | - |  |  | 
    Nombre    | nombre        | X | T | 20 |     | - |  |  | 
    Apellidos | apellidos     | X | T | 30 |     | - |  |  | 
    Email     | id            | X | T | 57 | 200 | - |  |  | 

[Fields] ?
    DNI       | dni                | 0 | T  | 8  |  | AQcp |   |  | 
    Apellidos | apellidos          | X | T  | 30 |  | QL   |   |  | 
    Nombre    | nombre             | X | T  | 20 |  | QL   |   |  | 
    E-Mail    | id                 | @ | T  | 65 |  | QLE  |   |  | 

[Fields] else
    DNI        | dni                | DNI | T | 8  |  | M |  | # | 
    Nombre     | nombre             | X   | T | 20 |  | M |  | # | 
    Apellidos  | apellidos          | X   | T | 60 |  | M |  | # | 
    Login      | id                 | @   | T | 65 |  | M |  | # |
    -          | Permisos Asignados |     |   |    |  |   |  |   | 
    Rol        | cd_rol             | # | SV | 60  |  | M |  | # | 
    Opcion     | cd_opcion          | # | SV | 60  |  | M |  | # | 
```

### Archivo de carga de roles (midir/carga_rol.php)
```php
<?php
    eInclude( $_Sql ); 
?>
<SCRIPT LANGUAGE="JavaScript" SRC="edes.php?R:$edes.js"></SCRIPT>
<SCRIPT>
    <?php 
        echo 'var Obj = _WOPENER;';
        echo "Obj.eClearSelect( 'cd_rol' );";
        qQuery("SELECT cd_rol, nm_rol FROM roles");
        while($row=qRow()){
            echo "Obj.eAddOption( 'cd_rol', Array( Array( '" . $row[0]. "','" . $row[1]. "') )  );";
        }
    ?>
</SCRIPT>
```

### Archivo de carga de opciones (midir/carga_opcion.php)
```php
<?php
    eInclude( $_Sql ); 
?>
<SCRIPT LANGUAGE="JavaScript" SRC="edes.php?R:$edes.js"></SCRIPT>
<SCRIPT>
    <?php 
        $tmp = $argv[0];
        list($cd_rol) = explode( ',', $tmp );	
        echo 'var Obj = _WOPENER;';
        echo "Obj.eClearSelect( 'cd_opcion' );";
        qQuery("SELECT cd_opcion, nm_opcion FROM opciones where cd_rol='{$cd_rol}'");
        while($row=qArray()){
            echo "Obj.eAddOption( 'cd_opcion', Array( Array( '" . $row['cd_opcion']. "','" . $row['nm_opcion']. "') )  );";
        }
    ?>
</SCRIPT>
```

### Ejemplos adicionales

#### Inicialización básica
```
[OnLoad] ? | inicializarFormulario();
```

#### Carga de datos específicos por modo
```
[OnLoad] m | cargarDatosModificacion();
[OnLoad] c | configurarVistaConsulta();
```

#### Llamada a servicio web
```
[OnLoad] ? | eCallSrv(window, 'services/init_data.php');
```

#### Configuración de campos
```
[OnLoad] ? | configurarCampos(); establecerFoco();
```

## Casos de uso comunes

1. **Carga de listas desplegables**: Poblar selects con datos de la base
2. **Inicialización de campos**: Establecer valores por defecto
3. **Configuración de interfaz**: Ajustar la apariencia según el modo
4. **Validaciones iniciales**: Ejecutar comprobaciones al cargar
5. **Llamadas a servicios**: Obtener datos de servicios externos
6. **Configuración de eventos**: Establecer listeners adicionales

## Notas técnicas

- Se ejecuta después de que la página esté completamente cargada
- Compatible con todos los modos de formulario
- En multifichas debe definirse en el archivo GDF
- Puede ejecutar múltiples funciones separándolas con punto y coma
- Útil para inicialización que depende de datos dinámicos