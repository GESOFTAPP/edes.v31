# S.open

## SINTAXIS
```javascript
S.open(idVen, iUrl, iTipo, Ancho, Alto, ix, iy, Cerrar)
```

## DESCRIPCIÓN
Abre una nueva ventana con parámetros específicos.

## PARÁMETROS
- **idVen**: ID único para la ventana
- **iUrl**: URL a abrir
- **iTipo**: Tipo de ventana
- **Ancho**: Ancho de la ventana en píxeles
- **Alto**: Alto de la ventana en píxeles
- **ix**: Posición X de la ventana
- **iy**: Posición Y de la ventana
- **Cerrar**: Booleano para cerrar ventana anterior

## EJEMPLO
```javascript
S.open('ventana1', 'https://ejemplo.com', 'popup', 800, 600, 100, 100, true);
```