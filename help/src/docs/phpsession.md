# PHPSession

## SINTAXIS
```
[PHPSession] VariableCliente=VariableDeSesion, ... [ MensajeDeError ]
```

## DESCRIPCIÓN
Verifica en el lado del servidor que las variables de sesión asignadas al usuario coincidan con los valores enviados mediante POST y GET. Esta etiqueta empareja cada variable de sesión con su correspondiente variable POST o GET presente en el script, proporcionando una capa de seguridad adicional.

## PARÁMETROS

| Parámetro | Descripción |
|-----------|-------------|
| **VariableCliente** | Las variables POST y GET que se van a validar |
| **VariableDeSesion** | Variables de sesión correspondientes para la comparación |
| **MensajeDeError** | Mensaje personalizado de error (opcional). Por defecto muestra un mensaje técnico dirigido al programador |

## FUNCIONAMIENTO
- Si alguna variable de sesión especificada contiene un valor, debe coincidir exactamente con el valor de la variable POST o GET correspondiente
- En caso de discrepancia, se genera un error de sesión y se bloquea la operación
- Proporciona protección contra manipulación de datos del lado del cliente

## EJEMPLO
```
[PHPSession] cd_auto=_Auto_, cd_prov=_Prov_, cd_coma=_Coma_, cd_muni=_Muni_
```

En este ejemplo:
- `cd_auto` (POST/GET) se valida contra `_Auto_` (sesión)
- `cd_prov` (POST/GET) se valida contra `_Prov_` (sesión)  
- `cd_coma` (POST/GET) se valida contra `_Coma_` (sesión)
- `cd_muni` (POST/GET) se valida contra `_Muni_` (sesión)

## CASOS DE USO
- **Validación de formularios**: Asegurar que los datos enviados coinciden con el estado de la sesión
- **Seguridad en navegación**: Prevenir manipulación de parámetros entre páginas
- **Control de flujo**: Mantener consistencia en procesos multi-paso

## NOTAS
⚠️ **Importante**: Esta validación solo se ejecuta si las variables de sesión tienen valores asignados. Variables de sesión vacías no generan validación.