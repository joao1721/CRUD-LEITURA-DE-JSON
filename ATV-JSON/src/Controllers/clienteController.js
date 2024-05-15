const Cliente = require('./../Models/Cliente')

const {insert, verificarExistenciaCliente} = require('./../Models/clienteModel');

const clienteController = {
    adicionarCliente: async (req,res) =>{
        try{
            const {nome, data_nasc, cpf, sexo,estado_civil, email,telefone} = req.body;

            const clienteExistente = await verificarExistenciaCliente(cpf); 

            if (clienteExistente) {
                return res.status(400).json({ message: 'Cliente já existe' });
            }

         
            const objCliente = new Cliente(null, nome, data_nasc, cpf, sexo,estado_civil, email, telefone );

 



            const result = await insert(objCliente);
            


        }catch(error){
            console.log(error);
           
            res.json(error);
        }
    }
}

module.exports = clienteController