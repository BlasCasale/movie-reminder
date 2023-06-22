Pasos a seguir para iniciar el proyecto:

npm install

npm start

Pequeña reseña:

En este proyecto, se le hace fetch a la api de Omdb, que lamentablemente ha quedado obsoleta en protocolos de seguridad y hacerle el deploy es imposible porque no funciona, unicamente se puede utilizar si se le instala las dependencias al proyecto. Durante el mismo utilizo useContext para poder setear el usuario y que se pueda registrar en la base de datos de firebase, como asi tambien logearse corroborando los datos de ya estan almacenados en la base de datos, asi tambien el usuario puede cambiar su contraseña cuando lo desee, siempre y cuando cumpla con las condiciones.

Para poder buscar las peliculas utilizo useEffect para traer la informacion de la API y useState para poder manipularla dentro de mi proyecto, asi poder maquetar y demás.

Tecnologías utilizadas:

HTML5

CSS 3

JavaScript ECMAScript 6

React Js version 18.1
