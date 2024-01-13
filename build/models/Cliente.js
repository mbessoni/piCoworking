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
exports.Cliente = void 0;
const typeorm_1 = require("typeorm");
const statusCliente_1 = require("./statusCliente");
const login_1 = require("./login");
let Cliente = class Cliente {
    // constructor
    constructor(idCliente, email, telefone, endereco, contrato, statusCliente, login) {
        this.idCliente = idCliente,
            this.email = email,
            this.telefone = telefone,
            this.endereco = endereco,
            this.contrato = contrato,
            this.statusCliente = statusCliente,
            this.login = login;
    }
};
exports.Cliente = Cliente;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'idCliente' }),
    __metadata("design:type", Number)
], Cliente.prototype, "idCliente", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'email', length: 45, nullable: false }),
    __metadata("design:type", String)
], Cliente.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'telefone', length: 45, nullable: false }),
    __metadata("design:type", String)
], Cliente.prototype, "telefone", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'endereco', length: 45, nullable: false }),
    __metadata("design:type", String)
], Cliente.prototype, "endereco", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'contrato', length: 45, nullable: false }),
    __metadata("design:type", String)
], Cliente.prototype, "contrato", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => statusCliente_1.StatusCliente),
    (0, typeorm_1.JoinColumn)({ name: 'StatusCliente_idStatusCliente' }),
    __metadata("design:type", statusCliente_1.StatusCliente)
], Cliente.prototype, "statusCliente", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => login_1.Login),
    (0, typeorm_1.JoinColumn)({ name: 'Login_idLogin1' }),
    __metadata("design:type", login_1.Login)
], Cliente.prototype, "login", void 0);
exports.Cliente = Cliente = __decorate([
    (0, typeorm_1.Entity)({ name: 'cliente' }),
    (0, typeorm_1.Unique)(['email']),
    (0, typeorm_1.Unique)(['telefone']),
    __metadata("design:paramtypes", [Number, String, String, String, String, statusCliente_1.StatusCliente, login_1.Login])
], Cliente);
//# sourceMappingURL=cliente.js.map