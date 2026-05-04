app.get('/delta', (req, res) => {
    // Cálculos de Memória (Requisito Aula 08)
    const totalRAM = os.totalmem() / (1024 ** 3);
    const livreRAM = os.freemem() / (1024 ** 3);
    const usoRAM = ((totalRAM - livreRAM) / totalRAM) * 100;

    const dados = {
        // Informações do Sistema
        hostname: os.hostname(),
        plataforma: os.platform(),
        arquitetura: os.arch(),
        cpuCount: os.cpus().length,
        
        // Monitoramento Dinâmico
        memoriaTotal: totalRAM.toFixed(2) + " GB",
        memoriaLivre: livreRAM.toFixed(2) + " GB",
        percentualUso: usoRAM.toFixed(2) + "%",
        uptime: (os.uptime() / 60 / 60).toFixed(2) + " horas",
        
        // Novos campos da Aula 08
        diretorio: __dirname,
        nodeVersion: process.version
    };
    res.json(dados);
});