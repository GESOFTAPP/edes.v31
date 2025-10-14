# lTools - Herramientas de Listados

## Descripción General

**lTools** es un submenú de opciones disponible en los listados, accesible mediante el icono que se muestra en la **esquina superior derecha** de los listados.

## Ubicación y Acceso

| Elemento | Ubicación | Descripción |
|----------|-----------|-------------|
| **Icono de acceso** | Esquina superior derecha | Icono visible en todos los listados |
| **Primer icono** | Tipo de selección | Controla el modo de selección activo |

## Tipos de Selección

### Modos de Selección Disponibles

| Modo | Descripción | Comportamiento |
|------|-------------|----------------|
| **Selección en ventana actual** | Modo por defecto | Ejecuta la selección en la ventana actual |
| **Selección en subventana** | Modo subventana | Ejecuta la ficha en subventana sin cerrar el listado |
| **Selección en ficha deslizante** | Modo navegación automática | Ejecuta en ventana especial con navegación automática |

### Detalles de Cada Modo

#### 1. Selección en Ventana Actual

| Característica | Descripción |
|----------------|-------------|
| **Estado** | Modo por defecto |
| **Comportamiento** | Reemplaza el contenido de la ventana actual |
| **Listado** | Se cierra al realizar la selección |

#### 2. Selección en Subventana

| Característica | Descripción |
|----------------|-------------|
| **Comportamiento** | Ejecuta la ficha en subventana |
| **Listado** | Permanece visible y accesible |
| **Ventana** | Se abre en modo subventana |

#### 3. Selección en Ficha Deslizante

| Característica | Descripción |
|----------------|-------------|
| **Tipo de ventana** | Ventana especial con navegación |
| **Navegación automática** | Se posiciona automáticamente en el siguiente registro |
| **Controles disponibles** | Registro anterior y siguiente |
| **Funcionalidad** | Permite realizar operaciones y navegar sin cerrar |

## Funcionalidades de la Ficha Deslizante

### Navegación Automática

| Función | Descripción |
|---------|-------------|
| **Siguiente automático** | Después de realizar una operación, se posiciona en el siguiente registro |
| **Registro anterior** | Opción para navegar al registro anterior |
| **Registro siguiente** | Opción para navegar al registro siguiente |

### Ventajas del Modo Deslizante

| Ventaja | Beneficio |
|---------|----------|
| **Navegación fluida** | Permite trabajar con múltiples registros sin cerrar la ventana |
| **Eficiencia** | Reduce clicks y tiempo de navegación |
| **Contexto preservado** | Mantiene el contexto del listado original |

## Configuración de Selección

### Cambio de Modo

| Acción | Resultado |
|--------|----------|
| **Click en primer icono** | Cambia entre los modos de selección |
| **Indicador visual** | El icono muestra el modo activo |

## Casos de Uso Recomendados

### Por Tipo de Modo

| Modo | Caso de Uso Recomendado |
|------|-------------------------|
| **Ventana actual** | Selección única, trabajo con un solo registro |
| **Subventana** | Consulta rápida manteniendo el listado |
| **Ficha deslizante** | Procesamiento de múltiples registros secuenciales |

## Notas Importantes

> **Modo por defecto:** La selección en ventana actual es el comportamiento estándar del sistema.

> **Persistencia del listado:** Los modos subventana y ficha deslizante mantienen el listado accesible para continuar trabajando.

> **Navegación eficiente:** El modo ficha deslizante es ideal para procesar múltiples registros de manera consecutiva.