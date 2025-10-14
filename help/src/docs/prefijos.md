# Documentación del Árbol de Opciones - Prefijos y Configuración

## Descripción General

El árbol de opciones permite definir acciones mediante prefijos que determinan cómo se ejecutan las opciones. Existen dos formas de definir las acciones: usando prefijos globales o definiendo todo en cada opción individual.

## Formas de Definir Acciones

### Método 1: Prefijo Global (Recomendado)

```
Autonomias      | :auto
   Alta         | #a:
   Baja         | #b:
   Consulta     | #c:
   Modificación | #m:
   Listado      | =l:
```

### Método 2: Definición Individual

```
Autonomias
   Alta         | #a:auto
   Baja         | #b:auto
   Consulta     | #c:auto
   Modificación | #m:auto
   Listado      | =l:auto
```

## Prefijos de Comportamiento

### Prefijos Especiales

| Prefijo | Descripción | Ejemplo | Comportamiento |
|---------|-------------|---------|----------------|
| `.` | Opción sin implantar | `.Alta` | Muestra "Opción sin implantar" |
| `W` | Ventana maximizada | `W#a:auto` | Se abre maximizada con Ctrl+Click |
| `w` | Forzar área de trabajo | `w#a:auto` | Se abre en IWORK con Ctrl+Click |
| `2` | Ejecución en 2º plano | `2#a:auto` | Nueva ventana en segundo plano |
| `3` | Ejecución con HTTP | `3#a:auto` | Nueva ventana con "http:" |
| `?` | Confirmación simple | `?#a:auto` | Pregunta antes de ejecutar |
| `?n` | Confirmación con contexto | `?2#a:auto` | Muestra n-1 carpetas padre |
| `m` | Ocultar columna izquierda | `m#a:auto` | Ejecuta eAutoMenu(1) |
| `M` | Ocultar todo el desktop | `M#a:auto` | Ejecuta eAutoMenu(2) |
| `(` | Función JavaScript | `(funcionJS` | Ejecuta función cargada en desktop |

### Prefijos con Parámetros

| Prefijo | Formato | Descripción | Ejemplo |
|---------|---------|-------------|---------|
| `{}` | `{texto}` | Solicita datos con prompt | `#a:{Nombre de tabla:}.edf` |
| `-` | `-` | Línea divisoria | `-` |
| `-LABEL` | `-TEXTO` | Título de grupo | `-CONFIGURACIÓN` |
| `+` | `+carpeta` | Contenido visible | `+PRINCIPALES` |
| `??` | `??condición` | Condición PHP | `??$_User==10` |

## Modos de Ejecución

### Modos Principales

| Modo | Descripción | Uso Típico |
|------|-------------|------------|
| `F` | Ficha | Formularios de datos |
| `L` | Listado | Mostrar listas |
| `G` | Grupo de Fichas | Múltiples formularios |
| `E` | Ejecutar con motor | Páginas procesadas |
| `J` | Ejecutar sin motor | Páginas estáticas |
| `B` | Ejecutar en background | Procesos en segundo plano |
| `[` | Nueva ventana | Ventanas emergentes |

### Modos Especializados

| Modo | Descripción | Parámetros |
|------|-------------|------------|
| `X` | Hoja de cálculo | - |
| `H` | Editor HTML | - |
| `R` | Read Fichero | - |
| `D` | Descargar Fichero | FILE (opcional) |
| `V` | Visualizar HTML/TXT | - |
| `S` | SubSelect | - |
| `T` | Tabla vinculada | - |

## Parámetros de Ventana

### Configuración de Ventanas Nuevas

| Parámetro | Símbolo | Descripción |
|-----------|---------|-------------|
| Redimensionable | `R` | Ventana redimensionable |
| Barras de scroll | `S` | Barras de desplazamiento |
| Barra de herramientas | `T` | Toolbar visible |
| Título | `-` | Mostrar título |
| Barra estándar | `>` | Barra estándar |
| Título y Status | `=` | Título y barra de estado |
| Ventana por defecto | `*` | Configuración predeterminada |
| Pantalla completa | `#` | FullScreen |

### Sintaxis de Ventana

```
[ {RST} {Ancho,Alto} ] NomVentana, DirURL
```

**Ejemplo:**
```
[ {RST} {800,600} ] MiVentana, pagina.html
```

## Variables de Sustitución

### Variables Especiales

| Variable | Descripción | Ejemplo |
|----------|-------------|---------|
| `this` | Serial de la tabla gs_opcion | `#a:this` |
| `parent` | Serial del padre de la opción | `#a:parent` |
| `#user#` | Número de usuario | `#a:datos_#user#` |
| `#node#` | Número de nodo | `#a:config_#node#` |

## Opciones Condicionales

### Sintaxis de Condiciones

```
? condición_PHP ? Label | Acción
```

### Ejemplos de Condiciones

| Condición | Descripción | Ejemplo |
|-----------|-------------|---------|
| `$_User==10` | Usuario específico | `? $_User==10 ? Baja | #b:` |
| `$_aUser['campo']=='valor'` | Campo de usuario | `? $_aUser['admin']=='S' ? Alta | #a:` |
| `$_Node==1` | Nodo específico | `? $_Node==1 ? Config | #c:` |

## Columna Alias

### Configuración de Desarrollo

| Alias | Descripción | Uso |
|-------|-------------|-----|
| `development` | Opciones de desarrollo | Visible solo en modo desarrollador |
| `admin` | Opciones administrativas | Solo para administradores |
| `test` | Opciones de prueba | Entorno de testing |

## Modo Alternativo

### Sintaxis

```
Modo_Aparente,Modo_Real:archivo
```

### Ejemplo

```
Fa,l:autonomia.edf
```

- **Modo aparente**: Alta (a)
- **Modo real**: Listado (l)
- **Útil para**: Formularios que envían a listados

## Prefijo Especial - Servidor Remoto

### Configuración

```php
$_REMOTESRV = 'http://999.999.999.999';
$_REMOTESRV = 'http://999.999.999.999:80';
```

### Archivo de Permisos

**Ubicación:** `/_datos/config/{$REMOTE_ADDR}.remote`

```
$_Node = ...N° del Nodo...
Variable de Sesión = Valor
.....
Script | Modo | ListaUsuarios | ListaNodos
```

## Gestión de Iconos

### Tipos de Iconos

| Tipo | Sufijo | Estados | Descripción |
|------|--------|---------|-------------|
| Estándar | `_0.` | Cerrado `_0.`, Abierto `_1.` | Iconos con dos estados |
| Flotante | `_of_` | Estado 1 `_2.`, Estado 2 `_3.` | Iconos móviles |

### Interacción con Iconos

| Acción | Comportamiento |
|--------|----------------|
| Click derecho | Activar/desactivar icono flotante |
| Arrastrar (botón derecho) | Mover icono flotante |

## Ejemplos Prácticos

### Ventana de Visualización

```javascript
top.eCallSrv( window, 'edes.php?V:htm/ejemplo.htm&TITLE='+_Celda.innerHTML+'&STYLE='+escape('color:red;background:blue;') );
```

### Parámetros Opcionales

| Parámetro | Descripción | Formato |
|-----------|-------------|---------|
| `TITLE` | Título de la ventana | Texto |
| `WIDTH` | Ancho | Píxeles o % |
| `HEIGHT` | Alto | Píxeles o % |
| `LEFT` | Posición izquierda | Píxeles o % |
| `TOP` | Posición superior | Píxeles o % |
| `CSS` | Hoja de estilo | Archivo CSS |
| `STYLE` | Estilos inline | CSS inline |

### Editor HTML

```javascript
function uEditCuotaServicioHTM(){
    eSWOpen( window, 'edes.php?iE:pagina.htm&T=H&D=P&TRACE=-1', 'Editor HTML: Titulo', true, 0 );
}
```

### Visualización de Imágenes

```javascript
// Ventana normal
top.eSWOpen( window, "edes.php?IMG:[NombreObjeto]", "TITULO" );

// Ventana maximizada
top.eSWOpen( window, "edes.php?IMG:[NombreObjeto]&MAXIMIZE=1", "TITULO", true, 0 );
```

## Ejecución en Background

### Información del Servidor

```
edes.php?B:script.php&phpinfo=1
```

Genera archivo: `/_tmp/_background.info`

## Funciones Personalizadas

### eAlterMenu

```javascript
function eAlterMenu( ArrayMenu ) {
    // Modificar el array de menús
    return ArrayMenu;
}
```

## Edición de Archivos INI

### URLs de Acceso

| Modo | URL | Descripción |
|------|-----|-------------|
| Consulta | `edes.php?FcR:[Fichero.ini]` | Solo lectura |
| Modificación | `edes.php?FmR:[Fichero.ini]` | Edición completa |

### Tipos de Campo Automáticos

| Valor | Tipo de Campo | Ejemplo |
|-------|---------------|---------|
| Texto | Input text | `variable = "texto"` |
| Numérico | Input number | `variable = 123` |
| Decimal | Input number (step) | `variable = 12.34` |
| Checkbox | Checkbox | `variable = true` |
| Select | Select | `variable = "opcion"` |

### Modificadores de Label

| Prefijo | Efecto | Ejemplo |
|---------|--------|---------|
| `-` | Solo consulta | `variable = valor; -Solo lectura` |
| `*` | Campo oculto | `variable = valor; *Campo oculto` |
| `[` | Select personalizado | `variable = valor; [val1,text1;val2,text2]` |
| `#` | Selector de color | `variable = #FF0000; Color de fondo` |

### Comandos PHP Reconocidos

| Comando | Descripción |
|---------|-------------|
| `if` | Condicional |
| `else` | Alternativa |
| `elseif` | Condicional múltiple |
| `switch` | Selector múltiple |
| `case` | Caso de switch |
| `default` | Caso por defecto |

### Archivos Complementarios

| Archivo | Extensión | Función |
|---------|-----------|---------|
| Configuración | `.ini` | Variables de configuración |
| JavaScript | `.js` | Código JavaScript (como JSEnd) |

## Notas Importantes

- **Rentabilidad**: Usar prefijos globales cuando sea posible
- **Consistencia**: Mantener nomenclatura coherente
- **Seguridad**: Validar condiciones PHP cuidadosamente
- **Compatibilidad**: Verificar funcionamiento en diferentes navegadores
- **Documentación**: Comentar opciones complejas para futuras modificaciones