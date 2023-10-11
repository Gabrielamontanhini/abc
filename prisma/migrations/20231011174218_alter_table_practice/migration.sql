/*
  Warnings:

  - You are about to drop the column `description` on the `practices` table. All the data in the column will be lost.
  - Made the column `adventage` on table `practiceAdventages` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `name` to the `practices` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "practiceAdventages" ALTER COLUMN "adventage" SET NOT NULL,
ALTER COLUMN "adventage" SET DATA TYPE VARCHAR;

-- AlterTable
ALTER TABLE "practices" DROP COLUMN "description",
ADD COLUMN     "name" TEXT NOT NULL;
