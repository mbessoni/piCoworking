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
exports.TipoContrato = void 0;
const typeorm_1 = require("typeorm");
let TipoContrato = class TipoContrato {
    // construtor
    constructor(idTipoContrato, descricao) {
        this.idTipoContrato = idTipoContrato,
            this.descricao = descricao;
    }
};
exports.TipoContrato = TipoContrato;
__decorate([
    (0, typeorm_1.PrimaryColumn)({ name: 'idTipoContrato' }),
    __metadata("design:type", Number)
], TipoContrato.prototype, "idTipoContrato", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'descricao', length: 80 }),
    __metadata("design:type", String)
], TipoContrato.prototype, "descricao", void 0);
exports.TipoContrato = TipoContrato = __decorate([
    (0, typeorm_1.Entity)({ name: 'TipoContrato' }),
    __metadata("design:paramtypes", [Number, String])
], TipoContrato);
//# sourceMappingURL=TipoContrato.js.map