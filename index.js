//este es el index del server de node.js aca se reciben los llamados a la api y con app use se redirige el llamado
//a routes donde determinamos que tipo de requests acepta el servidor y como se cumplen esos requests

import express from "express";
import mongoose from "mongoose";
import bodyparser from "body-parser";
import cors from "cors";
import 'dotenv/config';

import posts from "./routes/posts.js";

const app = express();

const URI = process.env.ATLAS_URI;
const PORT = process.env.PORT || 5000;

app.use('/posts', posts);

app.use(bodyparser.json({ limit: "30mb", extended: true }));
app.use(bodyparser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

mongoose.connect(URI)
    .then(() => app.listen(PORT, () => console.log("server corriendo en puerto: " + PORT)))
    .catch((err) => console.log(err));


