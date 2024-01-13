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
exports.StatusCliente = void 0;
const typeorm_1 = require("typeorm");
let StatusCliente = class StatusCliente {
    // construtor
    constructor(idStatusCliente, tipo) {
        this.idStatusCliente = idStatusCliente;
        this.tipo = tipo;
    }
};
exports.StatusCliente = StatusCliente;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'idStatusCliente' }),
    __metadata("design:type", Number)
], StatusCliente.prototype, "idStatusCliente", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'tipo', length: 90, nullable: false }),
    __metadata("design:type", String)
], StatusCliente.prototype, "tipo", void 0);
exports.StatusCliente = StatusCliente = __decorate([
    (0, typeorm_1.Entity)({ name: 'statusCliente' }),
    __metadata("design:paramtypes", [Number, String])
], StatusCliente);
//# sourceMappingURL=statusCliente.js.map