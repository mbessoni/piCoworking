-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 ;
-- -----------------------------------------------------
-- Schema picoworking
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema picoworking
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `picoworking` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `mydb` ;

-- -----------------------------------------------------
-- Table `mydb`.`tipoAutorizacao`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`tipoAutorizacao` (
  `idtipoAutorizacao` INT NOT NULL,
  `tipoAutorizacao` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idtipoAutorizacao`))
ENGINE = InnoDB;

USE `picoworking` ;

-- -----------------------------------------------------
-- Table `picoworking`.`funcionario`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `picoworking`.`funcionario` (
  `cpf` INT NOT NULL,
  `nome` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `telefones` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`cpf`),
  UNIQUE INDEX `IDX_6b76bc03060737405ae6a66301` (`telefones` ASC) VISIBLE,
  UNIQUE INDEX `IDX_f868493b618f6780e84ea266e5` (`email` ASC) VISIBLE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `picoworking`.`autorizacao`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `picoworking`.`autorizacao` (
  `idAutorizacao` INT NOT NULL AUTO_INCREMENT,
  `obs` VARCHAR(45) NOT NULL,
  `dataAutorizacao` DATE NULL,
  `funcionario_cpf` INT NULL DEFAULT NULL,
  `tipoAutorizacao_idtipoAutorizacao` INT NOT NULL,
  PRIMARY KEY (`idAutorizacao`),
  UNIQUE INDEX `IDX_4fd4304856e95b7136a8e9bdd2` (`funcionario_cpf` ASC) VISIBLE,
  INDEX `fk_autorizacao_tipoAutorizacao1_idx` (`tipoAutorizacao_idtipoAutorizacao` ASC) VISIBLE,
  CONSTRAINT `FK_4fd4304856e95b7136a8e9bdd2a`
    FOREIGN KEY (`funcionario_cpf`)
    REFERENCES `picoworking`.`funcionario` (`cpf`),
  CONSTRAINT `fk_autorizacao_tipoAutorizacao1`
    FOREIGN KEY (`tipoAutorizacao_idtipoAutorizacao`)
    REFERENCES `mydb`.`tipoAutorizacao` (`idtipoAutorizacao`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `picoworking`.`tiposalas`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `picoworking`.`tiposalas` (
  `idTipoSalas` INT NOT NULL AUTO_INCREMENT,
  `tipo` VARCHAR(80) NOT NULL,
  PRIMARY KEY (`idTipoSalas`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `picoworking`.`statussalas`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `picoworking`.`statussalas` (
  `idStatus` INT NOT NULL AUTO_INCREMENT,
  `tipo` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idStatus`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `picoworking`.`salas`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `picoworking`.`salas` (
  `idSala` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(70) NOT NULL,
  `qtdPessoas` INT NOT NULL,
  `obs` VARCHAR(90) NULL DEFAULT NULL,
  `StatusSalas_idStatus1` INT NULL DEFAULT NULL,
  `TipoSalas_idTipoSalas1` INT NULL DEFAULT NULL,
  PRIMARY KEY (`idSala`),
  INDEX `FK_f3c53a24a57c9a8973bc3626cee` (`StatusSalas_idStatus1` ASC) VISIBLE,
  INDEX `FK_e968fa2a163171222613b6bdc15` (`TipoSalas_idTipoSalas1` ASC) VISIBLE,
  CONSTRAINT `FK_e968fa2a163171222613b6bdc15`
    FOREIGN KEY (`TipoSalas_idTipoSalas1`)
    REFERENCES `picoworking`.`tiposalas` (`idTipoSalas`),
  CONSTRAINT `FK_f3c53a24a57c9a8973bc3626cee`
    FOREIGN KEY (`StatusSalas_idStatus1`)
    REFERENCES `picoworking`.`statussalas` (`idStatus`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `picoworking`.`statuscliente`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `picoworking`.`statuscliente` (
  `idStatusCliente` INT NOT NULL AUTO_INCREMENT,
  `tipo` VARCHAR(90) NOT NULL,
  PRIMARY KEY (`idStatusCliente`))
ENGINE = InnoDB
AUTO_INCREMENT = 5
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `picoworking`.`cliente`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `picoworking`.`cliente` (
  `idCliente` INT NOT NULL AUTO_INCREMENT,
  `email` VARCHAR(45) NOT NULL,
  `telefone` VARCHAR(45) NOT NULL,
  `endereco` VARCHAR(45) NOT NULL,
  `contrato` VARCHAR(45) NOT NULL,
  `StatusCliente_idStatusCliente` INT NULL DEFAULT NULL,
  PRIMARY KEY (`idCliente`),
  UNIQUE INDEX `IDX_94f6ee8f4dddf99c9fc0c3156b` (`telefone` ASC) VISIBLE,
  UNIQUE INDEX `IDX_503f81286c5e49acd6a832abf4` (`email` ASC) VISIBLE,
  INDEX `FK_66dfb90840ce99722ff3f1479fe` (`StatusCliente_idStatusCliente` ASC) VISIBLE,
  CONSTRAINT `FK_66dfb90840ce99722ff3f1479fe`
    FOREIGN KEY (`StatusCliente_idStatusCliente`)
    REFERENCES `picoworking`.`statuscliente` (`idStatusCliente`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `picoworking`.`usuario`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `picoworking`.`usuario` (
  `idUsuario` INT NOT NULL AUTO_INCREMENT,
  `login` VARCHAR(70) NOT NULL,
  `senha` VARCHAR(45) NOT NULL,
  `tipoUsuario` TINYINT NOT NULL,
  `acessoAdm` TINYINT NOT NULL,
  `funcionario_cpf` INT NOT NULL,
  `cliente_idCliente` INT NOT NULL,
  PRIMARY KEY (`idUsuario`),
  UNIQUE INDEX `IDX_4f59ed0a82c355222163b1139a` (`login` ASC) VISIBLE,
  INDEX `fk_usuario_funcionario1_idx` (`funcionario_cpf` ASC) VISIBLE,
  INDEX `fk_usuario_cliente1_idx` (`cliente_idCliente` ASC) VISIBLE,
  CONSTRAINT `fk_usuario_funcionario1`
    FOREIGN KEY (`funcionario_cpf`)
    REFERENCES `picoworking`.`funcionario` (`cpf`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_usuario_cliente1`
    FOREIGN KEY (`cliente_idCliente`)
    REFERENCES `picoworking`.`cliente` (`idCliente`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `picoworking`.`agendamento`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `picoworking`.`agendamento` (
  `idAgendamento` INT NOT NULL AUTO_INCREMENT,
  `horaInicio` TIME NOT NULL,
  `horaFim` TIME NOT NULL,
  `data` DATE NOT NULL,
  `salaTrab` VARCHAR(45) NOT NULL,
  `login` VARCHAR(45) NOT NULL,
  `dataRequisicao` DATE NOT NULL,
  `dataAlteracao` DATE NOT NULL,
  `Login_idLogin` INT NULL DEFAULT NULL,
  `autorizacao_idAutorizacao` INT NOT NULL,
  `salas_idSala` INT NOT NULL,
  `usuario_idUsuario` INT NOT NULL,
  PRIMARY KEY (`idAgendamento`),
  INDEX `fk_agendamento_autorizacao1_idx` (`autorizacao_idAutorizacao` ASC) VISIBLE,
  INDEX `fk_agendamento_salas1_idx` (`salas_idSala` ASC) VISIBLE,
  INDEX `fk_agendamento_usuario1_idx` (`usuario_idUsuario` ASC) VISIBLE,
  CONSTRAINT `fk_agendamento_autorizacao1`
    FOREIGN KEY (`autorizacao_idAutorizacao`)
    REFERENCES `picoworking`.`autorizacao` (`idAutorizacao`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_agendamento_salas1`
    FOREIGN KEY (`salas_idSala`)
    REFERENCES `picoworking`.`salas` (`idSala`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_agendamento_usuario1`
    FOREIGN KEY (`usuario_idUsuario`)
    REFERENCES `picoworking`.`usuario` (`idUsuario`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
AUTO_INCREMENT = 5
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `picoworking`.`clientepf`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `picoworking`.`clientepf` (
  `cpf` INT NOT NULL,
  `nome` VARCHAR(70) NOT NULL,
  `dataNasc` DATE NOT NULL,
  `Cliente_idCliente` INT NULL DEFAULT NULL,
  PRIMARY KEY (`cpf`),
  UNIQUE INDEX `REL_9c55a69cf7a91d08de0afd3090` (`Cliente_idCliente` ASC) VISIBLE,
  CONSTRAINT `FK_9c55a69cf7a91d08de0afd3090f`
    FOREIGN KEY (`Cliente_idCliente`)
    REFERENCES `picoworking`.`cliente` (`idCliente`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `picoworking`.`clientepj`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `picoworking`.`clientepj` (
  `cnpj` INT NOT NULL,
  `razaoSocial` VARCHAR(70) NOT NULL,
  `nomeFatasia` VARCHAR(70) NOT NULL,
  `dataFundacao` DATE NOT NULL,
  `Cliente_idCliente` INT NULL DEFAULT NULL,
  PRIMARY KEY (`cnpj`),
  UNIQUE INDEX `REL_564c1a2ee8dda8d71afceba5be` (`Cliente_idCliente` ASC) VISIBLE,
  CONSTRAINT `FK_564c1a2ee8dda8d71afceba5be3`
    FOREIGN KEY (`Cliente_idCliente`)
    REFERENCES `picoworking`.`cliente` (`idCliente`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `picoworking`.`tipocontrato`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `picoworking`.`tipocontrato` (
  `idTipoContrato` INT NOT NULL,
  `descricao` VARCHAR(80) NOT NULL,
  PRIMARY KEY (`idTipoContrato`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `picoworking`.`contrato`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `picoworking`.`contrato` (
  `idContrato` INT NOT NULL AUTO_INCREMENT,
  `dataInicio` DATE NOT NULL,
  `dataFinal` DATE NOT NULL,
  `dataAlteracao` DATE NOT NULL,
  `valor` FLOAT NOT NULL,
  `horaSR` INT NOT NULL,
  `horaSC` INT NOT NULL,
  `qtdBaias` INT NOT NULL,
  `salaTrab` INT NOT NULL,
  `testemunha` INT NOT NULL,
  `tipocontrato_idTipoContrato` INT NOT NULL,
  `cliente_idCliente` INT NOT NULL,
  PRIMARY KEY (`idContrato`),
  INDEX `fk_contrato_tipocontrato1_idx` (`tipocontrato_idTipoContrato` ASC) VISIBLE,
  INDEX `fk_contrato_cliente1_idx` (`cliente_idCliente` ASC) VISIBLE,
  CONSTRAINT `fk_contrato_tipocontrato1`
    FOREIGN KEY (`tipocontrato_idTipoContrato`)
    REFERENCES `picoworking`.`tipocontrato` (`idTipoContrato`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_contrato_cliente1`
    FOREIGN KEY (`cliente_idCliente`)
    REFERENCES `picoworking`.`cliente` (`idCliente`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `picoworking`.`email`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `picoworking`.`email` (
  `idEmail` INT NOT NULL AUTO_INCREMENT,
  `email` VARCHAR(45) NULL DEFAULT NULL,
  `email1` VARCHAR(45) NOT NULL,
  `Cliente_idCliente` INT NULL DEFAULT NULL,
  `Funcionario_cpf` INT NULL DEFAULT NULL,
  PRIMARY KEY (`idEmail`),
  INDEX `FK_84aa13c24755dd052616b057f33` (`Cliente_idCliente` ASC) VISIBLE,
  INDEX `FK_aed2339d869152829f1aefa41bf` (`Funcionario_cpf` ASC) VISIBLE,
  CONSTRAINT `FK_84aa13c24755dd052616b057f33`
    FOREIGN KEY (`Cliente_idCliente`)
    REFERENCES `picoworking`.`cliente` (`idCliente`),
  CONSTRAINT `FK_aed2339d869152829f1aefa41bf`
    FOREIGN KEY (`Funcionario_cpf`)
    REFERENCES `picoworking`.`funcionario` (`cpf`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `picoworking`.`endereco`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `picoworking`.`endereco` (
  `idEndereco` INT NOT NULL AUTO_INCREMENT,
  `uf` VARCHAR(2) NOT NULL,
  `cep` VARCHAR(10) NOT NULL,
  `cidade` VARCHAR(45) NOT NULL,
  `bairro` VARCHAR(45) NOT NULL,
  `rua` VARCHAR(45) NOT NULL,
  `numero` VARCHAR(45) NOT NULL,
  `complemento` VARCHAR(45) NOT NULL,
  `obs` VARCHAR(45) NULL DEFAULT NULL,
  `cliente_idCliente` INT NOT NULL,
  PRIMARY KEY (`idEndereco`),
  INDEX `fk_endereco_cliente1_idx` (`cliente_idCliente` ASC) VISIBLE,
  CONSTRAINT `fk_endereco_cliente1`
    FOREIGN KEY (`cliente_idCliente`)
    REFERENCES `picoworking`.`cliente` (`idCliente`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `picoworking`.`telefone`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `picoworking`.`telefone` (
  `idTelefone` INT NOT NULL AUTO_INCREMENT,
  `telefone1` VARCHAR(45) NOT NULL,
  `telefone2` VARCHAR(45) NULL DEFAULT NULL,
  `Cliente_idCliente` INT NULL DEFAULT NULL,
  `Funcionario_cpf1` INT NULL DEFAULT NULL,
  PRIMARY KEY (`idTelefone`),
  INDEX `FK_4169829a1250a21a901f78e8a7b` (`Cliente_idCliente` ASC) VISIBLE,
  INDEX `FK_968f75c4ad5cb91a2b4a26ac755` (`Funcionario_cpf1` ASC) VISIBLE,
  CONSTRAINT `FK_4169829a1250a21a901f78e8a7b`
    FOREIGN KEY (`Cliente_idCliente`)
    REFERENCES `picoworking`.`cliente` (`idCliente`),
  CONSTRAINT `FK_968f75c4ad5cb91a2b4a26ac755`
    FOREIGN KEY (`Funcionario_cpf1`)
    REFERENCES `picoworking`.`funcionario` (`cpf`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `picoworking`.`testemunha`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `picoworking`.`testemunha` (
  `idTestemunha` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(45) NOT NULL,
  `cpf` VARCHAR(14) NULL DEFAULT NULL,
  PRIMARY KEY (`idTestemunha`),
  UNIQUE INDEX `IDX_44d25fc4af495e6240411e3cd6` (`cpf` ASC) VISIBLE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `picoworking`.`testemunha_has_contrato`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `picoworking`.`testemunha_has_contrato` (
  `Testemunha_idTestemunha` INT NOT NULL,
  `Contrato_idContrato` INT NOT NULL,
  PRIMARY KEY (`Testemunha_idTestemunha`, `Contrato_idContrato`),
  INDEX `FK_ca70891cf68e1a74c1a9b028bce` (`Contrato_idContrato` ASC) VISIBLE,
  CONSTRAINT `FK_277cfd55db4548c68073cc404f4`
    FOREIGN KEY (`Testemunha_idTestemunha`)
    REFERENCES `picoworking`.`testemunha` (`idTestemunha`),
  CONSTRAINT `FK_ca70891cf68e1a74c1a9b028bce`
    FOREIGN KEY (`Contrato_idContrato`)
    REFERENCES `picoworking`.`contrato` (`idContrato`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
