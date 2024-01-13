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
exports.Telefone = void 0;
const typeorm_1 = require("typeorm");
const Cliente_1 = require("./Cliente");
const funcionario_1 = require("./funcionario");
let Telefone = class Telefone {
    // construtor
    constructor(idTelefone, telefone1, telefone2, cliente, funcionario) {
        this.idTelefone = idTelefone,
            this.telefone1 = telefone1,
            this.telefone2 = telefone2,
            this.cliente = cliente,
            this.funcionario = funcionario;
    }
};
exports.Telefone = Telefone;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'idTelefone' }),
    __metadata("design:type", Number)
], Telefone.prototype, "idTelefone", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'telefone1', length: 45, nullable: false }),
    __metadata("design:type", String)
], Telefone.prototype, "telefone1", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'telefone2', length: 45, nullable: true }),
    __metadata("design:type", String)
], Telefone.prototype, "telefone2", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Cliente_1.Cliente),
    (0, typeorm_1.JoinColumn)({ name: 'Cliente_idCliente' }),
    __metadata("design:type", Cliente_1.Cliente)
], Telefone.prototype, "cliente", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => funcionario_1.Funcionario),
    (0, typeorm_1.JoinColumn)({ name: 'Funcionario_cpf1' }),
    __metadata("design:type", funcionario_1.Funcionario)
], Telefone.prototype, "funcionario", void 0);
exports.Telefone = Telefone = __decorate([
    (0, typeorm_1.Entity)({ name: 'telefone' }),
    __metadata("design:paramtypes", [Number, String, String, Cliente_1.Cliente, funcionario_1.Funcionario])
], Telefone);
//# sourceMappingURL=Telefone.js.map