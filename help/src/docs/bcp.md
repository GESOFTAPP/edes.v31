# BCP

## SINTAXIS
```
[BCP] Modo | B/b/c/p | Campo1,Campo2,...
```

## DESCRIPCIÓN

La etiqueta `[BCP]` proporciona utilidades de ayuda que se pueden aplicar a cualquier control en diferentes modos de operación. Estas utilidades facilitan la interacción del usuario con los campos mediante funcionalidades adicionales.

### Tipos de utilidades disponibles

| Código | Funcionalidad | Descripción |
|--------|---------------|-------------|
| **B** | Búsqueda mediante ficha | Permite realizar búsquedas a través de una interfaz de ficha |
| **b** | Búsqueda mediante listado | Habilita búsquedas mediante una vista de listado |
| **c** | Copy | Funcionalidad de copiado |
| **p** | Paste | Funcionalidad de pegado |

### Comportamiento por modo

#### Modos estándar (a y mR)
- Las opciones **"B"** y **"b"** están disponibles automáticamente en la columna "modo" de la etiqueta `[Fields]`
- Se aplican únicamente en los modos:
  - **"a"** (Alta)
  - **"mR"** (Modificación)

#### Otros modos
- Las opciones **"c"** (Copy) y **"p"** (Paste) solo se activan cuando se solicita específicamente
- Para habilitar cualquier utilidad en modos diferentes a "a" y "mR", se debe utilizar esta etiqueta `[BCP]`

## PARÁMETROS

| Parámetro | Descripción |
|-----------|-------------|
| **Modo** | Modo de operación donde se aplicará la utilidad |
| **B/b/c/p** | Tipo de utilidad a aplicar (Búsqueda ficha/listado, Copy, Paste) |
| **Campo1,Campo2,...** | Lista de campos separados por comas donde se aplicarán las utilidades |

## EJEMPLOS

### Ejemplo 1: Búsqueda por ficha en modo consulta
```
[BCP] cR | B | nombre,apellidos
```

### Ejemplo 2: Funcionalidades Copy/Paste en modo listado
```
[BCP] lR | c,p | descripcion,observaciones
```

### Ejemplo 3: Búsqueda por listado en múltiples modos
```
[BCP] mR,cR | b | codigo,referencia
```

## NOTAS IMPORTANTES

- Las utilidades "B" y "b" se integran automáticamente en modos "a" y "mR" 
- Para otros modos, es necesario declarar explícitamente las utilidades mediante `[BCP]`
- Se pueden combinar múltiples utilidades separándolas por comas
- La configuración afecta solo a los campos especificados en la lista