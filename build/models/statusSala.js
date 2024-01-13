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
exports.StatusSala = void 0;
const typeorm_1 = require("typeorm");
const Salas_1 = require("./Salas");
let StatusSala = class StatusSala {
    // Constructor
    constructor(idStatus, tipo, sala) {
        this.idStatus = idStatus;
        this.tipo = tipo;
        this.sala = sala;
    }
};
exports.StatusSala = StatusSala;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'idStatus' }),
    __metadata("design:type", Number)
], StatusSala.prototype, "idStatus", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'tipo', length: 45, nullable: false }),
    __metadata("design:type", String)
], StatusSala.prototype, "tipo", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Salas_1.Salas),
    (0, typeorm_1.JoinColumn)({ name: 'Salas_idSala' }),
    __metadata("design:type", Salas_1.Salas)
], StatusSala.prototype, "sala", void 0);
exports.StatusSala = StatusSala = __decorate([
    (0, typeorm_1.Entity)({ name: 'statusSalas' }),
    __metadata("design:paramtypes", [Number, String, Salas_1.Salas])
], StatusSala);
//# sourceMappingURL=statusSala.js.map