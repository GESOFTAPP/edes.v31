# FormWidths

## Sintaxis

```
[FormWidths] Mode | ColWidth1 [, ColWidth2] ... [, ColWidthN]
```

## Descripción

La etiqueta `[FormWidths]` define el ancho de las columnas de la rejilla donde se ubican los elementos del formulario. Permite controlar de manera precisa la distribución del espacio horizontal en el layout del formulario.

### Características principales:
- **Control de layout**: Define el ancho específico de cada columna
- **Estructura de rejilla**: Organiza el formulario en una rejilla con anchos personalizados
- **Flexibilidad**: Permite configurar diferentes anchos para cada columna
- **Unidades en píxeles**: Los valores se especifican en píxeles

## Parámetros

### Mode
Modo de aplicación de los anchos de columna.

### ColWidth1, ColWidth2, ..., ColWidthN
Anchos de las columnas especificados en píxeles, separados por comas.

#### Estructura típica de columnas:
- **Etiqueta1**: Ancho para la primera etiqueta de campo
- **Control1**: Ancho para el primer control de entrada
- **Separador1**: Ancho para el primer separador
- **Etiqueta2**: Ancho para la segunda etiqueta de campo
- **Control2**: Ancho para el segundo control de entrada
- **Separador2**: Ancho para el segundo separador
- **...**: Continúa según sea necesario

## Ejemplos de uso

### Ejemplo básico de tres columnas
```
[FormWidths] * | 200,200,20
```
**Resultado**: Las columnas tendrán anchuras de 200, 200 y 20 píxeles respectivamente.

### Ejemplo de formulario con múltiples columnas
```
[FormWidths] * | 150,180,15,150,180,15,100
```
**Resultado**: 
- Columna 1 (Etiqueta1): 150px
- Columna 2 (Control1): 180px  
- Columna 3 (Separador1): 15px
- Columna 4 (Etiqueta2): 150px
- Columna 5 (Control2): 180px
- Columna 6 (Separador2): 15px
- Columna 7 (Extra): 100px

### Ejemplo de formulario compacto
```
[FormWidths] * | 120,150,10,120,150
```

### Ejemplo de formulario con campos anchos
```
[FormWidths] * | 250,300,25,250,300
```

## Patrones comunes

### Formulario de dos columnas equilibradas
```
[FormWidths] * | 200,200,20,200,200
```

### Formulario con etiquetas estrechas y controles anchos
```
[FormWidths] * | 100,250,15,100,250
```

### Formulario con separadores mínimos
```
[FormWidths] * | 180,220,5,180,220,5
```

### Formulario de una sola columna ancha
```
[FormWidths] * | 400,400,50
```

## Consideraciones de diseño

### Planificación de anchos
- **Etiquetas**: Considerar la longitud del texto más largo
- **Controles**: Ajustar según el tipo y contenido esperado
- **Separadores**: Normalmente entre 10-25px para espaciado visual

### Responsividad
- Los anchos son fijos en píxeles
- Considerar el ancho total del contenedor
- Planificar para diferentes resoluciones de pantalla

### Usabilidad
- Evitar columnas demasiado estrechas que corten el texto
- Proporcionar espacio suficiente para los controles de entrada
- Mantener consistencia visual entre secciones

## Casos de uso comunes

- **Formularios estructurados**: Organizar campos en columnas bien definidas
- **Alineación precisa**: Conseguir alineación perfecta de elementos
- **Optimización del espacio**: Aprovechar eficientemente el ancho disponible
- **Consistencia visual**: Mantener anchos uniformes en todo el formulario
- **Formularios complejos**: Organizar formularios con múltiples secciones
- **Adaptación a contenido**: Ajustar anchos según los tipos de datos a mostrar