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
exports.Testemunha_has_Contrato = void 0;
const typeorm_1 = require("typeorm");
const testemunha_1 = require("./testemunha");
const contrato_1 = require("./contrato");
let Testemunha_has_Contrato = class Testemunha_has_Contrato {
    //construtor
    constructor(Testemuna_idTestemunha, Contrato_idContrato, testemunha, contrato) {
        this.Testemunha_idTestemunha = Testemuna_idTestemunha,
            this.Contrato_idContrato = Contrato_idContrato,
            this.testemunha = testemunha,
            this.contrato = contrato;
    }
};
exports.Testemunha_has_Contrato = Testemunha_has_Contrato;
__decorate([
    (0, typeorm_1.PrimaryColumn)({ name: 'Testemunha_idTestemunha' }),
    __metadata("design:type", Number)
], Testemunha_has_Contrato.prototype, "Testemunha_idTestemunha", void 0);
__decorate([
    (0, typeorm_1.PrimaryColumn)({ name: 'Contrato_idContrato' }),
    __metadata("design:type", Number)
], Testemunha_has_Contrato.prototype, "Contrato_idContrato", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => testemunha_1.Testemunha),
    (0, typeorm_1.JoinColumn)({ name: 'Testemunha_idTestemunha' }),
    __metadata("design:type", testemunha_1.Testemunha)
], Testemunha_has_Contrato.prototype, "testemunha", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => contrato_1.Contrato),
    (0, typeorm_1.JoinColumn)({ name: 'Contrato_idContrato' }),
    __metadata("design:type", contrato_1.Contrato)
], Testemunha_has_Contrato.prototype, "contrato", void 0);
exports.Testemunha_has_Contrato = Testemunha_has_Contrato = __decorate([
    (0, typeorm_1.Entity)({ name: 'Testemunha_has_Contrato' }),
    __metadata("design:paramtypes", [Number, Number, testemunha_1.Testemunha, contrato_1.Contrato])
], Testemunha_has_Contrato);
//# sourceMappingURL=Testemunha_has_Contrato.js.map