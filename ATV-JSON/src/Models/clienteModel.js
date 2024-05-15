const conectarBancoDeDados = require('../config/db');

async function insert(cliente) {
    const connection = await conectarBancoDeDados();
    try {

        await connection.beginTransaction();

      
        const res = await connection.query('INSERT INTO cliente (nome, cpf, data_nasc, sexo, estado_civil, email, telefone) VALUES (?, ?, ?, ?, ?, ?, ?)', [cliente.nome, cliente.cpf, cliente.data_nasc, cliente.sexo,cliente.estado_civil, cliente.email,cliente.telefone]);
        console.log('RESULTADO INSERT CLIENTE =>', res);

        await connection.commit();
        console.log('Transação concluída com sucesso.');
    } catch (error) {

        await connection.rollback();
        console.log(error);
        return (error);
    } 
}

async function verificarExistenciaCliente(cpf) {
    const connection = await conectarBancoDeDados();
    try {
        const [rows] = await connection.query('SELECT id FROM cliente WHERE cpf = ?', [cpf]);
        return rows.length > 0; 
    } catch (error) {
        console.error('Erro ao verificar a existência do cliente:', error);
        throw error;
    }
}



module.exports = { insert, verificarExistenciaCliente  };
