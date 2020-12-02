import {Router} from 'express';
import TesteController from './app/controllers/TesteController';

const routes = new Router();


routes.get("/testes" , TesteController.listar);


export default routes;
