/*
  Warnings:

  - A unique constraint covering the columns `[article_id]` on the table `purchase` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE INDEX `panorama_date_idx` ON `panorama`(`date`);

-- CreateIndex
CREATE UNIQUE INDEX `purchase_article_id_key` ON `purchase`(`article_id`);
