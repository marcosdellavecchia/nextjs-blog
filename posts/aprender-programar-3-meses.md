---
title: 'Cómo aprendí a programar en 3 meses (y qué proyectos hice)'
date: '2020-08-02'
---

![Cómo aprender a programar](../images/posts/aprender-programar-3-meses/aprender-programar-3-meses-header.png)

A partir de los últimos días del mes de marzo, cuando se decretó el *aislamiento social preventivo y obligatorio* en Argentina, algunos de nosotros nos encontramos con un poco más de tiempo disponible para hacer esas cosas que teníamos pendientes. En mi caso particular, ese pendiente era **aprender a programar** (más específicamente desarrollo web).

Si bien ya tenía una básica utilizando HTML, CSS y WordPress (durante algunos años creé sitios para mí y para clientes) nunca había ido más allá de los cursos que ofrecen Codecademy y otras escuelas similares.

Al día de hoy (2 de agosto de 2020, tres meses después de empezar a estudiar código) logré aprender muchos aspectos básicos del desarrollo web y plasmarlos en 8 proyectos diferentes que quiero compartir a continuación.

## La hoja de ruta (o roadmap)
Al momento de proponerse aprender a programar, es normal quedar paralizado frente a gran cantidad de tecnologías que existe. En mi caso, sabía que quería apuntar a un perfil de **desarrollador web full stack**, pero para llegar a ese objetivo me era necesario entender y dominar antes el **front-end**.

**Durante los siguientes 3 meses me propuse aprender:**

- HTML
- CSS
- JavaScript
- React JS

Para esto elegí hacer las certificaciones **Responsive Web Design** y **JavaScript Algorithms and Data Sctructures** de [FreeCodeCamp.org](https://www.freecodecamp.org/) (es un sitio 100% gratuito y muy reconocido, aunque hay que tener en cuenta que todo el contenido está en inglés).

Una vez completado este plan de estudio ya había realizado algunos proyectos como parte de la currícula y tenía el conocimiento suficiente para desarrollar sitios básicos (y no tanto). Lo siguiente fue googlear **qué proyectos podía hacer** por mi cuenta para practicar.

El paso siguiente fue crear un usuario en [GitHub](https://github.com/marcosdellavecchia) para compartir el código y tener un respaldo de mi trabajo en caso de necesitarlo. Aprendí a utilizar la plataforma gracias a un video de YouTube y empecé a subir cada línea de código que escribía a mi repositorio.

Por último, decidí aprender un framework para desarrollar con Javascript. Los nominados eran **React, Angular y Vue**. Después de leer bastante y ver algunos videos, la balanza se inclinó para el lado de **React**.

Existen muchísimos videos (en español e inglés) que enseñan los principios básicos de React, como también se pueden encontrar cursos pagos por un valor que ronda los 10 dólares en Udemy y sitios similares. Cualquiera de estas dos alternativas es totalmente válida. **En Internet el contenido sobra, lo que se necesita es ganas de aprender y constancia**.

Por último, a la hora de publicar (o hacer *deploy*) de cada sitio fue de mucha utilidad aprender **Firebase**, una herramienta de Google que permite entre otras cosas hostear proyectos de forma gratuita (aunque esto tranquilamente podría ser contenido para otro artículo).

## Mis 8 proyectos de aplicaciones web
**Aclaración:** Cada app / web está hosteada en **Firebase** y es totalmente accesible. De igual forma se puede acceder a cada **repositorio de GitHub** con su respectivo código.

### 1. Stoic Quote Generator
[Live site](https://stoic-quote-generator.web.app/) | [Source code](https://github.com/marcosdellavecchia/stoic-quotes)

Esto fue literalmente lo primero que hice una vez terminado el curso de JavaScript. Es una web super simple con **un botón que genera frases aleatorias y otro que permite compartirlas en Twitter**. La temática: filosofía estoica.

Utiliza algunos estilos de Bootstrap (como por ejemplo, los botones) y jQuery para las animaciones. La mecánica es simple: una fórmula que genera un número aleatorio y busca ese número dentro de un arreglo (que tiene una colección de frases) para imprimirlo en pantalla.

### 2. BTC Price
[Live site](https://btcprice-3d31b.web.app/) | [Source code](https://github.com/marcosdellavecchia/bitcoin-price)

Primera experiencia trabajando con APIs, en este caso, para **mostrar la cotización del Bitcoin en distintas monedas** (USD, EUR, GBP) y su última fecha de actualización.

La magia acá fue aprender cómo hacer peticiones a una API (en este caso la de Coindesk) y mostrar esa información en la estructura del sitio. Me está gustando bastante trabajar con esto, y las apps que siguen son la prueba.

### 3. Liquidación IVA
[Live site](https://iva-liquidacion.web.app/) | [Source code](https://github.com/marcosdellavecchia/iva-liquidacion)

Acá se empieza a mezclar un poco de dos mundos con una app que **calcula el IVA a pagar / saldos a favor** a partir de importes de compra y venta a diferentes alícuotas, retenciones/percepciones y saldos a favor anteriores.

Si bien es bastante simple, hace lo que promete. Además me está sirviendo para fijar algunos conceptos de JavaScript (ej: cómo targetear ciertos elementos del DOM para manipularlos). El código todavía se puede simplificar mucho.

### 4. Javascript Form Validation
[Live site](https://form-validation-f51f6.web.app/) | [Source code](https://github.com/marcosdellavecchia/form-validation)

Se trata de un formulario de registro que **valida que el nombre de usuario, correo y contraseña ingresados cumplan ciertos requisitos** (mínimo de caracteres, formato válido de email, caracteres especiales, password check, etc).

Utiliza una fórmula que recuadra el input en verde si la información es válida, y otra que recuadra el input en rojo e imprime el error si la información es inválida. Esto lo aprendí en YouTube, nunca se me hubiera ocurrido cómo hacerlo (agrega clases de CSS a través de JS).

### 5. Gamesuggest
[Live site](https://game-suggest-953d5.web.app/) | [Source code](https://github.com/marcosdellavecchia/game-suggest)

Este es el proyecto final del curso de React JS. Consiste en un sitio web que permite **buscar un videojuego, seleccionarlo y obtener información básica y recomendaciones** de juegos similares a partir de el título elegido.

Decidí hacerlo con una API de videojuegos para cambiar el proyecto original (que buscaba y recomendaba artistas musicales). Cambiar de API implicó modificar mucho más de lo que pensaba, ya que las estructuras eran totalmente distintas y por ende también las llamadas y funciones.

### 6. Peek-a-book
[Live site](https://peek-a-book-8ffd8.web.app/) | [Source code](https://github.com/marcosdellavecchia/peek-a-book)

Segunda experiencia trabajando con React, esta vez utilizando la API de Google Books. Se trata de una app que **busca libros, los muestra en pantalla y permite darles una “ojeada” haciendo click** (redirecciona a la página de preview de Google).

Todavía falta sumar algunas funcionalidades, pero una vez más, hace lo que promete. Las llamadas a la API de Google fueron fáciles de manejar, lo complicado fue hacer que toda la data del libro se mostrara en las tarjetas de manera linda, prolija y responsive.

### 7. Weather App
[Live site](https://weather-app-886ba.web.app/) | [Source code](https://github.com/marcosdellavecchia/weather-app)

Muestra información del **clima**: Ubicación, temperatura, humedad, presión y viento (y unos iconos animados muy buenos de un repositorio que se llama Skycons).

Para hacer esto, la app solicita permiso para obtener la ubicación del usuario a través del navegador (latitud y longitud) usando JavaScript. Con esa información, una función pide a la API los datos del clima para ese lugar. Es necesario dar permisos de ubicación para que funcione.

### 8. Crypto Dashboard
[Live site](https://cryptoboard-project.web.app/) | [Source code](https://github.com/marcosdellavecchia/crypto-dashboard)

Este es el último proyecto de la lista construído con React. Se trata de un sitio web que muestra **información actualizada sobre criptomonedas y sus correspondientes mercados o *exchanges***.