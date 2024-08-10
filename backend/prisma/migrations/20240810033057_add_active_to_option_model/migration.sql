/*
  Warnings:

  - You are about to drop the column `completed` on the `options` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX `options_title_key` ON `options`;

-- AlterTable
ALTER TABLE `options` DROP COLUMN `completed`;
