﻿# Caracteristicas
 
 - Obtener todos los libros en formato Json
-  Crear libros con sus correspondientes campos
-  Easy-to-use
-  Arquitectura MVC  
-  Los usuarios pueden calificar los libros con votaciones unicamente (+1, -1)
-  Facil de modificar y mantener

**Esta Api retorna archivos Json** 
 
 
    Dependencias 
        "body-parser": "^1.19.0",
        "express": "^4.17.1",
        "mongodb": "^3.2.7",
        "mongoose": "^5.6.1"
 
 
 
 ## Uso de la API
 
    bash
        git clone https://github.com/alexander9306/Ranking_Libros_API
        cd Ranking_Libros_API
        cd Seeds
        mongoimpoirt --db booksRankingdb--collection team --file books.json
        cd ..
        npm run start
        

 
 ## Endpoints

| Metodo         | Endpoint            |
|--------------- |---------------------|
| GET            | 'api/libros' - devuelve todos los libros en la base de datos 
| GET            | 'api/libros/ultimos' - devuelve todos los libros en la base de datos organizados por fecha de publicacion
| GET            | 'api/libros/<id>' - devuelve la informacion del libro por su I
| GET            | 'api/libros?<data query>' - Filtra los resultados de acuerdo al query por ejemplo 'autor=Aurelio Baldor'
| DELETE         | '/api/libros/<id>' - Elimina la informacion del libro
| PUT            | '/api/libros/<id>' - Actualiza el libro
| POST           | '/api/libros/' - Crear un libro
  


# Copyright
Developed by Alexander Damaso (c) 2019
