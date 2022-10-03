import express from 'express';
import { saveNewGame, serverHealthCheck } from '../controllers';

const router = express.Router();

router.get('/serverHealthCheck', serverHealthCheck);
router.post('/gameEditor/createNew', saveNewGame);

export const routes = router;
