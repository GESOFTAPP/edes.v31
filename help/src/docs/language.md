# Language

## Sintaxis

```
[Language] Idioma1 [,Idioma2,...] | VariablesPublicas | Tron=false
   VarLNG  | TextoIdioma1 [ | TextoIdioma2 | ... ] [ ~ Comentario ]
   ...
```

## Descripción

Esta etiqueta debe definirse la primera y se utiliza para tener la aplicación en más de un idioma. Permite definir textos en múltiples idiomas y cambiar entre ellos dinámicamente.

**Uso de variables:** En el DF donde se quiera mostrar el texto traducido se pondrá `@VarLNG@`. Las variables tienen el mismo nombre que la primera columna con el carácter "@" antes y después.

**Archivo independiente:** Esta etiqueta se puede definir en un fichero independiente que debe llamarse igual que el script añadiendo ".lng". Si este fichero existe se cargará automáticamente.

**En grupos de fichas:** Se definirá en el archivo "gdf".

## Parámetros

| Parámetro | Tipo | Descripción | Requerido | Valor por defecto |
|-----------|------|-------------|-----------|-------------------|
| Idioma1,Idioma2,... | String | Lista de códigos de idiomas separados por comas | Sí | - |
| VariablesPublicas | String | Configuración de variables públicas | No | - |
| Tron | Boolean | Activar/desactivar modo de depuración | No | false |
| VarLNG | String | Nombre de la variable de idioma | Sí | - |
| TextoIdioma1,TextoIdioma2,... | String | Textos en cada idioma | Sí | - |
| Comentario | String | Comentario opcional precedido por ~ | No | - |

## Variables del sistema

| Variable | Descripción |
|----------|-------------|
| `@LNG@` | Extensión del lenguaje actual |
| `@LNGFILE@` | Barra baja y extensión del lenguaje |
| `$_Lng[$Cod]` | Array con textos por código |
| `$_LngPublic['@'.$Cod.'@']` | Variables públicas de idioma |
| `$_LanguageTron` | Variable de configuración para depuración |

## Funciones relacionadas

- `eLng()` - Función para obtener texto traducido
- `eLngLoad()` - Función para cargar idiomas
- `gsTranslater` - Traductor del sistema

## Variables genéricas predefinidas

El sistema incluye estas variables genéricas en el top:
- `_xMESSAGE` - Mensaje
- `_xCONFIRM` - Confirmar
- `_xWARNING` - Advertencia
- `_xERROR` - Error
- `_xACCEPT` - Aceptar
- `_xYES` - Sí
- `_xNO` - No
- `_xCANCEL` - Cancelar

## Ejemplos

### Ejemplo básico - Definición de idiomas
```
[Language] es,en,fr | public | Tron=false
   SALUDO     | Hola | Hello | Bonjour ~ Saludo inicial
   DESPEDIDA  | Adiós | Goodbye | Au revoir ~ Despedida
   GUARDAR    | Guardar | Save | Enregistrer
   CANCELAR   | Cancelar | Cancel | Annuler
```

### Uso en el código
```html
<button>@GUARDAR@</button>
<span>@SALUDO@, usuario</span>
```

### Archivo de idioma independiente
**Archivo: miform.lng**
```
[Language] es,en | public | Tron=false
   TITULO     | Mi Formulario | My Form
   NOMBRE     | Nombre | Name
   APELLIDO   | Apellido | Surname
   EDAD       | Edad | Age
```

### Configuración en sql.ini
```ini
[Language]
_LanguageTron=~
```

### Uso con variables PROMP para traductor
```php
$_PROMP = "Texto a traducir";
$resultado = gsTranslater($_PROMP);
```

### Ejemplo con comentarios detallados
```
[Language] es,en,de | public | Tron=true
   BTN_NUEVO    | Nuevo | New | Neu ~ Botón para crear nuevo registro
   BTN_EDITAR   | Editar | Edit | Bearbeiten ~ Botón para editar registro
   BTN_ELIMINAR | Eliminar | Delete | Löschen ~ Botón para eliminar registro
   MSG_CONFIRM  | ¿Está seguro? | Are you sure? | Sind Sie sicher? ~ Mensaje de confirmación
```

### Uso en grupos de fichas (gdf)
```
[Language] es,en | public
   GRP_DATOS    | Datos Generales | General Data
   GRP_CONTACTO | Información de Contacto | Contact Information
```

## Configuración avanzada

### Depuración de traducciones
Para activar el modo de depuración que muestra qué textos han sido traducidos:
```ini
[sql.ini]
[Language]
_LanguageTron=~
```

### Variables recomendadas para traductor
- `_PROMP` / `$_PROMP` - Para cadenas simples
- `_PROMP2` / `$_PROMP2` - Para cadenas alternativas
- Usar comillas para delimitar cadenas al pasar a funciones