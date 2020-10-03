# aplicación tipo bancario con Node, Mongodb
Se utilizaron las siguientes tecnologías Javascript, Nodejs, Mongodb, and
- create/read/update/delete para 3 módulos transferencias, depositos y retiros
- login y registro de usuarios

# Screenshot
![](docs/tasks.png)

# Variables 
Las siguientes son las variables a configurar
* `MONGODB_HOST` this is the Mongodb URI string: localhost:
* `MONGODB_DATABASE` Mongodb database name: banco
* `NODE_ENV` node environment

# Docker

Para que el archivo funcione se debe instalar previamente
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
