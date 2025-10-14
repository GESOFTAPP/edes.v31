# WinTitle

## SINTAXIS

```
[WinTitle] Title
```

## DESCRIPCIÓN

Define el título que aparecerá en la barra de título de las ventanas auxiliares del explorador. Esta etiqueta permite personalizar el título de las ventanas emergentes o secundarias, proporcionando contexto específico sobre el contenido que se está visualizando.

El título admite contenido dinámico mediante la inclusión de variables PHP, lo que permite mostrar información específica del registro o contexto actual en el título de la ventana.

## PARÁMETROS

| Parámetro | Tipo | Descripción |
|-----------|------|-------------|
| **Title** | Cadena | Texto que se mostrará como título de la ventana auxiliar. Puede incluir variables PHP |

## VARIABLES DINÁMICAS

El título puede contener variables PHP utilizando la sintaxis de llaves:

```
{$variable}
```

### Ejemplos de variables comunes:
- `{$id}` - ID del registro actual
- `{$nombre}` - Campo nombre del registro
- `{$codigo}` - Código del elemento
- `{$fecha}` - Fecha relacionada con el registro

## EJEMPLOS

### Título estático
```
[WinTitle] Detalles del Cliente
```

### Título dinámico con variables
```
[WinTitle] Cliente: {$nombre} - ID: {$id}
```

### Título con múltiples variables
```
[WinTitle] Pedido #{$numero} - {$cliente} ({$fecha})
```

### Título contextual
```
[WinTitle] Editar Producto - {$codigo}: {$descripcion}
```

## CASOS DE USO COMUNES

- **Identificación de registros**: `[WinTitle] Factura #{$numero}`
- **Información del usuario**: `[WinTitle] Perfil de {$usuario}`
- **Detalles de productos**: `[WinTitle] {$codigo} - {$nombre}`
- **Contexto temporal**: `[WinTitle] Reporte {$tipo} - {$fecha}`

## NOTAS

- La etiqueta solo afecta a ventanas auxiliares, no a la ventana principal
- Las variables PHP se evalúan en tiempo de ejecución
- Útil para proporcionar contexto inmediato sobre el contenido de la ventana
- Mejora la experiencia del usuario al trabajar con múltiples ventanas
- El título aparece tanto en la barra de título como en la barra de tareas del sistema