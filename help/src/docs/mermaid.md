# Mermaid / UML

## Sintaxis

```
[Mermaid] / [UML] <definición_gráfico>
```

## Descripción

Permite definir gráficas de todo tipo como documentación dentro de los EDF. Utiliza la librería "mermaid-js" para visualizar gráficas definidas mediante markdown. Para visualizar las gráficas, posicione el cursor en la etiqueta [UML] y pulse F2. Para incluir múltiples gráficas, sepárelas con una línea que contenga únicamente el caracter ";".

## Parámetros

| Parámetro | Tipo | Descripción | Requerido |
|-----------|------|-------------|-----------|
| definición_gráfico | string | Código Mermaid que define el tipo y estructura del gráfico a generar | Sí |

## Ejemplos

### Ejemplo de gráfico básico
```
[UML]
graph LR
A [Square Rect] -- Link text --> B((Circle))
A --> C(Round Rect)
B --> D{Rhombus}
C --> D
```

### Ejemplo con múltiples gráficos
```
[UML]
graph LR
A [Square Rect] -- Link text --> B((Circle))
A --> C(Round Rect)
B --> D{Rhombus}
C --> D
;
gitGraph:
commit "Ashish"
branch newbranch
checkout newbranch
commit id:"1111"
commit tag:"test"
checkout main
commit type: HIGHLIGHT
commit
merge newbranch
commit
branch b2
commit
```

### Ejemplo de diagrama de flujo
```
[UML]
flowchart TD
Start([Inicio]) --> Decision{¿Condición?}
Decision -->|Sí| Process[Procesar]
Decision -->|No| End([Fin])
Process --> End
```

### Ejemplo de diagrama de secuencia
```
[UML]
sequenceDiagram
participant Usuario
participant Sistema
participant BaseDatos
Usuario->>Sistema: Solicitud
Sistema->>BaseDatos: Consulta
BaseDatos-->>Sistema: Resultado
Sistema-->>Usuario: Respuesta
```

## Notas importantes

- Use F2 con el cursor en la etiqueta [UML] para visualizar los gráficos
- Separe múltiples gráficos con una línea que contenga solo ";"
- Compatible con todos los tipos de diagramas Mermaid: flowchart, sequence, class, state, etc.