//en este archivo hacemos las routes de nuestra api es decir la manera por la que nos podemos comunicar con el backend desde el frontend
//el frontend puede mandar una request al backend y las routes dependiendo del url que se le indique
//se llama un funcion que realizaria distintas tareas como ingresar un contenido a la base de datos o 
//buscar un contenido en la base de datos y enviarlo de nuevo al cliente(el frontend)
//como las funciones de las rutas pueden ser bastante extensas se usa otro archivo que se llama controller para hacer las funciones ahi y 
//despues se las importa

import express from "express";
import { getPost } from './controllers/postsControllers.js'

const router = express.Router();

router.get('/', getPost);

export default router;