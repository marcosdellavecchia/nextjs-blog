---
title: '¿Qué es Git y para qué sirve? Guía de comandos básicos'
date: '2020-09-06'
---

![Git: Guía de comandos básicos](../images/posts/git-comandos-basicos/git-comandos-basicos-header.png)

Si tu objetivo es introducirte en el mundo de la programación, definitivamente Git es una herramienta que querés dominar.

Git forma parte del día a día de cualquier desarrollador, y es uno de los requisitos más solicitados para cualquier trabajo del sector (incluso en puestos junior).

## ¿Qué es Git y para qué se utiliza?
Git es un **sistema de control de versiones** creado por Linus Torvalds (creador del sistema operativo Linux) en el año 2005.

Se utiliza para **llevar un seguimiento de las modificaciones que se realizan en los diferentes archivos que intergran un proyecto**. Además permite saber qué cambios fueron realizados, quién los implementó y en qué momento.

Un error común es confundir Git con **GitHub, Gitlab o Bitbucket** (entre otros). Estos últimos son servicios que permiten alojar nuestros repositorios de Git para compartirlos y trabajar de manera colaborativa con otros desarrolladores.

## ¿Qué es un repositorio?
Un repositorio es simplemente una carpeta cuyo contenido está siendo monitoreado por Git. Dentro de cada repositorio hay una **carpeta .git** (por defecto oculta) que contiene los archivos necesarios para que Git pueda ejecutarse de manera correcta.

Los repositorios que existen en una computadora local se llaman **repositorios locales**, mientras que aquellos que se ubican en un servicio web como GitHub se denominan **repositorios remotos**.

**Instalar Git en nuestro sistema operativo**
Si formás parte de casi el 80% de los usuarios en el mundo 🖥, éste es el link para [descargar Git para Windows](https://git-scm.com/download/win).

Si por el contrario estás del lado Mac de la vida 🍏, en éste enlace podés [descargar Git para macOS](https://git-scm.com/download/mac).

## Comandos básicos de Git:

### Inicializar un repositorio
Para comenzar a realizar el seguimiento de los cambios en nuestros archivos, es necesario **inicializar la carpeta de la cual queremos que Git lleve un control**. Una vez realizado este paso, vamos a haber creado nuestro primer repositorio.

1. Crear una carpeta (o localizar la carpeta donde ya tenemos nuestro proyecto).
2. Abrir la terminal de Windows presionando el botón Inicio y luego escribiendo ***cmd***.
3. Escribir las letras ***cd*** (por *change directory*) y luego arrastrar nuestra carpeta a la terminal de Windows y presionar enter para situarnos dentro de ella.

Una vez situados en el directorio correspondiente, **inicializamos el repositorio con el siguiente comando**:

```
git init
```

Listo! Ahora nuestra carpeta es oficialmente un repositorio de Git.

### Consultar el estado de un repositorio
Consultar el estado de un repositorio nos sirve para averiguar de qué elementos Git está realizando un seguimiento. Esto se puede lograr con el siguiente comando:

```
git status
```

Supongamos que ya creamos el primer archivo en nuestro repositorio. Este es ni más ni menos que un *index.html*. Sin embargo, todavía no le pedimos a Git que lleve un seguimiento del mismo. Por lo tanto, al ejecutar ***git status*** veríamos el siguiente mensaje:

![Git status](../images/posts/git-comandos-basicos/git-status.png)

*El comando git status nos informa que nuestro index.html existe pero no está siendo trackeado.*

### Comenzar a monitorear un archivo
Ya inicializamos un repositorio y creamos archivos. Con el comando ***git status*** nos dimos cuenta de que estos archivos **no están siendo trackeados automáticamente**. Tenemos que ordenarle a Git que los monitoree, y eso puede hacerse de varias maneras:

```
git add . // Trackea todos los archivos
git add *.html // Trackea todos los archivos .html
git add [nombre del archivo] // Trackea un archivo específico
```

De esta esta forma podamos agregar a nuestro **staging area** los archivos cuyos cambios queremos seguir. Entonces, luego de ejecutar *git add index.html* nuestro status sería el siguiente:

![Git add](../images/posts/git-comandos-basicos/git-status.png)


*Ahora el comando git status nos devuelve un nuevo archivo en nuestro staging area: index.html.*

### Commit de nuestros archivos
Hacer un commit significa **confirmar los archivos que previamente agregamos al staging area**. Cada commit debe estar acompañado de un mensaje, que describe los cambios realizados en nuestro archivo.

```
git commit -m "Commit inicial de index.html"
```

Ahora nuestro archivo *index.html* ya se encuentra **confirmado en nuestro repositorio local** con su mensaje que describe el último cambio realizado. En este caso, se trata de nuestro primer commit.

### Ver historial de commits realizados
```
git log
```

Este comando nos va a permitir **ver un resumen de las modificaciones que fueron confirmadas**, incluyendo el autor de dichos cambios, la fecha de los mismos y por supuesto, el mensaje descriptivo del commit.

![Git log](../images/posts/git-comandos-basicos/git-log.png)

*El comando git log nos deveulve los detalles de nuestro commit.*

El paso siguiente es **enviar estos cambios desde nuestra copia local al repositorio remoto**, para poder compartirlos con otras personas que podrían estar trabajando junto a nosotros en el proyecto.

### Conectar nuestro repositorio local con un repositorio remoto
Hasta ahora vimos como gestionar un repositorio remoto utilizando los comandos básicos. Antes de **enviar nuestros cambios a un repositorio remoto**, necesitamos conectarnos a éste.

Si creamos nuestro repositorio remoto, por ejemplo, en **GitHub**, el servicio nos va a indicar una URL que tendremos que utilizar en la siguiente línea de código:

```
git remote add origin [url del repositorio]
```

### Subir nuestros cambios al repositorio remoto (push)

Ahora sí, ya vinculamos nuestro repositorio local a un repositorio remoto y llegó el momento de **subir nuestros cambios** para que puedan ser visualizados por otras personas.

```
git push origin master
```

Luego de ejecutar esta línea de código, el servidor al que nos estemos conectando nos va a solicitar nuestro **usuario y contraseña** (en este caso, de mi cuenta de GitHub) para hacer el *push* correspondiente.

![Git push](../images/posts/git-comandos-basicos/git-push.png)

*Nuestro archivo index.html fue incluido en la rama “master” del repositorio remoto.*

### Actualizar nuestro repositorio al commit más reciente (pull)
Si por algún motivo queremos **reemplazar los archivos de nuestro repositorio local a la versión más reciente** disponible en el repositorio remoto, simplemente tenemos que ejecutar el siguiente comando:

```
git pull origin master
```

En este ejemplo, estamos reemplazando nuestro *index.html* por la última versión disponible en nuestro repo de GitHub (e incorporándolo a nuestra rama principal *master*)

Si bien quedan otros conceptos por abarcar como **branches y merges**, en esta guía repasamos los conceptos básicos para que puedas empezar a familiarizarte con Git y perderle el miedo a la línea de comandos.

Ahora estás en condiciones de incorporar Git a tus proyectos para trabajar de manera ordenada y realizar un seguimiento de todos los cambios en tu código 👨‍💻.