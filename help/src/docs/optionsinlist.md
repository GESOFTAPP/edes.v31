# OptionsInList

## Sintaxis

```
[OptionsInList] Opciones [ | Icon | userFunction | label ... ] [ | Condition/Funcion ]
```

## Descripción

Ejecuta un listado con opciones de mantenimiento. La opción se ejecutará como `edes.php?Lcl:..`, donde el modo de ejecución indica la opción por defecto a ejecutar en el listado, también puede ser "ml" o "bl". En los scripts "gdf" se pondrá la etiqueta en el script de la primera solapa, que es de la que se genera el listado.

Si se quiere poder filtrar al entrar se ejecutará con `edes.php?Lgl:..` y activará la condición si existe.

La etiqueta `[OptionsInList]` anula a `[FormAction]`. Al ejecutar listados se activa una variable para saber el modo en que se ejecuta dicha etiqueta:

- `$_OptionsInListMode`
  - `LR....`: LastRecords
  - `NLR-NR`: NoLastRecords-NoRecords
  - `NLR-L.`: NoLastRecords-List
  - `NLR-AF`: NoLastRecords-AddFilter

## Parámetros

| Parámetro | Descripción |
|-----------|-------------|
| **Opciones** | Define las opciones disponibles. Si se pone "*" indica que tiene las opciones que tenga el usuario en su árbol. Si se definen opciones específicas "abcm" todos los usuarios tendrán esos modos. Se puede combinar "*" con cualquier opción y desactivarla poniendo un signo menos delante "*-b" (todas las opciones menos la de borrar). La coma "," delimitará mediante una barra vertical las opciones. |
| **Icon** | Icono asociado a la opción de usuario |
| **userFunction** | Función de usuario a ejecutar. Si se antepone ">" se ejecuta directamente y envía el objeto "this" |
| **label** | Etiqueta descriptiva de la opción |
| **Condition/Funcion** | Puede ir en el 2º o 5º parámetro según si tiene opción de usuario o no. Puede ser texto o el nombre de una función terminada con "()" que devuelva la cadena del where |

### Opciones disponibles:
- **a**: Añadir
- **b**: Borrar  
- **c**: Consultar
- **m**: Modificar
- **f**: Filter (filtro)
- **u**: Últimos registros gestionados
- **o**: Opción definida por el usuario (requiere Icon, userFunction y label)

## Ejemplos

### Ejemplo 1: Opciones básicas con comodín
```
[OptionsInList] *
```
Establece las opciones de "abcmfou", donde "f" es Filter, "u" son últimos registros gestionados y "o" representa una opción definida por el usuario.

### Ejemplo 2: Opciones específicas
```
[OptionsInList] mc
```
Solo se permiten las opciones de Modificar y Consultar.

### Ejemplo 3: Opción de usuario simple
```
[OptionsInList] bcmafou | email | uFunction | Mandando email
[JSIni] *
function uFunction(oTR, pk1 [,...]){
    // oTR: objeto TR pulsado
    // pk1: primer valor de la etiqueta [DBIndex]
}
```
La "o" define una opción del usuario con icono "email", función "uFunction" y etiqueta "Mandando email".

### Ejemplo 4: Múltiples opciones de usuario con condición
```
[OptionsInList] fu,abcm,o
    | &#281; | EditarPDF       | Editar
    | print  | ImprimirPDF     | Imprimir
    | copy   | DuplicarImpreso | Duplicar Impreso
    | &#230; | >TipoDeImpresos | Tipo Impresos
    | &#123; | SiguienteHoja   | Ver impreso
    | &#124; | SiguienteHoja2  | Siguiente impreso | cd_gs_form_type={$cd_gs_form_type}
```
Define múltiples opciones de usuario con diferentes iconos, funciones y condiciones. La función `TipoDeImpresos` se ejecuta directamente (prefijo ">") y la última opción incluye una condición.