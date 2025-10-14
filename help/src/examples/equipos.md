# Equipos
```php

[Title] # Equipo/s

[DBTable] equipos
[DBIndex] usuario,ip_usu
[DBOrder] nodo

[OnChange] a,m,c,b | dni | ePadLeft( this, 8 )

[Chr] IP | U | 1234567890.

[SelInfo] a | nodo | selNodo()
[NoEdit] a | nodo

[SelInfo] a | usuario | selUser()
[NoEdit] a | usuario

[AutoMenu] l | 1

[FormCheck]
AM | {dni}<8 | DNI no válido


[TipForm] * | C | area | Área, departamento u otros datos del usuario
[TipForm] * | C | modelo | Marca, módelo del ordenador
[TipForm] * | C | procesador | Marca, tipo, velocidad del procesador del ordenador
[TipForm] * | C | memoria | Tipo, cantidad, velocidad de la memoria del ordenador
[TipForm] * | C | disco | Tipo/s, capacidad/es, velocidad/es, espacio/s libre/s de/de los disco/s del ordenador
[TipForm] * | C | cd | Tipo/s, velocidad/es de la/s unidad/es de CD o DVD del ordenador
[TipForm] * | C | graficos | Marca, modelo, capacidad de la controladora gráfica del ordenador
[TipForm] * | C | red | Marca, modelo, velocidad de la tarjeta de red del ordenador
[TipForm] * | C | monitor | Marca, modelo, tamaño del monitor del ordenador
[TipForm] * | C | impresora | Marca, modelo, tipo de conexión de la/s impresora/s del equipo
[TipForm] * | C | cone_tipo | Tipo de conexión a Internet(ADSL, RDSI, RTB) del equipo
[TipForm] * | C | cone_ancho | Ancho de banda total de salida a Internet
[TipForm] * | C | cone_usu | Número de usuarios que usan la conexión a Internet
[TipForm] * | C | ip_usu | IP local del ordenador
[TipForm] * | C | ip_sale | IP de salida a Internet del ordenador
[TipForm] * | C | ip_enlace | IP del router/gateway/firewall
[TipForm] * | C | so | Sistema operativo del ordenador (incluir versión, service packs, etc...)
[TipForm] * | C | explorer | Versión del navegador Internet Explorer (incluir service packs, etc...)
[TipForm] * | C | cremoto | Programa de control remoto (incluir versión, service packs, etc...)

[DBMemo] observa

[Fields] 2

	Dni     		 | dni    	  | 0  | T |   8      | 58  | -    ||   |
    Usuario          | usuario    | N  | T |  30      | 250 | MBQ- || # |
    Local            | nodo       | 0  | T |  50      | 250 | MQ-  ||   |
   ,Teléfono         | telefono   | 0  | T |   9      | 62  | -    ||   |
    Área/Dpto/Otros  | area       | X  | T |  50      |     | MQL  ||   |

- | Datos de hardware  || + || | * ||

    Marca/Modelo     | modelo     | X  | T |  50      |     | M    ||   |
    Procesador       | procesador | X  | T |  30      | 176 | MQ   ||   |
   ,Memoria          | memoria    | X  | T |  25      | 161 | MQ   ||   |
    Disco/s duro/s   | disco      | X  | T |  60      | 394 | MQ   ||   |
    CD/DVD           | cd         | X  | T |  50      | 394 | ML   ||   |
    Tarj. Gráfica    | graficos   | X  | T |  30      | 176 | ML   ||   |
   ,Monitor          | monitor    | X  | T |  25      | 166 | ML   ||   |
    Tarj. de Red     | red        | X  | T |  30      | 176 | ML   ||   |
    Impresora        | impresora  | X  | T |  50      | 394 | ML   ||   |

-| Conexión a Internet || + || | * ||

    Tipo conexión    | cone_tipo  | N  | T |  15      |     | MQ   ||   |
 +2 IP usuario       | ip_usu     | IP | T |  15      |     | MQ   || # |
    Ancho de banda   | cone_ancho | X  | T |  15      |     | MQ   ||   |
 +2 IP salida        | ip_sale    | IP | T |  15      |     | MQ   ||   |
    Nº de usuarios   | cone_usu   | 0  | T |   5      | 104 | M    ||   |
 +2 Puerta de enlace | ip_enlace  | IP | T |  15      |     | ML   ||   |

-| Datos de software   || + ||  |*||

    Sist. Operativo  | so         | X  | T |  25      | 160 | MQ   ||   |
   ,Int. Explorer    | explorer   | X  | T |  25      | 160 | MQ   ||   |
    Control Remoto   | cremoto    | X  | T |  25      | 160 | MQL  ||   |

-| Observaciones       || - || Q |||

    Observaciones    | observa    | #  | A | 255,80,4 | 360 | ML   ||   |
```