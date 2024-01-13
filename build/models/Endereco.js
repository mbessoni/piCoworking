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
exports.Endereco = void 0;
const typeorm_1 = require("typeorm");
const Cliente_1 = require("./Cliente");
let Endereco = class Endereco {
    // construtor
    constructor(idEndereco, uf, cep, cidade, bairro, rua, numero, complemento, obs, cliente) {
        this.IdEndereco = idEndereco,
            this.uf = uf,
            this.cep = cep,
            this.cidade = cidade,
            this.bairro = bairro,
            this.rua = rua,
            this.numero = numero,
            this.complemento = complemento,
            this.obs = obs,
            this.cliente = cliente;
    }
};
exports.Endereco = Endereco;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'idEndereco' }),
    __metadata("design:type", Number)
], Endereco.prototype, "IdEndereco", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'uf', length: 2, nullable: false }),
    __metadata("design:type", String)
], Endereco.prototype, "uf", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'cep', length: 10, nullable: false }),
    __metadata("design:type", String)
], Endereco.prototype, "cep", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'cidade', length: 45, nullable: false }),
    __metadata("design:type", String)
], Endereco.prototype, "cidade", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'bairro', length: 45, nullable: false }),
    __metadata("design:type", String)
], Endereco.prototype, "bairro", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'rua', length: 45, nullable: false }),
    __metadata("design:type", String)
], Endereco.prototype, "rua", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'numero', length: 45, nullable: false }),
    __metadata("design:type", String)
], Endereco.prototype, "numero", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'complemento', length: 45, nullable: false }),
    __metadata("design:type", String)
], Endereco.prototype, "complemento", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'obs', length: 45, nullable: true }),
    __metadata("design:type", String)
], Endereco.prototype, "obs", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Cliente_1.Cliente),
    (0, typeorm_1.JoinColumn)({ name: 'Cliente_idCliente' }),
    __metadata("design:type", Cliente_1.Cliente)
], Endereco.prototype, "cliente", void 0);
exports.Endereco = Endereco = __decorate([
    (0, typeorm_1.Entity)({ name: 'endereco' }),
    __metadata("design:paramtypes", [Number, String, String, String, String, String, String, String, String, Cliente_1.Cliente])
], Endereco);
//# sourceMappingURL=endereco.js.map