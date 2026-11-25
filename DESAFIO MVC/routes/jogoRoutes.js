import { Router } from 'express';
import {
  getJogos,
  getJogoPorId,
  getJogosPorFabricante,
  getJogosPorAno,
  postJogo,
  putJogo,
  deleteJogo
} from '../controllers/jogoController.js';

const router = Router();

router.get('/', getJogos);
router.get('/fabricante/:fabricante', getJogosPorFabricante);
router.get('/ano/:anolanc', getJogosPorAno);
router.get('/:idjogo', getJogoPorId);
router.post('/', postJogo);
router.put('/:idjogo', putJogo);
router.delete('/:idjogo', deleteJogo);

export default router;