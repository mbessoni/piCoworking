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
exports.ClientePF = void 0;
const typeorm_1 = require("typeorm");
const Cliente_1 = require("./Cliente");
let ClientePF = class ClientePF {
    // construtor
    constructor(cpf, nome, dataNasc, cliente, email, telefone) {
        this.cpf = cpf,
            this.nome = nome,
            this.dataNasc = dataNasc,
            this.cliente = cliente,
            this.email = email,
            this.telefone = telefone;
    }
};
exports.ClientePF = ClientePF;
__decorate([
    (0, typeorm_1.PrimaryColumn)({ name: 'cpf' }),
    __metadata("design:type", Number)
], ClientePF.prototype, "cpf", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'nome', length: 70, nullable: false }),
    __metadata("design:type", String)
], ClientePF.prototype, "nome", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'dataNasc', type: 'date', nullable: false }),
    __metadata("design:type", Date)
], ClientePF.prototype, "dataNasc", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => Cliente_1.Cliente),
    (0, typeorm_1.JoinColumn)({ name: 'Cliente_idCliente' }),
    __metadata("design:type", Cliente_1.Cliente)
], ClientePF.prototype, "cliente", void 0);
exports.ClientePF = ClientePF = __decorate([
    (0, typeorm_1.Entity)({ name: 'clientePF' }),
    __metadata("design:paramtypes", [Number, String, Date, Cliente_1.Cliente, String, String])
], ClientePF);
//# sourceMappingURL=clientePF.js.map