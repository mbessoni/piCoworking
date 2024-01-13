"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const db_config_1 = require("../config/db.config");
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const autorizacao_1 = require("../models/autorizacao");
const Telefone_1 = require("../models/Telefone");
const Email_1 = require("../models/Email");
const funcionario_1 = require("../models/funcionario");
const login_1 = require("../models/login");
exports.AppDataSource = new typeorm_1.DataSource({
    type: db_config_1.dialect,
    host: db_config_1.config.HOST,
    port: db_config_1.config.PORT,
    username: db_config_1.config.USER,
    password: db_config_1.config.PASSWORD,
    database: db_config_1.config.DB,
    entities: [funcionario_1.Funcionario, login_1.Login, autorizacao_1.Autorizacao, Email_1.Email, Telefone_1.Telefone],
    synchronize: true,
    logging: false,
});
//Agendamento, Autorizacao, Cliente, ClientePF, ClientePJ, Contrato, Email, Endereco, Funcionario, Login, Salas, 
//StatusCliente, StatusSala, Telefone, Testemunha_has_Contrato, Testemunha, TipoContrato, TipoSalas, Usuario
//# sourceMappingURL=data-source.js.map