import * as JogoModel from '../models/jogoModel.js';

export const getJogos = (req, res) => {
  const jogos = JogoModel.listarTodos();
  res.status(200).json(jogos);
};

export const getJogoPorId = (req, res) => {
  const idjogo = parseInt(req.params.idjogo);
  const jogo = JogoModel.buscarPorId(idjogo);

  if (!jogo) {
    return res.status(404).json({ mensagem: `Jogo com ID ${idjogo} não encontrado.` });
  }

  res.status(200).json(jogo);
};

export const getJogosPorFabricante = (req, res) => {
  const fabricante = req.params.fabricante.trim();
  const resultado = JogoModel.buscarPorFabricante(fabricante);

  if (resultado.length === 0) {
    return res.status(404).json({ mensagem: `Nenhum jogo encontrado para o fabricante ${fabricante}.` });
  }

  res.status(200).json(resultado);
};

export const getJogosPorAno = (req, res) => {
  const anolanc = parseInt(req.params.anolanc);
  const resultado = JogoModel.buscarPorAno(anolanc);

  if (resultado.length === 0) {
    return res.status(404).json({ mensagem: `Nenhum jogo encontrado lançado no ano ${anolanc}.` });
  }

  res.status(200).json(resultado);
};

export const postJogo = (req, res) => {
  const { nomejogo, fabricante, idademin, anolanc } = req.body;

  if (!nomejogo || !fabricante || idademin === undefined || anolanc === undefined) {
    return res.status(400).json({
      mensagem: 'Todos os campos (nomejogo, fabricante, idademin, anolanc) são obrigatórios.'
    });
  }

  const novoJogo = JogoModel.criar({ nomejogo, fabricante, idademin, anolanc });
  res.status(201).json(novoJogo);
};


export const putJogo = (req, res) => {
  const idjogo = parseInt(req.params.idjogo);
  const { nomejogo, fabricante, idademin, anolanc } = req.body;

  if (!nomejogo || !fabricante || idademin === undefined || anolanc === undefined) {
    return res.status(400).json({
      mensagem: 'Todos os campos (nomejogo, fabricante, idademin, anolanc) são obrigatórios.'
    });
  }

  const jogoAtualizado = JogoModel.atualizar(idjogo, { nomejogo, fabricante, idademin, anolanc });

  if (!jogoAtualizado) {
    return res.status(404).json({ mensagem: `Jogo com ID ${idjogo} não encontrado para atualização.` });
  }

  res.status(200).json(jogoAtualizado);
};


export const deleteJogo = (req, res) => {
  const idjogo = parseInt(req.params.idjogo);
  const jogoRemovido = JogoModel.remover(idjogo);

  if (!jogoRemovido) {
    return res.status(404).json({ mensagem: `Jogo com ID ${idjogo} não encontrado para exclusão.` });
  }

  res.status(200).json({
    mensagem: `Jogo com ID ${idjogo} removido com sucesso.`,
    jogo: jogoRemovido
  });
};
