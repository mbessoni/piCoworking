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
exports.Login = void 0;
const typeorm_1 = require("typeorm");
let Login = class Login {
    // construtor
    constructor(id, login, senha) {
        this.id = id,
            this.login = login,
            this.senha = senha;
    }
};
exports.Login = Login;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'id' }),
    __metadata("design:type", Number)
], Login.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'login', length: 70, nullable: false }),
    __metadata("design:type", String)
], Login.prototype, "login", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'senha', length: 45, nullable: false }),
    __metadata("design:type", String)
], Login.prototype, "senha", void 0);
exports.Login = Login = __decorate([
    (0, typeorm_1.Entity)({ name: 'login' }),
    (0, typeorm_1.Unique)(['login']),
    __metadata("design:paramtypes", [Number, String, String])
], Login);
//# sourceMappingURL=login.js.map