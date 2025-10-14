# SaveForm

## Sintaxis

```
[SaveForm] <Mode> | <NomFile>
```

## Descripción

Herramienta de desarrollo para grabar la parte del formulario a un fichero PHP externo, permitiendo modificarlo y adaptarlo cuando eDes no puede darle la forma deseada. Las opciones "c", "b", "m" y "a" sin valores por defecto se pueden usar tal cual, pero si se utilizan opciones con datos (como "mR") hay que sustituir los datos por variables PHP para adaptarse a cualquier situación. Esta etiqueta es temporal: se usa solo durante desarrollo para generar la base del fichero, luego se retira y se sustituye por [ExtForm] para importar el formulario personalizado. No disponible en el grupo de fichas.

## Parámetros

| Parámetro | Tipo | Descripción | Requerido |
|-----------|------|-------------|-----------|
| Mode | string | Modo de grabación del formulario (c, b, m, a, mR, etc.) | Sí |
| NomFile | string | Nombre del fichero PHP donde se grabará el formulario | Sí |

## Opciones de Mode

| Opción | Descripción |
|--------|-------------|
| c | Modo básico sin valores por defecto |
| b | Modo básico sin valores por defecto |
| m | Modo básico sin valores por defecto |
| a | Modo básico sin valores por defecto |
| mR | Modo con datos que requiere sustitución por variables PHP |

## Ejemplos

### Ejemplo básico
```
[SaveForm] c | formulario_clientes.php
```

### Ejemplo con diferentes modos
```
[SaveForm] b | form_productos.php
[SaveForm] m | form_pedidos.php
[SaveForm] a | form_facturas.php
```

### Ejemplo con modo que contiene datos
```
[SaveForm] mR | form_complejo.php
```

## Flujo de trabajo

1. **Desarrollo inicial**: Usar [SaveForm] para generar el fichero base
2. **Personalización**: Modificar el fichero PHP generado según necesidades
3. **Sustitución de datos**: Reemplazar valores fijos por variables PHP
4. **Integración**: Eliminar [SaveForm] y usar [ExtForm] para importar el formulario personalizado

## Notas importantes

- **Solo para desarrollo**: Esta etiqueta es temporal y se retira del código final
- **Sustitución necesaria**: Opciones con datos requieren conversión a variables PHP
- **No disponible en grupo de fichas**: Limitación del sistema
- **Reemplazo con ExtForm**: Una vez personalizado, se usa [ExtForm] para la importación