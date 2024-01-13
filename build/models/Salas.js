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
exports.Salas = void 0;
const typeorm_1 = require("typeorm");
const TipoSalas_1 = require("./TipoSalas");
const statusSala_1 = require("./statusSala");
const agendamento_1 = require("./agendamento");
let Salas = class Salas {
    // construtor
    constructor(idSala, nome, qtdPessoas, obs, statusSala, tipoSala, agendamento) {
        this.idSala = idSala,
            this.nome = nome,
            this.qtdPessoas = qtdPessoas,
            this.obs = obs,
            this.statusSala = statusSala,
            this.tipoSala = tipoSala,
            this.agendamento = agendamento;
    }
};
exports.Salas = Salas;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'idSala' }),
    __metadata("design:type", Number)
], Salas.prototype, "idSala", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'nome', length: 70, nullable: false }),
    __metadata("design:type", String)
], Salas.prototype, "nome", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'qtdPessoas', type: 'int', nullable: false }),
    __metadata("design:type", Number)
], Salas.prototype, "qtdPessoas", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 90, nullable: true }),
    __metadata("design:type", String)
], Salas.prototype, "obs", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => statusSala_1.StatusSala),
    (0, typeorm_1.JoinColumn)({ name: 'TipoSalas_idTipoSalas1' }),
    __metadata("design:type", statusSala_1.StatusSala)
], Salas.prototype, "statusSala", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => TipoSalas_1.TipoSalas),
    (0, typeorm_1.JoinColumn)({ name: 'TipoSalas_idTipoSalas1' }),
    __metadata("design:type", TipoSalas_1.TipoSalas)
], Salas.prototype, "tipoSala", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => agendamento_1.Agendamento),
    (0, typeorm_1.JoinColumn)({ name: 'Agendamento_idAgendamento', referencedColumnName: 'idAgendamento' }),
    __metadata("design:type", agendamento_1.Agendamento)
], Salas.prototype, "agendamento", void 0);
exports.Salas = Salas = __decorate([
    (0, typeorm_1.Entity)({ name: 'Salas' }),
    __metadata("design:paramtypes", [Number, String, Number, String, statusSala_1.StatusSala,
        TipoSalas_1.TipoSalas, agendamento_1.Agendamento])
], Salas);
//# sourceMappingURL=salas.js.map