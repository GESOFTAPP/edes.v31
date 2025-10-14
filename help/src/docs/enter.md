# Enter

## Sintaxis

```
[Enter] CampoOrigen, CampoDestino1, CampoDestino2, ... [ | CampoOrigen, CampoDestino1, CampoDestino2, ... ] ...
```

## Descripción

La etiqueta **Enter** permite definir el orden de navegación personalizado entre campos al presionar la tecla "Enter" en un formulario.

Esta funcionalidad es especialmente útil cuando:
- El formulario tiene múltiples columnas de campos
- Cada columna agrupa campos de una temática específica
- Se desea evitar saltar entre temas diferentes durante la navegación
- Se requiere un flujo lógico de entrada de datos

### Funcionamiento

Al presionar "Enter" en un campo origen, el foco se mueve al siguiente campo destino según la secuencia definida, en lugar de seguir el orden natural del formulario.

## Sintaxis Detallada

| Elemento | Descripción |
|----------|-------------|
| **CampoOrigen** | Campo desde el cual se inicia la navegación |
| **CampoDestino1, CampoDestino2, ...** | Secuencia de campos destino en orden de navegación |
| **\|** | Separador para definir múltiples secuencias de navegación |
| ***INPUT*** | Palabra clave especial para campos de entrada |

## Ejemplos

### Ejemplo 1: Navegación por columnas temáticas
```
[Enter] nombre,apel1 | apel2,condi,dt_ant | *INPUT*condi,dt_ant | dt_ant,u_cuota,cd_resp_ins,dt_mes,obs
```

**Explicación del flujo:**
1. **nombre** → **apel1** (datos personales)
2. **apel2** → **condi** → **dt_ant** (continuación datos personales)
3. **condi** → **dt_ant** (usando *INPUT*)
4. **dt_ant** → **u_cuota** → **cd_resp_ins** → **dt_mes** → **obs** (datos financieros)

### Ejemplo 2: Campos específicos con INPUT
```
[Enter] *INPUT*cd_auto, *INPUT*cd_prov
```

**Explicación:**
- Navegación específica para campos de entrada de códigos automáticos y provinciales

## Casos de Uso

### Formulario con Múltiples Columnas
```
┌─────────────────┬─────────────────┐
│   Datos Cliente │  Datos Contrato │
├─────────────────┼─────────────────┤
│ nombre          │ u_cuota         │
│ apel1           │ cd_resp_ins     │
│ apel2           │ dt_mes          │
│ condi           │ obs             │
│ dt_ant          │                 │
└─────────────────┴─────────────────┘
```

Con **Enter** definido, la navegación sigue el flujo lógico por columnas temáticas en lugar del orden físico del formulario.

## Ventajas

1. **Navegación lógica**: Mantiene el foco en campos relacionados temáticamente
2. **Eficiencia**: Reduce errores de entrada al seguir un flujo coherente
3. **Usabilidad**: Mejora la experiencia del usuario en formularios complejos
4. **Flexibilidad**: Permite múltiples secuencias de navegación en el mismo formulario

## Notas Importantes

- Las secuencias se separan con el carácter pipe (`|`)
- Se pueden definir múltiples rutas de navegación en una sola declaración
- La palabra clave `*INPUT*` permite especificar comportamientos especiales para campos de entrada
- Si un campo no está definido en ninguna secuencia, mantiene el comportamiento estándar de navegación