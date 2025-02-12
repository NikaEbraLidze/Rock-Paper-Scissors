import express from "express";

const app = express();
const port = process.env.PORT || 3000;


app.use(express.static("public"));
app.use(express.urlencoded({extended: true}));

app.set("view engine", "ejs");
app.set("views", "./views");

app.get("/", (req, res) => {
    res.render("home");
});

app.get("/start", (req, res) => {
    res.render("gameinfo");
});

app.get("/game", (req, res) => {
    res.render("game");
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});