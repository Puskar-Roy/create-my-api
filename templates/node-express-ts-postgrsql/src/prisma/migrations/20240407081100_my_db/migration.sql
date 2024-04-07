/*
  Warnings:

  - You are about to drop the `Course` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Review` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `UserEnrollment` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Review" DROP CONSTRAINT "Review_courseId_fkey";

-- DropForeignKey
ALTER TABLE "Review" DROP CONSTRAINT "Review_userId_fkey";

-- DropForeignKey
ALTER TABLE "UserEnrollment" DROP CONSTRAINT "UserEnrollment_courseId_fkey";

-- DropForeignKey
ALTER TABLE "UserEnrollment" DROP CONSTRAINT "UserEnrollment_userId_fkey";

-- AlterTable
ALTER TABLE "VerificationToken" ALTER COLUMN "expiresAt" SET DEFAULT CURRENT_TIMESTAMP + interval '10 minutes';

-- DropTable
DROP TABLE "Course";

-- DropTable
DROP TABLE "Review";

-- DropTable
DROP TABLE "UserEnrollment";
