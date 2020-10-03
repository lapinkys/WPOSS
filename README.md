# Notes App with Node, Mongodb
This is a software to manage simple Notes on the web using Javascript Technologies like Nodejs, Mongodb, and so on.
This app can:
- create/read/update/delete three transferencias, depositos y retiros
- Allows a user to do log in and save his data


# Screenshot
![](docs/tasks.png)

# Environment Variables
This app needs the following environment Variables
* `MONGODB_HOST` this is the Mongodb URI string: localhost:
* `MONGODB_DATABASE` Mongodb database name: banco
* `NODE_ENV` node environment

# Docker
you can run a container for development
```
npm install 
docker-compose up 
```

# Recursos
* [Materia Bootswatch](https://www.bootstrapcdn.com/bootswatch/)
* [CSS Background uiGradients](https://uigradients.com/#Dull)
* studio 3t for mongodb
* mongodb 
* django


Procedimiento:
1. Descargue el repositorio.
2. Descomprima el archivo
3. Descrompima el archivo noce_modules en la misma carpeta
4. Cree la base de datos banco en mongodb(se utilizo studio 3t for mongodb)
5. Importe la base de datos
6. Ingrese a cmd e ingrese la ruta donde se encuentra el proyecto
7. Para ejecutar el proyecto escriba el comando npm run dev
8. Ingrese al navegador y escriba el enlace localhost:4000
