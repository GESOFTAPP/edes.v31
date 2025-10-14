# SelectColLabel

## Sintaxis

```
[SelectColLabel] CampoPadre, CampoHijo | AddField | Valor
```

## Descripción

Define la columna del select a visualizar en función de una condición. Permite tener un select con dos columnas de texto, mostrando una u otra según el valor del campo padre.

El uso habitual es mostrar textos diferentes en un select según el campo "sexo". Funciona como un `[RelationFields]` entre dos campos que condiciona la columna del select hijo a visualizar.

## Parámetros

| Parámetro | Descripción | Ejemplo |
|-----------|-------------|---------|
| `CampoPadre` | Campo que controla la condición | `sexo` |
| `CampoHijo` | Campo select que cambia su visualización | `cd_profe` |
| `AddField` | Campo adicional a mostrar cuando se cumple la condición | `nm_profe_m` |
| `Valor` | Valor del campo padre que activa el campo adicional | `M` |

## Funcionamiento

1. **Campo Padre**: Controla qué columna mostrar
2. **Campo Hijo**: Select con múltiples columnas de texto
3. **Condición**: Si `CampoPadre = Valor`, muestra `AddField`
4. **Por Defecto**: Si no se cumple la condición, muestra la columna estándar

## Ejemplo Práctico

### Configuración Completa

```
[AddOption] * | sexo | ,; H,Hombre; M,Mujer
[SelectColLabel] sexo,cd_profe | nm_profe_m | M
```

### Definición de Campos

```
[Fields]
     Sexo      | sexo                                     | 0 | SV |  6 || M |||
     Profesión | cd_profe{profe_sexo,cd_profe,nm_profe_h} | 0 | S  | 30 || M |||
```

### Explicación del Ejemplo

**Estructura de Datos:**
- Campo `sexo`: Valores H (Hombre) o M (Mujer)
- Campo `cd_profe`: Select con columnas:
  - `cd_profe`: Código de profesión
  - `nm_profe_h`: Nombre de profesión en masculino
  - `nm_profe_m`: Nombre de profesión en femenino

**Lógica:**
- **Cuando `sexo = "M"`**: Se muestra la columna `nm_profe_m` (femenino)
- **Cuando `sexo ≠ "M"`**: Se muestra la columna `nm_profe_h` (masculino)

### Ejemplo Visual

| Sexo Seleccionado | Profesión Mostrada |
|-------------------|-------------------|
| Hombre (H) | Doctor, Ingeniero, Profesor |
| Mujer (M) | Doctora, Ingeniera, Profesora |

## Casos de Uso

### 1. Profesiones por Género
```
[SelectColLabel] sexo,profesion | nom_femenino | F
```

### 2. Títulos Académicos
```
[SelectColLabel] genero,titulo | titulo_fem | Femenino
```

### 3. Cargos Laborales
```
[SelectColLabel] sexo,cargo | cargo_mujer | M
```

### 4. Nacionalidades
```
[SelectColLabel] genero,nacionalidad | gentilicio_fem | F
```

## Notas Importantes

- ✅ **Relación**: Funciona como `RelationFields` condicionado
- ✅ **Flexibilidad**: Permite adaptar textos según contexto
- ✅ **Usabilidad**: Mejora la experiencia del usuario
- ⚠️ **Dependencia**: El campo padre debe tener el valor exacto especificado
- ⚠️ **Columnas**: El campo hijo debe tener al menos dos columnas de texto definidas

## Beneficios

1. **Inclusión de Género**: Permite formularios más inclusivos
2. **Localización**: Facilita la adaptación a diferentes idiomas
3. **Contexto**: Muestra información relevante según la situación
4. **Mantenimiento**: Centraliza la lógica de visualización condicional