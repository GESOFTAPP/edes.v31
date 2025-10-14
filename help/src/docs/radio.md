# Radio

## Sintaxis

```
[Radio] Field | Config | Value1,Text1 [; Value2,Text2]...[; ValueN,TextN] | Title | [Long1] [,Long2] ..... [, LongN] [ | QuitaSelección ]
```

## Descripción

Define el comportamiento de los elementos `<input>` tipo 'Radio' en formularios del framework. Permite crear grupos de opciones excluyentes con configuración personalizable de diseño y comportamiento.

## Parámetros

### Field
- **Tipo**: String
- **Descripción**: Campo existente en la etiqueta `[Fields]` que almacenará el valor seleccionado
- **Obligatorio**: Sí

### Config
- **Tipo**: String (formato: `NumberLetter`)
- **Descripción**: Configuración de columnas y orden de visualización
  - **Number**: Número máximo de columnas para organizar las opciones
  - **Letter**: Orden de presentación
    - `L`: Label primero, luego el campo
    - `F`: Campo primero, luego el label
- **Ejemplo**: `2L`, `4F`
- **Obligatorio**: Sí

### ValueAndText
- **Tipo**: String (formato: `Value,Text;Value,Text;...`)
- **Descripción**: Pares valor-texto separados por punto y coma
  - **Value**: Valor que se enviará al servidor al seleccionar la opción
  - **Text**: Texto visible para el usuario
- **Ejemplo**: `B,Black;Y,Yellow;G,Green`
- **Obligatorio**: Sí

### Title
- **Tipo**: String
- **Descripción**: Título del FIELDSET que agrupa las opciones radio
- **Obligatorio**: No

### Long
- **Tipo**: String (formato: `Long1,Long2,...,LongN`)
- **Descripción**: Longitud de cada columna de datos correspondiente al número de columnas especificado en Config
- **Obligatorio**: No

### QuitaSelección
- **Tipo**: Boolean
- **Descripción**: Permite deseleccionar todas las opciones radio
- **Valores**: `true` | `false`
- **Por defecto**: `false`
- **Obligatorio**: No

## Ejemplos

### Ejemplo Básico
```
[Radio] color | 2L | B,Black;Y,Yellow;G,Green | Selecciona un color
```

### Ejemplo Avanzado
```
[Radio] propio | 4F | C,Ciudadano;L,Ayuntamiento;O,Otra Administración;E,Otra Entidad
```

## Ejemplo Completo de Implementación

```
[DBTable] orden
[DBIndex] id_orden
[DBSerial] id_orden
[NoTools] pxm 
[MsgSubmit] a | <center>Este proceso no se puede deshacer<br><b>CONFIRME</b> que desea realizar la devolución</center>
[Title] = Modificar cobro
[Button] a | <IMG src='g/cuotas.gif'>Devolver importe | Devolver importe

[Radio] tipo_regularizacion | 2L | T,Total;P,Parcial

[AddCode] a | importe_devol | S | <span style="color:red; font-weight:bold">Importe a devolver</span>
[AddOptionValue] cd_tipo_regu | valor
[AddOption] a | cd_tipo_regu | tipoRegu()

[OnChange] a | cd_tipo_regu | if( eGA('cd_tipo_regu','valor')>0 ) ePF('importe_devol',(eGF('importe') - eGA('cd_tipo_regu','valor')) );
[OnChange] a | tipo_regularizacion | gestionRegularizacion()

[PHPIni] *
if (!ePermission("devolucion")) eMessage('OPCION NO PERMITIDA','HS');

[Fields] 2
                     | id_orden            | +   | T  | 8   |                   | * |  |   | 
    DNI              | dni                 | DNI | T  | 10  |                   | - |  | - | 
    Apellidos        | apel                | N   | T  | 30  | numero_pedido     | - |  |   | 
 +2 Nombre           | nombre              | N   | T  | 20  | numero_pedido     | - |  |   | 
-|Datos de cobro
    Periodo desde    | p_ini_pago          | P4  | T  | 7   | 75                | - |  |   | 
   ,hasta            | p_fin_pago          | P4  | T  | 7   | 75/<numero_pedido | - |  |   | 
 +2 Fecha            | fecha               | F4  | T  | 10  |                   | - |  |   | 
   ,Importe          | importe             | +,  | T  | 4,2 | +estado_pago      | - |  |   | 
    Numero pedido    | numero_pedido       | X   | T  | 20  | 250               | - |  |   | 
 +2 Modo             | modo                | X   | T  | 20  | numero_pedido     | - |  |   | 
    Estado           | estado_procesado    | X   | T  | 20  | numero_pedido     | - |  |   | 
 +2 Pago             | estado_pago         | X   | T  | 20  | numero_pedido     | - |  |   | 
    Cuota            | cd_tipo             | X   | T  | 20  | numero_pedido     | - |  |   | 
 +2 Suplemento       | cd_sup              | X   | T  | 20  | numero_pedido     | - |  |   | 
-|Datos de regularización
    Tipo devolución  | tipo_regularizacion | X   | r  | 1   |                   | M |  |   | 
 +2                  | importe_devol       | +,  | T  | 4,2 | <cd_sup           | - |  |   | 
    Tipo cuota final | cd_tipo_regu        | X   | SV | 20  | 250               | M |  |   | 

[JSCheck] a
    if(eGF('tipo_regularizacion')=='') ePE('tipo_regularizacion', 'Falta introducir el dato "TIPO DEVOLUCIÓN"');
    if(eGF('tipo_regularizacion')=='P'){//Parcial obligado a meter cuota que se queda
        if(eGF('cd_tipo_regu')=='') ePE('cd_tipo_regu', 'Falta introducir el dato "TIPO CUOTA FINAL"');
    }

[JSIni] a
function gestionRegularizacion(){
    if( eGF('tipo_regularizacion') == 'T' ) {
        ePF('importe_devol',eGF('importe')); 
        ePF('cd_tipo_regu','');
        eEF('cd_tipo_regu',0);
    }else if( eGF('tipo_regularizacion') == 'P' ) {
        ePF('importe_devol','');
        eEF('cd_tipo_regu',1);
    }else{
        ePF('importe_devol','');
        eEF('cd_tipo_regu',0);
    }
}

[DBIni] A 
    //Antes de hacer nada en la BBDD con dbini podemos coger el control para hacer lo que queramos. 
    //Podemos llamar por ejemplo a un procedimiento almacenado o ejecutar otra cosa con los datos que nos llegan del formulario.
    //Para parar la ejecución para que no haga nada en BBDD usamos eMessage("PROCESO TERMINADO", 'HS'); eMessage hace exit.
```

## Comportamiento y Validación

### Validación JavaScript
El ejemplo incluye validación personalizada que:
- Verifica que se haya seleccionado un tipo de devolución
- En caso de devolución parcial, requiere especificar el tipo de cuota final

### Función de Gestión
La función `gestionRegularizacion()` maneja la lógica del componente:
- **Total (T)**: Asigna el importe completo y deshabilita la selección de cuota final
- **Parcial (P)**: Limpia el importe y habilita la selección de cuota final
- **Sin selección**: Resetea ambos campos

### Eventos OnChange
Los eventos configurados permiten:
- Cálculo automático del importe a devolver basado en la cuota seleccionada
- Actualización de la interfaz según el tipo de regularización elegido

## Notas Técnicas

- El componente se integra con el sistema de validación del framework
- Requiere definición previa del campo en `[Fields]`
- Compatible con eventos JavaScript personalizados
- Soporta integración con base de datos mediante `[DBIni]`
- Utiliza funciones del framework como `eGF()`, `ePF()`, `eEF()` para manipulación de campos

## Casos de Uso Comunes

1. **Selección de estado**: Activo/Inactivo
2. **Tipo de operación**: Crear/Modificar/Eliminar
3. **Categorías**: Diferentes clasificaciones de datos
4. **Opciones de configuración**: Diferentes modos de funcionamiento
5. **Procesos de negocio**: Como en el ejemplo de devoluciones (Total/Parcial)