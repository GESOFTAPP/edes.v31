# FS

## Sintaxis

```
{FS}{ Title [ | Style ]
   ...
}
```

## Descripción

La sub-etiqueta `{FS}` es un elemento de agrupación que únicamente puede utilizarse dentro de la etiqueta `[Fields]`. Su función principal es agrupar visualmente los campos comprendidos entre la etiqueta de apertura `{FS}{ Title` y la llave de cierre `}`, aplicando las siguientes características:

- **Marco visual**: Dibuja un recuadro alrededor de los campos agrupados
- **Título descriptivo**: Inserta el título especificado en la esquina superior izquierda del marco
- **Organización lógica**: Permite ubicar campos relacionados dentro de la misma celda visual

Esta funcionalidad es especialmente útil para organizar formularios complejos en secciones temáticas claramente diferenciadas.

## Parámetros

| Parámetro | Descripción |
|-----------|-------------|
| **Title** | Texto que se mostrará en la parte superior izquierda del recuadro como etiqueta identificativa del grupo |
| **Style** | Parámetros internos de estilo para personalizar la apariencia visual del marco |

## Ejemplo de Implementación

```
[Fields]
{FS}{ Superficie y Distribución
    M2.Construidos\M2<br>Construidos | mconstruido  | -,| T | 6 | 42 | M  || # | ,]
    M2.Utiles                        | vutil        | + | T | 6 | 42 | ML ||   | ,]
    M2.Registrados\M2<br>Reg.        | vregistrad   | + | T | 6 | 42 | M  ||   | ,]
    M2.Parcela\M2<br>Parcela         | mparcela     | + | T | 6 | 42 | M  ||   | ,]
    Dormitorios                      | _dormitorios | + |[*]| 4 | 28 | ML ||   | ,]
    Salones                          | salones      | + | T | 2 | 18 | ML ||   | ,]
    Baños                            | banos        | + | T | 2 | 18 | ML ||   | ,]
    Aseos                            | aseos        | + | T | 2 | 18 | ML ||   | ,]
    Trasteros                        | trastero     | + | T | 4 | 28 | ML ||   | ,]
    Garajes                          | garajes      | + | T | 4 | 27 | ML ||   | ,]
}

#(a,mR) {FS}{ Estado
    Llaves      | llaves     | X | C | 1 || ML ||| ,]
    Cartel      | cartel     | X | C | 1 || ML ||| ,]
    Exterior    | exterior   | X | C | 1 || ML ||| ,]
    Ascensor    | ascensor   | X | C | 1 || ML ||| ,]
    Amueblado   | amueblado  | X | C | 1 || ML ||| ,]
    Habitado    | habitado   | X | C | 1 || ML ||| ,]
    Plano       | plano      | X | C | 1 || ML ||| ,]
    Calefacción | calefacion | X | C | 1 || ML ||| ,]
}

#(mR,cR) {FS}{ Datos Operativos
    Propiedad  | cd_propiedad                               | 0 | M | 6 || ML || # | ,]
    Antigüedad | anti                                       | + | T | 3 || ML || # | ,]
    Estado     | cd_estado                                  | 0 | M | 6 || ML || # | ,]
    Plantas    | eplanta                                    | + | T | 3 || ML ||   | ,]
    Portal     | cd_portal                                  | 0 | M | 4 || ML || # | ,]
    Operación  | cd_operacion                               | 0 | M | 4 || ML || # | ,]
    Contrato   | cd_contrato                                | 0 | M | 3 || ML || # | ,]
    Asesor     | cd_gs_user{gs_user,cd_gs_user,user_surname}| 0 | S | 3 || ML || # | ]
}

{FS}{ Costes
    Gastos Comunidad | gcomunidad | + | T | 8 || ML ||| ,]
    PVP              | pvp        | + | T | 8 || M  ||| ,]
    Precio M2.       | pvpm2      | + | T | 8 || ML ||| ,]
}

{FS}{ Notas
    | observaciones | # | A | 1000,112,4 || ML ||| ]
}
```

## Casos de Uso Recomendados

La etiqueta `{FS}` es ideal para:

- **Formularios inmobiliarios**: Agrupar campos por categorías como superficie, características, precios
- **Interfaces complejas**: Organizar múltiples campos relacionados en secciones visuales
- **Mejora de UX**: Facilitar la navegación y comprensión del usuario mediante agrupación lógica
- **Mantenimiento**: Simplificar la gestión de formularios extensos mediante división temática

## Notas Técnicas

- La etiqueta se abre con `{FS}{ Title` (sin llave de cierre inmediata)
- Los campos del grupo se incluyen a continuación
- La etiqueta se cierra con `}` al final del grupo
- Solo funciona dentro del contexto de `[Fields]`
- Los modificadores de posición como `#(a,mR)` pueden aplicarse antes de la etiqueta
- El formateo interno de los campos mantiene la sintaxis estándar de la etiqueta Fields