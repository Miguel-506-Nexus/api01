// routes/clienteRoutes.js
import { Router } from 'express';
import {
  getClientes,
  getClienteMaiorFaturamento,
  getClientesPorCategoria,
  getClientePorNumero,
  postCliente,
  putCliente,
  deleteCliente
} from '../controllers/clienteController.js';

const router = Router();

// O prefixo '/clientes' será definido no arquivo principal (app.js ou index.js)
router.get('/', getClientes);
router.get('/maior-faturamento', getClienteMaiorFaturamento);
router.get('/categoria/:categoria', getClientesPorCategoria);
router.get('/:numerocli', getClientePorNumero);
router.post('/', postCliente);
router.put('/:numerocli', putCliente);
router.delete('/:numerocli', deleteCliente);

export default router;
