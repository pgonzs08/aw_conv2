[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/M6x3p3QZ)
[![Open in Codespaces](https://classroom.github.com/assets/launch-codespace-7f7980b617ed060a017424585567c406b6ee15c891e84e1186181d67ecf80aa0.svg)](https://classroom.github.com/open-in-codespaces?assignment_repo_id=15100073)
# Título del proyecto de aplicación web

[comment]: # (Incluir una breve descripción del proyecto en una o dos frases como mucho)

Aplicación web basada en Express.js que...

[comment]: # (Incluir un GIF o una captura de pantalla de la página principal del proyecto. Utilizar el directorio docs para almacenar dicha imagen)

![Funcionamiento de la aplicación web](docs/overview.png)

## Tabla de contenidos

* [Introducción](#introducción)
  * [Características](#características)
  * [Tecnologías](#tecnologías)
* [Uso de la aplicación](#uso-de-la-aplicación)
  * [Instalación](#instalación)
  * [Configuración](#configuración)
  * [Ejecución](#ejecución)
* [Créditos](#créditos)

## Introducción

### Características

[comment]: # (Enumerar las principales características que ofrece la aplicación web, siguiendo el formato:)

* Característica principal 1.
* Característica principal 2.
* ...

### Tecnologías

[comment]: # (Enumerar todas las APIs o librerías externas utilizadas en el proyecto pero sin mencionar las APIs DOM y fetch, Express ni Mongoose. El formato será como sigue:)

Este proyecto ha sido desarrollado utilizando:

* [Express](https://expressjs.com/) - Framework web
* [Mongoose](https://mongoosejs.com/) - ODM para trabajar con una base de datos MongoDB

## Uso de la aplicación

[comment]: # (Describir cómo instalar, configurar y ejecutar la aplicación web. El formato será como sigue:)

### Instalación

Clonar este repositorio y ejecutar desde el directorio raíz el siguiente comando para instalar las dependencias:

```bash
$ npm install
```

[comment]: # (Si es necesario hacer alguna tarea más compleja, como por ejemplo compilar código SASS, indicar a continuación cómo se debería hacer. Este tipo de tareas deberán estar automatizadas con npm build)

Antes de desplegar la aplicación, es necesario generar el frontend utilizando el siguiente comando desde el directorio raíz:

```bash
$ npm build
```

### Configuración

[comment]: # (Enumerar todos los parámetros configurables de la aplicación web, sin incluir ningún dato sensible)

Crear un fichero `.env` en el directorio raíz que defina las siguientes variables de entorno:

```bash
# Puerto utilizado por el servidor de la aplicación
WEBAPP_PORT=3000
# URI de la base de datos
WEBAPP_DB_URI="mongodb+srv://eventCity:XkzsIkgjMa1ytZrG@eventcity.hikfngv.mongodb.net/?retryWrites=true&w=majority&appName=EventCity"
# Indicar el resto de variables...
```

### Ejecución

Para ejecutar la aplicación web, ejecutar el siguiente comando desde el directorio raíz:

```bash
$ npm start
```

## Créditos

Este proyecto ha sido desarrollado por el grupo *código del grupo*, formado por:

* Nombre Apellidos
* Nombre Apellidos
* Nombre Apellidos
* Nombre Apellidos
* Nombre Apellidos
