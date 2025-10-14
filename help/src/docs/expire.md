# Expire

## Sintaxis
```
[Expire] Seconds
```

## Descripción
Establece el máximo número de segundos que se le permite a un script ejecutarse. Si se establece a cero, no se impone ningún límite de tiempo.

Esta etiqueta solo es necesaria si hay que cambiar el valor por defecto de PHP para `max_execution_time`.

## Parámetros
- **Seconds**: Número de segundos para el límite de ejecución
  - `0`: Sin límite de tiempo
  - `> 0`: Límite específico en segundos

## Ejemplo
```
[Expire] 180
```
Espera 180 segundos para que caduque la página.

## Casos de uso
- 📊 **Procesos largos**: Para scripts que requieren más tiempo del establecido por defecto
- 🔄 **Importaciones**: Al procesar grandes volúmenes de datos
- 📈 **Reportes complejos**: Para generar informes que requieren mucho procesamiento
- ⚡ **Sin límite**: Usar `[Expire] 0` para procesos que no deben interrumpirse

## Notas importantes
- ⚠️ **Uso responsable**: Evitar tiempos excesivamente largos que puedan afectar el servidor
- 🔧 **Solo si es necesario**: Únicamente usar cuando el tiempo por defecto no sea suficiente
- 🖥️ **Configuración PHP**: Modifica temporalmente la configuración `max_execution_time` de PHP