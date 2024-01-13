import { config, dialect } from "../config/db.config";
import "reflect-metadata"
import { DataSource } from "typeorm"
import { StatusCliente } from "../models/statusCliente";
import { Agendamento } from "../models/agendamento";
import { Autorizacao } from "../models/autorizacao";
import { Cliente } from "../models/cliente";
import { ClientePF } from "../models/clientePF";
import { ClientePJ } from "../models/clientePJ";
import { Testemunha_has_Contrato } from "../models/Testemunha_has_Contrato";
import { Testemunha } from "../models/testemunha";
import { Telefone } from "../models/telefone";
import { Contrato } from "../models/contrato";
import { Email } from "../models/email";
import { Endereco } from "../models/endereco";
import { Funcionario } from "../models/funcionario";
import { Login } from "../models/login";
import { Salas } from "../models/salas";
import { StatusSala } from "../models/statusSala";
import { TipoContrato } from "../models/TipoContrato";
import { TipoSalas } from "../models/TipoSalas";
import { Usuario } from "../models/Usuario";



export const AppDataSource = new DataSource({
    type: dialect,
    host: config.HOST,
    port: config.PORT,
    username: config.USER,
    password: config.PASSWORD,
    database: config.DB,
    entities: [Agendamento, Autorizacao, Cliente, ClientePF, ClientePJ, Contrato, Email, Endereco, Funcionario, Login, Salas, 
        StatusCliente, StatusSala, Telefone, Testemunha_has_Contrato, Testemunha, TipoContrato, TipoSalas, Usuario],
    synchronize: false,
    logging: false,
    
})

//Agendamento, Autorizacao, Cliente, ClientePF, ClientePJ, Contrato, Email, Endereco, Funcionario, Login, Salas, 
//StatusCliente, StatusSala, Telefone, Testemunha_has_Contrato, Testemunha, TipoContrato, TipoSalas, Usuario