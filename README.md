# Temporizador Pomodoro

![Pomodoro App Preview](./pomodoro-preview.jpeg)

- [Descripcion General](#descripcion-general)
- [Que Aprendi](#que-aprendi)
- [Desarrollo](#desarrollo)

## Descripcion General

La [Técnica Pomodoro](https://es.wikipedia.org/wiki/T%C3%A9cnica_Pomodoro) es un método para mejorar la administración del tiempo dedicado a una actividad que se basa en usar un temporizador para dividir el tiempo en intervalos fijos, llamados pomodoros, de 25 minutos de actividad, seguidos de 5 minutos de descanso, con pausas más largas cada cuatro pomodoros, dando asi un total de 6.

En esta ocasión, la idea evoluciona para tener 3 valores abreviados para establecer bloques de tiempo comunes de 25, 5 y 15 minutos respectivamente. Valores que pueden ser cambiados en la configuración de la aplicación.

Para mostrar el tiempo transcurrido hice uso de una barra de progreso circular la cual funciona en el sentido contrario de las agujas del reloj, y el tiempo se disminuye en consecuencia, es decir, los valores van desde la duracion del temporizador a cero

Principales Características:

- Capacidad para iniciar 3 tipos de temporizadores
- Posibilidad de cambiar el aspecto de la aplicación
- Capacidad para pausar, iniciar y reiniciar el temporizador
- Posibilidad de personalizar cada uno de los temporizadores

## Que Aprendi

### Navegadores Moviles y 100VH

Trabajar con las medidas del viewport en navegadores móviles es un completo dolor de cabeza, ya que al asignar 100vh a un elemento no se toma en el tamaño de la barra de navegación por lo que se corta parte del contenido en la parte inferior y a su vez generando un scroll innecesario, por lo que el botón de configuración quedaba oculto al iniciar la aplicación.

Encontré un excelente artículo de [CSS Tricks: The trick to viewport units on mobile](https://css-tricks.com/the-trick-to-viewport-units-on-mobile/) el cual consiste en aplicar un alto que sea igual a la altura de la ventana restando el tamaño de la barra de navegación el cual se actualiza a medida que la altura de la ventana cambia.

### Barra de Progreso con SVG

Una de las partes desafiantes de este proyecto era el botón grande con la barra de progreso y texto encima, lo cual en un principio pense hacerlo unicamente con CSS pero me di cuenta que la mejor manera era utilizando un SVG.

Debido a que no contaba con suficiente experiencia con el manejo de SVG's recurrí a unos articulos que me ayudaron bastante a contruir esa funcionalidad, asi como las animaciones para conseguir un movimiento fluido de la barra de progreso.

- [CodePen Demo using SVG Path](https://codepen.io/web-tiki/pen/qEGvMN)
- [CSS-Tricks article with using SVG Circle](https://css-tricks.com/building-progress-ring-quickly)

### Selector de atributos CSS

Al momento de querer personalizar el color y la fuente de la interfaz de la aplicación en lugar de utilizar clases para establecer el color y fuente de cada elemento recurri al uso de atributos data en este data-color y data-font para aplicar el color y la fuente correspondiente al elemento que contuviese dicho atributo.

### useContext y useReducer

Para manejar un estado global hice uso de useContext y useReducer para gestionar la configuracion de la aplicacion y guardarla en localStorage para que no se pierda la configuracion incluso luego de cerrar el navegador.

## Desarrollo
