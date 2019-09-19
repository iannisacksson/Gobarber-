import express from 'express';
import routes from './routes';

import './database';

class App {
  constructor() {
    this.server = express();

    // Chama os dois métados para poderem executar quando necessário
    this.middlewares();
    this.routes();
  }

  // Recebe requisições no formato de JSON
  middlewares() {
    this.server.use(express.json());
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App().server;
