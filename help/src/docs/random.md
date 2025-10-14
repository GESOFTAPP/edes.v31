# Random

## Sintaxis

```
[Random] <FieldForm>, <FieldTable>, <Table> [, <FieldForm>=<FieldTable>]
```

## Descripción

Funcionalidad de desarrollo que permite rellenar formularios de forma aleatoria. Cuando el dato debe seleccionarse de otra tabla, esta etiqueta define la relación entre el campo del formulario y la tabla de origen. Especialmente útil para campos que requieren valores válidos existentes en lugar de datos completamente aleatorios.

## Parámetros

| Parámetro | Tipo | Descripción | Requerido |
|-----------|------|-------------|-----------|
| FieldForm | string | Nombre del campo en el formulario que se va a rellenar | Sí |
| FieldTable | string | Nombre del campo en la tabla de origen | Sí |
| Table | string | Nombre de la tabla de donde se obtendrán los valores aleatorios | Sí |
| FieldForm=FieldTable | string | Condición adicional para filtrar registros (opcional) | No |

## Formatos del cuarto parámetro

- `cd_cli=fieldForm` - Referencia a otro campo del formulario
- `cd_cli=63` - Valor numérico constante
- `cd_cli="const1"` - Valor string constante con comillas dobles
- `cd_cli='const2'` - Valor string constante con comillas simples
- `cd_cli="{$SESS::$...}"` - Variable de sesión

## Ejemplos

### Ejemplo básico
```
[Random] cd_postal, cd_postal, postal

[Field]
Código·Postal | cd_postal | CP | T | 5 | | M | | |
```

### Ejemplo con CIF
```
[Random] cif, cif, empre
```

### Ejemplos con condiciones
```
[Random] cif, cif, empre, cd_cli=fieldForm
[Random] cif, cif, empre, cd_cli=63
[Random] cif, cif, empre, cd_cli="const1"
[Random] cif, cif, empre, cd_cli='const2'
[Random] cif, cif, empre, cd_cli="{$SESS::$...}"
```

### Ejemplo completo con contexto
```
[Random] cd_postal, cd_postal, postal
[Random] cd_provincia, cd_provincia, provincias, activo=1

[Field]
Código·Postal | cd_postal | CP | T | 5 | | M | | |
Provincia | cd_provincia | PROV | T | 2 | | M | | |
```

## Notas importantes

- Se utiliza principalmente en entornos de desarrollo para pruebas
- Garantiza que los campos tengan valores válidos existentes en las tablas relacionadas
- El cuarto parámetro permite filtrar qué registros aleatorios se pueden seleccionar
- Especialmente útil para campos con restricciones de integridad referencial