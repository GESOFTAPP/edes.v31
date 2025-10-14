# Z

## SINTAXIS
```
{Z}
```

## DESCRIPCIÓN
Marca el fin de una zona fija en una multificha. Esta etiqueta trabaja en conjunto con `[FixZone]` para delimitar áreas que permanecen fijas (no se desplazan) dentro de un formulario multificha, proporcionando estabilidad visual y funcional a elementos importantes.

## PARÁMETROS
Esta etiqueta no requiere parámetros.

## RELACIÓN CON OTRAS ETIQUETAS
- **`[FixZone]`**: Marca el inicio de la zona fija
- **`{Z}`**: Marca el final de la zona fija
- Deben usarse siempre en pares para delimitar correctamente la zona

## CASOS DE USO
- **Barras de herramientas**: Mantener controles de acción siempre visibles
- **Información de cabecera**: Datos de identificación que deben permanecer a la vista
- **Controles de navegación**: Botones y menús que facilitan el desplazamiento
- **Campos de referencia**: Información clave que sirve de contexto para otras pestañas

## ESTRUCTURA TÍPICA
```
[FixZone]
    Campo1 | valor1 | ...
    Campo2 | valor2 | ...
    Controles importantes...
{Z}

# Resto del formulario multificha
{FS}{ Pestaña 1
    Campos de la pestaña 1...
}
{FS}{ Pestaña 2
    Campos de la pestaña 2...
}
```

## EJEMPLO CONCEPTUAL
```
[Title] Gestión de Cliente
[FixZone]
    ID Cliente    | cd_cliente  | * | T |  8 |     | *  ||   |
    Nombre        | nm_cliente  | N | T | 50 |     | MQ || # |
    Estado        | estado      | N | S |  1 |     | MQ ||   |
{Z}

{FS}{ Datos Personales
    DNI/NIF       | dni         | 0 | T |  9 |     | MQ ||   |
    Teléfono      | telefono    | 0 | T | 15 |     | M  ||   |
}
{FS}{ Dirección
    Calle         | calle       | N | T | 60 |     | MQ ||   |
    Ciudad        | ciudad      | N | T | 30 |     | MQ ||   |
}
```

## VENTAJAS
- **Contexto permanente**: La información clave siempre está visible
- **Mejor UX**: Reduce la necesidad de cambiar entre pestañas para consultar datos básicos
- **Eficiencia**: Acelera la navegación y edición en formularios complejos
- **Consistencia visual**: Mantiene la estructura del formulario estable

## NOTAS IMPORTANTES
- Debe usarse siempre después de `[FixZone]` para cerrar correctamente la zona
- El contenido entre `[FixZone]` y `{Z}` permanece fijo mientras se navega por las pestañas
- Es especialmente útil en formularios con múltiples pestañas que comparten información común