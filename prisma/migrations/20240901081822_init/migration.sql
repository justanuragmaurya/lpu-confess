/*
  Warnings:

  - You are about to drop the column `authorId` on the `Confessions` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Confessions" DROP CONSTRAINT "Confessions_authorId_fkey";

-- AlterTable
ALTER TABLE "Confessions" DROP COLUMN "authorId";
