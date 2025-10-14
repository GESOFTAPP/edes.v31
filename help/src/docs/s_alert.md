# S.alert

## SINTAXIS
```javascript
S.alert(x)
```

## DESCRIPCIÓN
Muestra un diálogo de alerta personalizable con múltiples opciones de configuración.

## PARÁMETROS
- `x` (object): Objeto de configuración con las siguientes propiedades:
  - `title` (string): Título del diálogo
  - `text` (string): Texto del mensaje
  - `icon` (string): Icono a mostrar
  - `button` (string): Configuración de botones
  - `form` (array): Array de campos de formulario
  - `function` (function): Función callback
  - `parameter` (any): Parámetros para la función

## EJEMPLO
```javascript
// Alerta simple de error
S.alert({
    title: "ERRORES ENCONTRADOS",
    icon: '',
    button: "A",
    text: error.join("\n")
});

// Alerta con callback
S.alert({
    title: "MENSAJE DEL SISTEMA",
    icon: '',
    button: "A",
    text: "Permitir mostrar las Notificaciones",
    function: function() {
        if (...) {
            // Lógica del callback
        }  
    }
});

// Alerta con formulario
S.alert({
    title: 'Datos del Usuario',
    text: 'Ingrese la información solicitada',
    button: 'A',
    icon: 'W',
    form: [
        ["Nombre", "30", "", "", "nombre"],
        ["Apellido1", "30", "", "", "apel-1"],
        ["Apellido2", "30", "", "", "apel-2"]
    ]
});

// Configuración completa
S.alert({
    title: Titulo,
    icon: Img,
    button: Botones || "A",
    text: Nota,
    form: dimF,
    function: MyFunc,
    parameter: DimParametros ? DimParametros : null
});
```