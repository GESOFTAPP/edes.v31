# Documentación de Modos del Sistema

## Introducción

Los **modos** definen la forma de atacar (acceder) a un fichero de definición en el sistema. Cuando se ejecuta código o una etiqueta en modos específicos como "a", "mR" y "c", el código se ejecutará según el modo en que se ataque al fichero de definición correspondiente.

Los modos son **cíclicos** y permiten utilizar un solo fichero de definición para todas las acciones posibles.

## Flujo de Modos

```
a ---------> A >> (a)
b --> bR --> B >> (b)
c --> cR ------>> (c)
m --> mR --> M >> (m)
l --> L
s --> S
q --> Q
```

### Ejemplo de Ciclo de Modificación
1. **m** - Pregunta por una ficha para modificar
2. **mR** - Modifica el usuario la ficha
3. **M** - Modifica el servidor la tabla
4. **m** - Vuelve a preguntar (reinicia el ciclo)

## Modos Principales

### Modos de Alta (Create)
| Modo | Descripción |
|------|-------------|
| **a** | Formulario de datos vacío que debe ser rellenado (al menos parcialmente) para realizar un alta de datos |
| **A** | Realiza el alta física en la base de datos |

### Modos de Baja (Delete)
| Modo | Descripción |
|------|-------------|
| **b** | Formulario de datos vacío para localizar el registro que se quiere dar de baja |
| **bR** | Devuelve formulario con los datos del registro a dar de baja, esperando confirmación |
| **B** | Realiza la baja física en la base de datos |

### Modos de Consulta (Read)
| Modo | Descripción |
|------|-------------|
| **c** | Formulario de datos vacío para localizar el/los registro(s) a consultar |
| **cR** | Devuelve formulario con los datos del registro consultado |

### Modos de Modificación (Update)
| Modo | Descripción |
|------|-------------|
| **m** | Formulario de datos vacío para localizar el registro que se quiere modificar |
| **mR** | Devuelve formulario con los datos del registro a modificar |
| **M** | Realiza la modificación física en la base de datos |

### Modos de Listado
| Modo | Descripción |
|------|-------------|
| **l** | Devuelve un listado |
| **L** | Devuelve un listado de registros (*.lst) |

### Modos de Select
| Modo | Descripción |
|------|-------------|
| **s** | Formulario para generar un SELECT personalizable |
| **S** | Devuelve la cadena del SELECT sin ejecutarla |
| **q** | Formulario para ejecutar un SELECT y obtener un cursor (no modificable) |
| **Q** | Devuelve el resultado del SELECT ejecutado |

## Submodos en Listados

| Submodo | Descripción |
|---------|-------------|
| **bl** | Listado de selección para Borrar |
| **cl** | Listado de selección para Consultar |
| **ml** | Listado de selección para Modificar |

## Agrupaciones de Modos

### Grupo F (Formularios)
Incluye cualquiera de los modos: **c**, **b**, **m**, **a**, **mR**, **cR**, **bR**

### Grupo L (Listados)
Incluye cualquiera de los modos: **l**, **ml**, **cl**, **bl**

## Otras Acciones Especiales

| Acción | Descripción |
|--------|-------------|
| **R** | Lee fichero |
| **E** | Ejecuta un script |
| **$** | Dentro del motor |
| **>** | Dirección indicada dentro del directorio "d" |
| **P** | Texto plano (Text/Plain) |
| **X** | Tabla vinculada, un "text/plain" de una DB |
| **T** | Tabla vinculada |
| **V** | Visualizar un HTML/TXT en una ventana virtual |
| **D** | Download con parámetros WHO y FILE |
| **Y** | Para ejecutar script SDF |

### Ejemplo de Uso de Acción Y
```javascript
top.eCallSrv(window, 'edes.php?Y:cd_post.sdf&CPOSTAL='+eGF('_cd_postal'));
```

## Modo en Edición de Campo

### Estados de Campo
- **E** - Editable
- **V** - Visible
- **I** - Invisible

### Matriz de Modos de Campo

| Modo Campo | Descripción | Edición A/M | | | | | |
|------------|-------------|-------------|---|---|---|---|---|
| | | **E** | **V** | **I** | **E** | **V** | **I** |
| **M/A** | Modificación/Alta | | | | ✓ | | |
| **QM/MQ** | Consulta-Modificación | ✓ | | | ✓ | | |
| **Q** | Solo Consulta | ✓ | | | | | |
| **-** | Oculto | | | | | ✓ | |
| **-Q** | Oculto en Consulta | | ✓ | | | | |
| **Q-** | Consulta-Oculto | ✓ | | | | ✓ | |
| **-Q-** | Oculto-Consulta-Oculto | | ✓ | | | ✓ | |
| **\*** | Siempre Invisible | | | | | | ✓ |
| **\*Q** | Invisible-Consulta | | | ✓ | | | |
| **Q\*** | Consulta-Invisible | ✓ | | | | | ✓ |
| **\*Q\*** | Invisible-Consulta-Invisible | | | ✓ | | | ✓ |

## Resumen de Modos por Ejecución

| Modo | Propósito | DB | Editable | Visible | Proceso Ext. |
|------|-----------|----|---------|---------|-----------| 
| **c** | Consulta (pregunta) | | | | |
| **cR** | Consulta (respuesta) | | | ✓ | |
| **a** | Alta (pregunta) | | ✓ | | |
| **A** | Alta (ejecución) | ✓ | | | |
| **b** | Baja (pregunta) | | | | |
| **bR** | Baja (respuesta) | | | ✓ | |
| **B** | Baja (ejecución) | ✓ | | | |
| **l** | Listado (pregunta) | | | | |
| **L** | Listado (respuesta) | | | ✓ | |
| **q** | Query (pregunta) | | | | |
| **Q** | Query (respuesta) | | | | ✓ |
| **m** | Modificación (pregunta) | | | | |
| **mR** | Modificación (respuesta) | | ✓ | | |
| **M** | Modificación (ejecución) | ✓ | | | |
| **s** | Select (pregunta) | | | | |
| **S** | Select (respuesta) | | | | ✓ |

## Notas Importantes

- Los modos son **cíclicos** y permiten reutilizar definiciones
- Un mismo fichero de definición puede manejar múltiples modos
- Los modos con minúscula suelen ser "preguntas" o formularios
- Los modos con mayúscula suelen ser "respuestas" o ejecuciones
- La diferencia entre **s/S** y **q/Q** es que el primero permite modificar el SELECT, mientras que el segundo lo ejecuta directamente