class TesteController{

    async listar(req,res){
        return res.json({nsg:"hello"});
    }
}

export default new TesteController();