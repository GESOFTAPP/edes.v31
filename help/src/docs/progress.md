# Progress

## SINTAXIS
```
[Progress] ListaDeCampos | Titulo [ | ListaDeDetalle ]
```

## DESCRIPCIÓN
Se muestra una barra de progreso, el cálculo del tiempo es estimado con relación al último cálculo.

## PARÁMETROS

| Parámetro | Descripción |
|-----------|-------------|
| **ListaDeCampos** | Puede tener 3 valores:<br>• **\***: Calcula según el contenido de todos los campos<br>• **Lista de campos separados por coma**: Solo calcula sobre los campos indicados<br>• **Vacío**: Sin especificar campos |
| **Titulo** | Título de la barra de progreso |
| **ListaDeDetalle** | Lista de textos separados por coma que repartirá el tiempo del Progress entre todas las entradas |

## EJEMPLO
```
[Progress] NivelDetalle | CALCULANDO INFORME | Proceso 1, Proceso 2, Proceso 3, Proceso 4, Proceso 5, Proceso 6, Proceso 7
```

Se guardará un cálculo de lo que tarda el informe en función del nivel de detalle.