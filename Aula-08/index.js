const express = require('express');
const cors = require('cors');
const os = require('os');

const app = express();
app.use(cors());

app.get('/delta', (req, res) => {
    const totalRAM = os.totalmem() / (1024 ** 3);
    const livreRAM = os.freemem() / (1024 ** 3);
    const usoRAM = ((totalRAM - livreRAM) / totalRAM) * 100;

    const dados = {
        hostname: os.hostname(),
        plataforma: os.platform(),
        arquitetura: os.arch(),
        cpuCount: os.cpus().length,
        memoriaTotal: totalRAM.toFixed(2) + " GB",
        memoriaLivre: livreRAM.toFixed(2) + " GB",
        percentualUso: usoRAM.toFixed(2) + "%",
        uptime: (os.uptime() / 60 / 60).toFixed(2) + " horas",
        diretorio: __dirname,
        nodeVersion: process.version
    };
    res.json(dados);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});