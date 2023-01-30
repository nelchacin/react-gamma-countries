![logo GammaTech](https://uploads-ssl.webflow.com/61702b2bca0865831b666952/61783723d9407a44a1829035_gamma_techschool-logo_yellow.png)   


## Introduction

Después de pasar demasiado tiempo en GitHub, has encontrado un [conjunto de datos JSON de países](https://ih-countries-api.herokuapp.com/countries), ¡y has decidido utilizarlo para crear tu Wikipedia de países!

[![Example - Finished LAB](https://camo.githubusercontent.com/77e242183783cbe9a5999d483078320e732c21b2b50ebe2bd601aedfbd40b86a/68747470733a2f2f656475636174696f6e2d7465616d2d323032302e73332e65752d776573742d312e616d617a6f6e6177732e636f6d2f7765622d6465762f6c6162732f6c61622d77696b692d636f756e74726965732d312e676966)](https://camo.githubusercontent.com/77e242183783cbe9a5999d483078320e732c21b2b50ebe2bd601aedfbd40b86a/68747470733a2f2f656475636174696f6e2d7465616d2d323032302e73332e65752d776573742d312e616d617a6f6e6177732e636f6d2f7765622d6465762f6c6162732f6c61622d77696b692d636f756e74726965732d312e676966)

  


## Empezando

Limpia el componente `App.js` para que tenga la siguiente estructura:
```jsx
// src/App.js
import "./App.css";

function App() {
  return <div className="App"></div>;
}
export default App;
```
  
## Instrucciones

### Iteración 0 | Instalación de React Router

Recuerde instalar el React Router:

```
$ npm install react-router-dom
```

Y configura el router en tu archivo `src/index.js`:
```js
// src/index.js

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter as Router } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <Router>
      <App />
    </Router>
);

// comment omitted for readability
reportWebVitals();
```
  

### Instalación de Bootstrap

Usaremos [Bootstrap](https://getbootstrap.com/) para el diseño 👍
```
$ npm install bootstrap
```

Para que los estilos de Bootstrap estén disponibles en toda la aplicación, importa la hoja de estilos en `index.js`:
```js
// src/index.js
import 'bootstrap/dist/css/bootstrap.css';
```

### Iteración 1.1 | Crear componentes

En esta iteración, nos centraremos en el diseño general. Antes de empezar, dentro de la carpeta `src`, crea la carpeta `components`. Allí crearás al menos 3 componentes:

- `Navbar`: Muestra la barra de navegación básica con el nombre LAB
    
- `CountriesList`: Muestra la lista de enlaces con los nombres de los países. Cada enlace debe ser un `react-router-dom` `Link` que utilizaremos para enviar el código del país (`alpha3Code`) a través de la URL.
    
- `CountryDetails`: Este es el componente que renderizaremos a través de la `Route` del `react-router-dom`, y debe recibir el código del país (`alpha3Code`) a través de la URL.
    
    Este es el id del país (ejemplo: `/ESP` para España, `/FRA` para Francia).
    

Para ayudarte con la estructura de los componentes, te hemos dado un ejemplo de página dentro de `example.html`.

Si quieres darle estilo, refresca tu memoria sobre Bootstrap en los [docs](https://getbootstrap.com/) o mira cómo hemos enfocado el estilo en el `example.html`.

**NOTA:** Si decides copiar el código proporcionado en el `example.html`, ten en cuenta lo siguiente:

- En React, el atributo html `class` se define usando `className`.
- Para CSS en línea, usa un objeto JavaScript y nombra cada propiedad CSS en camelCase (más detalles [aquí](https://reactjs.org/docs/dom-elements.html#style)).

### Iteración 1.2 | Componente Navbar

Cree un componente navbar que muestre el título _LAB - WikiCountries_.


### Iteración 1.3 | Componente CountriesList

Este componente debe mostrar una lista de `Links`, cada uno con el `alpha3Code` del país incrustado en la URL. Al hacer clic en un `Link` se mostrará el componente de detalles del país.


### Iteración 1.4: Configuración del componente CountryDetails y de la ruta

Ahora que nuestra lista de países está lista, debemos crear el componente `CountryDetails`. Este componente debe recibir el array de países como prop. Aquí tienes un recordatorio de cómo hacerlo:
```jsx
// Example
<Route path="/:id" element={ <SomeComponent someData={someData} /> } />
```

El `alpha3Code` del país estará disponible a través de los parámetros de la URL. Para acceder a los parámetros de la URL, desde la barra de URL del navegador, utilice los ganchos React Routers `useParams`. Para un recordatorio sobre cómo configurar y acceder a los parámetros URL con React Router, consulta [este ejemplo](https://reactrouter.com/docs/en/v6/api#useparams).

**NOTA:** Si no has añadido CSS, los detalles del país pueden aparecer en la parte inferior de la página.

Para la imagen pequeña de la bandera, puedes usar el `alpha2Code` en minúsculas e incrustarlo en la URL como se muestra a continuación:

-   France: [https://flagpedia.net/data/flags/icon/72x54/fr.png](https://flagpedia.net/data/flags/icon/72x54/fr.png)
-   Germany: [https://flagpedia.net/data/flags/icon/72x54/de.png](https://flagpedia.net/data/flags/icon/72x54/de.png)
-   Brazil: [https://flagpedia.net/data/flags/icon/72x54/br.png](https://flagpedia.net/data/flags/icon/72x54/br.png)
-   etc.

---

### Iteration 2 | Linking it all together

La `App` debe tener una variable de estado `countries` que contenga los datos procedentes del fichero `src/countries.json`. Los datos de la variable de estado `countries` deben ser pasados al componente `CountriesList` como prop.

Una vez creados los componentes, la estructura de los elementos que mostrará tu `App.js` debería parecerse a esto:
```jsx
// ...

<div className="App">
  <Navbar />

  <div className="container">
    <div className="row">
      <CountriesList countries={countries} />
      {/* React-Router Route rendering the CountryDetails should go here */}
    </div>
  </div>
</div>

// ...
```

---

### Iteración 3 | Obtener los datos de los países desde una API

En lugar de confiar en los datos estáticos de un archivo `json`, vamos a hacer algo más interesante y obtener los datos de una API real.

En `App.js`, haz una petición `GET` a la URL [https://ih-countries-api.herokuapp.com/countries](https://ih-countries-api.herokuapp.com/countries). Utiliza los datos devueltos de la respuesta como la lista de los países. Puedes usar `fetch` o `axios` para hacer la petición.

Debes utilizar el hook `useEffect()` para establecer un efecto que se ejecute una sola vez y realice una petición a la API. Una vez que recibas los datos de la respuesta, guárdalos en una variable de estado (state). La petición debería realizarse a primera hora cuando se carga la aplicación.

---

### Iteración 4 | Bonus | Obtener datos de un país desde una API

Utilizando el hook `useEffect` configure un efecto en el componente `CountriesDetails`. El efecto debe realizar una solicitud a la API RestCountries y obtener los datos de un país concreto. Puede construir la URL de la solicitud utilizando el código `alpha3Code` del país. Ejemplo:

-   United States: [https://ih-countries-api.herokuapp.com/countries/USA](https://ih-countries-api.herokuapp.com/countries/USA)
    
-   Japan: [https://ih-countries-api.herokuapp.com/countries/JPN](https://ih-countries-api.herokuapp.com/countries/JPN)
    
-   India: [https://ih-countries-api.herokuapp.com/countries/IND](https://ih-countries-api.herokuapp.com/countries/IND)
    

El efecto debe ejecutarse después del renderizado inicial, y cada vez que cambie el parámetro URL con el `alpha3Code`.
