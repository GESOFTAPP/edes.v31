# PHPMenuIcons

## Sintaxis
```
[PHPMenuIcons] Mode [ | DF,.. / else [ | UNIQUE/Condition ]
```

## Descripción
Etiqueta sólo activa en el grupo de fichas y se utiliza para meter iconos o gráficos debajo del menú del grupo de fichas. Realmente es el código a insertar en esa zona.

## Parámetros

| Parámetro | Tipo | Obligatorio | Descripción |
|-----------|------|-------------|-------------|
| Mode | String | Sí | Modo de funcionamiento para la inserción de iconos |
| DF | String | No | Lista de archivos DF separados por comas |
| else | String | No | Código alternativo a ejecutar |
| UNIQUE/Condition | String | No | Condición única o expresión condicional |

## Estructura de parámetros

### Formato básico
```
[PHPMenuIcons] Mode
```

### Con archivos DF
```
[PHPMenuIcons] Mode | archivo1.df,archivo2.df
```

### Con condición else
```
[PHPMenuIcons] Mode | DF,.. / else
```

### Con condición única
```
[PHPMenuIcons] Mode | DF,.. / else | UNIQUE/Condition
```

## Casos de uso

### Iconos simples
```
[PHPMenuIcons] icons
```
Inserta iconos básicos debajo del menú.

### Iconos con archivos específicos
```
[PHPMenuIcons] custom | menu_icons.df,status_icons.df
```
Carga iconos desde archivos específicos.

### Con lógica condicional
```
[PHPMenuIcons] dynamic | icons.df / else | UNIQUE
```
Muestra iconos dinámicos con lógica alternativa.

## Funcionamiento

1. **Posicionamiento**: Los iconos se insertan debajo del menú del grupo de fichas
2. **Código personalizado**: Permite insertar código HTML/PHP personalizado
3. **Condicional**: Puede incluir lógica condicional para mostrar diferentes iconos
4. **Archivos DF**: Puede cargar configuraciones desde archivos específicos

## Notas importantes

- **Solo en grupos de fichas**: Esta etiqueta únicamente funciona en grupos de fichas (GDF)
- **Posición fija**: Los iconos aparecen siempre debajo del menú principal
- **Código personalizable**: Permite insertar HTML, PHP o JavaScript
- **Flexibilidad**: Admite múltiples archivos y condiciones
- **Interfaz visual**: Mejora la experiencia visual del usuario en el grupo de fichas

## Ejemplo de implementación

```html
<!-- Código HTML/PHP que se insertaría debajo del menú -->
<div class="menu-icons">
    <img src="icon1.png" alt="Función 1" onclick="funcion1()">
    <img src="icon2.png" alt="Función 2" onclick="funcion2()">
    <img src="icon3.png" alt="Función 3" onclick="funcion3()">
</div>
```

Este código se insertaría en la zona debajo del menú del grupo de fichas, proporcionando acceso rápido a funciones adicionales mediante iconos visuales.