# S.imgResize

## SINTAXIS
```javascript
S.imgResize(oImg, nMaxWidth, nMaxHeight)
```

## DESCRIPCIÓN
Redimensiona una imagen dandole el máximo ancho y alto

## PARÁMETROS
- `oImg` (object): Objeto imagen a redimensionar
- `nMaxWidth` (number): Ancho máximo en píxeles
- `nMaxHeight` (number): Alto máximo en píxeles

## EJEMPLO
```javascript
var imagen = S("#miImagen");
S.imgResize(imagen, 800, 600);
```