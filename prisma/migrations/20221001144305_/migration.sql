/*
  Warnings:

  - You are about to drop the `VerifyData` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "VerifyData";

-- CreateTable
CREATE TABLE "verifyData" (
    "discordId" VARCHAR(18) NOT NULL,
    "ID" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "realName" TEXT NOT NULL,

    CONSTRAINT "verifyData_pkey" PRIMARY KEY ("ID")
);

-- CreateTable
CREATE TABLE "studentData" (
    "discordId" VARCHAR(18) NOT NULL,
    "realName" TEXT NOT NULL,
    "course" TEXT NOT NULL,
    "ID" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "studentData_pkey" PRIMARY KEY ("ID")
);

-- CreateIndex
CREATE UNIQUE INDEX "verifyData_discordId_key" ON "verifyData"("discordId");

-- CreateIndex
CREATE UNIQUE INDEX "studentData_discordId_key" ON "studentData"("discordId");
