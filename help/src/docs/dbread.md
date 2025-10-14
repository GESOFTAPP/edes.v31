# DBRead

## SINTAXIS
```
[DBRead] Mode [ | NomDF/else,... ]
```

## DESCRIPCIÓN
Incluir código PHP **después de leer un registro**, solo en fichas. Se ejecuta cada vez que se carga un registro desde la base de datos, permitiendo procesar o preparar datos adicionales.

## PARÁMETROS
- **Mode**: Modo de ejecución (mR, bR, aR, etc.)
- **NomDF**: Nombres de campos específicos o "else" para todos

## EJEMPLOS

### Ejemplo 1: Generar variables JavaScript para modificación
```php
[DBTable] pagos
[DBIndex] cd_pagos
[DBSerial] cd_pagos
[DBOrder] organizacion1, organizacion2

[Fields]
                                   | cd_pagos                         | +  | T | 2 |     | *Q* |   |                                    
    Organizacion pagadora          | organizacion1{org,cd_org,nm_org} | 0  | S | 8 | 340 | MQ  |   |     
    Organizacion recepcionaria     | organizacion2{org,cd_org,nm_org} | 0  | S | 8 | 340 | MQ  |   | 

// Después de leer el registro genera variables JavaScript para modo modificación (mR)
[DBRead] mR
    echo <<<EOD
        <SCRIPT LANGUAGE="JavaScript">
            var *Organizacion1 = "{$*vF['organizacion1']}";
            var *Organizacion2 = "{$*vF['organizacion2']}";
        </SCRIPT>
EOD;
```

### Ejemplo 2: Llenar select dinámico con datos relacionados
```php
[DBTable] cnt_roles
[DBIndex] cd_cnt_roles
[DBOrder] cd_cnt_roles
[DBSerial] cd_cnt_roles

[Fields] else
                | cd_cnt_roles                                              | -  | T  | 9   |     | *   |  | # | 
    Usuario     | cd_gs_user{gs_user,cd_gs_user,user_name,' ',user_surname} | -  | S  | 9   | 250 | -MQ |  |   | 
    Fecha       | fecha                                                     | F4 | T  | 10  |     | -M  |  |   | 
   ,Hora        | hora                                                      | H  | T  | 8   | 60  | M   |  |   | 
    Opción menú | opcion_menu                                               | #  | SV | 4   | 450 | M   |  |   | 
    Observaciones| observa                                                  | #  | T  | 100 |     | ML  |  |   | 

[PHPIni] *
    // Llenar el array $aopcion_menu con las opciones de menú que hay en tbl_menu
    $aopcion_menu = array();
    sql_Query("SELECT * FROM tbl_menu WHERE cd_rol='1' AND activo='S' ORDER BY fecha");
    while($r = sql_Array()){
        $aopcion_menu[$r['opcion_menu']] = $r['opcion_menu'];
    }

[DBRead] mR,bR
    // Cuando lee de la base de datos almacenar el código de opcion_menu para utilizarlo en PHPEnd mR
    global $_vF;
    $_opcion_menu = $_vF['opcion_menu'];

[PHPEnd] a,mR,bR
    // Llenar el select de opciones de menú y poner la opcion_menu que corresponde
    if( !isset($_opcion_menu) ) $_opcion_menu = '';
    echo "<script>var aopcion_menu='".implode('|',$aopcion_menu)."';";
    ?>
    aopcion_menu = aopcion_menu.split('|');
    for(var x=0; x<aopcion_menu.length; x++){
        var c = aopcion_menu[x].split('@');
        eAddOption('opcion_menu', Array(Array(c[0], c[1])));
    }
    <?php 
    echo "ePF('opcion_menu','{$_opcion_menu}');";
    echo "</script>";
```

### Ejemplo 3: Cálculos automáticos al leer registro
```php
[DBTable] facturas
[DBIndex] num_factura

[Fields]
    Número          | num_factura    | N  | T | 10 |     | *Q |     |   |
    Cliente         | id_cliente     | 0  | S | 8  | 300 | MQ |     |   |
    Fecha           | fecha_factura  | F4 | T | 10 |     | MQ |     |   |
    Base imponible  | base_imponible | N  | N | 10 |     | MQ |     |   |
    IVA %           | porcentaje_iva | N  | N | 5  |     | MQ | 21  |   |
    Importe IVA     | importe_iva    | N  | N | 10 |     | MQ |     |   |
    Total           | total_factura  | N  | N | 10 |     | *Q |     |   |

[DBRead] mR,bR
    global $_vF;
    
    // Calcular IVA automáticamente
    $base = floatval($_vF['base_imponible']);
    $porcentaje = floatval($_vF['porcentaje_iva']);
    $iva = ($base * $porcentaje) / 100;
    $total = $base + $iva;
    
    // Actualizar campos calculados
    $_vF['importe_iva'] = number_format($iva, 2, '.', '');
    $_vF['total_factura'] = number_format($total, 2, '.', '');
    
    echo "<script>";
    echo "ePF('importe_iva', '".$_vF['importe_iva']."');";
    echo "ePF('total_factura', '".$_vF['total_factura']."');";
    echo "</script>";
```

### Ejemplo 4: Cargar datos relacionados de otras tablas
```php
[DBTable] empleados
[DBIndex] id_empleado

[Fields]
    ID              | id_empleado    | +  | T | 8  |     | *Q |     |   |
    DNI             | dni            | D  | T | 12 | 120 | MQ |     | # |
    Nombre          | nombre         | N  | T | 30 | 200 | MQ |     | # |
    Apellidos       | apellidos      | N  | T | 50 | 250 | MQ |     | # |
    Departamento    | id_departamento| 0  | S | 8  | 200 | MQ |     |   |
    Cargo           | cargo          | N  | T | 40 | 200 | MQ |     |   |
    Salario         | salario        | N  | N | 10 | 100 | MQ |     |   |
    - Datos Adicionales | | | + | | | M | | |
    Teléfono        | telefono       | N  | T | 15 | 150 | ML |     |   |
    Email           | email          | E  | T | 50 | 300 | ML |     |   |

[DBRead] mR,bR
    global $_vF;
    
    // Cargar información del departamento
    qSelect('departamentos', 'nombre_departamento, presupuesto, jefe_departamento', 
            "id_departamento = '{$_vF['id_departamento']}'");
    $dept = qArray();
    
    // Cargar historial de empleado
    qSelect('empleados_historial', 'COUNT(*) as total_movimientos, MAX(fecha_movimiento) as ultimo_movimiento',
            "id_empleado = '{$_vF['id_empleado']}'");
    $historial = qArray();
    
    // Generar información adicional en JavaScript
    echo "<script>";
    echo "var departamentoInfo = {";
    echo "  nombre: '".$dept['nombre_departamento']."',";
    echo "  presupuesto: '".$dept['presupuesto']."',";
    echo "  jefe: '".$dept['jefe_departamento']."'";
    echo "};";
    echo "var historialInfo = {";
    echo "  movimientos: '".$historial['total_movimientos']."',";
    echo "  ultimo: '".$historial['ultimo_movimiento']."'";
    echo "};";
    echo "</script>";
```

### Ejemplo 5: Validaciones y permisos al leer
```php
[DBTable] documentos
[DBIndex] id_documento

[Fields]
    ID               | id_documento   | +  | T | 8  |     | *Q |     |   |
    Título           | titulo         | N  | T | 60 | 400 | MQ |     | # |
    Tipo             | tipo_documento | N  | SV| 3  | 150 | MQ |     |   |
    Estado           | estado         | N  | SV| 2  | 100 | MQ |     |   |
    Fecha creación   | fecha_creacion | F4 | T | 10 |     | *Q |     |   |
    Usuario creador  | id_usuario     | 0  | S | 8  | 200 | *Q |     |   |
    Archivo          | archivo        | A  | T | 100| 300 | ML |     |   |

[DBRead] mR,bR
    global $_vF, $_SESSION;
    
    $usuario_actual = $_SESSION['id_usuario'];
    $usuario_creador = $_vF['id_usuario'];
    $estado_doc = $_vF['estado'];
    
    // Verificar permisos de edición
    $puede_editar = false;
    
    if ($usuario_actual == $usuario_creador) {
        $puede_editar = true;
    } elseif ($_SESSION['perfil'] == 'ADMIN') {
        $puede_editar = true;
    } elseif ($estado_doc == 'BORRADOR') {
        // Verificar si es del mismo departamento
        qSelect('usuarios', 'id_departamento', "id_usuario = '$usuario_actual'");
        $dept_actual = qArray();
        qSelect('usuarios', 'id_departamento', "id_usuario = '$usuario_creador'");
        $dept_creador = qArray();
        
        if ($dept_actual['id_departamento'] == $dept_creador['id_departamento']) {
            $puede_editar = true;
        }
    }
    
    echo "<script>";
    echo "var puedeEditar = ".($puede_editar ? 'true' : 'false').";";
    echo "var estadoDocumento = '".$estado_doc."';";
    
    // Deshabilitar campos si no puede editar
    if (!$puede_editar) {
        echo "setTimeout(function() {";
        echo "  var inputs = document.querySelectorAll('input, select, textarea');";
        echo "  for(var i=0; i<inputs.length; i++) {";
        echo "    if(inputs[i].name != 'accion') inputs[i].disabled = true;";
        echo "  }";
        echo "  var msg = document.createElement('div');";
        echo "  msg.className = 'alert alert-warning';";
        echo "  msg.innerHTML = 'No tiene permisos para editar este documento';";
        echo "  document.body.insertBefore(msg, document.body.firstChild);";
        echo "}, 100);";
    }
    echo "</script>";
```

### Ejemplo 6: Auditoría y logging al leer registros
```php
[DBTable] clientes_confidenciales
[DBIndex] id_cliente

[Fields]
    ID Cliente       | id_cliente     | +  | T | 8  |     | *Q |     |   |
    Nombre           | nombre_cliente | N  | T | 60 | 300 | MQ |     | # |
    Datos sensibles  | datos_sensibles| #  | A | 500| 400 | ML |     |   |
    Nivel acceso     | nivel_acceso   | N  | SV| 1  | 100 | MQ |     |   |

[DBRead] mR,bR
    global $_vF, $_SESSION;
    
    $id_cliente = $_vF['id_cliente'];
    $usuario = $_SESSION['id_usuario'];
    $ip = $_SERVER['REMOTE_ADDR'];
    $fecha_acceso = date('Y-m-d H:i:s');
    
    // Registrar acceso en log de auditoría
    $sql_log = "INSERT INTO auditoria_accesos 
                (tabla, id_registro, usuario, ip, fecha_acceso, accion) 
                VALUES 
                ('clientes_confidenciales', '$id_cliente', '$usuario', '$ip', '$fecha_acceso', 'READ')";
    qQuery($sql_log);
    
    // Verificar nivel de acceso del usuario
    qSelect('usuarios', 'nivel_seguridad', "id_usuario = '$usuario'");
    $user_info = qArray();
    $nivel_usuario = $user_info['nivel_seguridad'];
    $nivel_requerido = $_vF['nivel_acceso'];
    
    if ($nivel_usuario < $nivel_requerido) {
        echo "<script>";
        echo "alert('Acceso denegado: Nivel de seguridad insuficiente');";
        echo "window.location.href = 'acceso_denegado.php';";
        echo "</script>";
    } else {
        // Mostrar advertencia de confidencialidad
        echo "<script>";
        echo "var warning = document.createElement('div');";
        echo "warning.className = 'alert alert-danger text-center';";
        echo "warning.innerHTML = '<strong>INFORMACIÓN CONFIDENCIAL</strong><br>El acceso a estos datos está siendo registrado';";
        echo "warning.style.position = 'fixed';";
        echo "warning.style.top = '0';";
        echo "warning.style.left = '0';";
        echo "warning.style.right = '0';";
        echo "warning.style.zIndex = '9999';";
        echo "document.body.appendChild(warning);";
        echo "</script>";
    }
```

## CASOS DE USO COMUNES
1. **Cálculos automáticos** después de cargar datos
2. **Generación de variables JavaScript** para uso en cliente
3. **Carga de datos relacionados** de otras tablas
4. **Validación de permisos** y restricciones de acceso
5. **Auditoría y logging** de accesos a registros
6. **Preparación de listas dinámicas** (selects, opciones)
7. **Aplicación de reglas de negocio** específicas
8. **Formateo de datos** para presentación

## NOTAS IMPORTANTES
- Se ejecuta **solo en fichas**, no en listas
- Se ejecuta **después** de leer cada registro de la BD
- Útil para procesamiento adicional de datos leídos
- Permite modificar `$_vF` antes de mostrar en pantalla
- El código PHP puede generar JavaScript para el cliente
- Ideal para cálculos, validaciones y preparación de datos