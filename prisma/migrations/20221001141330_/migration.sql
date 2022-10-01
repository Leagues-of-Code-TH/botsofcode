-- CreateTable
CREATE TABLE "VerifyData" (
    "discordId" VARCHAR(18) NOT NULL,
    "ID" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "realName" TEXT NOT NULL,

    CONSTRAINT "VerifyData_pkey" PRIMARY KEY ("ID")
);

-- CreateIndex
CREATE UNIQUE INDEX "VerifyData_discordId_key" ON "VerifyData"("discordId");
