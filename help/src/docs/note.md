# Note

## Sintaxis

```
[Note]
...
```

## Descripción

Al encontrar esta etiqueta se dejará de leer la definición, es decir, se ignorará todo el contenido desde esta etiqueta hasta el final del script. Es útil para añadir comentarios, notas de desarrollo, código de prueba o cualquier contenido que no debe ser procesado por el sistema.

## Parámetros

| Parámetro | Tipo | Descripción | Requerido | Valor por defecto |
|-----------|------|-------------|-----------|-------------------|
| - | - | No requiere parámetros | - | - |

## Ejemplos

### Ejemplo básico - Comentarios al final del script
```
[Tabla] clientes
[Campo] id_cliente | N | 10 | ID Cliente
[Campo] nombre | C | 50 | Nombre Cliente
[Campo] email | C | 100 | Email

[Note]
Este script maneja la tabla de clientes
TODO: Añadir validación de email
PENDIENTE: Implementar búsqueda avanzada
```

### Ejemplo con código de prueba
```
[Tabla] productos
[Campo] id_producto | N | 10 | ID
[Campo] nombre | C | 100 | Nombre
[Campo] precio | N | 10,2 | Precio

[Note]
--- CÓDIGO DE PRUEBA ---
[Campo] campo_temporal | C | 50 | Campo temporal
[Script]
echo "Debugging info";
print_r($_POST);
```

### Ejemplo con documentación extensa
```
[MyData] user_id=_CurrentUser

[Tabla] configuracion_usuario
[Campo] id_config | N | 10 | ID
[Campo] parametro | C | 50 | Parámetro
[Campo] valor | C | 200 | Valor

[Note]
=== DOCUMENTACIÓN DEL MÓDULO ===

Este módulo gestiona la configuración personalizada de usuarios.

PARÁMETROS SOPORTADOS:
- theme: Tema visual (light/dark)
- language: Idioma de la interfaz (es/en/fr)
- notifications: Activar notificaciones (true/false)
- dashboard_layout: Diseño del dashboard (grid/list)

HISTORIAL DE CAMBIOS:
v1.0 - Versión inicial
v1.1 - Añadido soporte para temas
v1.2 - Implementación de múltiples idiomas

NOTAS TÉCNICAS:
- La tabla se crea automáticamente si no existe
- Los valores se almacenan como strings
- Validación de parámetros en cliente JavaScript
```

### Ejemplo desactivando código temporalmente
```
[Tabla] pedidos
[Campo] id_pedido | N | 10 | ID Pedido
[Campo] fecha | D | | Fecha
[Campo] estado | C | 20 | Estado

[Note]
--- CÓDIGO DESACTIVADO TEMPORALMENTE ---
[Campo] campo_obsoleto | C | 50 | Campo obsoleto
[Validation]
if (estado == 'CANCELADO') {
    // Esta validación está causando problemas
    return false;
}
```

## Casos de uso comunes

1. **Documentación**: Añadir documentación detallada del módulo
2. **Comentarios de desarrollo**: Notas para otros desarrolladores
3. **Código de prueba**: Mantener código de testing sin que se ejecute
4. **TODO lists**: Lista de tareas pendientes
5. **Desactivar código**: Desactivar temporalmente funcionalidades sin borrar código
6. **Historial de cambios**: Mantener un registro de modificaciones
7. **Notas de debugging**: Información para depuración

## Ventajas

- **Limpio**: Mantiene el código principal limpio
- **Documentación**: Permite documentar extensamente sin afectar la ejecución
- **Desarrollo**: Útil durante el proceso de desarrollo y testing
- **Mantenimiento**: Facilita el mantenimiento al poder dejar notas técnicas