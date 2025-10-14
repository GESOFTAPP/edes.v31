# S.eventCode

## SINTAXIS
```javascript
S.eventCode(ev)
```

## DESCRIPCIÓN
Obtiene el código de tecla o información específica de un evento.

## PARÁMETROS
- `ev` - Objeto evento del cual extraer el código

## EJEMPLO
```javascript
// En un evento de teclado
document.addEventListener("keydown", function(e) {
    let codigo = S.eventCode(e);
    console.log("Tecla presionada:", codigo);
});

// Verificar tecla específica
if (S.eventCode(evento) === 13) {
    console.log("Enter presionado");
}
```