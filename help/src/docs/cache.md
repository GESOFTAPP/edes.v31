# Cache

## Sintaxis
```
[Cache] Mode
```

## Descripción
Se cacheará en los modos indicados y los subselect. Esta caché se renueva cada día y solo tendrá efecto si no estás como desarrollador. 

**Importante:** Al pasar paquetes, la caché (si la hubiera) de los scripts pasados se limpiaría.

## Parámetros
- **Mode**: Especifica en qué modos se aplicará el cache

## Ejemplo
```
[help:Fa:crm/etapa.edf]
```

## Notas
- ✅ La caché se renueva automáticamente cada día
- ⚠️ No funciona en modo desarrollador
- 🔄 Se limpia al pasar paquetes
- 📋 Afecta a los subselect también