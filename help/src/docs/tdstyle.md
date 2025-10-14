# TDStyle

## SINTAXIS
```
[TDStyle] Modo | ListaDeCampos | InteriorDelEstilo
```

## DESCRIPCIÓN
Define el estilo CSS que tendrá la celda "TD" que contiene el campo especificado. Permite personalizar la apariencia visual de celdas individuales mediante la aplicación directa de propiedades CSS.

## PARÁMETROS

| Parámetro | Descripción |
|-----------|-------------|
| **Modo** | Modo de aplicación del estilo:<br>• **bR**: Aplica el estilo de fondo (background) |
| **ListaDeCampos** | Lista de campos específicos separados por comas a los que se aplicará el estilo |
| **InteriorDelEstilo** | Propiedades CSS que se aplicarán a la celda. Formato estándar CSS (propiedad:valor) |

## CASOS DE USO
- **Resaltado condicional**: Destacar campos importantes con colores de fondo
- **Indicadores visuales**: Usar colores para representar estados (error, advertencia, éxito)
- **Personalización de layout**: Aplicar estilos específicos a celdas particulares
- **Mejora de UX**: Facilitar la identificación visual de campos críticos

## EJEMPLO

```
[TDStyle] bR | estado | background:red
```

### Resultado
La celda que contiene el campo `estado` tendrá un fondo rojo, útil para indicar visualmente estados de error o alerta.

## EJEMPLOS ADICIONALES

```
[TDStyle] bR | precio | background:yellow; font-weight:bold
[TDStyle] bR | activo,inactivo | background:lightgreen
[TDStyle] bR | observaciones | background:#f0f0f0; border:1px solid #ccc
```