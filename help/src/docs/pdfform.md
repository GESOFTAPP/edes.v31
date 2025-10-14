# PDFForm

## Sintaxis

```
[PDFForm]
```

## Descripción

Genera la respuesta de una consulta en Fichas en formato PDF. El nombre del archivo que generará el PDF se define en la variable global `_gs_formato_`.

## Parámetros

| Parámetro | Tipo | Descripción | Requerido |
|-----------|------|-------------|-----------|
| Ninguno | - | Este comando no requiere parámetros directos | - |

### Variables relacionadas

| Variable | Descripción |
|----------|-------------|
| `_gs_formato_` | Variable global que define el nombre del archivo PDF a generar |

## Ejemplos

### Ejemplo 1: Configuración de opciones de orden
```
[PDFForm]
[AddOption] c | *ORDEN* | refe,Nº Referencia; A.cd_prov+A.cd_muni+A.cd_distrito+A.cd_barrio+A.nombre,Distrito y Barrio; pvp,PVP; pvp DESC, PVP Descendente; L.as_nombre+K.as_apellidos,Asesor
```

### Ejemplo 2: Configuración de formatos disponibles
```
[PDFForm]
[AddOption] c | *gs_formato_ | inf_1.txt,Básico; inf_2.txt,Detallado; inf_3.txt,Completo; inf_1f.txt,Básico con fotos; inf_2f.txt,Detallado con fotos; inf_3f.txt,Completo con fotos
```

### Opciones de formato disponibles

| Archivo | Descripción |
|---------|-------------|
| `inf_1.txt` | Básico |
| `inf_2.txt` | Detallado |
| `inf_3.txt` | Completo |
| `inf_1f.txt` | Básico con fotos |
| `inf_2f.txt` | Detallado con fotos |
| `inf_3f.txt` | Completo con fotos |

### Opciones de ordenación disponibles

| Campo | Descripción |
|-------|-------------|
| `refe` | Nº Referencia |
| `A.cd_prov+A.cd_muni+A.cd_distrito+A.cd_barrio+A.nombre` | Distrito y Barrio |
| `pvp` | PVP |
| `pvp DESC` | PVP Descendente |
| `L.as_nombre+K.as_apellidos` | Asesor |