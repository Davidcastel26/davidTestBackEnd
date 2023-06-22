-- CreateTable
CREATE TABLE `Catedratico` (
    `idCatedratico` VARCHAR(191) NOT NULL,
    `nombreCatedratico` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Catedratico_idCatedratico_key`(`idCatedratico`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Curso` (
    `idCurso` VARCHAR(191) NOT NULL,
    `nombreCurso` VARCHAR(191) NOT NULL,
    `idCarreras` VARCHAR(191) NOT NULL,
    `idGrados` VARCHAR(191) NOT NULL,
    `catedraticoId` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Curso_idCurso_key`(`idCurso`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Estudiante` (
    `idEstudiante` VARCHAR(191) NOT NULL,
    `nombre` VARCHAR(191) NOT NULL,
    `appellido` VARCHAR(191) NOT NULL,
    `Nivel` VARCHAR(191) NOT NULL,
    `Seccion` VARCHAR(191) NOT NULL,
    `cursoId` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Estudiante_idEstudiante_key`(`idEstudiante`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Carrera` (
    `idCarrera` VARCHAR(191) NOT NULL,
    `nombreCarrera` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Carrera_idCarrera_key`(`idCarrera`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Grado` (
    `idGrado` VARCHAR(191) NOT NULL,
    `nombreGrado` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Grado_idGrado_key`(`idGrado`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Curso` ADD CONSTRAINT `Curso_idCarreras_fkey` FOREIGN KEY (`idCarreras`) REFERENCES `Carrera`(`idCarrera`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Curso` ADD CONSTRAINT `Curso_idGrados_fkey` FOREIGN KEY (`idGrados`) REFERENCES `Grado`(`idGrado`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Curso` ADD CONSTRAINT `Curso_catedraticoId_fkey` FOREIGN KEY (`catedraticoId`) REFERENCES `Catedratico`(`idCatedratico`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Estudiante` ADD CONSTRAINT `Estudiante_cursoId_fkey` FOREIGN KEY (`cursoId`) REFERENCES `Curso`(`idCurso`) ON DELETE RESTRICT ON UPDATE CASCADE;
