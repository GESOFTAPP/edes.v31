# Documentación gsShell

## Descripción General

gsShell es una interfaz de línea de comandos web que permite gestionar archivos y directorios en el servidor de forma similar a un terminal Unix/Linux. Proporciona funcionalidades de navegación, transferencia de archivos y visualización de contenido.

## Navegación e Interacción

### Navegación por Directorios

| Acción | Función |
|--------|---------|
| **Clic en directorio (barra superior)** | - Navegar al directorio seleccionado<br>- Si es el directorio actual: ejecuta `ls -l` |
| **Marcar subdirectorio** | Entrar en el subdirectorio seleccionado |
| **Teclear nombre subdirectorio** | Navegar al subdirectorio sin necesidad de `cd` |
| **Comando `cd`** | Bajar un nivel de subdirectorios |
| **Comando `cd..`** | Subir un nivel (estilo MS-DOS, sin espacio) |

### Gestión de Archivos

| Acción | Función |
|--------|---------|
| **Marcar nombre de archivo** | Añadir nombre + espacio a la línea de comandos |
| **Teclear nombre de archivo** | Visualizar el contenido del archivo |
| **Botón "Examinar..."** | Subir archivos al servidor |
| **Comando `cp NomFile`** | Descargar archivos del servidor |

## Comandos Principales

### Comandos de Transferencia

| Comando | Sintaxis | Descripción |
|---------|----------|-------------|
| **ftpput** | `ftpput archivo/patrón` | Subir archivos por FTP |
| **ftpget** | `ftpget archivo/patrón` | Descargar archivos por FTP |

**Parámetros soportados:**
- Un fichero individual
- Lista de ficheros separados por coma
- Patrón con comodines `*` y `?`

### Comandos de Visualización

#### Comando `cat`

| Parámetro | Función |
|-----------|---------|
| **Solo archivo** | Muestra contenido (máx. 250KB por defecto) |
| **Archivo + longitud** | Muestra longitud especificada<br>- Valor positivo: desde el inicio<br>- Valor negativo: desde el final |
| **Archivo + inicio + longitud** | Muestra contenido desde posición específica |

**Sintaxis:**
```bash
cat archivo                    # Mostrar archivo completo
cat archivo 1000              # Mostrar primeros 1000 bytes
cat archivo -1000             # Mostrar últimos 1000 bytes
cat archivo 500 1000          # Mostrar 1000 bytes desde posición 500
```

#### Comando `hex`

| Parámetro | Función |
|-----------|---------|
| **Solo archivo** | Dump hexadecimal (máx. 50KB = 250KB en pantalla) |
| **Archivo + longitud** | Longitud específica a visualizar<br>- Valor positivo: desde el principio<br>- Valor negativo: desde el final |

**Sintaxis:**
```bash
hex archivo                   # Dump hexadecimal completo
hex archivo 1024             # Primeros 1024 bytes en hex
hex archivo -1024            # Últimos 1024 bytes en hex
```

#### Comando `recursive`

| Sintaxis | Función |
|----------|---------|
| `recursive rm patrón` | Borrar archivos recursivamente |
| `recursive ls patrón` | Listar archivos recursivamente |

#### Comando `find`

| Parámetro | Función |
|-----------|---------|
| **Patrón de archivo** | Buscar archivos que coincidan con el patrón |
| **Soporte comodines** | Usar `*` y `?` en patrones de búsqueda |
| **Búsqueda recursiva** | Busca en directorio actual y subdirectorios |

**Sintaxis y Ejemplos:**
```bash
find *.txt                    # Buscar todos los archivos .txt
find config*                  # Buscar archivos que empiecen con "config"
find *log*                    # Buscar archivos que contengan "log"
find *.php                    # Buscar todos los archivos PHP
find test?.txt                # Buscar test1.txt, test2.txt, etc.
```

### Comando de Ayuda

| Comando | Función |
|---------|---------|
| **man** | Ver descripción de opciones y comandos |

## Características Técnicas

### Límites por Defecto

| Comando | Límite |
|---------|--------|
| **cat** | 250KB de archivo |
| **hex** | 50KB de archivo (250KB en pantalla) |

### Patrones Soportados

| Comodín | Función |
|---------|---------|
| **\*** | Coincide con cualquier secuencia de caracteres |
| **?** | Coincide con un solo carácter |

## Flujo de Trabajo Típico

### Navegación

1. **Visualizar directorio actual**: Clic en directorio actual (barra superior)
2. **Cambiar directorio**: Marcar subdirectorio o teclear nombre
3. **Subir nivel**: Usar `cd` o `cd..`
4. **Explorar contenido**: Usar `ls -l` o navegar por interfaz

### Transferencia de Archivos

1. **Subir archivos**: 
   - Usar botón "Examinar..." para seleccionar archivos locales
   - Usar `ftpput` para transferencias por FTP
2. **Descargar archivos**: 
   - Usar `cp NomFile` para descarga directa
   - Usar `ftpget` para transferencias por FTP

### Visualización de Contenido

1. **Archivos de texto**: Teclear nombre o usar `cat`
2. **Archivos binarios**: Usar `hex` para dump hexadecimal
3. **Búsqueda recursiva**: Usar `recursive ls patrón`

## Ventajas y Beneficios

- ✅ Interfaz web familiar para usuarios de terminal
- ✅ Navegación intuitiva con clics y comandos
- ✅ Transferencia bidireccional de archivos
- ✅ Visualización flexible de contenido
- ✅ Soporte para patrones y comodines
- ✅ Comandos recursivos para operaciones masivas
- ✅ Integración con protocolos FTP