const express = require("express");
const connectDB = require("./config/db");
const dotenv = require("dotenv").config();
const port = 5010;
const cors = require("cors");
/* const multer = require("multer");
const path = require("path"); */

//connexion à la db
connectDB();
const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
    optionsSuccessStatus: 200,
  })
);
//Middleware qui permet de traiter les données de la requestapp.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//
app.use("/defaultRate", require("./routes/defaultRate.routes"));
app.use("/rate", require("./routes/rate.routes"));
// app.use("/img", require("./routes/img.routes"));
//Upload Images

/* const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/images");
  },
  filename: (req, file, cb) => {
    cb(
      null,
      file.fieldname + "_" + Date.now() + path.extname(file.originalname)
    );
  },
});
const upload = multer({
  storage: storage,
});
app.post("/upload", upload.single("images"), (req, res) => {
  ImgModel.create({ img: req.file.filename })
    .then((result) => res.json(result))
    .catch((err) => console.log(err));
}); */

// lancer le serveur
app.listen(port, () => console.log("le serveur a démarré au port " + port));
