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
exports.Testemunha = void 0;
const typeorm_1 = require("typeorm");
let Testemunha = class Testemunha {
    // construtor
    constructor(idTestemunha, nome, cpf) {
        this.idTestemunha = idTestemunha;
        this.nome = nome;
        this.cpf = cpf;
    }
};
exports.Testemunha = Testemunha;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'idTestemunha' }),
    __metadata("design:type", Number)
], Testemunha.prototype, "idTestemunha", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'nome', length: 45, nullable: false }),
    __metadata("design:type", String)
], Testemunha.prototype, "nome", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'cpf', length: 14, nullable: true, unique: true }),
    __metadata("design:type", String)
], Testemunha.prototype, "cpf", void 0);
exports.Testemunha = Testemunha = __decorate([
    (0, typeorm_1.Entity)({ name: 'testemunha' }),
    (0, typeorm_1.Unique)(['cpf']),
    __metadata("design:paramtypes", [Number, String, String])
], Testemunha);
//# sourceMappingURL=testemunha.js.map