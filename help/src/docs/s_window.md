# S.window

## SINTAXIS
```javascript
S.window(url, p, wOPENER)
```

## DESCRIPCIÓN
Crea o maneja una ventana del navegador.

## PARÁMETROS
- **url**: URL a cargar en la ventana
- **p**: Parámetros de configuración de la ventana
- **wOPENER**: Ventana padre que abre esta ventana

## EJEMPLO
```javascript
let nuevaVentana = S.window('https://ejemplo.com', 'width=800,height=600', window);
```