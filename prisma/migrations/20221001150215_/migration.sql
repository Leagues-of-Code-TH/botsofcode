/*
  Warnings:

  - You are about to drop the `verifyData` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterTable
ALTER TABLE "studentData" ALTER COLUMN "course" DROP NOT NULL;

-- DropTable
DROP TABLE "verifyData";
