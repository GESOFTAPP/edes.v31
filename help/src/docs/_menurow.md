# .menuRow

**SINTAXIS**
```javascript
S(window).menuRow(oTabla, oMenu [, oFunc=null])
```

**DESCRIPCIÓN**
Genera un menú deslizante en las filas de una tabla.

**PARÁMETROS**
- `oTabla`: Tabla donde aplicar el menú
- `oMenu`: Menú a mostrar
- `oFunc` (opcional): Función de callback

**EJEMPLO**
```javascript
// Usando selectores de cadena
S(window).menuRow("#BROWSE", "#MENUTRFLOAT");

// Usando objetos S
S(window).menuRow(S("#BROWSE"), S("#MENUTRFLOAT"));

// Usando objetos DOM
S(window).menuRow(S("#BROWSE").obj, S("#MENUTRFLOAT").obj);

// Con array de elementos
S(window).menuRow("#BROWSE", [
    '<i class="ICONINPUT" onclick="alert(1)">S</i>',
    '<i class="ICONINPUT ICONINSERT" onclick="alert(2)">I</i>',
    '<i class="ICONINPUT ICONDELETE" onclick="alert(3)">D</i>',
    '<i class="ICONINPUT ICONVIEW" onclick="alert(4)">V</i>',
    '<i class="ICONINPUT ICONUPDATE" onclick="alert(5)">U</i>'
]);

// Con función de control
function uIconos(oTR){
    if(oTR.cells[0].innerText > 13){
        return ["S","D"]; // opciones a ocultar
    } else if(oTR.cells[0].innerText == 15){
        return false;
    }
    return true;
}

S(window).menuRow("#BROWSE", [
    S("#iMenuRow1"),
    S("#iMenuRow2"),
    S("#iMenuRow3")
], uIconos);
```