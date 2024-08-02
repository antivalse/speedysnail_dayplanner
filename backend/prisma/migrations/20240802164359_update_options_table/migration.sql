-- AlterTable
ALTER TABLE `options` MODIFY `active` BOOLEAN NOT NULL DEFAULT false,
    MODIFY `completed` BOOLEAN NOT NULL DEFAULT false;
