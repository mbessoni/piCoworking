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
exports.Contrato = void 0;
const typeorm_1 = require("typeorm");
let Contrato = class Contrato {
    // construtor
    constructor(idContrato, dataInicio, dataFinal, dataAlteracao, valor, horaSR, horaSC, qtdBaias, salaTrab, testemunha) {
        this.idContrato = idContrato,
            this.dataInicio = dataInicio,
            this.dataFinal = dataFinal,
            this.dataAlteracao = dataAlteracao,
            this.valor = valor,
            this.horaSR = horaSR,
            this.horaSC = horaSC,
            this.qtdBaias = qtdBaias,
            this.salaTrab = salaTrab,
            this.testemunha = testemunha;
    }
};
exports.Contrato = Contrato;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'idContrato' }),
    __metadata("design:type", Number)
], Contrato.prototype, "idContrato", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'dataInicio', type: 'date', nullable: false }),
    __metadata("design:type", Date)
], Contrato.prototype, "dataInicio", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'dataFinal', type: 'date', nullable: false }),
    __metadata("design:type", Date)
], Contrato.prototype, "dataFinal", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'dataAlteracao', type: 'date', nullable: false }),
    __metadata("design:type", Date)
], Contrato.prototype, "dataAlteracao", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'valor', type: 'float', nullable: false }),
    __metadata("design:type", Number)
], Contrato.prototype, "valor", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'horaSR', type: 'int', nullable: false }),
    __metadata("design:type", Number)
], Contrato.prototype, "horaSR", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'horaSC', type: 'int', nullable: false }),
    __metadata("design:type", Number)
], Contrato.prototype, "horaSC", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'qtdBaias', type: 'int', nullable: false }),
    __metadata("design:type", Number)
], Contrato.prototype, "qtdBaias", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'salaTrab', type: 'int', nullable: false }),
    __metadata("design:type", Number)
], Contrato.prototype, "salaTrab", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'testemunha', type: 'int', nullable: false }),
    __metadata("design:type", Number)
], Contrato.prototype, "testemunha", void 0);
exports.Contrato = Contrato = __decorate([
    (0, typeorm_1.Entity)({ name: 'contrato' }),
    __metadata("design:paramtypes", [Number, Date, Date, Date, Number, Number, Number, Number, Number, Number])
], Contrato);
//# sourceMappingURL=contrato.js.map