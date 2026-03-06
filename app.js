const express = require("express");
const app = express();
const clientes = require("./clientes.json");

app.use(express.json());

app.get("/creditos", (req, res) => {
    const creditosActivos = clientes.filter(c => c.activo === true);
    res.json(creditosActivos);
});

app.get("/creditos/:importe", (req, res) => {
    const importe = parseFloat(req.params.importe);
    const creditos = clientes.filter(c => 
        c.activo === true && c.credito > importe
    );
    res.json(creditos);
});

app.get("/creditos-cliente/:id", (req, res) => {
    const id = req.params.id;
    const cliente = clientes.filter(c => c.id === id);
    res.json(cliente);
});

app.listen(3000, () => {
    console.log("Servidor corriendo en puerto 3000");
});