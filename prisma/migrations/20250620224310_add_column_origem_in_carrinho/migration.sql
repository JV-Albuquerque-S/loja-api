/*
  Warnings:

  - Added the required column `origem` to the `carrinhos` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "carrinhos" ADD COLUMN     "origem" TEXT NOT NULL;
