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
exports.Usuario = void 0;
const typeorm_1 = require("typeorm");
let Usuario = class Usuario {
    // construtor
    constructor(idUsuario, loginEmail, senha, acessoAdm) {
        this.idUsuario = idUsuario;
        this.loginEmail = loginEmail;
        this.senha = senha;
        this.acessoAdm = acessoAdm;
    }
};
exports.Usuario = Usuario;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'idUsuario' }),
    __metadata("design:type", Number)
], Usuario.prototype, "idUsuario", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'login-email', length: 70, unique: true }),
    __metadata("design:type", String)
], Usuario.prototype, "loginEmail", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'senha', length: 45 }),
    __metadata("design:type", String)
], Usuario.prototype, "senha", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'acessoAdm' }),
    __metadata("design:type", Number)
], Usuario.prototype, "acessoAdm", void 0);
exports.Usuario = Usuario = __decorate([
    (0, typeorm_1.Entity)({ name: 'Usuario' }),
    (0, typeorm_1.Unique)(['loginEmail']),
    __metadata("design:paramtypes", [Number, String, String, Number])
], Usuario);
//# sourceMappingURL=Usuario.js.map