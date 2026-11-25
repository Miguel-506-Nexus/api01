// controllers/clienteController.js
import * as ClienteModel from '../models/clienteModel.js';

// GET /clientes
export const getClientes = (req, res) => {
  const clientes = ClienteModel.listarTodos();
  res.status(200).json(clientes);
};

// GET /clientes/maior-faturamento
export const getClienteMaiorFaturamento = (req, res) => {
  const maiorFaturamento = ClienteModel.buscarMaiorFaturamento();

  if (!maiorFaturamento) {
    return res.status(404).json({ mensagem: 'Nenhum cliente cadastrado.' });
  }

  res.status(200).json(maiorFaturamento);
};

// GET /clientes/categoria/:categoria
export const getClientesPorCategoria = (req, res) => {
  const categoria = req.params.categoria;
  const resultado = ClienteModel.buscarPorCategoria(categoria);

  if (resultado.length === 0) {
    return res.status(404).json({ mensagem: `Nenhum cliente encontrado na categoria ${categoria}` });
  }

  res.status(200).json(resultado);
};

// GET /clientes/:numerocli
export const getClientePorNumero = (req, res) => {
  const numerocli = req.params.numerocli;
  const cliente = ClienteModel.buscarPorNumero(numerocli);

  if (cliente) {
    res.status(200).json(cliente);
  } else {
    res.status(404).json({ mensagem: `Cliente não encontrado com o número ${numerocli}` });
  }
};

// POST /clientes
export const postCliente = (req, res) => {
  const { cliente, categoria, numerocli, faturamento } = req.body;

  if (!cliente || categoria === undefined || numerocli === undefined || faturamento === undefined) {
    return res.status(400).json({ mensagem: 'Todos os campos são obrigatórios' });
  }

  const novoCliente = ClienteModel.criar({ cliente, categoria, numerocli, faturamento });
  res.status(201).json(novoCliente);
};

// PUT /clientes/:numerocli
export const putCliente = (req, res) => {
  const numerocli = req.params.numerocli;
  const { cliente, categoria, faturamento } = req.body;

  const clienteAtualizado = ClienteModel.atualizar(numerocli, { cliente, categoria, faturamento });

  if (!clienteAtualizado) {
    return res.status(404).json({ mensagem: `Cliente não encontrado com o número ${numerocli}` });
  }

  res.status(200).json(clienteAtualizado);
};

// DELETE /clientes/:numerocli
export const deleteCliente = (req, res) => {
  const numerocli = req.params.numerocli;
  const clienteRemovido = ClienteModel.remover(numerocli);

  if (!clienteRemovido) {
    return res.status(404).json({ mensagem: `Cliente não encontrado com o número ${numerocli}` });
  }

  res.status(200).json({ mensagem: 'Cliente removido com sucesso', cliente: clienteRemovido });
};
