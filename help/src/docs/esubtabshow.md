# eSubTabShow

## Descripción
Muestra el número de SubTab indicado en la interfaz, permitiendo navegar entre diferentes pestañas secundarias de la aplicación.

## Sintaxis
```php
eSubTabShow($nSubTab)
```

## Parámetros
- **$nSubTab** (int): Número del SubTab que se desea mostrar

## Funcionalidad
Esta función permite mostrar una pestaña secundaria específica identificada por su número. Es útil para la navegación programática entre diferentes secciones de la interfaz de usuario.

## Ejemplos

### Ejemplo 1: Mostrar SubTab básico
```php
eSubTabShow(2);
```

### Ejemplo 2: Cambiar a diferentes SubTabs
```php
// Mostrar el primer SubTab
eSubTabShow(1);

// Cambiar al tercer SubTab
eSubTabShow(3);
```

### Ejemplo 3: Uso condicional
```php
$tabActivo = 2;
if ($tabActivo > 0) {
    eSubTabShow($tabActivo);
}
```