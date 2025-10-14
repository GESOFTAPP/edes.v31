# ShowFilter

## Descripción

Muestra las condiciones aplicadas en un listado. Esta funcionalidad permite visualizar los filtros activos que se han aplicado a los datos mostrados. La etiqueta se puede definir en el segundo parámetro de la etiqueta `[Title]` para mayor flexibilidad en su ubicación.

## Sintaxis

```
[ShowFilter] [SubMode]
```

## Parámetros

| Parámetro | Descripción |
|-----------|-------------|
| **SubMode** | *(Opcional)* Modo de visualización específico para el filtro. Define cómo se mostrará la información del filtro aplicado. |

## Uso

### Uso básico
```php
[ShowFilter]
```

### Uso con SubMode
```php
[ShowFilter] modo_especifico
```

### Uso en combinación con Title
```php
[Title] Título del Listado | [ShowFilter]
```

## Consideraciones importantes

- **Ubicación flexible**: Puede ser utilizada tanto de forma independiente como dentro del segundo parámetro de la etiqueta `[Title]`.
- **Visualización automática**: Muestra automáticamente las condiciones de filtrado activas sin necesidad de configuración adicional.
- **Compatibilidad**: Funciona con todos los tipos de filtros aplicados al listado.
