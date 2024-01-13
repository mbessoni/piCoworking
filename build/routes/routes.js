"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const home_routes_1 = __importDefault(require("./home.routes"));
const cliente_routes_1 = __importDefault(require("./cliente.routes"));
const telefone_routes_1 = __importDefault(require("./telefone.routes"));
const email_routes_1 = __importDefault(require("./email.routes"));
const agendamento_routes_1 = __importDefault(require("./agendamento.routes"));
const autorizacao_routes_1 = __importDefault(require("./autorizacao.routes"));
const clientePF_routes_1 = __importDefault(require("./clientePF.routes"));
const clientePJ_routes_1 = __importDefault(require("./clientePJ.routes"));
const contrato_routes_1 = __importDefault(require("./contrato.routes"));
const endereco_routes_1 = __importDefault(require("./endereco.routes"));
const funcionario_routes_1 = __importDefault(require("./funcionario.routes"));
const login_routes_1 = __importDefault(require("./login.routes"));
const sala_routes_1 = __importDefault(require("./sala.routes"));
const statusCliente_routes_1 = __importDefault(require("./statusCliente.routes"));
const statusSala_routes_1 = __importDefault(require("./statusSala.routes"));
const testemunha_routes_1 = __importDefault(require("./testemunha.routes"));
const tipoSala_routes_1 = __importDefault(require("./tipoSala.routes"));
class Routes {
    constructor(app) {
        app.use("/coworking", home_routes_1.default);
        app.use("/coworking", cliente_routes_1.default);
        app.use("/coworking", telefone_routes_1.default);
        app.use("/coworking", email_routes_1.default);
        app.use("/coworking", agendamento_routes_1.default);
        app.use("/coworking", autorizacao_routes_1.default);
        app.use("/coworking", clientePF_routes_1.default);
        app.use("/coworking", clientePJ_routes_1.default);
        app.use("/coworking", contrato_routes_1.default);
        app.use("/coworking", endereco_routes_1.default);
        app.use("/coworking", funcionario_routes_1.default);
        app.use("/coworking", login_routes_1.default);
        app.use("/coworking", sala_routes_1.default);
        app.use("/coworking", statusCliente_routes_1.default);
        app.use("/coworking", statusSala_routes_1.default);
        app.use("/coworking", testemunha_routes_1.default);
        app.use("/coworking", tipoSala_routes_1.default);
    }
}
exports.default = Routes;
//# sourceMappingURL=routes.js.map