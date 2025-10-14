# DBInsert

## SINTAXIS
```
[DBInsert] Mode [ | NomDF, ... / else [ | UNIQUE/Condition ] ...
```

## DESCRIPCIÓN
Código PHP a ejecutar **después** de dar un alta desde una ventana auxiliar y **antes** de cerrarla. Lo que se genere está dentro de una zona JavaScript. Es útil para asignar datos del registro que se acaba de dar de alta a la ventana padre.

Esta etiqueta está asociada a `[WinClose]` ya que sólo se ejecuta cuando está esta etiqueta presente.

## PARÁMETROS
- **Mode**: Modo de ejecución (A, cR, etc.)
- **NomDF**: Nombres de campos específicos (opcional)
- **UNIQUE/Condition**: Condiciones especiales (opcional)

## EJEMPLOS

### Ejemplo 1: Asignación de datos a ventana padre
```php
[Title] DATOS BÁSICOS USUARIOS
[DBTable] usuarios
[DBIndex] dni
[DBOrder] dni

[Fields] 
    DNI o NIE             | dni          | DNI | T  | 8  |     | A  |         | # | 
    F.Nacimiento          | fnacim       | F4  | T  | 10 |     | AF |         |   | 
    F.Alta                | f_alta       | F4  | T  | 7  |     | *  | #today# |   | 
    Apellidos             | apellido1    | N   | T  | 30 |     | A  |         | # | 
   ,                      | apellido2    | N   | T  | 30 |     | A  |         | # | 
    Nombre                | nombre       | N   | T  | 30 |     | A  |         | # | 
   ,Sexo                  | sexo         | N   | SV | 5  |     | A  |         | # | 

[WinClose]
[DBInsert] A
    global $ValorDB;
    echo 'if( window.name == "Pag" ) return;';
    for( $n=0; $n<count($ValorDB); $n++ ) $ValorDB[$n][0] = $ValorDB[$n][1];
    echo "var uO = window.frameElement.WOPENER;";
    $nombreCompleto = $nombre." ".$apellido1." ".$apellido2;
    echo "ePPF('_nm_persona','".$nombreCompleto."');";
    echo "ePPF('_sexo','".$sexo."');";
    echo "ePPF('_fnacim','".$fnacim."');";
    qSelect('personas','id_usuario',"dni='{$dni}'" ); 
    $row = qArray();
    echo "ePPF('id_usuario','".$row['id_usuario']."');";
```

### Ejemplo 2: Recarga ventana padre con URL específica
```php
[WinClose]
[DBInsert] A
    eInit();
    echo "<script>window.frameElement.WOPENER.location.replace('edes.php?Ll:verifica_user.edf&_ASSIGN=l&sol_usu=".$_vF['_su']."&modo=".$_vF['_mo']."');";
    echo 'top.eSWClose(window);</script>';
    eEnd();
```

### Ejemplo 3: Actualización de campos específicos en ventana padre
```php
[Title] AÑADIR PRODUCTO
[DBTable] productos
[DBIndex] cod_producto

[Fields]
    Código                | cod_producto | N   | T  | 10 |     | A  |         | # |
    Descripción           | descripcion  | N   | T  | 50 |     | A  |         | # |
    Precio                | precio       | N   | N  | 8  |     | A  |         | # |
    Stock                 | stock        | N   | N  | 5  |     | A  |         |   |

[WinClose]
[DBInsert] A
    global $ValorDB;
    
    // Verificar si es ventana auxiliar
    echo 'if( window.name == "Pag" ) return;';
    
    // Actualizar array de valores
    for( $n=0; $n<count($ValorDB); $n++ ) {
        $ValorDB[$n][0] = $ValorDB[$n][1];
    }
    
    // Referenciar ventana padre
    echo "var parentWin = window.frameElement.WOPENER;";
    
    // Asignar valores a campos de la ventana padre
    echo "ePPF('cod_producto', '".$cod_producto."');";
    echo "ePPF('descripcion_producto', '".$descripcion."');";
    echo "ePPF('precio_unitario', '".$precio."');";
    
    // Actualizar campo calculado
    echo "ePPF('total_linea', parseFloat('".$precio."') * parseFloat(parentWin.document.getElementById('cantidad').value));";
    
    // Mostrar mensaje de confirmación
    echo "alert('Producto añadido correctamente');";
```

### Ejemplo 4: Actualización con validaciones y mensajes
```php
[Title] NUEVO CLIENTE
[DBTable] clientes
[DBIndex] id_cliente

[Fields]
    CIF/NIF               | cif          | CIF | T  | 12 |     | A  |         | # |
    Razón Social          | razon_social | N   | T  | 60 |     | A  |         | # |
    Teléfono              | telefono     | N   | T  | 15 |     | A  |         |   |
    Email                 | email        | E   | T  | 50 |     | A  |         |   |

[WinClose]
[DBInsert] A
    global $ValorDB;
    
    // Verificar ventana
    echo 'if( window.name == "Pag" ) return;';
    
    // Obtener ID del cliente recién insertado
    qSelect('clientes', 'id_cliente', "cif='{$cif}'");
    $cliente = qArray();
    $id_cliente = $cliente['id_cliente'];
    
    // Actualizar valores en ventana padre
    echo "var parentWin = window.frameElement.WOPENER;";
    echo "ePPF('id_cliente', '".$id_cliente."');";
    echo "ePPF('nombre_cliente', '".$razon_social."');";
    echo "ePPF('cif_cliente', '".$cif."');";
    
    // Actualizar lista desplegable si existe
    echo "var selectCliente = parentWin.document.getElementById('select_cliente');";
    echo "if(selectCliente) {";
    echo "  var newOption = new Option('".$razon_social."', '".$id_cliente."');";
    echo "  selectCliente.add(newOption);";
    echo "  selectCliente.value = '".$id_cliente."';";
    echo "}";
    
    // Mensaje de éxito
    echo "parentWin.showMessage('Cliente creado correctamente', 'success');";
```

### Ejemplo 5: Procesamiento con múltiples acciones
```php
[WinClose]
[DBInsert] A
    global $ValorDB, $_vF;
    
    // Evitar ejecución en ventana principal
    echo 'if( window.name == "Pag" ) return;';
    
    // Actualizar valores
    for( $n=0; $n<count($ValorDB); $n++ ) {
        $ValorDB[$n][0] = $ValorDB[$n][1];
    }
    
    // Obtener datos adicionales
    qSelect('empleados', '*', "dni='{$dni}'");
    $empleado = qArray();
    
    // Crear registro en tabla relacionada
    $sql = "INSERT INTO empleados_historial (id_empleado, fecha_alta, usuario) 
            VALUES ('{$empleado['id_empleado']}', NOW(), '{$_SESSION['usuario']}')";
    qQuery($sql);
    
    // Actualizar ventana padre
    echo "var parentWin = window.frameElement.WOPENER;";
    echo "ePPF('id_empleado', '".$empleado['id_empleado']."');";
    echo "ePPF('nombre_empleado', '".$nombre." ".$apellido1."');";
    echo "ePPF('departamento', '".$empleado['departamento']."');";
    
    // Refrescar tabla si existe
    echo "if(typeof parentWin.refreshEmpleadosTable === 'function') {";
    echo "  parentWin.refreshEmpleadosTable();";
    echo "}";
    
    // Cerrar ventana automáticamente
    echo "setTimeout(function() { top.eSWClose(window); }, 1000);";
```

### Ejemplo 6: Con condiciones específicas
```php
[WinClose]
[DBInsert] A | nombre,apellido1,email
    // Solo procesar campos específicos
    echo 'if( window.name == "Pag" ) return;';
    
    // Validar email antes de procesar
    if(filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "var parentWin = window.frameElement.WOPENER;";
        echo "ePPF('contacto_nombre', '".$nombre." ".$apellido1."');";
        echo "ePPF('contacto_email', '".$email."');";
        echo "parentWin.showMessage('Contacto añadido', 'info');";
    } else {
        echo "alert('Error: Email no válido');";
        echo "return false;";
    }
```

## FUNCIONES JAVASCRIPT ÚTILES
- **ePPF(campo, valor)**: Asigna valor a campo en ventana padre
- **window.frameElement.WOPENER**: Referencia a la ventana padre
- **top.eSWClose(window)**: Cierra la ventana auxiliar
- **eInit() / eEnd()**: Para inicializar/finalizar contexto

## NOTAS IMPORTANTES
- Solo se ejecuta con `[WinClose]` presente
- El código se ejecuta en contexto JavaScript
- Útil para sincronizar datos entre ventana auxiliar y padre
- `$ValorDB` contiene los valores de los campos
- Se ejecuta **después** del INSERT en base de datos
- Permite actualización dinámica de la ventana padre sin recargar