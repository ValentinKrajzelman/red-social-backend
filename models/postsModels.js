//aca definimos la estructura del objeto que va a ser un document en la mongoDB
//esto se exporta en las routes para crear instancias del modelo que puedan mandarse a atlas, los objetos
//dentro del request mandado desde el frontend hasta el controller deben tener las mismas propiedades que 
//este modelo


import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    title: String,
    message: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    likeCount: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: new Date()
    },
});

const Post = mongoose.model('Post', postSchema);

export default Post;