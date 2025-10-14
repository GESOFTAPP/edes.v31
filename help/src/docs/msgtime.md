# MsgTime

## Sintaxis
```
[MsgTime] OkMilliseconds, ErrorMilliseconds
```

## Descripción
Configura el tiempo de visión de los mensajes del sistema como "INSERTADO", "MODIFICADO", etc., que aparecen después de aceptar una ficha o grupo de fichas.

## Parámetros
- **OkMilliseconds**: Tiempo de visualización para mensajes exitosos (sin error)
- **ErrorMilliseconds**: Tiempo de visualización para mensajes de error

### Unidades de tiempo
- **≥ 100**: El valor se interpreta como **milisegundos**
- **< 100**: El valor se interpreta como **segundos**

## Ejemplo
```
[MsgTime] 4000,5000
```
Los mensajes que se visualicen por pantalla lo harán durante:
- **4 segundos** en caso de no ser un mensaje de error
- **5 segundos** en caso de ser un mensaje de error

## Tipos de mensajes afectados
- ✅ **Mensajes de éxito**: INSERTADO, MODIFICADO, ELIMINADO
- ❌ **Mensajes de error**: Validaciones, errores de sistema
- 📝 **Mensajes informativos**: Confirmaciones de operaciones

## Ejemplos adicionales
```
[MsgTime] 3000,6000
```
3 segundos para éxito, 6 segundos para errores

```
[MsgTime] 2,4
```
2 segundos para éxito, 4 segundos para errores (valores < 100)

## Buenas prácticas
- 💡 **Mensajes de éxito**: 2-4 segundos suelen ser suficientes
- ⚠️ **Mensajes de error**: 4-6 segundos para permitir lectura completa
- 👥 **Experiencia de usuario**: Evitar tiempos demasiado largos que interrumpan el flujo
- 📱 **Responsive**: Considerar diferentes dispositivos y velocidades de lectura