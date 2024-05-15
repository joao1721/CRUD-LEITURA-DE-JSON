class Cliente {

    constructor(pId, pNome, pData_Nasc, pCpf, pSexo , pEstado_Civil,pEmail, pTelefone) {
        this.id = pId;
        this.nome = pNome;
        this.data_nasc = pData_Nasc
        this.cpf = pCpf;
        this.sexo = pSexo;
        this.estado_civil = pEstado_Civil;
        this.email = pEmail;
        this.telefone = pTelefone;
    }

    get Nome() { return this.nome; }
    set Nome(value) { this.nome = value }
    
    get Data_Nasc() { return this.data_nasc; }
    set Data_Nasc(value) { this.data_nasc = value }

 

    get Cpf() { return this.cpf; }
    set Cpf(value) { this.cpf = value }

    get Sexo() { return this.sexo; }
    set Sexo(value) { this.sexo = value }

    get Estado_Civil() { return this.estado_civil; }
    set Estado_Civil(value) { this.estado_civil = value }

    get Telefone() { return this.telefone; }
    set Telefone(value) { this.telefone = value }


   



}

module.exports = Cliente;