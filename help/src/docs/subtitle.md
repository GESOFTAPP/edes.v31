# SubTitle

## Descripción

Crea un subtítulo pegado a la parte superior de un listado, posicionado justo debajo del título principal. El contenido del subtítulo se procesa como código PHP, lo que permite generar contenido dinámico. Si se utiliza la etiqueta sin especificar texto, automáticamente mostrará la fecha a la izquierda y la hora a la derecha.

## Sintaxis

```
[SubTitle] [Text]
```

## Parámetros

| Parámetro | Descripción |
|-----------|-------------|
| **Text** | *(Opcional)* Código PHP que genera el contenido del subtítulo. Si se omite, se mostrará automáticamente la fecha actual a la izquierda y la hora actual a la derecha. |

## Ejemplos

### Uso básico (fecha y hora automáticas)
```php
[SubTitle]
```
*Resultado: Muestra la fecha a la izquierda y la hora a la derecha*

### Subtítulo personalizado con código PHP
```php
[SubTitle] echo "Reporte generado el " . date('d/m/Y') . " por " . $usuario;
```

### Subtítulo con información dinámica
```php
[SubTitle] echo "Total de registros: " . count($datos) . " | Última actualización: " . date('H:i:s');
```

### Subtítulo con HTML personalizado
```php
[SubTitle] echo "<div style='color: blue; font-weight: bold;'>Estado del sistema: Activo</div>";
```

## Implementación por defecto

Cuando se usa `[SubTitle]` sin parámetros, es equivalente a:

```php
[SubTitle] echo "<table width=100% cellspacing=0px style='display:inline-table'><tr><td align='left' id='sT'>".date('d-m-Y')."</td><td align='right' id='sT'>".date('H:i:s')."</td></tr></table>";
```

## Consideraciones importantes

- **Código PHP**: El contenido se ejecuta como código PHP, permitiendo lógica dinámica.
- **Posicionamiento**: Se sitúa automáticamente justo debajo del título principal del listado.
- **Estilo por defecto**: Utiliza el ID `sT` para el estilo predeterminado de fecha y hora.
- **Flexibilidad**: Permite tanto contenido simple como HTML complejo con estilos personalizados.
- **Comportamiento automático**: Sin parámetros, proporciona información de fecha y hora útil por defecto.
