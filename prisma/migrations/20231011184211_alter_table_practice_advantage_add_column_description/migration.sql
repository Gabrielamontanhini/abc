/*
  Warnings:

  - Added the required column `description` to the `practiceAdventages` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "practiceAdventages" ADD COLUMN     "description" VARCHAR NOT NULL;
