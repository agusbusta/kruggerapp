VacApp

VacApp es una aplicación para gestionar la información de vacunación de usuarios.

Requisitos previos

Antes de comenzar, asegúrate de tener instalado lo siguiente en tu sistema:

Node.js: Descargar e instalar Node.js
PostgreSQL: Descargar e instalar PostgreSQL
Configuración

Clona este repositorio en tu máquina local:

bash
Copy code
git clone https://github.com/tu-usuario/VacApp.git
Ve al directorio del repositorio:

bash
Copy code
cd VacApp
Instala las dependencias tanto para el backend como para el frontend:

bash
Copy code
cd backend
npm install
cd ../frontend
npm install
Crea un archivo .env en el directorio backend con la siguiente información, reemplazando los valores según corresponda:

plaintext
Copy code
DB_DATABASE=nombre_de_tu_base_de_datos
DB_USERNAME=usuario_de_postgres
DB_PASSWORD=password_de_postgres
DB_HOST=localhost
Levantar la aplicación

Backend
Desde el directorio backend, inicia el servidor:

bash
Copy code
npm start
Esto iniciará el servidor backend en el puerto 5000 por defecto.

Frontend
Desde el directorio frontend, inicia la aplicación:

bash
Copy code
npm start
Esto iniciará la aplicación frontend y se abrirá en tu navegador por defecto.

Uso

Una vez que la aplicación esté en funcionamiento, puedes acceder a ella desde tu navegador en la dirección http://localhost:3000.

Contribuir

Si deseas contribuir a este proyecto, puedes hacerlo mediante la creación de pull requests. Te agradecemos mucho tus contribuciones.

Problemas

Si encuentras algún problema con la aplicación, por favor abre un issue en el repositorio para que podamos solucionarlo.

