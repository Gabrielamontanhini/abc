/*
  Warnings:

  - You are about to drop the `practiceAdventages` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "practiceAdventages" DROP CONSTRAINT "practiceAdventages_practiceId_fkey";

-- DropTable
DROP TABLE "practiceAdventages";

-- CreateTable
CREATE TABLE "practiceAdvantages" (
    "id" SERIAL NOT NULL,
    "advantage" VARCHAR NOT NULL,
    "description" VARCHAR NOT NULL,
    "practiceId" INTEGER NOT NULL,

    CONSTRAINT "practiceAdvantages_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "practiceAdvantages_practiceId_key" ON "practiceAdvantages"("practiceId");

-- AddForeignKey
ALTER TABLE "practiceAdvantages" ADD CONSTRAINT "practiceAdvantages_practiceId_fkey" FOREIGN KEY ("practiceId") REFERENCES "practices"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
