# JSRecalc

## Sintaxis

```
[JSRecalc] Mode
```

## Descripción

En los modos indicados (menos en los listados), se inserta el código JavaScript en el recálculo de tamaños y alineación.

## Parámetros

| Parámetro | Tipo | Descripción |
|-----------|------|-------------|
| Mode | String | Modo de aplicación (e=edit, c=consulta, etc. - excluye listados) |

## Ejemplos

### Ejemplo básico - Ajuste de tamaños
```javascript
[JSRecalc] e
// Ajustar altura de textarea según contenido
var textarea = document.getElementById('observaciones');
if (textarea) {
    textarea.style.height = Math.max(100, textarea.scrollHeight) + 'px';
}
```

### Ejemplo de redimensionado de tabla
```javascript
[JSRecalc] *
// Ajustar ancho de columnas proporcionalmente
var tabla = document.getElementsByTagName('table')[0];
if (tabla && tabla.offsetWidth > 0) {
    var celdas = tabla.getElementsByTagName('th');
    var anchoTotal = tabla.offsetWidth;
    for (var i = 0; i < celdas.length; i++) {
        celdas[i].style.width = (anchoTotal / celdas.length) + 'px';
    }
}
```

### Ejemplo de alineación de elementos
```javascript
[JSRecalc] c
// Centrar elementos verticalmente
var contenedores = document.getElementsByClassName('campo-contenedor');
for (var i = 0; i < contenedores.length; i++) {
    var contenedor = contenedores[i];
    var altura = contenedor.offsetHeight;
    var elemento = contenedor.firstElementChild;
    if (elemento) {
        elemento.style.marginTop = ((altura - elemento.offsetHeight) / 2) + 'px';
    }
}
```

### Ejemplo de ajuste responsive
```javascript
[JSRecalc] e
// Ajustar layout según el ancho de pantalla
var anchoVentana = window.innerWidth || document.documentElement.clientWidth;
var formulario = document.getElementById('formulario-principal');

if (formulario) {
    if (anchoVentana < 768) {
        // Vista móvil - una columna
        formulario.className = 'layout-movil';
    } else if (anchoVentana < 1024) {
        // Vista tablet - dos columnas
        formulario.className = 'layout-tablet';
    } else {
        // Vista escritorio - tres columnas
        formulario.className = 'layout-escritorio';
    }
}
```

### Ejemplo de sincronización de alturas
```javascript
[JSRecalc] *
// Igualar altura de elementos en fila
var filas = document.getElementsByClassName('fila-campos');
for (var f = 0; f < filas.length; f++) {
    var campos = filas[f].getElementsByClassName('campo');
    var alturaMaxima = 0;
    
    // Encontrar altura máxima
    for (var i = 0; i < campos.length; i++) {
        alturaMaxima = Math.max(alturaMaxima, campos[i].offsetHeight);
    }
    
    // Aplicar altura máxima a todos
    for (var i = 0; i < campos.length; i++) {
        campos[i].style.height = alturaMaxima + 'px';
    }
}
```