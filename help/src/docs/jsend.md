# JSEnd

## Sintaxis

```
[JSEnd] Mode [ | NomDF/else,... [ | UNIQUE/Condition ] ] ...
```

## Descripción

Inserta código JavaScript al final del HTML en los modos indicados. Permite definir funciones propias que pueden ser llamadas desde los controles de la interfaz.

## Parámetros

| Parámetro | Tipo | Descripción |
|-----------|------|-------------|
| Mode | String | Modo de aplicación (l=list, e=edit, etc.) |
| NomDF/else | Opcional | Nombre del dataframe o condición alternativa |
| UNIQUE/Condition | Opcional | Condición única o filtro específico |

## Ejemplos

### Ejemplo básico - Función de utilidad
```javascript
[JSEnd] *
function validarFormulario() {
    if (document.forms[0].nombre.value == '') {
        alert('El nombre es obligatorio');
        return false;
    }
    return true;
}
```

### Ejemplo complejo - Sistema de menú contextual para documentos
```javascript
[JSEnd] l
function MenuConv( Doc ){
    if( Doc=='' ) return;
    document.all.MenuDocumento.Documento = event.srcElement.parentElement.parentElement.cells[0].innerText.replace(/\s/g,'');
    var Obj = document.all.MenuDocumento.cells;
    var ncel=0;
    for( var n=0; n<4; n++ ){
        if( Doc.indexOf( 'LUHP'.substr(n,1) ) > -1 ){
            Obj[n].style.display = 'block';
            ncel++;
        }else{
            Obj[n].style.display = 'none';
        }
    }
    with( document.all.MenuDocumento.style ){
        top = event.clientY + document.body.scrollTop;
        left = event.clientX - 25*ncel;
        display = 'block';
    }
}

function VerDocumento(){
    event.cancelBubble=true;
    var Obj = event.srcElement;
    if( Obj.tagName=='TD' ){
        if( Obj.uDir=='co' ){
            top.eWOpen('[=]Documento,edes.php?E:/'+'/documento_htm/'+Obj.uDir +'/'+ document.all.MenuDocumento.Documento+'.'+Obj.uExt+'&TITLE='+Obj.uExt,'','',true);
        }else{
            top.eCallSrv(window,'edes.php?D:/'+'/documento_htm/'+Obj.uDir +'/'+ document.all.MenuDocumento.Documento+'.'+Obj.uExt+'&TITLE='+Obj.uExt);
        }
    }
}
```

### Ejemplo con validación de campos
```javascript
[JSEnd] e
function validarDatos() {
    var titulo = document.getElementById('titulo').value;
    var fecha = document.getElementById('fe_publicacion').value;
    
    if (!titulo.trim()) {
        alert('El título es obligatorio');
        return false;
    }
    
    if (!fecha) {
        alert('La fecha de publicación es obligatoria');
        return false;
    }
    
    return true;
}

function prepararEnvio() {
    if (validarDatos()) {
        document.forms[0].submit();
    }
}
```

### Ejemplo con funciones de interfaz
```javascript
[JSEnd] *
function mostrarOcultar(elementId) {
    var elemento = document.getElementById(elementId);
    if (elemento.style.display === 'none') {
        elemento.style.display = 'block';
    } else {
        elemento.style.display = 'none';
    }
}

function confirmarEliminacion(mensaje) {
    return confirm(mensaje || '¿Está seguro de que desea eliminar este elemento?');
}
```