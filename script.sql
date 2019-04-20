-- -----------------------------------------------------
-- Table `mydb`.`Rol`
-- -----------------------------------------------------
CREATE TABLE `Rol` (
  `id_Rol` INT NOT NULL AUTO_INCREMENT,
  `Nombre_Rol` VARCHAR(20) NOT NULL,
  PRIMARY KEY (`id_Rol`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Usuario`
-- -----------------------------------------------------
CREATE TABLE `Usuario` (
  `id_Usuario` INT NOT NULL AUTO_INCREMENT,
  `Nombre_Usuario` VARCHAR(20) NOT NULL,
  `Clave_Usuario` VARCHAR(20) NOT NULL,
  `Correo_Usuario` VARCHAR(20) NOT NULL,
  `Cedula_Usuario` VARCHAR(20) NOT NULL,
  `Usuario_Usuario` VARCHAR(20) NOT NULL,
  `Apellido_Usuario` VARCHAR(20) NOT NULL,
  `id_Rol` INT NOT NULL,
  PRIMARY KEY (`id_Usuario`),
  INDEX `fk_Usuario_Rol_idx` (`id_Rol` ASC),
  CONSTRAINT `fk_Usuario_Rol`
    FOREIGN KEY (`id_Rol`)
    REFERENCES `programa`.`Rol` (`id_Rol`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Unidad`
-- -----------------------------------------------------
CREATE TABLE `Unidad` (
  `id_Unidad` INT NOT NULL AUTO_INCREMENT,
  `Nombre_Unidad` VARCHAR(50) NOT NULL,
  `Des_Unidad` VARCHAR(100) NULL,
  PRIMARY KEY (`id_Unidad`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Asignacion_Unidad`
-- -----------------------------------------------------
CREATE TABLE `Asignacion_Unidad` (
  `id_Usuario` INT NOT NULL,
  `id_Unidad` INT NOT NULL,
  `Porcentaje_Avance` INT NOT NULL,
  PRIMARY KEY (`id_Usuario`, `id_Unidad`),
  INDEX `fk_Usuario_has_Unidad_Unidad1_idx` (`id_Unidad` ASC),
  INDEX `fk_Usuario_has_Unidad_Usuario1_idx` (`id_Usuario` ASC),
  CONSTRAINT `fk_Usuario_has_Unidad_Usuario1`
    FOREIGN KEY (`id_Usuario`)
    REFERENCES `programa`.`Usuario` (`id_Usuario`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Usuario_has_Unidad_Unidad1`
    FOREIGN KEY (`id_Unidad`)
    REFERENCES `programa`.`Unidad` (`id_Unidad`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;