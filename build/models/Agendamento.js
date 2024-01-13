"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Agendamento = void 0;
const typeorm_1 = require("typeorm");
const login_1 = require("./login");
let Agendamento = class Agendamento {
    // construtor
    constructor(idAgendamento, horaInicio, horaFim, data, salaTrab, autorizacao, login, dataRequisicao, dataAlteracao, loginObj) {
        this.idAgendamento = idAgendamento,
            this.horaInicio = horaInicio,
            this.horaFim = horaFim,
            this.data = data,
            this.salaTrab = salaTrab,
            this.autorizacao = autorizacao,
            this.login = login,
            this.dataRequisicao = dataRequisicao,
            this.dataAlteracao = dataAlteracao,
            this.loginObj = loginObj;
    }
};
exports.Agendamento = Agendamento;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'idAgendamento' }),
    __metadata("design:type", Number)
], Agendamento.prototype, "idAgendamento", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'horaInicio', type: 'time', nullable: false }),
    __metadata("design:type", String)
], Agendamento.prototype, "horaInicio", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'horaFim', type: 'time', nullable: false }),
    __metadata("design:type", String)
], Agendamento.prototype, "horaFim", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'data', type: 'date', nullable: false }),
    __metadata("design:type", Date)
], Agendamento.prototype, "data", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'salaTrab', length: 45, nullable: false }),
    __metadata("design:type", String)
], Agendamento.prototype, "salaTrab", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'autorizacao', length: 45, nullable: false }),
    __metadata("design:type", String)
], Agendamento.prototype, "autorizacao", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'login', length: 45, nullable: false }),
    __metadata("design:type", String)
], Agendamento.prototype, "login", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'dataRequisicao', type: 'date', nullable: false }),
    __metadata("design:type", Date)
], Agendamento.prototype, "dataRequisicao", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'dataAlteracao', type: 'date', nullable: false }),
    __metadata("design:type", Date)
], Agendamento.prototype, "dataAlteracao", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => login_1.Login),
    (0, typeorm_1.JoinColumn)({ name: 'Login_idLogin' }),
    __metadata("design:type", login_1.Login)
], Agendamento.prototype, "loginObj", void 0);
exports.Agendamento = Agendamento = __decorate([
    (0, typeorm_1.Entity)({ name: 'agendamento' }),
    __metadata("design:paramtypes", [Number, String, String, Date, String, String, String, Date, Date, login_1.Login])
], Agendamento);
//# sourceMappingURL=agendamento.js.map