---
title: 'Introducción a React Hooks: Manejando estados con useState'
date: '2020-09-13'
---

![React hooks: useState](../images/posts/react-hooks-usestate/react-hooks-usestate-header.png)

¿Te imaginás poder manejar los estados en React sin la necesidad de escribir clases? Sin dudas nos ahorraría varias líneas de código y simplificaría la estructura de nuestros componentes. Esto es exactamente lo que vienen a proponer los **Hooks**, disponibles a partir de la versión 16.8 de React.

## ¿Qué es un Hook?
Dentro de la librería React, los Hooks son una funcionalidad relativamente nueva que nos permite **hacer uso del estado y otras características dentro de componentes creados a partir de una función**. Anteriormente era necesario utilizar los componentes de clase para acceder a estas posibilidades.

De ahí surge el nombre hook (*gancho o anzuelo* en español), ya que esta característica nos permite “enganchar” nuestros componentes funcionales a otras características de React que originalmente estaban pensadas para clases.

## ¿Por qué debería empezar a utilizarlos? 🤔
Si bien las clases de React siguen estando vigentes y no hay planes de que esto cambie, existen varios motivos por los cuales deberíamos empezar a familiarizarnos con los Hooks:

- Simplifican el código en componentes complejos.
- Favorecen la re-utilización de nuestro código.
- Evitan confusiones a la hora de utilizar this y agregar bind a los manejadores de evento.

## Tranquilo… ¡Todavía hay clases para rato!
El uso de los Hooks es completamente opcional, *no hay planes de eliminar el modelo de clases de React*. Sin embargo, es bueno empezar a entender cómo funciona este nuevo concepto para acostumbrarnos a escribir nuestros componentes como funciones cuando esto sea posible.

En definitiva, no es necesario que comiences a reescribir tus clases de inmediato, pero sí es importante tener en cuenta hacia dónde está evolucionando el desarrollo con React.

## Nuestro primer Hook: useState
Una buena manera de introducir este concepto es a través del Hook de estado llamado **useState**, el cual ya se encuentra incorporado a React (junto a otros más). Sin embargo, también tenemos la posibilidad de escribir nuestros propios Hooks para luego reutilizar su comportamiento a lo largo de nuestros componentes.

Para hacer énfasis en las diferencias entre utilizar Hooks y no hacerlo, **vamos a realizar el mismo ejemplo de dos maneras**: con componentes funcionales (y Hooks, claro) y con componentes de clase. Después vas a poder ver el ejemplo desplegado en un sitio web funcionando.

## Ejemplo: contador de números
Este es el ejemplo que propone la documentación de React, del cual decidí hacer una versión propia. Consiste en un único estado que se incrementa a medida que presionamos un botón, manipulando dicho estado a través del Hook useState.

### 1. Código con componente de Clase
```
import React from "react";
import "./App.css";

class AppClass extends React.Component {
  state = {
    contador: 0,
  };
  incrementar = () => {
    this.setState({ contador: this.state.contador + 1 });
  };
  reset = () => {
    this.setState({ contador: 0 });
  };
  render() {
    const contador = this.state.contador;
    return (
      <div className="App">
          <p>{contador}</p>
          <button onClick={this.incrementar}>Incrementar</button>
          <button onClick={this.reset}>Reset</button>
      </div>
    );
  }
}

export default AppClass;
```

Vamos a explicar paso a paso este código:

1. Importamos React y **creamos la clase** llamada AppClass, que extiende de React.Component.
2. Definimos un estado **contador** que está inicializado con valor 0.
3. Definimos dos funciones: **incrementar** (que suma 1 al estado contador) y **reset** (que se encarga de volver a setear dicho estado en 0).
4. En en el return **mostramos la variable** contador y además i**ncluimos 2 botones**: uno para hacer referencia a la función incrementar y otro a la función reset.

### 2. Código con componente Funcional + Hook
```
import React, { useState } from "react";
import "./App.css";

function AppFunction() {
  const [contador, setContador] = useState(0);
  const incrementar = () => {
    setContador(contador + 1);
  };
  const reset = () => {
    setContador(0);
  };
  return (
    <div className="App">
        <p>
{contador}
</p>
        <button onClick={incrementar}>Incrementar</button>
        <button onClick={reset}>Reset</button>
    </div>
  );
}

export default AppFunction;
```

¿Encontraste las diferencias? Vamos a verlas:

1. Al momento de importar React, también importamos el Hook que está integrado, en este caso **useState**.
2. No creamos una clase, definimos una **función** (que es mucho más sencilla).
3. Definimos una constante [contador, setContador], **acá está nuestro Hook**. Este elemento devuelve un par: **el valor del estado actual** (*contador*) y **una función que permite actualizar dicho valor** (*setContador*). Este último es el equivalente a this.setState en el ejemplo de clase.
4. Definimos las funciones incrementar y reset, pero ahora **utilizando setContador**. ¿No se vé mucho más limpio? Nos olvidamos por completo de utilizar la palabra this.
5. El JSX es igual al primer ejemplo, pero nuevamente sin la necesidad de llamar a nuestras funciones con la palabra **this**.

**[Ejemplo funcionando](https://counter-hooks.web.app/)** | **[Repositorio en GitHub](https://github.com/marcosdellavecchia/react-counter)**

## Conclusión 💡
Si leíste hasta acá, espero que este ejemplo sencillo te haya dado una noción básica de qué es esta funcionalidad y cómo empezar a implementarla en tu desarrollo.

Te recomiendo visitar la **[documentación oficial de React](https://es.reactjs.org/docs/hooks-overview.html)** para intentar entender el tema en profundidad y descubrir nuevos Hooks (o incluso cómo crear los propios).