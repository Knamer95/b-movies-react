# B-Movies React

## Introducción

Para este proyecto he usado la versión de `React 17`, con `vite` en vez de `CRA` (create-react-app), por dos motivos, el primero que siempre he usado `CRA`, y me llamaba la atención, y el segundo, que al no usar webpack, es mucho más ligero, y oí hablar muy bien de éste.

Para el almacenamiento de datos recogidos por el servidor, he utilizado `Redux`, y para las peticiones `axios`, para aprender como iba, ya que suelo usar la API de Fetch.

Para los formularios he usado `React Hook Form`, como sustituto de `Formik`.


## Instalación

1) Clonar repositorio

2) Ir a la carpeta raíz del proyecto

3) Ejecutar el comando `npm install`

Una vez hecho esto, podemos servir el proyecto, con `npm run dev`


## Pasos a seguir

1) Crear fichero .env si no está creado en la raíz (se puede crear otro en otra ruta también si se desea)

2) Añadir los campos VITE_GATEWAY, con la URL de nuestra API de Symfony (en mi repositorio [b-movies-symfony-api](https://github.com/Knamer95/b-movies-symfony-api). En mi caso es `http://localhost:80/b-movie-api/public`
	

## Conclusiones

Gracias a este proyecto, he aprendido como funciona Redux, ya que hasta ahora me intimidaba, pero tuve la oportunidad de usarlo, y decidí hacerlo para aprender.

A su vez, he visto cómo funciona el lazy loading en React, y he aprendido bastante, además de reafirmar que programar en React mola mucho :)