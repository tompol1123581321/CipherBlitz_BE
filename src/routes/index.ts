import express from 'express';
import { createGameController, serverHealthCheck } from '../controllers';

const router = express.Router();

router.get('/serverHealthCheck', serverHealthCheck);
router.post('/createGame', createGameController);

export const routes = router;
