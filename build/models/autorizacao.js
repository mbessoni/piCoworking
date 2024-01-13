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
exports.Autorizacao = void 0;
const typeorm_1 = require("typeorm");
const funcionario_1 = require("./funcionario");
let Autorizacao = class Autorizacao {
    /*
    @Column({name: 'funcionario', length: 45, nullable: false, unique: true })
    funcionario: string;
    */
    // construtor
    constructor(idAutorizacao, tipo, obs, funcionario) {
        this.idAutorizacao = idAutorizacao,
            this.tipo = tipo,
            this.obs = obs,
            this.funcionario = funcionario;
    }
};
exports.Autorizacao = Autorizacao;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'idAutorizacao' }),
    __metadata("design:type", Number)
], Autorizacao.prototype, "idAutorizacao", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'tipo', type: 'tinyint', nullable: false }),
    __metadata("design:type", Number)
], Autorizacao.prototype, "tipo", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'obs', length: 45, nullable: false }),
    __metadata("design:type", String)
], Autorizacao.prototype, "obs", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => funcionario_1.Funcionario),
    (0, typeorm_1.JoinColumn)({ name: 'funcionario_cpf' }),
    __metadata("design:type", funcionario_1.Funcionario)
], Autorizacao.prototype, "funcionario", void 0);
exports.Autorizacao = Autorizacao = __decorate([
    (0, typeorm_1.Entity)({ name: 'autorizacao' }),
    (0, typeorm_1.Unique)(['funcionario']),
    __metadata("design:paramtypes", [Number, Number, String, funcionario_1.Funcionario])
], Autorizacao);
//# sourceMappingURL=autorizacao.js.map