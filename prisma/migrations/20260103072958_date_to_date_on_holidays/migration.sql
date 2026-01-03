/*
  Warnings:

  - You are about to drop the column `Date` on the `Holidays` table. All the data in the column will be lost.
  - Added the required column `date` to the `Holidays` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Holidays" DROP COLUMN "Date",
ADD COLUMN     "date" DATE NOT NULL;
