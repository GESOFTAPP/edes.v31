# S.imgToBase64

## SINTAXIS
```javascript
S.imgToBase64(oImg)
```

## DESCRIPCIÓN
De un objeto "img" obtiene su base64

## PARÁMETROS
- `oImg` (object): Objeto imagen del cual obtener el base64

## EJEMPLO
```html
<img id="Imagen" src="..." >
```
```javascript
var txt = S.imgToBase64(S("#Imagen"));
```