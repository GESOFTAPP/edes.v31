# AddCode

Comando que permite añadir código HTML personalizado antes, dentro o después de la definición de campos en formularios.

## Sintaxis

```
[AddCode] Mode | Field [,Field,...] | [S:B:I:A:E] | HTMLCode
```

### Parámetros

| Parámetro | Tipo | Descripción |
|-----------|------|-------------|
| **Mode** | string | Modo de aplicación del código |
| **Field** | string | Campo o lista de campos separados por comas |
| **[S:B:I:A:E]** | char | Posición donde añadir el código HTML |
| **HTMLCode** | string | Código HTML en una sola línea |

### Posiciones de Inserción

| Código | Nombre | Descripción |
|--------|--------|-------------|
| **S** | Start | Al inicio del campo |
| **B** | Before | Antes del campo |
| **I** | Inside | Dentro del campo (atributos) |
| **A** | After | Después del campo |
| **E** | End | Al final del campo |

## Características Especiales

### Imágenes con Menú Contextual
Las imágenes pueden incluir atributos especiales para crear submenús:
- **eTrigger**: Inicial de acceso rápido
- **eTitle**: Título o línea en el submenú

### Paréntesis Especiales
Para incluir paréntesis literales en el código HTML:
- `"("` para el paréntesis de apertura `(`
- `")"` para el paréntesis de cierre `)`

## Atributos Específicos por Tipo de Campo

### Campos Input
```
[AddCode] * | importe | I | eFrom="200" eTo="500"
```
Define valores mínimo y máximo para campos numéricos.

### Campos Textarea

#### Límite de Líneas Visibles
```
[AddCode] * | notas | I | eNoScroll
```

#### Altura Dinámica
```
[AddCode] a,mR | obs | I | eFitHeight
```

#### Máximo de Filas
```
[AddCode] a,mR | reclamacion | I | eMaxRows=15
```

### Campos Select

#### Número de Filas Visibles
```
[AddCode] * | cd_auto | I | MaxRows=3
[AddCode] * | cd_auto | I | MaxRows=-1  // Sin scroll
```

#### Colores en Select
```
[AddCode] * | campo | I | s-neon=1
```
Copia los colores de las opciones al input.

### SubSelect

#### Ejecutar Función al Cambiar
```
[AddCode] * | cd_prov | I | EXECUTE=NomFuncUsuario
```

#### Añadir Opciones
```
[AddCode] * | campos | I | ADDOPTION='VE,Valor externo; OV,Otro valor;'
```

#### Ordenar por Campo
```
[AddCode] * | cd_prov | I | ORDERBY=campo_orden
```

#### SQL Dinámico
```
[AddCode] a,A,?R | cd_profe | I | DynamicSQL=SqlProfesion
```

### Campos File
```
[AddCode] * | fichero | I | eCopy='tamayo=size, extension=format, fecha=date, hora=hour, cdi=datetime'
```
Copia información del archivo a otros campos automáticamente.

### Campos Checkbox
```
[AddCode] * | Campo | I | uValue="Valor1|Valor2|Valor3"
```
- **Valor1**: Sin clickear
- **Valor2**: Un click
- **Valor3**: Dos clicks

## Atributos de Validación y Formato

### Caracteres Permitidos
```
[AddCode] * | campo | I | eAccent=1           // Admite acentos
[AddCode] * | campo | I | eAddChar="XI"       // Añade caracteres permitidos
[AddCode] * | campo | I | eAddChar="\-"       // Para el carácter "-"
[AddCode] * | campo | I | eDeleteChar="XI"    // Elimina caracteres
[AddCode] * | campo | I | NotFilter=1         // No filtra caracteres
```

### Números y Fechas
```
[AddCode] * | campo | I | NUMBERS
```
Aplica fuente monospace para mejor visualización.

### Copiar Valores
```
[AddCode] a,?R | dt_from | I | copyValue="dt_to"
```

### Condiciones Múltiples
```
[AddCode] ? | _desdeI_hours,_hastaI_hours | I | noConditions
```

## Editor de Texto Enriquecido

### Ocultar Botones
```
[AddCode] a,mR | texto_hu | I | eIconNone="fontsize3, fontsize2, fontsize1, space3, outdent, indent, insertorderedlist, insertunorderedlist, image"
```

#### Botones Disponibles
- **Formato**: bold, italic, underline, removeformat, space1
- **Color**: color, background, space2
- **Tamaño**: fontsize3, fontsize2, fontsize1, space3
- **Alineación**: justifyleft, justifycenter, justifyfull, outdent, indent, insertorderedlist, insertunorderedlist, image

## Ejemplos Prácticos

### Ejemplo Básico - Iconos y Funciones
```
[AddCode]
     a,mR | nif    | A | <img src="g/buscar.gif" />
     a,mR | nombre | A | FuncionDeUsuario()
     a,mR | periodo| A | (aaaa-mm)
```

### Ejemplo Avanzado - Select Dinámico con Relación
```
[Fields]
  Sexo      | sexo                                     | N | SV | 5  || M || # | 
  Profesión | cd_profe{profe_sexo,cd_profe,nm_profe_h} | 0 | Ss | 30 || M ||   |

[RelationFields] sexo, cd_profe

[AddCode] a,A,?R | cd_profe | I | DynamicSQL=SqlProfesion

[PHPIni] a,A,?R
function SqlProfesion(){
    global $_vF;
    if( $_vF['sexo']<>'' ){
        qQuery( 'select cd_profe,nm_profe_'.mb_strtolower($_vF['sexo']).' from profe_sexo order by 2' );
    }else{
        qQuery( 'select cd_profe,nm_profe_h from profe_sexo order by 2' );
    }
}

[JSIni] a,A,?R
function SqlProfesion(){
    var Valor = '';
    if( eGO('cd_profe').oValue!=undefined ) Valor = eGO('cd_profe').oValue;
    if( eGF('sexo')!='' ){
        return Array( 'select cd_profe,nm_profe_'+eGF('sexo').toLowerCase()+' from profe_sexo order by 2', Valor );
    }else{
        return Array( 'select cd_profe,nm_profe_h from profe_sexo order by 2', Valor );
    }
}
```

## 📋 Ejemplo Real Completo - Sistema de Comunicaciones

> 💡 **Caso de Uso**: Sistema completo de gestión de textos de comunicación multicanal e multiidioma con validaciones dinámicas y ayuda contextual.

```
[Title] TEXTOS COMUNICACION

[DBTable]  textos_comunicacion 
[DBIndex]  id_textos_comunicacion
[DBOrder]  tipo
[DBSerial] id_textos_comunicacion 
[DBMemo]   cuerpo

[AddOption] * | cd_idioma | 1,ESPAÑOL; 2,INGLES; 3,FRANCES; 4,ALEMAN
[AddOption] * | tipo |;W,Whatsapp; E,Email; S,Sms

[AddCode] a,mR | cuerpo | A | <img src='g/sop_ayuda.gif' onClick="mostrarCapa(window.event.x,window.event.y)" onmouseover="this.style.cursor='hand';" title='Ayuda'>

// Campos para consulta (búsqueda)
[Fields] ? 
   Tipo comunicación  | tipo       | X | SV | 1  | 50    | Q |  |  | 
   Idioma             | cd_idioma  | 0 | SV | 4  | 200   | Q |  |  | 

// Campos para listado
[Fields] l 
    Id         | id_textos_comunicacion | + | T  | 9        |  | * |  |  | 
    Asunto     | asunto                 | # | A  | 255,80,3 |  | M |  |  | 	
    Canal      | tipo                   | X | SV | 1        |  | M |  |  | 
    Idioma     | cd_idioma              | 0 | SV | 4        |  | M |  |  | 

// Campos para formulario de edición
[Fields] else
    Id          | id_textos_comunicacion | +  | T  | 9           |       | *   |         |     | 
   ,Canal       | tipo                   | X  | SV | 1           | 50    | M   |         | #   | 
    Idioma      | cd_idioma              | 0  | SV | 4           | 200   | M   |         | #   | 
    Asunto      | asunto                 | #  | A  | 255,80,3    | +tipo | M   |         |     | 
    Cuerpo      | cuerpo                 | #  | A  | 5000,150,20 | +tipo | ML  |         |     | 

[JSIni] *
function calcularLongitudSMS(mensaje){
    var longitud = 0;
    for (var i = 0; i < mensaje.length; i++) {
        var codigoCaracter = mensaje.charCodeAt(i);
        if (codigoCaracter <= 127) {
            longitud++;
        } else {
            longitud += 2;
        }
    }
    return longitud;
}

[PHPIni] A,M
function enviarEmail($emailTo,$mensaje,$asunto){
    $mailheaders = '';
    $mailheaders  = "MIME-Version: 1.0\r\n";
    $mailheaders .= "Content-type: text/html; charset=iso-8859-1\r\n";
    $mailheaders .= "From: GESTION - Soporte de usuarios <noreply@loquesea.es>\r\n";
    $mailheaders .= "X-Mailer: PHP/" . phpversion() . "\r\n";
    if($emailTo=='') return 1;
    mail($emailTo, $asunto, $mensaje, $mailheaders);
    return 0;
}

[JSCheck] a,mR
if(eGF('tipo')=='S' && calcularLongitudSMS(eGF('cuerpo')) > 160 ){
    ePE( 'cuerpo', 'El mensaje no puede superar los 160 caracteres' );
}

[JSEnd] a,mR
function mostrarCapa(x,y){
    var eldiv = document.getElementById("miDiv");
    if (eldiv.style.visibility == "hidden"){
        eldiv.style.left = x - eldiv.width;
        eldiv.style.top = 10;
        eldiv.style.visibility = "visible";
    }
}

[HTMEnd] a,mR
<div id='miDiv' width='200' style="position: absolute; top: -100; left: -200; visibility: hidden; border: 1px solid #316500; background: #F7EFAD; z-index: 100; display: block" onmouseleave="this.style.visibility='hidden';">
   <table cellpadding=1 cellspacing=1 border=0 class=contenedor width='200'>
     <tr><td class=titulo><b>AYUDA AL CAMPO TEXTO</b></td></tr>
     <tr><td><br><b><u>CAMPOS VARIABLES</u></b></td></tr>
     <tr><td>
       <b>Sustitución simple de campos de la tabla usuarios</b><br>
       Se sustituye por los nombres de los campos de la tabla usuario las cadenas entre almohadillas (##).<br>
       Los nombres de los campos de la tabla usuario se deben preceder de "usu_".<br>
       <br>&nbsp;&nbsp;Ejemplos:<br>&nbsp;&nbsp;Estimado: #usu_nombre#<br><br><br>
     </td></tr>
     <tr><td><br></td></tr>
   </table>
</div>

[PHPEnd] A,M
global $_UserActual;
if($_sendPrueba){
    $data = qRecord( "select user_name, filtro_org, email from gs_user where cd_gs_user='{$_UserActual}'" );  
    $emailTo = $data['email'];

    $cuerpo = html_entity_decode(ereg_replace( "\n", '<br>', $cuerpo));
    $mensaje  = file_get_contents("/plantillas/plantilla_{$tipo}_{$cd_idioma}.html");
    $mensaje = str_replace("<!--{{FECHA}}-->",date('d-m-Y H:i:s'),$mensaje);
    $mensaje  = str_replace("<!--{{CABECERA}}-->",$asunto, $mensaje);
    $mensaje  = str_replace("<!--{{CUERPO}}-->",$cuerpo, $mensaje);
    $mensaje  = str_replace("#usu_nombre#", $data['user_name'], $mensaje);
    enviarEmail($emailTo,$mensaje,$asunto);
}

[Note]
Sistema completo que gestiona textos de comunicación para diferentes canales 
(WhatsApp, Email, SMS) en múltiples idiomas con validaciones específicas por tipo.
```

### 🔍 Características del Ejemplo

- **🔍 Consulta**: Campos específicos para búsqueda con modo `?`
- **📋 Listado**: Campos optimizados para visualización con modo `l`  
- **✏️ Edición**: Campos completos para formulario con modo `else`
- **🎯 AddCode**: Icono de ayuda contextual que muestra información dinámica
- **✅ Validación**: Control automático de longitud para mensajes SMS
- **📧 Envío**: Función integrada de envío de emails con plantillas HTML

### Ejemplo - Icono con Fuente
```
[AddCode] a,mR | campo | A | [S, onclick="top.eSWOpen(window,'...')" title='Selecciona ...']
```

### Ejemplo - Límite de Filas en Textarea
```
[AddCode] a,mR | reclamacion | I | MaxRows=15
```

## Casos de Uso Comunes

1. **Búsquedas**: Añadir lupas o botones de búsqueda junto a campos
2. **Validaciones**: Implementar validaciones personalizadas en tiempo real
3. **Ayuda Contextual**: Mostrar ayuda dinámica para campos específicos
4. **Selects Dependientes**: Crear listas desplegables que se actualizan según otros campos
5. **Formateo**: Aplicar formatos específicos a campos numéricos o de fecha
6. **Restricciones**: Limitar caracteres o establecer rangos de valores

## Notas Importantes

- El código HTML debe estar en una sola línea
- Para funciones con paréntesis en posiciones B y A, los paréntesis se renderizan normalmente
- En grupos de fichas (GDF), el código debe colocarse en el GDF correspondiente
- Los campos con `DynamicSQL` requieren funciones tanto en PHP como en JavaScript
- El atributo `eAccent=1` es necesario para campos que requieren caracteres especiales
- Los valores de `MaxRows=-1` eliminan el scroll en selects