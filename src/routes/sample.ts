import express from 'express';
import { serverHealthCheck } from '../controllers/healthCheck/serverHealthCheck';

const router = express.Router();

router.get('/serverHealthCheck', serverHealthCheck);

export const sampleRoutes = router;
