# .tree

**SINTAXIS**
```javascript
S().tree(op, p)
```

**DESCRIPCIÓN**
Genera un menú tipo árbol.

**PARÁMETROS**
- `op`: Opciones del árbol (array con estructura jerárquica)
- `p`: Parámetros de configuración

**Parámetros de configuración:**
- `expanded`: Si el árbol está expandido por defecto
- `icon`: Tipo de iconos a usar
- `open`: Función al abrir nodos
- `close`: Función al cerrar nodos
- `modal`: Si es modal
- `id`: ID del componente
- `xIndex`: Índice X
- `container`: Contenedor
- `x`: Posición X
- `y`: Posición Y
- `function`: Función de callback
- `parameter`: Parámetros adicionales

**EJEMPLO**
```javascript
function seleccionaDeArbol(){
    var DimMenu = [
        ["-Árbol de opciones"],
        ["Carpeta 1", "", [
            ["Opción 1,1", "@", "1"],
            ["Opción 1,2", "g/buscar.gif", "2"]
        ]],
        ["Carpeta 2", "", [
            ["Opción 2,1", "@", "3"],
            ["Opción 2,2", "g/buscar.gif", "4"]
        ]],
        ["Opción 2", "", "5"],
        ["Opción 3", "", "6"]
    ];
    
    S("body").tree(DimMenu, {
        expanded: true,
        icon: "system",
        function: function(op, tr, para, label){
            console.log(op + ": " + label);
            // S(this).nodeRemove(); // elimina el árbol
        }
    });
}
seleccionaDeArbol();
```