const express = require("express");
const connectDB = require("./config/db");
const dotenv = require("dotenv").config();
const port = 5010;
//connexion à la db

connectDB();
const app = express();

//Middleware qui permet de traiter les données de la request
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/rate", require("./routes/rate.routes"));

// lancer le serveur
app.listen(port, () => console.log("le serveur a démarré au port " + port));
