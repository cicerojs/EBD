import express , {Router} from 'express';

// instancia do servidor //
const server = express();

// instancia de rotas //
const routes = Router();

// criando rotas no router //
routes.get('/teste', (req,res)=>{
    return res.json("hello");
});

// atribuindo rotas ao servidor //
server.use(routes);

// subindo servidor na porta 3333
server.listen(3333);