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
exports.TipoSalas = void 0;
const typeorm_1 = require("typeorm");
let TipoSalas = class TipoSalas {
    // construtor
    constructor(idTipoSalas, tipo) {
        this.idTipoSalas = idTipoSalas;
        this.tipo = tipo;
    }
};
exports.TipoSalas = TipoSalas;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'idTipoSalas' }),
    __metadata("design:type", Number)
], TipoSalas.prototype, "idTipoSalas", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'tipo', length: 80, nullable: false }),
    __metadata("design:type", String)
], TipoSalas.prototype, "tipo", void 0);
exports.TipoSalas = TipoSalas = __decorate([
    (0, typeorm_1.Entity)({ name: 'TipoSalas' }),
    __metadata("design:paramtypes", [Number, String])
], TipoSalas);
//# sourceMappingURL=TipoSalas.js.map