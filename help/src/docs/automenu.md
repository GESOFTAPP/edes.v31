# AutoMenu

## Sintaxis

```
[AutoMenu] Mode [ | Option=false ]
```

## Descripción

Define las características del menú. El uso más frecuente es ocultar el menú para disponer de más espacio en el área principal de la ventana, por ejemplo en un listado con muchas columnas deseamos ocultar el menú para poder ver más columnas de datos. Se puede configurar el comportamiento por defecto del menú mediante la variable `$MenuOnOff` del fichero de configuración "desktop.ini".

## Parámetros

| Parámetro | Tipo | Descripción | Valores |
|-----------|------|-------------|---------|
| Mode | String | Modo de aplicación | a, mR, c, l, etc. |
| Option | Boolean | Controla la visibilidad del menú | false: Muestra el menú vertical<br>true: Oculta el menú vertical |

## Ejemplos

### Ejemplo básico - Ocultar menú en listados
```
[AutoMenu] l | true
```

### Ejemplo del manual - Múltiples modos
```
[AutoMenu] a,mR,c,l | true
```
En los modos indicados (a, mR, c, l), oculta el menú izquierdo.

### Ejemplo - Mostrar menú solo en edición
```
[AutoMenu] e | false
```

### Ejemplo - Ocultar en consulta para más espacio
```
[AutoMenu] c | true
```

### Ejemplo - Control específico por modo
```
[AutoMenu] l,r | true
[AutoMenu] e,a | false
```

### Ejemplo - Ocultar en reportes amplios
```
[AutoMenu] rp,rt | true
```

## Casos de Uso Comunes

- **Listados extensos**: Ocultar menú para mostrar más columnas
- **Reportes**: Maximizar área de visualización de datos
- **Formularios complejos**: Aprovechar todo el ancho disponible
- **Consultas**: Más espacio para filtros y resultados
- **Configuración global**: Usar `$MenuOnOff` en desktop.ini para comportamiento por defecto