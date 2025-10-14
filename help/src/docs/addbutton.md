# AddButton

Comando que permite añadir botones personalizados a formularios con funcionalidad JavaScript.

## Sintaxis

```
[AddButton] Mode | Label | Title | ValorDelOnclick [| InteriorDelStyle [| NoTabsDondeSeVisualiza]]
```

### Parámetros

| Parámetro | Tipo | Descripción |
|-----------|------|-------------|
| **Mode** | string | Modo de visualización del botón |
| **Label** | string | Texto o HTML que se mostrará en el botón |
| **Title** | string | Texto del tooltip que aparece al pasar el mouse |
| **ValorDelOnclick** | string | Función JavaScript que se ejecutará al hacer clic |
| **InteriorDelStyle** | string | *(Opcional)* Estilos CSS personalizados para el botón |
| **NoTabsDondeSeVisualiza** | string | *(Opcional)* Número de pestañas donde será visible (ej: "1,3") |

## Características

- **ID único**: Cada botón recibe automáticamente un ID único con formato `AddButton[NoBoton]`
- **Variables dinámicas**: Los parámetros `Label`, `Title` y `ValorDelOnclick` soportan variables con la sintaxis `{$NomVar}`
- **Funciones PHP**: Se pueden ejecutar funciones PHP usando `<?= ?>`
- **Visibilidad por pestañas**: Controla en qué solapas del formulario aparece el botón
- **Grupos de fichas**: Si se usa en un grupo de fichas, debe colocarse en el GDF

## Tipos de Iconos

### Sin Icono
```
[AddButton] * | Sin Icono || alert(1)
```

### Icono con Fuente
```
[AddButton] * | [U] Icono con Fuente || alert(2)
```
> **Nota**: Para conocer los valores disponibles, consultar la función `eIcon()`

### Icono con Fuente Personalizada
```
[AddButton] * | <i class="ICONINPUT ICONUPDATE">U</i> Icono con Fuente 2 || alert(3)
```

### Icono con Imagen
```
[AddButton] * | <img src="g/print_1.gif" /> Icono con IMG || alert(4)
```

### Icono Base64
```
[AddButton] * | <img src=""> Icono Base64 || alert(5)
```

## Ejemplos de Uso

### Ejemplo Básico
```
[AddButton] cR | PDF | Imprimir ficha en PDF | ShowPDF()
```

### Ejemplo con Múltiples Modos
```
[AddButton] cR,bR | <img src="g/print_1.gif" /> | Imprimir | ImprimirDoc()
```

### Ejemplo con Variables
```
[AddButton] cR | Editar {$nombre} | Editar registro | EditRecord({$id})
```

### Ejemplo con Visibilidad Específica
```
[AddButton] cR | Guardar | Guardar cambios | SaveData() || 1,3
```

## Implementación desde PHP

También es posible añadir botones directamente desde PHP usando el bloque `[PHPIni]`:

```php
[PHPIni]
$_ADDBUTTON[] = array(Label, Title, ValorDelOnclick);
```

### Ejemplo PHP
```php
[PHPIni]
$_ADDBUTTON[] = array("Exportar", "Exportar datos", "ExportData()");
$_ADDBUTTON[] = array("<img src='icons/save.png'> Guardar", "Guardar cambios", "SaveForm()");
```

## Casos de Uso Comunes

- **Impresión**: Botones para generar PDFs o imprimir formularios
- **Navegación**: Botones para cambiar entre diferentes vistas
- **Validación**: Botones para ejecutar validaciones personalizadas
- **Exportación**: Botones para exportar datos en diferentes formatos
- **Acciones AJAX**: Botones para ejecutar operaciones asíncronas

## Notas Importantes

1. Los botones se renderizan en el orden en que se definen
2. El parámetro `Mode` determina la ubicación y estilo del botón
3. Para botones con imágenes, asegúrate de que las rutas sean correctas
4. Las funciones JavaScript deben estar definidas antes de usar el botón
5. En formularios con múltiples pestañas, usa el parámetro `NoTabsDondeSeVisualiza` para controlar la visibilidad