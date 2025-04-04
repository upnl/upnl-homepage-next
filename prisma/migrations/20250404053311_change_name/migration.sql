/*
  Warnings:

  - You are about to drop the column `bbs_name` on the `article` table. All the data in the column will be lost.
  - You are about to drop the column `bbs_url` on the `article` table. All the data in the column will be lost.
  - The primary key for the `board` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `bbs_name` on the `board` table. All the data in the column will be lost.
  - You are about to drop the column `bbs_url` on the `board` table. All the data in the column will be lost.
  - You are about to drop the column `bbs_url` on the `project` table. All the data in the column will be lost.
  - You are about to drop the column `bbs_url` on the `promote` table. All the data in the column will be lost.
  - You are about to drop the column `bbs_url` on the `study` table. All the data in the column will be lost.
  - You are about to drop the column `wanttodo` on the `user` table. All the data in the column will be lost.
  - Added the required column `board_name` to the `article` table without a default value. This is not possible if the table is not empty.
  - Added the required column `board_no` to the `article` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `board` table without a default value. This is not possible if the table is not empty.
  - Added the required column `no` to the `board` table without a default value. This is not possible if the table is not empty.
  - Added the required column `board_no` to the `project` table without a default value. This is not possible if the table is not empty.
  - Added the required column `board_no` to the `promote` table without a default value. This is not possible if the table is not empty.
  - Added the required column `board_no` to the `study` table without a default value. This is not possible if the table is not empty.
  - Added the required column `want_to_do` to the `user` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `project` DROP FOREIGN KEY `project_bbs_url_fkey`;

-- DropIndex
DROP INDEX `project_bbs_url_fkey` ON `project`;

-- AlterTable
ALTER TABLE `article` DROP COLUMN `bbs_name`,
    DROP COLUMN `bbs_url`,
    ADD COLUMN `board_name` VARCHAR(20) NOT NULL,
    ADD COLUMN `board_no` VARCHAR(20) NOT NULL;

-- AlterTable
ALTER TABLE `board` DROP PRIMARY KEY,
    DROP COLUMN `bbs_name`,
    DROP COLUMN `bbs_url`,
    ADD COLUMN `name` VARCHAR(20) NOT NULL,
    ADD COLUMN `no` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`no`);

-- AlterTable
ALTER TABLE `project` DROP COLUMN `bbs_url`,
    ADD COLUMN `board_no` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `promote` DROP COLUMN `bbs_url`,
    ADD COLUMN `board_no` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `study` DROP COLUMN `bbs_url`,
    ADD COLUMN `board_no` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `user` DROP COLUMN `wanttodo`,
    ADD COLUMN `want_to_do` TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE `project` ADD CONSTRAINT `project_board_no_fkey` FOREIGN KEY (`board_no`) REFERENCES `board`(`no`) ON DELETE RESTRICT ON UPDATE CASCADE;
