/*
  Warnings:

  - The primary key for the `carrinhos` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id_carrinho` on the `carrinhos` table. All the data in the column will be lost.
  - Changed the type of `id_produto` on the `carrinhos` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "carrinhos" DROP CONSTRAINT "carrinhos_pkey",
DROP COLUMN "id_carrinho",
DROP COLUMN "id_produto",
ADD COLUMN     "id_produto" INTEGER NOT NULL,
ADD CONSTRAINT "carrinhos_pkey" PRIMARY KEY ("id_produto");
