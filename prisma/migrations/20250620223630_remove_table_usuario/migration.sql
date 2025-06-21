/*
  Warnings:

  - You are about to drop the column `id_usuario` on the `pedidos` table. All the data in the column will be lost.
  - The `id_produto` column on the `pedidos` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the `usuarios` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "pedidos" DROP CONSTRAINT "pedidos_id_usuario_fkey";

-- AlterTable
ALTER TABLE "pedidos" DROP COLUMN "id_usuario",
DROP COLUMN "id_produto",
ADD COLUMN     "id_produto" INTEGER[];

-- DropTable
DROP TABLE "usuarios";

-- CreateTable
CREATE TABLE "carrinhos" (
    "id_carrinho" TEXT NOT NULL,
    "id_produto" INTEGER[],

    CONSTRAINT "carrinhos_pkey" PRIMARY KEY ("id_carrinho")
);
