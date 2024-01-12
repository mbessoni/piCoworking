import { config, dialect } from "../config/db.config";
import "reflect-metadata"
import { DataSource } from "typeorm"
import { StatusCliente } from "../models/statusCliente";
import { Agendamento } from "../models/Agendamento";
import { Autorizacao } from "../models/autorizacao";
import { Cliente } from "../models/Cliente";
import { ClientePF } from "../models/clientePF";
import { ClientePJ } from "../models/clientePJ";
import { Testemunha_has_Contrato } from "../models/Testemunha_has_Contrato";
import { Testemunha } from "../models/Testemunha";
import { Telefone } from "../models/Telefone";
import { Contrato } from "../models/Contrato";
import { Email } from "../models/Email";
import { Endereco } from "../models/Endereco";
import { Funcionario } from "../models/funcionario";
import { Login } from "../models/login";
import { Salas } from "../models/Salas";
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
    entities: [],
    synchronize: true,
    logging: false,
    
})

//Agendamento, Autorizacao, Cliente, ClientePF, ClientePJ, Contrato, Email, Endereco, Funcionario, Login, Salas, 
//StatusCliente, StatusSala, Telefone, Testemunha_has_Contrato, Testemunha, TipoContrato, TipoSalas, Usuario