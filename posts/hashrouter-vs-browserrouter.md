---
title: 'HashRouter vs BrowserRouter: Dos maneras de gestionar las rutas en React'
date: '2020-08-30'
---

Hace algunos días venía lidiando con un problema al momento de desarrollar una aplicación en React. Sabía que el inconveniente lo estaba generando React Router, pero no entendía por qué ni cómo solucionarlo.

Aclaración: React Router es una libería que permite gestionar rutas en aplicaciones desarrolladas utilizando React JS. En otras palabras, sirve para definir la URL a través de la cual se va a acceder a nuestros componentes.

El problema: El sitio muestra Error 404 cuando se actualiza
El sitio web funcionaba perfecto en el entorno local pero los problemas comenzaban una vez desplegado a Firebase: La URL arrojaba Error 404 si intentaba hacer refresh fuera de la ruta principal “/” o si quería compartir ese link con un amigo.

Para ser más concretos, podía actualizar o compartir el link cryptoboard-project.web.app, pero mostraba error si quería hacer lo mismo con cryptoboard-project.web.app/coinpage/bitcoin.

Después de varios intentos dí con la pregunta indicada en Stack Overflow: una persona estaba describiendo el mismo problema que yo estaba teniendo. La solución sugerida: utilizar HashRouter en lugar de BrowserRouter

Una solución: Utilizar <HashRouter> al momento de definir las rutas de nuestra app
import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
Cuando leemos la documentación de React Router, el ejemplo nos muestra desde el primer momento cómo establecer las rutas para nuestra app importando BrowserRouter (como Router), Switch y Route.

Sin embargo, existe una alternativa a BrowserRouter llamada HashRouter que permite renderizar el sitio del lado del cliente y evitar peticiones al servidor. Simplemente agrega un hash (#) a la URL y todo lo que esté por delante del mismo no es enviado al servidor.

Cómo se ve una URL utilizando <BrowserRouter>:

https://ejemplo.com/#/about
Cómo se ve una URL utilizando <HashRouter>:

https://ejemplo.com/about
Principales diferencias entre BrowserRouter y HashRouter
BrowserRouter utiliza la history API de HTML5 para renderizar los componentes. Esto permite mantener las rutas limpias (sin símbolos) pero necesita funcionar en conjunto con el servidor, lo cual en algunos casos puede hacer más complejo el desarrollo.

HashRouter en cambio utiliza el hash (#) en la URL para renderizar los componentes, lo cual evita que el navegador envíe una petición al servidor solicitando la ruta actual cuando se quiere hacer refresh o compartir un link.

Ventajas y desventajas de <HashRouter>
Algo bueno:

Permite simplificar el desarrollo de aplicaciones pequeñas que no necesitan backend.
Asegura un mejor funcionamiento en navegadores antiguos.
Algo malo:

Las URLs se ven poco estéticas.
En lo que respecta a SEO, no se indexa todo el contenido de la web si no una única página.
Esta herramienta puede no ser la adecuada para todos los casos, pero es importante saber que existe y que está disponible si estamos trabajando en un proyecto pequeño que así lo requiere.