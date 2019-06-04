drop database programa;
create database programa;
use programa;
CREATE TABLE `unidad` (
  `id_Unidad` INT(11) NOT NULL AUTO_INCREMENT,
  `Nombre_Unidad` VARCHAR(50) NOT NULL,
  `Des_Unidad` VARCHAR(100) NULL DEFAULT NULL,
  PRIMARY KEY (`id_Unidad`))
ENGINE = InnoDB
AUTO_INCREMENT = 11
DEFAULT CHARACTER SET = latin1;


-- -----------------------------------------------------
-- Table `mydb`.`pregunta`
-- -----------------------------------------------------
CREATE TABLE `pregunta` (
  `id_pregunta` INT NOT NULL AUTO_INCREMENT,
  `Desc_Pregunta` VARCHAR(200) NOT NULL,
  `opc1_pregunta` VARCHAR(100) NOT NULL,
  `Opc2_Pregunta` VARCHAR(100) NOT NULL,
  `Opc3_Pregunta` VARCHAR(100) NULL,
  `Respuesta_Pregunta` INT(11) NOT NULL,
  `id_Unidad` INT(11) NOT NULL,
  PRIMARY KEY (`id_pregunta`),
  INDEX `fk_pregunta_unidad_idx` (`id_Unidad` ASC),
  CONSTRAINT `fk_pregunta_unidad`
    FOREIGN KEY (`id_Unidad`)
    REFERENCES `programa`.`unidad` (`id_Unidad`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

USE `programa` ;

-- -----------------------------------------------------
-- Table `programa`.`rol`
-- -----------------------------------------------------
CREATE TABLE `rol` (
  `id_Rol` INT(11) NOT NULL AUTO_INCREMENT,
  `Nombre_Rol` VARCHAR(20) NOT NULL,
  PRIMARY KEY (`id_Rol`))
ENGINE = InnoDB
AUTO_INCREMENT = 3
DEFAULT CHARACTER SET = latin1;


-- -----------------------------------------------------
-- Table `programa`.`usuario`
-- -----------------------------------------------------
CREATE TABLE `usuario` (
  `id_Usuario` INT(11) NOT NULL AUTO_INCREMENT,
  `Nombre_Usuario` VARCHAR(20) NOT NULL,
  `Clave_Usuario` VARCHAR(20) NOT NULL,
  `Correo_Usuario` VARCHAR(20) NOT NULL,
  `Cedula_Usuario` INT(11) NOT NULL,
  `Usuario_Usuario` VARCHAR(20) NOT NULL,
  `Apellido_Usuario` VARCHAR(20) NOT NULL,
  `id_Rol` INT(11) NOT NULL,
  PRIMARY KEY (`id_Usuario`),
  INDEX `fk_Usuario_Rol_idx` (`id_Rol` ASC),
  CONSTRAINT `fk_Usuario_Rol`
    FOREIGN KEY (`id_Rol`)
    REFERENCES `programa`.`rol` (`id_Rol`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
AUTO_INCREMENT = 5
DEFAULT CHARACTER SET = latin1;


-- -----------------------------------------------------
-- Table `programa`.`asignacion_unidad`
-- -----------------------------------------------------
CREATE TABLE `asignacion_unidad` (
  `id_Usuario` INT(11) NOT NULL,
  `id_Unidad` INT(11) NOT NULL,
  `Porcentaje_Avance` INT(11) NOT NULL,
  PRIMARY KEY (`id_Usuario`, `id_Unidad`),
  INDEX `fk_Usuario_has_Unidad_Unidad1_idx` (`id_Unidad` ASC),
  INDEX `fk_Usuario_has_Unidad_Usuario1_idx` (`id_Usuario` ASC),
  CONSTRAINT `fk_Usuario_has_Unidad_Unidad1`
    FOREIGN KEY (`id_Unidad`)
    REFERENCES `programa`.`unidad` (`id_Unidad`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Usuario_has_Unidad_Usuario1`
    FOREIGN KEY (`id_Usuario`)
    REFERENCES `programa`.`usuario` (`id_Usuario`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = latin1;
