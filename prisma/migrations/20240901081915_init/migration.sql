/*
  Warnings:

  - Made the column `content` on table `Confessions` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Confessions" ALTER COLUMN "content" SET NOT NULL;
