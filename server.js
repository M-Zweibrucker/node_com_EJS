const express = require('express');
const app = express();

//primeiro aprametro html e segundo como ele lê
app.set("view engine", "ejs");

//criar rota para ejs

app.get("/", function (req, res) {
    const items = [
        { 
            title : "D",
            message: "Desenvolvimento",
        },
        {
            title : "E",
            message: "Ensino",
        },
        {
            title : "M",
            message: "maneiro",
        },
        {
            title : "A",
            message: "Administração",
        },
        {
            title : "I",
            message: "inteligencia",
        },
        {
            title : "S",
            message: "Sistemas",
        },

    ]
    const subtitle = "linguagem de modelagem de criacao de pagina html utilizando JS"
    res.render("pages/index", {
        qualitys: items,
        subtitle: subtitle,
    });
})


app.get("/sobre", function (req, res) {
    res.render("pages/about");
})

app.listen(8080);

console.log(`rodando`)