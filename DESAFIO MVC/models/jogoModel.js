const jogos = [
    { idjogo: 1, nomejogo: "GTA VI", fabricante: "Rockstar Games", idademin: 18, anolanc: 2026 },
    { idjogo: 2, nomejogo: "The Sims 4", fabricante: "Electronic Arts", idademin: 12, anolanc: 2014 },
    { idjogo: 3, nomejogo: "Sonic Mania", fabricante: "Sega", idademin: 10, anolanc: 2017 },
    { idjogo: 4, nomejogo: "Minecraft", fabricante: "Mojang", idademin: 10, anolanc: 2011 },
    { idjogo: 5, nomejogo: "Call of Duty: Modern Warfare II", fabricante: "Activision", idademin: 18, anolanc: 2022 }
];

export const listarTodos = () => {
    return jogos;
};

export const buscarPorId = (idjogo) => {
    return jogos.find(j => j.idjogo === idjogo);
};

export const buscarPorFabricante = (fabricante) => {
    return jogos.filter(j =>
        j.fabricante.toLowerCase() === fabricante.toLowerCase()
    );
};

export const buscarPorAno = (ano) => {
    return jogos.filter(j => j.anolanc === ano);
};

export const criar = ({ nomejogo, fabricante, idademin, anolanc }) => {
    const novoJogo = {
        idjogo: jogos.length + 1,
        nomejogo,
        fabricante,
        idademin: parseInt(idademin),
        anolanc: parseInt(anolanc)
    };

    jogos.push(novoJogo);
    return novoJogo;
};

export const atualizar = (idjogo, dados) => {
    const index = jogos.findIndex(j => j.idjogo === idjogo);

    if (index === -1) return null;

    jogos[index] = {
        idjogo,
        nomejogo: dados.nomejogo,
        fabricante: dados.fabricante,
        idademin: parseInt(dados.idademin),
        anolanc: parseInt(dados.anolanc)
    };

    return jogos[index];
};

export const remover = (idjogo) => {
    const index = jogos.findIndex(j => j.idjogo === idjogo);

    if (index === -1) return null;

    const [jogoRemovido] = jogos.splice(index, 1);

    return jogoRemovido;
};
