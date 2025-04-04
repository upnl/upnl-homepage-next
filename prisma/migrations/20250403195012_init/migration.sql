-- CreateTable
CREATE TABLE `admin` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(20) NOT NULL,
    `period` DATETIME(3) NULL,
    `year` INTEGER NULL,
    `semester` VARCHAR(20) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `article` (
    `no` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(255) NOT NULL,
    `content` TEXT NOT NULL,
    `date` DATETIME(3) NOT NULL,
    `writer_id` INTEGER NOT NULL,
    `writer_name` VARCHAR(20) NOT NULL,
    `bbs_url` VARCHAR(20) NOT NULL,
    `bbs_name` VARCHAR(20) NOT NULL,
    `images_on_top` BOOLEAN NOT NULL,
    `is_notice` BOOLEAN NOT NULL,
    `render_type` VARCHAR(20) NOT NULL DEFAULT 'markdown',

    PRIMARY KEY (`no`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `board` (
    `bbs_url` INTEGER NOT NULL AUTO_INCREMENT,
    `bbs_name` VARCHAR(20) NOT NULL,
    `position` INTEGER NOT NULL,

    PRIMARY KEY (`bbs_url`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `comment` (
    `no` INTEGER NOT NULL AUTO_INCREMENT,
    `content` TEXT NOT NULL,
    `date` DATETIME(3) NOT NULL,
    `writer_id` INTEGER NOT NULL,
    `writer_name` VARCHAR(20) NOT NULL,
    `article_id` INTEGER NOT NULL,

    PRIMARY KEY (`no`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `file` (
    `no` INTEGER NOT NULL AUTO_INCREMENT,
    `s_name` VARCHAR(255) NOT NULL,
    `filename` VARCHAR(255) NOT NULL,
    `target_category` INTEGER NOT NULL,
    `article_id` INTEGER NULL,
    `project_id` INTEGER NULL,

    PRIMARY KEY (`no`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `index` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `content` TEXT NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `panorama` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `date` DATETIME(3) NOT NULL,
    `actor_id` INTEGER NOT NULL,
    `article_id` INTEGER NOT NULL,
    `action` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `project` (
    `no` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `genre` VARCHAR(255) NOT NULL,
    `is_public` BOOLEAN NOT NULL,
    `introduction` TEXT NOT NULL,
    `thumbnail` VARCHAR(255) NOT NULL,
    `status` VARCHAR(20) NOT NULL DEFAULT 'working',
    `bbs_url` INTEGER NOT NULL,
    `orderer_id` INTEGER NOT NULL,
    `start_date` DATETIME(3) NOT NULL,
    `finish_date` DATETIME(3) NULL,
    `detail` TEXT NULL,
    `executable` VARCHAR(255) NULL,
    `is_show_page` BOOLEAN NULL,

    PRIMARY KEY (`no`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `promote` (
    `no` INTEGER NOT NULL AUTO_INCREMENT,
    `requester_id` INTEGER NOT NULL,
    `requester_name` VARCHAR(20) NOT NULL,
    `bbs_url` INTEGER NOT NULL,
    `start_year` INTEGER NOT NULL,
    `start_semester` VARCHAR(20) NOT NULL,

    PRIMARY KEY (`no`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `purchase` (
    `no` INTEGER NOT NULL AUTO_INCREMENT,
    `product_name` VARCHAR(255) NOT NULL,
    `about` VARCHAR(200) NOT NULL,
    `url` VARCHAR(255) NOT NULL,
    `article_id` INTEGER NOT NULL,
    `start_year` INTEGER NOT NULL,
    `start_semester` VARCHAR(20) NOT NULL,
    `is_complete` BOOLEAN NOT NULL,
    `requester` VARCHAR(20) NOT NULL,

    PRIMARY KEY (`no`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `sessions` (
    `no` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(255) NULL,
    `introduction` TEXT NULL,
    `public_level` INTEGER NULL,
    `s_filename` VARCHAR(255) NULL,
    `filename` VARCHAR(255) NULL,
    `workshop_id` INTEGER NOT NULL,
    `presenter_id` INTEGER NULL,
    `presenter_name` VARCHAR(20) NOT NULL,
    `present_order` INTEGER NOT NULL,

    PRIMARY KEY (`no`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `study` (
    `no` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `introduction` TEXT NOT NULL,
    `status` VARCHAR(20) NOT NULL DEFAULT 'working',
    `bbs_url` INTEGER NOT NULL,
    `start_date` DATETIME(3) NOT NULL,
    `finish_date` DATETIME(3) NULL,
    `orderer_id` INTEGER NOT NULL,

    PRIMARY KEY (`no`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tag` (
    `no` INTEGER NOT NULL AUTO_INCREMENT,
    `content` VARCHAR(255) NOT NULL,
    `tagger_id` INTEGER NOT NULL,
    `tagger_name` VARCHAR(20) NOT NULL,
    `target_category` INTEGER NOT NULL,
    `target_id` INTEGER NOT NULL,
    `is_public` BOOLEAN NOT NULL,
    `base_id` INTEGER NOT NULL,

    PRIMARY KEY (`no`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tagCount` (
    `no` INTEGER NOT NULL AUTO_INCREMENT,
    `content` VARCHAR(255) NOT NULL,
    `count` INTEGER NOT NULL DEFAULT 1,

    PRIMARY KEY (`no`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `term` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `content` TEXT NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `user` (
    `no` INTEGER NOT NULL AUTO_INCREMENT,
    `id` VARCHAR(20) NOT NULL,
    `passwd` VARCHAR(128) NOT NULL,
    `name` VARCHAR(20) NOT NULL,
    `email` VARCHAR(50) NOT NULL,
    `email_public` BOOLEAN NOT NULL,
    `phone` VARCHAR(20) NOT NULL,
    `phone_public` BOOLEAN NOT NULL,
    `year` INTEGER NULL,
    `dept` VARCHAR(50) NOT NULL,
    `level` VARCHAR(10) NOT NULL,
    `theme` VARCHAR(20) NOT NULL DEFAULT 'default',
    `wanttodo` TEXT NOT NULL,
    `profile` TEXT NULL,

    UNIQUE INDEX `user_id_key`(`id`),
    PRIMARY KEY (`no`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `workshop` (
    `no` INTEGER NOT NULL AUTO_INCREMENT,
    `nth` INTEGER NOT NULL,
    `place` VARCHAR(20) NOT NULL,
    `start_date` DATETIME(3) NOT NULL,

    UNIQUE INDEX `workshop_nth_key`(`nth`),
    PRIMARY KEY (`no`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_user_project_link` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_user_project_link_AB_unique`(`A`, `B`),
    INDEX `_user_project_link_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_user_promote_link` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_user_promote_link_AB_unique`(`A`, `B`),
    INDEX `_user_promote_link_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_user_purchase_link` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_user_purchase_link_AB_unique`(`A`, `B`),
    INDEX `_user_purchase_link_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_user_study_link` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_user_study_link_AB_unique`(`A`, `B`),
    INDEX `_user_study_link_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_user_workshop_link` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_user_workshop_link_AB_unique`(`A`, `B`),
    INDEX `_user_workshop_link_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `article` ADD CONSTRAINT `article_writer_id_fkey` FOREIGN KEY (`writer_id`) REFERENCES `user`(`no`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `comment` ADD CONSTRAINT `comment_writer_id_fkey` FOREIGN KEY (`writer_id`) REFERENCES `user`(`no`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `comment` ADD CONSTRAINT `comment_article_id_fkey` FOREIGN KEY (`article_id`) REFERENCES `article`(`no`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `file` ADD CONSTRAINT `file_article_id_fkey` FOREIGN KEY (`article_id`) REFERENCES `article`(`no`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `file` ADD CONSTRAINT `file_project_id_fkey` FOREIGN KEY (`project_id`) REFERENCES `project`(`no`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `panorama` ADD CONSTRAINT `panorama_actor_id_fkey` FOREIGN KEY (`actor_id`) REFERENCES `user`(`no`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `panorama` ADD CONSTRAINT `panorama_article_id_fkey` FOREIGN KEY (`article_id`) REFERENCES `article`(`no`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `project` ADD CONSTRAINT `project_bbs_url_fkey` FOREIGN KEY (`bbs_url`) REFERENCES `board`(`bbs_url`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `project` ADD CONSTRAINT `project_orderer_id_fkey` FOREIGN KEY (`orderer_id`) REFERENCES `user`(`no`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `promote` ADD CONSTRAINT `promote_requester_id_fkey` FOREIGN KEY (`requester_id`) REFERENCES `user`(`no`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `purchase` ADD CONSTRAINT `purchase_article_id_fkey` FOREIGN KEY (`article_id`) REFERENCES `article`(`no`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `sessions` ADD CONSTRAINT `sessions_workshop_id_fkey` FOREIGN KEY (`workshop_id`) REFERENCES `workshop`(`no`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `sessions` ADD CONSTRAINT `sessions_presenter_id_fkey` FOREIGN KEY (`presenter_id`) REFERENCES `user`(`no`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `study` ADD CONSTRAINT `study_orderer_id_fkey` FOREIGN KEY (`orderer_id`) REFERENCES `user`(`no`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `tag` ADD CONSTRAINT `tag_tagger_id_fkey` FOREIGN KEY (`tagger_id`) REFERENCES `user`(`no`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `tag` ADD CONSTRAINT `tag_base_id_fkey` FOREIGN KEY (`base_id`) REFERENCES `tagCount`(`no`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_user_project_link` ADD CONSTRAINT `_user_project_link_A_fkey` FOREIGN KEY (`A`) REFERENCES `project`(`no`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_user_project_link` ADD CONSTRAINT `_user_project_link_B_fkey` FOREIGN KEY (`B`) REFERENCES `user`(`no`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_user_promote_link` ADD CONSTRAINT `_user_promote_link_A_fkey` FOREIGN KEY (`A`) REFERENCES `promote`(`no`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_user_promote_link` ADD CONSTRAINT `_user_promote_link_B_fkey` FOREIGN KEY (`B`) REFERENCES `user`(`no`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_user_purchase_link` ADD CONSTRAINT `_user_purchase_link_A_fkey` FOREIGN KEY (`A`) REFERENCES `purchase`(`no`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_user_purchase_link` ADD CONSTRAINT `_user_purchase_link_B_fkey` FOREIGN KEY (`B`) REFERENCES `user`(`no`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_user_study_link` ADD CONSTRAINT `_user_study_link_A_fkey` FOREIGN KEY (`A`) REFERENCES `study`(`no`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_user_study_link` ADD CONSTRAINT `_user_study_link_B_fkey` FOREIGN KEY (`B`) REFERENCES `user`(`no`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_user_workshop_link` ADD CONSTRAINT `_user_workshop_link_A_fkey` FOREIGN KEY (`A`) REFERENCES `user`(`no`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_user_workshop_link` ADD CONSTRAINT `_user_workshop_link_B_fkey` FOREIGN KEY (`B`) REFERENCES `workshop`(`no`) ON DELETE CASCADE ON UPDATE CASCADE;
