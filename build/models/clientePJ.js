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
exports.ClientePJ = void 0;
const typeorm_1 = require("typeorm");
const Cliente_1 = require("./Cliente");
let ClientePJ = class ClientePJ {
    //contrutor
    constructor(cnpj, razaoSocial, nomeFantasia, dataFundacao, cliente, email, telefone, idCliente) {
        this.cnpj = cnpj,
            this.razaoSocial = razaoSocial,
            this.nomeFantasia = nomeFantasia,
            this.dataFundacao = dataFundacao,
            this.cliente = cliente,
            this.email = email,
            this.telefone = telefone,
            this.idCliente = idCliente;
    }
};
exports.ClientePJ = ClientePJ;
__decorate([
    (0, typeorm_1.PrimaryColumn)({ name: 'cnpj' }),
    __metadata("design:type", Number)
], ClientePJ.prototype, "cnpj", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'razaoSocial', length: 70, nullable: false }),
    __metadata("design:type", String)
], ClientePJ.prototype, "razaoSocial", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'nomeFatasia', length: 70, nullable: false }),
    __metadata("design:type", String)
], ClientePJ.prototype, "nomeFantasia", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'dataFundacao', type: 'date', nullable: false }),
    __metadata("design:type", Date)
], ClientePJ.prototype, "dataFundacao", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => Cliente_1.Cliente),
    (0, typeorm_1.JoinColumn)({ name: 'Cliente_idCliente' }),
    __metadata("design:type", Cliente_1.Cliente)
], ClientePJ.prototype, "cliente", void 0);
exports.ClientePJ = ClientePJ = __decorate([
    (0, typeorm_1.Entity)({ name: 'clientePJ' }),
    __metadata("design:paramtypes", [Number, String, String, Date,
        Cliente_1.Cliente, String, String, Number])
], ClientePJ);
//# sourceMappingURL=clientePJ.js.map