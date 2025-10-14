# Jump

## Sintaxis

```
[Jump] NomDF
```

## Descripción

Salta a ejecutar otro fichero de definición (DF). Una de sus principales utilizaciones es para implementar funcionalidades de búsqueda y selección en fichas.

Cuando se configura una columna con modo "B" (buscar mediante ficha con condiciones) o "b" (seleccionar desde listado), el sistema llamará automáticamente a los scripts:
- `[NomCampo].fdf` - Para búsquedas con ficha
- `[NomCampo].ldf` - Para selección desde listado

Estos scripts pueden utilizar `[Jump]` para saltar al script principal de la entidad, evitando duplicar código cuando la funcionalidad puede reutilizarse.

**Comportamiento técnico:** Si no es un fichero eDes, limpiará el buffer, hará un include del fichero y ejecutará un exit.

## Parámetros

| Parámetro | Tipo | Descripción | Requerido | Valor por defecto |
|-----------|------|-------------|-----------|-------------------|
| NomDF | String | Nombre del fichero de definición (DF) al que saltar | Sí | - |

## Ejemplos

### Ejemplo básico - Salto a otro DF
```
[Jump] clientes.df
```

### Ejemplo en contexto de búsqueda
**Archivo: cod_cliente.fdf**
```
[Jump] clientes.df
```

**Archivo: cod_cliente.ldf**
```
[Jump] clientes_listado.df
```

### Ejemplo con reutilización de código
**Situación:** Tenemos una entidad "productos" y queremos reutilizar su funcionalidad para búsquedas

**Archivo: cod_producto.fdf**
```
[Jump] productos.df
```

**Archivo: cod_producto.ldf**
```
[Jump] productos.df
```

### Ejemplo de configuración de campo con búsqueda
**En la definición de campo:**
```
Campo: cod_cliente
Modo: B    # Búsqueda mediante ficha
```
*Esto automáticamente llamará a cod_cliente.fdf, que puede usar [Jump] para reutilizar código*

## Casos de uso comunes

1. **Reutilización de código**: Evitar duplicar lógica entre scripts de búsqueda y scripts principales
2. **Modularización**: Organizar la aplicación en módulos reutilizables
3. **Búsquedas complejas**: Implementar lupas de búsqueda que reutilizan la lógica principal de las entidades
4. **Mantenimiento**: Centralizar la lógica en un solo lugar para facilitar actualizaciones