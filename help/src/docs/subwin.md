# SubWin

## Descripción General

SubWin es un sistema que permite generar pseudo ventanas dentro de una página web. Estas ventanas flotantes proporcionan una interfaz de usuario dinámica sin necesidad de abrir nuevas ventanas del navegador.

## Sintaxis

```
[SubWin] Mode | WindowName
```

### Parámetros

- **Mode**: Modo de operación de la ventana
  - `cR`: Modo de creación y renderizado
- **WindowName**: Nombre identificador único de la ventana

## Funcionamiento

### Identificación de Ventanas

Las ventanas generadas se identifican mediante su nombre precedido por un guión bajo:
```
_WindowName
```

### Función de Invocación

La ventana se invoca mediante la función `eLoadDiv()`:

```javascript
eLoadDiv(NomVentana, URL, NomFunc)
```

#### Parámetros de eLoadDiv()

- **NomVentana**: Nombre de la ventana a cargar
- **URL**: URL del contenido a cargar en la ventana
- **NomFunc**: Nombre de la función callback a ejecutar tras la carga

## Ejemplo de Implementación

### 1. Definición de la Ventana

```
[SubWin] cR | NomVentana
[AddCode] cR | campo | A | <img id='verApu' src='g/icono.gif' onclick='eLoadDiv("NomVentana","edes.php?E:script.php?"+FRM1.dni.value, "xyDiv")' title='Pseudo ventana'>
```

### 2. Función de Posicionamiento

```javascript
function xyDiv() {
    // Posiciona la ventana dinámicamente
    var Obj2 = document.getElementById('xyCuoRec');
    var sx = 0, sy = 0;
    
    // Calcula la posición absoluta del elemento
    while(Obj2.tagName != 'BODY') {
        if(Obj2.tagName != 'TBODY' && 
           Obj2.tagName != 'TD' && 
           Obj2.tagName != 'CENTER') {
            sy += Obj2.offsetTop;
        }
        sx += Obj2.offsetLeft;
        Obj2 = Obj2.parentElement;
    }
    
    // Aplica las coordenadas calculadas
    *Cuotas.style.top = sy;
    *Cuotas.style.left = sx;
    
    // Configuración del contenedor de definiciones
    DivDefCuotas.style.top = _Cuotas.offsetHeight - 2;
    DivDefCuotas.style.left = -2;
    DivDefCuotas.style.display = 'block';
    
    // Configuración de la imagen de control
    IMGtbDefCuotas.style.left = DivDefCuotas.offsetWidth - 15;
    IMGtbDefCuotas.style.display = 'block';
    
    // Oculta el contenedor inicialmente
    DivDefCuotas.style.display = 'none';
}
```

## Características Principales

### Ventajas

- **Sin ventanas emergentes**: Evita los bloqueadores de pop-ups del navegador
- **Integración fluida**: Las pseudo ventanas forman parte del DOM de la página principal
- **Control dinámico**: Posicionamiento y comportamiento completamente personalizable
- **Carga asíncrona**: Permite cargar contenido dinámicamente mediante AJAX

### Casos de Uso

- Formularios modales
- Visualización de información adicional
- Interfaces de configuración
- Galerías de imágenes
- Sistemas de ayuda contextual

## Consideraciones Técnicas

### Requisitos

- Soporte JavaScript habilitado
- Funciones de manipulación del DOM
- Capacidad de realizar peticiones HTTP (para carga de contenido)

### Limitaciones

- Dependiente de JavaScript
- Requiere implementación cuidadosa del posicionamiento
- Gestión manual del z-index para superposición correcta

## Notas de Implementación

1. **Identificadores únicos**: Asegúrese de que cada ventana tenga un nombre único
2. **Gestión de memoria**: Considere la limpieza de elementos DOM no utilizados
3. **Responsive**: Adapte el posicionamiento para diferentes tamaños de pantalla
4. **Accesibilidad**: Implemente navegación mediante teclado y lectores de pantalla

---

*Esta documentación describe el sistema SubWin para la creación de pseudo ventanas dinámicas en aplicaciones web.*