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
exports.Funcionario = void 0;
const typeorm_1 = require("typeorm");
const login_1 = require("./login");
let Funcionario = class Funcionario {
    // construtor
    constructor(cpf, nome, email, telefones, login) {
        this.cpf = cpf,
            this.email = email,
            this.nome = nome;
        this.telefones = telefones,
            this.login = login;
    }
};
exports.Funcionario = Funcionario;
__decorate([
    (0, typeorm_1.PrimaryColumn)({ name: 'cpf' }),
    __metadata("design:type", Number)
], Funcionario.prototype, "cpf", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'nome', length: 45, nullable: false }),
    __metadata("design:type", String)
], Funcionario.prototype, "nome", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'email', length: 45, nullable: false, unique: true }),
    __metadata("design:type", String)
], Funcionario.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'telefone', length: 45, nullable: false, unique: true }),
    __metadata("design:type", String)
], Funcionario.prototype, "telefones", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => login_1.Login),
    (0, typeorm_1.JoinColumn)({ name: 'Login_idLogin' }),
    __metadata("design:type", login_1.Login)
], Funcionario.prototype, "login", void 0);
exports.Funcionario = Funcionario = __decorate([
    (0, typeorm_1.Entity)({ name: 'func' }),
    (0, typeorm_1.Unique)(['email']),
    (0, typeorm_1.Unique)(['telefones']),
    __metadata("design:paramtypes", [Number, String, String, String, login_1.Login])
], Funcionario);
//# sourceMappingURL=funcionario.js.map