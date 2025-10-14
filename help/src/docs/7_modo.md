# Modo

## DESCRIPCIÓN
Marca el modo de trabajo con el campo.

---

## MODOS BÁSICOS DE EDICIÓN

| Modo | Descripción |
|------|-------------|
| `A` | El campo será **solo modificable en Altas** |
| `M` | El campo será **modificable en Altas y en Modificaciones** |
| `Q` | El campo será **editable al preguntar** por una ficha en los modos `[c,m,b,q,s]` |
| `L` | El campo **no se mostrará en los listados** |
| `-` | El campo se mostrará, pero **no será editable**, ni siquiera en altas |

---

## COMBINACIONES CON MODO CONSULTA (Q)

| Modo | Descripción |
|------|-------------|
| `-Q` | Solo al preguntar irá el campo en **modo no editable**, en el resto de modos no irá |
| `Q-` | Irá **al preguntar** y como **no editable** en el resto de modos |
| `-Q-` | Irá como **no editable en todos los modos** |

---

## MODOS DE CAMPO OCULTO (*)

| Modo | Descripción |
|------|-------------|
| `*` | El campo será **oculto** |
| `*Q` | Solo al preguntar irá el campo en **modo oculto**, en el resto de modos no irá |
| `Q*` | Irá **al preguntar** y **oculto** en el resto de modos |
| `*Q*` | Irá tanto **al preguntar** como en el resto de campos **oculto** |

---

## AYUDAS ADICIONALES AL CAMPO

### 📋 Operaciones de Portapapeles
| Ayuda | Descripción | Modos |
|-------|-------------|-------|
| `c` | **Copy** - Copiar | `[b,c,m,s]` |
| `p` | **Paste** - Pegar | `[b,c,m,s]` |
| `k` | **Paste del ClipBoard** | |

> **Nota:** Si `c` va solo en un listado, indica campo que se puede condicionar y no viene en la lista de campos que viajan al cliente.

### 🔍 Búsquedas
| Ayuda | Descripción | Modos |
|-------|-------------|-------|
| `B` | **Buscar en formulario** con condiciones (usa `NomCampo.fdf`) - Añade lupa | `[a,mR]` |
| `b` | **Buscar mediante listado** (usa `NomCampo.ldf`) - Añade lupa | `[a,mR]` |

> ⚠️ **Importante:** Las opciones `B` y `b` son **excluyentes**.

### 📅 Fechas y Períodos
| Ayuda | Descripción | Modos |
|-------|-------------|-------|
| `F` | **Fechas** - Ayuda de calendario | `[a,mR]` |
| `P` | **Períodos** - Ayuda de calendario de períodos | |

### 📁 Documentos y Archivos
| Ayuda | Descripción | Modos |
|-------|-------------|-------|
| `D` | **Documentos/Archivos** - Muestra iconos para ver documento del PC y Server | `[a,mR,cR,bR]` |
| `U` | **Unlink** - Borra fichero del servidor | `[a,mR]` |
| `C` | **Cambiar** - Modificar documentos/archivos en el servidor | `[a,mR]` |

> **Nota especial para `D`:** En campos que empiezan por `dct_` (dictionary) saldrá una lupa para seleccionar palabras claves.

> ⚠️ **Importante para `U`:** El campo no puede estar como dato obligatorio, si no, no saldrá el icono de borrar.

### 🌐 Web y Comunicaciones
| Ayuda | Descripción | Modos |
|-------|-------------|-------|
| `W` | **Web** - Ir a la página web | `[a,mR,cR]` |
| `E` | **Email** | `[cR]` |

> **Nota para `W`:** Si en el nombre del campo aparece "facebook" o "twitter" mostrará los iconos de estas redes sociales.

### 🔧 Controles Especiales
| Ayuda | Descripción | Modos |
|-------|-------------|-------|
| `i` | **Ver dato interno** del select (minúscula) | `[*]` |
| `I` | **Editar dato interno** del select (mayúscula) | `[*]` |
| `d` | **Fijar valor por defecto** | `[a,b,c,m,s,q,l]` |
| `a` | En campos no editables en modo modificar se **actualizará el valor por defecto** | |

### 🎚️ Controles Deslizantes y Texto
| Ayuda | Descripción |
|-------|-------------|
| `S` | **Mayúscula** - Control deslizante editable (números/períodos) o corrector ortográfico (texto) |
| `s` | **Minúscula** - Control deslizante no editable (números/períodos) o corrector ortográfico (texto) |

> 💡 **Tip:** Con la rueda del ratón se puede cambiar el valor al estar sobre la imagen.

### 🔮 Funcionalidades Futuras (`S`)
1. En campos **textarea**: corrector ortográfico + gramatical (con Ctrl+click)
2. En campos **file**: scanner para capturar imágenes

### 🔄 Otras Funciones
| Ayuda | Descripción | Modos |
|-------|-------------|-------|
| `q` | **Filtrar por múltiples valores** en modo consulta | `[c,b,m]` |
| `O` | **Owner** - Descargar y ejecutar fichero en directorio local | |

---

## COMPORTAMIENTOS EN LISTADOS

### Condiciones Especiales
| Valor | Comportamiento |
|-------|----------------|
| `c` | Pondrá el **label indicado** (para campos condicionados no en listado ni en DDBB "gs_campo") |
| `h` | **Ocultará el campo** en la lista de condiciones |

---

## MODOS ALTERNATIVOS

Se pueden definir **tipos alternativos de edición** usando listas de modos separados por coma y punto y coma:

### Sintaxis
```
modo1,modo2=TIPO; modo3=TIPO; *=TIPO_DEFAULT
```

### Ejemplos
```
a=*; *=-
```
```
a,b,c,m=M; mR=A; *=M
```

---

## FUNCIONES ESPECIALES

### 🔧 Función de Valor por Defecto (`d`)
Llama a la función JavaScript `eDefaultShow(NomField, ValueField, InnerTextField)` ubicada en `desktop_user.ini` para mostrar el valor por defecto en el desktop.

### 📁 Agrupación de Iconos en Archivos
En campos de tipo fichero se pueden **agrupar los iconos secundarios** mediante el símbolo `#`, quedando visible:
- Icono de **seleccionar fichero**
- **Submenú** con el resto de opciones

---

## EJEMPLOS PRÁCTICOS

```
# Campo solo en altas
DNI | dni | DNI | T | 8 | 120 | A | | # |

# Campo con búsqueda y calendario
FechaNac | fec_nac | N | T | 10 | 100 | MFb | | |

# Campo oculto al preguntar
Password | pass | * | T | 20 | 150 | *Q | | |

# Campo con múltiples ayudas
Documento | doc | D | T | 100 | 200 | MDUC# | | |
```

---

## NOTAS IMPORTANTES

> ⚠️ **Compatibilidad:** Algunas ayudas son excluyentes entre sí (como `B` y `b`).

> 💡 **Configuración:** Algunas funciones requieren configuración adicional en archivos `.ini` o scripts específicos.

> 🔧 **Variables:** La función `O` utiliza la variable `_working_directory` para la descarga local.