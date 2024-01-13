"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const clientePF_repository_1 = __importDefault(require("../repositories/clientePF.repository"));
class ClientePFController {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!req.body.nome) {
                res.status(400).send({
                    message: "Não pode ser vazio o ClientePF!"
                });
                return;
            }
            try {
                const clientePF = req.body;
                let email = null;
                if (email !== null) {
                    clientePF.cliente.email = email;
                }
                /*
                let emailSgd: string | null
                if (emailSgd !== null) {
                  clientePF.cliente.email = emailSgd;
                }
                */
                let telefone1 = null;
                if (telefone1 !== null) {
                    clientePF.telefone = telefone1;
                }
                let telefone2 = null;
                if (telefone2 !== null) {
                    clientePF.telefone = telefone2;
                }
                const savedclientePF = yield clientePF_repository_1.default.save(clientePF);
                res.status(201).send(savedclientePF);
            }
            catch (err) {
                res.status(500).send({
                    message: "Erro ao tentar salvar um ClientePF."
                });
            }
        });
    }
    findAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const clientesPF = yield clientePF_repository_1.default.retrieveAll();
                res.status(200).send(clientesPF);
            }
            catch (err) {
                res.status(500).send({
                    message: "Erro encontrado quando estava se fazendo a busca por todos os Clientes."
                });
            }
        });
    }
    findOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = parseInt(req.params.id);
            try {
                const clientePF = yield clientePF_repository_1.default.retrieveById(id);
                if (clientePF)
                    res.status(200).send(clientePF);
                else
                    res.status(404).send({
                        message: `Não foi encontrado nenhum ClientePF com esse id=${id}.`
                    });
            }
            catch (err) {
                res.status(500).send({
                    message: `Error não foi possível retornar o ClientePF com id=${id}.`
                });
            }
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let clientePF = req.body;
            clientePF.cpf = parseInt(req.params.cpf);
            try {
                const num = yield clientePF_repository_1.default.update(clientePF);
                if (num == 1) {
                    res.send({
                        message: "ClientePF foi atualizado com sucesso."
                    });
                }
                else {
                    res.send({
                        message: `Não foi possível ataulizar o ClientePF com o id=${clientePF.cpf}. O ClientePF não foi encontrado, ou ele está vazio!`
                    });
                }
            }
            catch (err) {
                res.status(500).send({
                    message: `Error ao atualizar o ClientePF com id=${clientePF.cpf}.`
                });
            }
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = parseInt(req.params.id);
            try {
                const num = yield clientePF_repository_1.default.delete(id);
                if (num == 1) {
                    res.send({
                        message: "ClientePF deletado com sucesso!"
                    });
                }
                else {
                    res.send({
                        message: `Não foi possível deletar o ClientePF com id=${id}. Talvez o ClientePF não tenha sido encontrado.`,
                    });
                }
            }
            catch (err) {
                res.status(500).send({
                    message: `O ClientePF com id==${id}, não pode ser deletado.`
                });
            }
        });
    }
    deleteAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const num = yield clientePF_repository_1.default.deleteAll();
                res.send({ message: `${num} ClientesPF foram deletados com sucesso!` });
            }
            catch (err) {
                res.status(500).send({
                    message: "Algum erro ocorreu enquato deletava todos os ClientesPF."
                });
            }
        });
    }
}
exports.default = ClientePFController;
/*async create(req: Request, res: Response) {
  try {
    const { idCliente, endereco, contrato, cpf, nome, email, telefones } =
      req.body;

    const clientePF = new ClientePF(
      idCliente,
      email ? [new Email(email)] : [],
      telefones ? telefones.map((telefone: any) => new Telefone(telefone)) : [],
      endereco ? new Endereco(endereco) : undefined,
      contrato ? new Contrato(contrato) : undefined,
      // status,
      // dataCadastro,
      // dataAlteracao,
      cpf,
      nome
    );

    const savedClientePF = await clientePFRepository.save(clientePF);

    res.status(201).send(savedClientePF);
  } catch (err) {
    console.error(err);
    res.status(500).send({
      message: "Erro ao tentar criar um cliente PF.",
    });
  }
}

async findAll(req: Request, res: Response) {
  try {
    const clientesPF = await clientePFRepository.retrieveAll();
    res.status(200).send(clientesPF);
  } catch (err) {
    console.error(err);
    res.status(500).send({
      message: "Erro ao buscar clientes PF.",
    });
  }
}

async findOne(req: Request, res: Response) {
  try {
    const idCliente = parseInt(req.params.id);
    const clientePF = await clientePFRepository.retrieveById(idCliente);

    if (clientePF) {
      res.status(200).send(clientePF);
    } else {
      res.status(404).send({
        message: `Cliente PF com id ${idCliente} não encontrado.`,
      });
    }
  } catch (err) {
    console.error(err);
    res.status(500).send({
      message: "Erro ao buscar cliente PF.",
    });
  }
}

async update(req: Request, res: Response) {
  try {
    const idCliente = parseInt(req.params.id);
    const { cpf, nome, endereco, contrato, email, telefones } = req.body;

    const clientePF = new ClientePF(
      idCliente,
      email ? [new Email(email)] : [],
      telefones ? telefones.map((telefone: any) => new Telefone(telefone)) : [],
      endereco ? new Endereco(endereco) : undefined,
      contrato ? new Contrato(contrato) : undefined,
      cpf,
      nome
    );

    const num = await clientePFRepository.update(clientePF);

    if (num === 1) {
      res.status(200).send({
        message: "Cliente PF atualizado com sucesso.",
      });
    } else {
      res.status(404).send({
        message: `Cliente PF com id ${idCliente} não encontrado.`,
      });
    }
  } catch (err) {
    console.error(err);
    res.status(500).send({
      message: "Erro ao atualizar cliente PF.",
    });
  }
}

async delete(req: Request, res: Response) {
  try {
    const idCliente = parseInt(req.params.id);
    const num = await clientePFRepository.delete(idCliente);

    if (num === 1) {
      res.status(200).send({
        message: "Cliente PF deletado com sucesso.",
      });
    } else {
      res.status(404).send({
        message: `Cliente PF com id ${idCliente} não encontrado.`,
      });
    }
  } catch (err) {
    console.error(err);
    res.status(500).send({
      message: "Erro ao deletar cliente PF.",
    });
  }
}

async deleteAll(req: Request, res: Response) {
  try {
    const num = await clientePFRepository.deleteAll();
    res.status(200).send({
      message: `${num} clientes PF foram deletados com sucesso.`,
    });
  } catch (err) {
    console
*/ 
//# sourceMappingURL=clientePF.controller.js.map