//aca estan las funciones que importo en el posts router, por cuestiones de organizacion 
//se separa la logica de las funciones de las routes en si, estas funciones trabajan
//con parametros del request que es lo que se manda desde el frontend, por ejemplo un objeto que hay que guardar 
//en una base de datos 

import Post from "../../models/postsModels.js"

export const getPost = async (req, res) => {
    try {
        const posts = await Post.find()
        res.status(200).json(posts);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const postPost = async (req, res) => {
    const post = req.body;
    const newPost = new Post(post);
    try {
        await newPost.save;
        res.status(200).json('post posteado');
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}
