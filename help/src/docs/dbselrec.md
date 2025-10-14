# DBSelRec

## SINTAXIS
```
[DBSelRec] Mode [ | NomDF/else,... [ UNIQUE/Condition ] ]
```

## DESCRIPCIÓN
En el modo seleccionado se ejecutará el código PHP indicado. Se utiliza generalmente para tomar datos cuando realizamos una búsqueda de un registro mediante código incluido en un archivo ".CDF". Se ejecuta cuando se encuentra **un único registro** en la búsqueda.

## PARÁMETROS
- **Mode**: Modo de ejecución (*, l, etc.)
- **NomDF**: Nombre del archivo EDF específico o "else" para cualquier otro
- **UNIQUE/Condition**: Condiciones específicas (opcional)

## EJEMPLOS

### Ejemplo básico: Función de selección simple
```php
[DBSelRec] *
function selUser(){
    global $_Fila;
    echo 'var uO = window.opener.document.FRM1;';
    echo 'uO.usuario.value = "'.trim($_Fila['nombre']).' '.trim($_Fila['apellidos']).'";';
    echo "uO.telefono.value = '{$_Fila['telefono']}';";
    $puntero = null;
    sql_Query('SELECT nm_gs_node FROM gs_node WHERE cd_gs_node='.$_Fila['cd_gs_node'], $puntero);
    $dato = sql_Array($puntero);
    echo "uO.nodo.value = '$dato[nm_gs_node]';";
}
```

### Ejemplo completo: Ventana de selección con condiciones
```php
[Title] SELECCIONA USUARIO
[DBTable] gs_user
[DBOrder] user_name, user_surname
[DBLimit] 100
[WinTitle] VENTANA DE SELECCIÓN
[WinForm] 600,300
[WinList] 600,300
[NoSort]

[Fields]
  DNI / NIF       | dni           | DNI | T |  8|   | MQ | |#|
  Nombre          | user_name     | X   | T | 20|   | MQ | |#|
, Apellidos       | user_surname  | X   | T | 30|   | MQ | |#|
  Teléfonos       | phone         | 0   | T | 10|   | M  | | |
  Local           | cd_gs_node    | X   | S |  7|270| MQ | |#|

/*
1.- Si llamamos a la ventana de selección desde varios/fichero.edf se aplica: 
    - si se selecciona mediante click de un listado [JSSelRow] l | varios/fichero.edf 
    - si solo encuentra un registro [DBSelRec] * | varios/fichero.edf
2.- Si no llamamos desde varios/fichero.edf se aplica:
    - si se selecciona mediante click de un listado [JSSelRow] l | else 
    - si solo encuentra un registro [DBSelRec] * | else
*/

[JSSelRow] l | varios/fichero.edf
    ePPF('dni', _Columna[0], 0);

[JSSelRow] l | else
    var uO = _WOPENER.document.FRM1;
    uO.usuario.value = _Columna[1] + ' ' + _Columna[2];
    uO.telefono.value = _Columna[3];
    uO.nodo.value = _Columna[4];

// Si llamamos a la ventana de selección desde varios/fichero.edf se aplica esta
[DBSelRec] * | varios/fichero.edf
    function selUser(){
        global $_Fila;
        echo "ePPF('dni', '{$_Fila['dni']}');";
    }

[DBSelRec] * | else
    function selUser(){
        global $_Fila;
        echo 'var uO = _WOPENER.document.FRM1;';
        echo 'uO.usuario.value = "'.trim($_Fila['user_name']).' '.trim($_Fila['user_surname']).'";';
        echo "uO.telefono.value = '{$_Fila['phone']}';";
        sql_Query("SELECT nm_gs_node FROM gs_node WHERE cd_gs_node='{$_Fila['cd_gs_node']}'", $p1);
        $dato = sql_Array($p1);
        echo "uO.nodo.value = '{$dato['nm_gs_node']}';";
    }
```

### Ejemplo 2: Selección de productos con cálculos
```php
[Title] SELECCIONAR PRODUCTO
[DBTable] productos
[DBOrder] descripcion
[DBLimit] 50
[WinTitle] CATÁLOGO DE PRODUCTOS
[WinForm] 700,400
[WinList] 700,400

[Fields]
  Código          | cod_producto  | N   | T | 10|   | MQ | |#|
  Descripción     | descripcion   | N   | T | 50|300| MQ | |#|
  Precio          | precio        | N   | N |  8|80 | MQ | | |
  Stock           | stock         | N   | N |  5|60 | MQ | | |
  Categoría       | categoria     | N   | T | 20|120| MQ | | |

[JSSelRow] l | facturacion.edf
    ePPF('cod_producto', _Columna[0]);
    ePPF('descripcion_producto', _Columna[1]);
    ePPF('precio_unitario', _Columna[2]);

[JSSelRow] l | else
    var uO = _WOPENER.document.FRM1;
    uO.codigo.value = _Columna[0];
    uO.descripcion.value = _Columna[1];
    uO.precio.value = _Columna[2];
    uO.stock_disponible.value = _Columna[3];
    // Calcular total si hay cantidad
    if(uO.cantidad.value > 0) {
        uO.total_linea.value = parseFloat(_Columna[2]) * parseFloat(uO.cantidad.value);
    }

[DBSelRec] * | facturacion.edf
    function selProducto(){
        global $_Fila;
        echo "ePPF('cod_producto', '{$_Fila['cod_producto']}');";
        echo "ePPF('descripcion_producto', '{$_Fila['descripcion']}');";
        echo "ePPF('precio_unitario', '{$_Fila['precio']}');";
        
        // Verificar stock
        if($_Fila['stock'] < 1) {
            echo "alert('Advertencia: Producto sin stock disponible');";
        }
    }

[DBSelRec] * | else
    function selProducto(){
        global $_Fila;
        echo 'var uO = _WOPENER.document.FRM1;';
        echo "uO.codigo.value = '{$_Fila['cod_producto']}';";
        echo "uO.descripcion.value = '{$_Fila['descripcion']}';";
        echo "uO.precio.value = '{$_Fila['precio']}';";
        echo "uO.stock_disponible.value = '{$_Fila['stock']}';";
        
        // Obtener datos adicionales del proveedor
        sql_Query("SELECT nombre_proveedor FROM proveedores WHERE id_proveedor = '{$_Fila['id_proveedor']}'", $p1);
        $proveedor = sql_Array($p1);
        echo "uO.proveedor.value = '{$proveedor['nombre_proveedor']}';";
        
        // Calcular descuentos si aplica
        $descuento = 0;
        if($_Fila['precio'] > 100) $descuento = 5;
        if($_Fila['precio'] > 500) $descuento = 10;
        echo "uO.descuento.value = '$descuento';";
    }
```

### Ejemplo 3: Selección de clientes con validaciones
```php
[Title] BUSCAR CLIENTE
[DBTable] clientes
[DBOrder] razon_social, cif
[DBLimit] 100
[WinTitle] DIRECTORIO DE CLIENTES
[WinForm] 800,500
[WinList] 800,500

[Fields]
  CIF/NIF         | cif           | CIF | T | 12|   | MQ | |#|
  Razón Social    | razon_social  | N   | T | 60|350| MQ | |#|
  Teléfono        | telefono      | N   | T | 15|120| MQ | | |
  Email           | email         | E   | T | 40|200| MQ | | |
  Estado          | estado        | N   | SV|  2|80 | MQ | | |
  Crédito         | limite_credito| N   | N | 10|100| MQ | | |

[JSSelRow] l | pedidos.edf
    // Verificar estado del cliente antes de seleccionar
    if(_Columna[4] == 'ACTIVO') {
        ePPF('id_cliente', _Columna[0]);
        ePPF('nombre_cliente', _Columna[1]);
        ePPF('telefono_cliente', _Columna[2]);
        top.eSWClose(window);
    } else {
        alert('Cliente inactivo. No se puede seleccionar.');
    }

[JSSelRow] l | else
    var uO = _WOPENER.document.FRM1;
    if(_Columna[4] == 'ACTIVO') {
        uO.cliente_cif.value = _Columna[0];
        uO.cliente_nombre.value = _Columna[1];
        uO.cliente_telefono.value = _Columna[2];
        uO.cliente_email.value = _Columna[3];
        uO.limite_credito.value = _Columna[5];
        top.eSWClose(window);
    } else {
        alert('Cliente inactivo. Seleccione otro cliente.');
    }

[DBSelRec] * | pedidos.edf
    function selCliente(){
        global $_Fila;
        
        // Verificar estado del cliente
        if($_Fila['estado'] != 'ACTIVO') {
            echo "alert('Cliente inactivo. No se puede procesar el pedido.');";
            return;
        }
        
        echo "ePPF('id_cliente', '{$_Fila['id_cliente']}');";
        echo "ePPF('nombre_cliente', '{$_Fila['razon_social']}');";
        echo "ePPF('telefono_cliente', '{$_Fila['telefono']}');";
        
        // Verificar crédito disponible
        sql_Query("SELECT SUM(total) as deuda FROM facturas WHERE id_cliente = '{$_Fila['id_cliente']}' AND estado = 'PENDIENTE'", $p1);
        $deuda = sql_Array($p1);
        $credito_disponible = $_Fila['limite_credito'] - $deuda['deuda'];
        
        echo "ePPF('credito_disponible', '$credito_disponible');";
        
        if($credito_disponible <= 0) {
            echo "alert('Advertencia: Cliente sin crédito disponible');";
        }
    }

[DBSelRec] * | else
    function selCliente(){
        global $_Fila;
        
        echo 'var uO = _WOPENER.document.FRM1;';
        
        // Verificar estado
        if($_Fila['estado'] != 'ACTIVO') {
            echo "alert('Cliente inactivo');";
            echo "return;";
        }
        
        echo "uO.cliente_cif.value = '{$_Fila['cif']}';";
        echo "uO.cliente_nombre.value = '{$_Fila['razon_social']}';";
        echo "uO.cliente_telefono.value = '{$_Fila['telefono']}';";
        echo "uO.cliente_email.value = '{$_Fila['email']}';";
        
        // Cargar dirección de facturación
        sql_Query("SELECT direccion, poblacion, cp FROM clientes_direcciones WHERE id_cliente = '{$_Fila['id_cliente']}' AND tipo = 'FACTURACION'", $p1);
        $direccion = sql_Array($p1);
        
        echo "uO.direccion_facturacion.value = '{$direccion['direccion']}';";
        echo "uO.poblacion.value = '{$direccion['poblacion']}';";
        echo "uO.codigo_postal.value = '{$direccion['cp']}';";
    }
```

### Ejemplo 4: Selección con múltiples condiciones
```php
[Title] SELECCIONAR EMPLEADO
[DBTable] empleados
[DBOrder] apellidos, nombre
[DBLimit] 50

[Fields]
  DNI             | dni           | DNI | T |  9|   | MQ | |#|
  Nombre          | nombre        | N   | T | 25|200| MQ | |#|
  Apellidos       | apellidos     | N   | T | 40|250| MQ | |#|
  Departamento    | departamento  | N   | T | 20|150| MQ | | |
  Cargo           | cargo         | N   | T | 25|180| MQ | | |
  Estado          | estado        | N   | SV|  2|80 | MQ | | |

// Selección específica para nóminas
[DBSelRec] * | nominas.edf
    function selEmpleado(){
        global $_Fila;
        
        // Solo empleados activos para nóminas
        if($_Fila['estado'] != 'ACTIVO') {
            echo "alert('Empleado inactivo. No se puede procesar nómina.');";
            return;
        }
        
        echo "ePPF('dni_empleado', '{$_Fila['dni']}');";
        echo "ePPF('nombre_empleado', '{$_Fila['nombre']} {$_Fila['apellidos']}');";
        
        // Obtener datos de nómina
        sql_Query("SELECT salario_base, complementos FROM empleados_nomina WHERE dni = '{$_Fila['dni']}'", $p1);
        $nomina = sql_Array($p1);
        
        echo "ePPF('salario_base', '{$nomina['salario_base']}');";
        echo "ePPF('complementos', '{$nomina['complementos']}');";
    }

// Selección para permisos/vacaciones
[DBSelRec] * | vacaciones.edf
    function selEmpleado(){
        global $_Fila;
        
        echo "ePPF('dni_empleado', '{$_Fila['dni']}');";
        echo "ePPF('nombre_empleado', '{$_Fila['nombre']} {$_Fila['apellidos']}');";
        
        // Calcular días de vacaciones disponibles
        $año_actual = date('Y');
        sql_Query("SELECT SUM(dias) as dias_usados FROM vacaciones WHERE dni = '{$_Fila['dni']}' AND YEAR(fecha_inicio) = '$año_actual'", $p1);
        $usados = sql_Array($p1);
        
        $dias_disponibles = 30 - $usados['dias_usados']; // 30 días anuales
        
        echo "ePPF('dias_disponibles', '$dias_disponibles');";
        
        if($dias_disponibles <= 0) {
            echo "alert('Empleado sin días de vacaciones disponibles');";
        }
    }

// Selección general para otros formularios
[DBSelRec] * | else
    function selEmpleado(){
        global $_Fila;
        
        echo 'var uO = _WOPENER.document.FRM1;';
        echo "uO.empleado_dni.value = '{$_Fila['dni']}';";
        echo "uO.empleado_nombre.value = '{$_Fila['nombre']} {$_Fila['apellidos']}';";
        echo "uO.departamento.value = '{$_Fila['departamento']}';";
        echo "uO.cargo.value = '{$_Fila['cargo']}';";
        
        // Verificar si es supervisor
        sql_Query("SELECT COUNT(*) as es_supervisor FROM empleados WHERE supervisor_dni = '{$_Fila['dni']}'", $p1);
        $supervisor = sql_Array($p1);
        
        echo "uO.es_supervisor.value = '".($supervisor['es_supervisor'] > 0 ? 'SI' : 'NO')."';";
    }
```

### Ejemplo 5: Selección con cierre automático de ventana
```php
[DBSelRec] * | presupuestos.edf
    function selProveedor(){
        global $_Fila;
        
        // Asignar datos al formulario padre
        echo "ePPF('id_proveedor', '{$_Fila['id_proveedor']}');";
        echo "ePPF('nombre_proveedor', '{$_Fila['nombre_proveedor']}');";
        echo "ePPF('cif_proveedor', '{$_Fila['cif']}');";
        
        // Obtener condiciones comerciales
        sql_Query("SELECT plazo_pago, descuento_habitual FROM proveedores_condiciones WHERE id_proveedor = '{$_Fila['id_proveedor']}'", $p1);
        $condiciones = sql_Array($p1);
        
        echo "ePPF('plazo_pago', '{$condiciones['plazo_pago']}');";
        echo "ePPF('descuento', '{$condiciones['descuento_habitual']}');";
        
        // Cerrar ventana automáticamente
        echo "setTimeout(function() { top.eSWClose(window); }, 500);";
    }
```

## CASOS DE USO COMUNES
1. **Ventanas de selección**: Para buscar y seleccionar registros
2. **Transferencia de datos**: Entre ventana de búsqueda y formulario padre
3. **Validaciones**: Verificar estado/condiciones antes de seleccionar
4. **Cálculos automáticos**: Procesar datos al seleccionar
5. **Carga de datos relacionados**: Obtener información adicional
6. **Comportamiento condicional**: Diferentes acciones según contexto

## NOTAS IMPORTANTES
- Se ejecuta solo cuando se encuentra **un único registro**
- Trabaja con la variable global `$_Fila` que contiene los datos del registro
- Permite diferentes comportamientos según el archivo EDF origen
- Útil para automatizar la selección cuando hay una sola coincidencia
- Complementa a `[JSSelRow]` para casos de selección múltiple
- El código PHP genera JavaScript que se ejecuta en el cliente