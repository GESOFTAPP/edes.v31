# Proceso para crear una nueva intranet

Este documento detalla los pasos necesarios para desplegar y configurar una nueva intranet en tu entorno. Asegúrate de seguir cada paso cuidadosamente para garantizar una instalación segura y funcional.

## 1. Desplegar el motor

- Despliega el motor **"edes.v3"** en el directorio base donde se ubicará la aplicación.
- Desde este directorio, se crearán automáticamente las subcarpetas `[folderIntranet]/http`.
- Configura el acceso HTTP/HTTPS al directorio `http`, que servirá como directorio base de la intranet.

## 2. Configuración de credenciales de instalación

- Edita el archivo `/edes.v3/t/install_key.php` para establecer las credenciales de instalación.
- Las variables `$loginInstall` y `$passwordInstall` (que deben contener de 10 a 50 caracteres alfanuméricos) definen las credenciales.
- Por seguridad, estas variables vienen comentadas por defecto. **Descoméntalas únicamente durante el proceso de instalación**.
- Asigna los valores personalizados para tu nueva instalación.

## 3. Ejecución del instalador
- Desde el directorio `/edes.v3/http/`, ejecuta el siguiente comando reemplazando los valores correspondientes:
```bash
php install.php [loginInstall]/[passwordInstall]/[folderIntranet]/[httpPort]
Nota: El valor [httpPort] es opcional y solo se usa si es distinto del puerto 80.
```
## 4. Archivos generados
Tras ejecutar el instalador, se crearán tres archivos en la carpeta **"/edes.v3/install/"**, con el prefijo **"[folderIntranet]_"**
Archivo	Descripción
```bash
[folderIntranet]_setup.ini	Variables de configuración de la aplicación.
[folderIntranet]_setup.sql	Estructuras SQL necesarias para la base de datos.
[folderIntranet]_setup.tree	Árbol de opciones por defecto (no requiere modificaciones manuales).
```

## 5. Segunda ejecución del instalador
Tras modificar los archivos de configuración, vuelve a ejecutar el mismo comando de instalación.
Este proceso puede tardar unos minutos y generará automáticamente un nuevo directorio `[folderIntranet]` (en paralelo a **"/edes.v3/"**) con todos los archivos y la base de datos correspondientes.
## 6. Acceso a la nueva intranet
En el archivo **"[folderIntranet]_setup.ini"**, encontrarás las credenciales para acceder a la intranet, en particular las variables `$MasterEMail` y `$DefPassword`.
Accede a la intranet mediante uno de estos enlaces, reemplazando **"[folderIntranet]"**:
```bash
CopyRun http://[tu_dominio]/[folderIntranet]/http/edes.php
o
CopyRun http://[tu_dominio]/edes.php
```
Usa las credenciales definidas durante la instalación.

## 7. Inicio de sesión y clave de desarrollador
Al ingresar, te solicitará la clave de Desarrollador, que es la misma que la de acceso.

## 8. Reestablecer seguridad
Por seguridad, una vez finalizada la instalación y comprobado el acceso, vuelve a comentar las variables `$loginInstall` y `$passwordInstall` en `/edes.v3/t/install_key.php`.

## 9. Proceso finalizado
Tu nueva intranet ya está activa y lista para usar.

# Ficheros generados
## [folderIntranet]_setup.ini
```php
//[Title] @Configuración de la instalación@
//[Help] install@LNGFILE@.ini

// @KeyCode@
$KeyCode = 'abcde12345';           // @Clave de encriptación@       // /^([a-z][0-9]){10,50}$/i

// @Datos generales@
$Company = 'CompanyPrueba';					// @Empresa@
$ApplicationTitle = 'Titulo Prueba';			// @Título aplicación@
$ApplicationSubTitle = 'SubTitulo Prueba';		// @SubTítulo aplicación@

$HttpHostName = "localhost:8080";                  // @HTTP_HOST@
$WebAddress = 'http://localhost:8080/[folderIntranet]/http/edes.php';				// @Dirección web@
$SYSDB = '';							// database de las tablas del motor

// @DDBB@
$DBSqlInit = array("SET SESSION sql_mode=''", "SET NAMES utf8mb4");
$DBDrive = 'mysqli';		    // [informix,Informix;mysql,MySql;oracle,Oracle] @Base de datos@
$DBHostName = 'localhost';	    // @Host@
$DBDictionary = 'db_prueba';   	// @Diccionario@
$DBPort	= '3307';     			// @Nº del Puerto@
$DBUser = 'root';			   	// @Usuario@
$DBPassword = 'nidedocker2021';	// @Password@
$AddDefTable = '';			    // @A?ade definición a cada tabla@

// @Configura generación@
$LoginType = 1;														// [0,DNI; 1,EMail; 2,Login] @Tipo de Login@
$TreeOptions = 'CMIB: @Consultar@,@Modificar@,@Insertar@,@Borrar@';	// @Orden y texto de las opciones@ \ &nbsp;&nbsp;&#40; L:@Listar@ )

$Language = 'es';														// [es,Español; en,Engles] @Idioma@
$DesktopType = 2;														// [0,@Solapas@; 1,@Vertical@; 2,@Horizontal@] @Tipo desktop@
$BasicColor = 'A';													// [A,@Azul@] @Color base@

// @Elementos a generar@
$CreateDatabase = true;		// @Crear DataBase@
$CreateTables = true;		// @Crear Tablas@
$CreateDF = true;			// @Crear ficheros de Definición@
$CreateTree = true;			// @Crear Arbol de Opciones@
$DeleteDir = true;			// @Borrar Directorios@

// @Generación DF@
$WrapInputext = 90;			// @Wrap en INPUTEXT@
$DefTextArea = '2000,80,4';	// @Tamaño TEXTAREA@

// @Usuario@
$DefPassword = 'cambiar-ya';		//[*] @Password por defecto de la aplicación@
$InitWeb = 'entrar-stop';			//[*] @Password de entrada con la web parada@
$MasterUserName = 'NameMaster';		//[*] Nombre del usuario Master
$MasterEMail = 'email@gmail.com';	//[*] EMail del usuario Master
$CheckboxValues = 'S,';             //[*] Valor del checkbox: On,Off

```

## [folderIntranet]_setup.sql
```php
/*
En el apartado "Definir SQL" se pondrán las tablas en orden en que se quieran las opciones y los campos dentro de la tabla en el orden que 
quieras que aparezca en las fichas aunque posteriormente se podrán mover.

En la definición del SQL hay que tener en cuenta que cualquier campo por el que se quiera buscar de forma transparente ha de estar creado como
 "NOT NULL" y los campos de búsqueda mas frecuentes con índice.

Nombre de campos "cd_" / "nm_".  Esto permite facilidad de relación en tablas auxiliares que con el nombre el motor eDes sabe encontrarlas.
Si antes del label ponemos una "," el campo se situará a la derecha del anterior.
		Tab: Expedientes
		Forder:
		CREATE TABLE prueba (         Nombre carpeta: "Prueba"
			campo01 char(2),           Label campo01: Descripción si hace falta
			campo02 char(2),          ,Label campo02: Descripción si hace falta
			...
			PRIMARY KEY (campo01),
			...
		);

 El "Nombre carpeta" se utiliza además para el título de la ficha/listado pudiendo poner "/" para indicar el plural
 Si se quiere crear menus sin crear la tabla se utilizará el comando "Menu: NombreMenu : NombreScript".
 Para que los DF a generar esten en directorios determinados: DIR: / FOLDER:

DIR: test_path
Tab: Autonomía
*/

create table auto (                         Gestión Autonomías
    cd_auto char(2) NOT NULL,               Código
    nm_auto char(40) NOT NULL,              Nombre
    tf_distrito char(1),                    Tiene distrito
    PRIMARY KEY (cd_auto),
    KEY nm_auto (nm_auto)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

```



## [folderIntranet]_setup.tree
```txt
{g/tab.gif} Sistema

	[$usuarioa.gif] Usuario actual
		[$clave.gif] Modificar clave |#mR:$a/d/usu_clave&_SEEK&cd_gs_user=#user#
		Datos Básicos		|#mR:$a/d/usu_basico&_SEEK&cd_gs_user=#user#
		Variables Sesión	|:$a/d/usu_sesion
			Consultar	|#cR:
			Modificar	|#mR:
		Configurar entorno |>/_datos/config/install.php
		[$local.gif] Nodo
			Consultar |#cR:$a/d/nodo.edf&_SEEK&cd_gs_node=#node#
			Modificar |#mR:$a/d/nodo.edf&_SEEK&cd_gs_node=#node#

	[$manteni.gif] Mantenimiento

		[$local.gif] Locales	|:$a/d/nodo
			Consultar	|#c:
			Modificar	|#m:
			Insertar	|#a:
			Borrar		|#b:

		[$office.gif] Departamentos |:$a/d/office
			Consultar	|#c:
			Modificar	|#m:
			Insertar	|#a:
			Borrar		|#b:

		[$position.gif] Cargos	|:$a/d/position
			Consultar	|#c:
			Modificar	|#m:
			Insertar	|#a:
			Borrar		|#b:

		[$usuario.gif] Usuarios	|:$a/d/usu_ficha
			Consulta	|#c:
			Modificar	|#m:
			Insertar	|#a:
			Borrar		|#b:
			-
			[$reset.gif] Resetear clave |#m:$a/d/usu_reset
			[$user_lock_off.gif] Activar acceso |#m:$a/d/usu_activar
			[$user_security.gif] Responsable seguridad | #m:$a/d/usu_security

		[$pc.gif] PCs	|:$a/d/pc
			Consultar	|#c:
			Modificar	|#m:
			Borrar		|#b:

		[$arbol.gif] Árboles |:$a/d/m_arbol
			Consultar	|#c:
			Modificar	|#m:

		[$opcion.gif] Opciones |:$a/d/m_opcion
			Consultar	|#c:
			Modificar	|#m:
			-
			Gestor de Opciones |>$a/d/tree.gs&TIPO=1
			Status             |>$a/d/opstatus.gs
			[$mapa.gif] Mapa de Opciones |>$a/d/mapa.gs

		[$grafica.gif] Estadística
			Navegadores		|#c:$a/d/e_nave
			Accesos			|#c:$a/d/e_acceso
			Conexiones		|#c:$a/d/e_cone
			Conex. Distintas|#c:$a/d/e_cone_dis
			Extracciones	|#c:$a/d/e_extra
			Backups			|#c:$a/d/gs_backup

		[$setup.gif] Estado del sistema
			PHP
				Rendimiento	|>$a/u/velocidad.gs
				Información	|>$a/d/status.gs
				PHP.ini		|>$a/u/tools.gs?I
			De la CPU		|¿ LINUX_OS ? >$a/d/server.gs?T
			
			Servidor Web Apache
				Rendimiento		|¿ LINUX_OS ? >$a/u/velocidad.gs
				Velocidad de carga	|>$a/u/vcarga.gs
				Gráfica			|¿ LINUX_OS ? >$a/d/server.gs?G
				Status en Tabla		|¿ LINUX_OS ? m>$a/d/server.gs?S
				Status original		|¿ LINUX_OS ? m>$a/d/server.gs?O
				Usuarios conectados	|>$a/u/conexiones.gs
			Errores			| #c:$a/d/e_error
			Errores Informe | #c:$a/d/e_errorr

		[$web.gif] On/Off WEB
			[$stop_m.gif] Modo consultas	|#a:$a/d/stop_mod
			[$stop_t.gif] Parada TOTAL	|#a:$a/d/stop_total
		-
		[$helpdesk.gif] Help Desk | eHelpDesk()

		-
		Desarrolladores | >$a/u/_usuarios.gs
```