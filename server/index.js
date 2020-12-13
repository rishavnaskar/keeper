import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import NoteRoutes from "./routes/routes.js";
import cors from "cors";

const app = express();

app.use(bodyParser.json({limit: '30mb', extended: true}))
app.use(bodyParser.urlencoded({limit: '30mb', extended: true}))
app.use(cors());

app.use("/notes", NoteRoutes);

//MONGO CONNECTION
const connection =
    "mongodb+srv://admin:computermine@cluster0.9963l.mongodb.net/keeperDB?retryWrites=true&w=majority";

const Port = process.env.PORT || 5000;

mongoose
    .connect(connection, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() =>
        app.listen(Port, () => console.log(`Server started successfully on ${Port}`))
    )
    .catch((error) => console.log(error.message));

mongoose.set("useFindAndModify", false);
