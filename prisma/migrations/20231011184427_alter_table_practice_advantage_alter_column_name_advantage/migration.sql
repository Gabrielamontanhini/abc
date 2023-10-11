/*
  Warnings:

  - You are about to drop the column `adventage` on the `practiceAdventages` table. All the data in the column will be lost.
  - Added the required column `advantage` to the `practiceAdventages` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "practiceAdventages" DROP COLUMN "adventage",
ADD COLUMN     "advantage" VARCHAR NOT NULL;
