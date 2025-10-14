# Condición del Campo

## DESCRIPCIÓN
Marca una condición sobre el campo para validar su contenido.

---

## CONDICIONES BÁSICAS

### Símbolos de Validación

| Símbolo | Descripción |
|---------|-------------|
| `#` | **Campo obligatorio** - Se obliga a meter el campo |
| `=` | **Completamente relleno** - Se obliga a rellenarlo completamente |
| `%` | **Vacío o completo** - El campo tendrá que estar vacío o completamente relleno |

### Ejemplos Básicos
```
DNI | dni | DNI | T | 8 | 120 | A | | # |
Teléfono | telefono | N | T | 9 | 100 | M | | = |
Móvil | movil | N | T | 9 | 100 | M | | % |
```

---

## CONDICIONES PERSONALIZADAS

### Sintaxis con Valor del Campo
En las condiciones personalizadas, el símbolo `#` se **sustituye por el valor actual del campo**.

### Ejemplos de Condiciones
```
# > 100          # El valor debe ser mayor que 100
# >= 18          # El valor debe ser mayor o igual a 18
# != 0           # El valor no puede ser cero
# < 1000         # El valor debe ser menor que 1000
```

> ⚠️ **Importante:** Para usar 'or' no se puede utilizar `||`, usar la sintaxis SQL apropiada.

### Ejemplo Práctico
```
Edad | edad | N | T | 3 | 50 | M | | # >= 18 |
Precio | precio | N | T | 8 | 80 | M | | # > 0 |
```

---

## CONDICIONES POR MODO

### Separación con Barra Invertida (`\`)
Se pueden definir **condiciones diferentes** según el modo de operación:

```
CondiciónNormal \ CondiciónParaConsulta
```

### Modos de Aplicación
- **Por defecto**: Actúan sobre modos `a` (alta) y `mR` (modificación con restricciones)
- **Separadas**: Izquierda para `a` y `mR`, derecha para `c`, `m`, `b` o `?`

### Ejemplo
```
Estado | estado | N | T | 1 | 50 | M | | # \ |
```

> **Nota:** Si la etiqueta `[Field]` tiene modo solo de consulta, se tendrá en cuenta la condición sin necesidad del separador `\`.

---

## COMPORTAMIENTO EN LISTADOS

### Centrado Automático
Los tipos de condición `=` y `%` por defecto **centrarán los datos** en sus columnas en los listados.

---

## OTRAS FORMAS DE VALIDACIÓN

### Etiquetas Relacionadas
- `[JSCheck]` - Validación JavaScript
- `[FormCheck]` - Validación en formulario

---

## CONDICIONES PARA CAMPOS PERÍODO

### Sintaxis Básica
```
#/[Desde][,[Hasta][,[MesesSeleccionables]]]
```

### Parámetros de Rango

#### Parámetro "Desde" y "Hasta"
| Formato | Descripción | Ejemplo |
|---------|-------------|---------|
| `""` | Sin límite | `#/,2024-12` |
| `AAAA` | Año específico | `#/2020` |
| `AAAA-MM` | Período específico | `#/2020-01,2024-12` |
| `FunctionUser()` | Función de usuario | `#/PeriodoDesde(),PeriodoHasta()` |

#### Constantes Dinámicas
| Constante | Descripción |
|-----------|-------------|
| `YEAR` | Año actual |
| `MONTH` | Mes actual |

#### Operaciones con Constantes
```
(YEAR-5)-01         # Enero de hace 5 años
(YEAR-5)-(MONTH+2)  # Mes actual +2 de hace 5 años
```

#### Rangos Alternativos
```
(YEAR-5)/2007       # El mayor entre (YEAR-5) y 2007 para "Desde"
                    # El menor entre (YEAR-5) y 2007 para "Hasta"
```

### Meses Seleccionables
Lista de números de meses separados por comas:
```
01,04,07,10         # Solo trimestres
```

### Ejemplos de Períodos
```
[Fields]
Periodo | periodo | P4 | T | 7 || MP || #/2010-03,PeriodoHasta(),Meses() |
Periodo | periodo | P4 | T | 7 || MP || #/(YEAR-10)-01,PeriodoHasta(),Meses() |
Periodo | periodo | P4 | T | 7 || MP || #/Todo() |
Periodo | periodo | P4 | T | 7 || MP || # |
```

---

## CONDICIONES PARA CAMPOS FECHA

### Sintaxis Básica
```
#/[Desde][,[Hasta][,[DíasSeleccionables]]]
```

### Diferencias con Períodos
1. Se añade la constante `DAY`
2. El tercer parámetro son **días de la semana** (0-6, donde 0 = lunes)
3. Las fechas deben ser **completas**

### Ejemplos de Fechas
```
[Fields]
Fecha | fecha2 | F4 | T | 10 || MF || #/YEAR-MONTH-DAY,(YEAR+3)-MONTH-DAY,0,1,2,3,4 |
Fecha | fecha2 | F4 | T | 10 || MF || YEAR-01 |
```

### Días de la Semana
```
0,1,2,3,4          # Lunes a viernes (días laborables)
1,3,5              # Martes, jueves y sábados
```

---

## FUNCIONES DE USUARIO

### Definición en PHPIni
```php
[PHPIni]
?,a,mR ||
function PeriodoHasta(){
    return '2014-02';
}

function Meses(){
    return '1,4,7,10';
}

function Todo(){
    return array('2003', '2015-12', '2,4,6,8,10');
}
```

### Tipos de Retorno
- **String**: Se asigna al parámetro "Desde"
- **Array**: Se obtienen los tres parámetros `[Desde, Hasta, Seleccionables]`

---

## EJEMPLOS COMPLETOS

### 📋 Validaciones Básicas
```
[Fields]
DNI | dni | DNI | T | 8 | 120 | A | | # |
Email | email | N | T | 50 | 200 | M | | = |
Teléfono | telefono | N | T | 9 | 100 | M | | % |
```

### 🔢 Validaciones Numéricas
```
[Fields]
Edad | edad | N | T | 3 | 50 | M | | # >= 18 |
Precio | precio | N | T | 10 | 100 | M | | # > 0 |
Descuento | descuento | N | T | 5 | 60 | M | | # <= 100 |
```

### 📅 Validaciones de Período
```
[Fields]
Ejercicio | ejercicio | P4 | T | 7 || MP || #/(YEAR-5)-01,(YEAR+1)-12,1,4,7,10 |
```

### 📆 Validaciones de Fecha
```
[Fields]
FechaNac | fec_nac | F4 | T | 10 || MF || #/1900-01-01,(YEAR-18)-MONTH-DAY |
FechaReunion | fec_reunion | F4 | T | 10 || MF || #/YEAR-MONTH-DAY,,1,2,3,4,5 |
```

---

## NOTAS IMPORTANTES

> ⚠️ **Modos por defecto:** Las condiciones actúan sobre `a` (alta) y `mR` (modificación con restricciones).

> 🔧 **Separación por modos:** Usar `\` para definir condiciones diferentes según el modo.

> 📊 **Centrado en listados:** Los tipos `=` y `%` centran automáticamente los datos.

> 💡 **Funciones de usuario:** Permiten lógica compleja para rangos dinámicos.

> 📅 **Fechas completas:** En campos fecha, las fechas deben especificarse completamente (YEAR-MONTH-DAY).