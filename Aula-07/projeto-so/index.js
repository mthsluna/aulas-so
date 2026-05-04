const express = require('express');
const cors = require('cors');
const os = require('os');

const app = express();
app.use(cors());

app.get('/delta', (req, res) => {
    const dados = {
        hostname: os.hostname(),
        plataforma: os.platform(),
        arquitetura: os.arch(),
        totalMemoria: (os.totalmem() / 1024 / 1024 / 1024).toFixed(2) + " GB",
        memoriaLivre: (os.freemem() / 1024 / 1024 / 1024).toFixed(2) + " GB",
        cpus: os.cpus().length
    };
    res.json(dados);
});

app.listen(3000, () => {
    console.log("Servidor rodando em http://localhost:3000");
});