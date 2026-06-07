import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

import apiRoutes from './routes/api.js';
import { errorHandler } from './middleware/errorHandler.js';
import config from './config/index.js';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Security middleware
app.use(helmet({
  contentSecurityPolicy: false,
  crossOriginEmbedderPolicy: false
}));

// CORS configuration
app.use(cors({
  origin: config.frontendUrl,
  methods: ['GET', 'POST'],
  credentials: true
}));

// Rate limiting
const limiter = rateLimit({
  windowMs: config.rateLimit.windowMs,
  max: config.rateLimit.maxRequests,
  message: { error: 'Too many requests, please try again later.' },
  standardHeaders: true,
  legacyHeaders: false
});
app.use('/api/', limiter);

// Body parsing
app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: true }));

// API routes
app.use('/api', apiRoutes);

// Serve static frontend files in production
if (config.isProduction) {
  const frontendDist = path.join(__dirname, '..', 'frontend', 'dist');
  app.use(express.static(frontendDist));
  
  app.get('*', (req, res) => {
    res.sendFile(path.join(frontendDist, 'index.html'));
  });
}

// 404 handler
app.use((req, res) => {
  res.status(404).json({ 
    error: 'Not Found',
    message: `Route ${req.method} ${req.url} not found`
  });
});

// Error handler
app.use(errorHandler);

// Only start server when running standalone (not as Vercel serverless function)
const isVercel = process.env.VERCEL === '1';

if (!isVercel) {
  app.listen(config.port, () => {
    console.log(`\n╔═══════════════════════════════════════════════════════════╗
║                                                           ║
║   Sitcod3 Lab — Backend Server                            ║
║                                                           ║
║   🌐 Server running on: http://localhost:${config.port}             ║
║   📡 API endpoint:      http://localhost:${config.port}/api         ║
║   🔧 Environment:       ${config.environment}                   ║
║                                                           ║
╚═══════════════════════════════════════════════════════════╝
    `);
  });
}

export default app;
