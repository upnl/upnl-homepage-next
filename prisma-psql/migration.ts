/* eslint-disable @typescript-eslint/no-explicit-any */
import { PrismaClient as NewPrismaClient } from "../prisma/client";
import { PrismaClient as OldPrismaClient } from "./client";

(async function () {
  const oldPrisma = new OldPrismaClient();
  const newPrisma = new NewPrismaClient();

  // Independent Tables

  const admins = (await oldPrisma.admin.findMany()) as any[];
  const boards = (await oldPrisma.board.findMany()) as any[];
  const indexes = (await oldPrisma.index.findMany()) as any[];
  const tagCounts = (await oldPrisma.tagcount.findMany()) as any[];
  const terms = (await oldPrisma.term.findMany()) as any[];
  const users = (await oldPrisma.user.findMany()) as any[];
  const workshops = (await oldPrisma.workshop.findMany()) as any[];

  for (const board of boards) {
    board.no = board.bbs_url;
    delete board.bbs_url;
    board.name = board.bbs_name;
    delete board.bbs_name;
  }
  for (const user of users) {
    user.want_to_do = user.wanttodo;
    delete user.wanttodo;
  }

  await newPrisma.admin.createMany({ data: admins });
  await newPrisma.board.createMany({ data: boards });
  await newPrisma.index.createMany({ data: indexes });
  await newPrisma.tagCount.createMany({ data: tagCounts });
  await newPrisma.term.createMany({ data: terms });
  await newPrisma.user.createMany({ data: users });
  await newPrisma.workshop.createMany({ data: workshops });

  // Dependent Level 1 Tables

  const articles = (await oldPrisma.article.findMany()) as any[];
  const projects = (await oldPrisma.project.findMany()) as any[];
  const promotes = (await oldPrisma.promote.findMany()) as any[];
  const sessions = (await oldPrisma.sessions.findMany()) as any[];
  const studies = (await oldPrisma.study.findMany()) as any[];
  const tags = (await oldPrisma.tag.findMany()) as any[];

  for (const article of articles) {
    article.board_no = article.bbs_url;
    delete article.bbs_url;
    article.board_name = article.bbs_name;
    delete article.bbs_name;
  }
  for (const project of projects) {
    project.board_no = project.bbs_url;
    delete project.bbs_url;
  }
  for (const promote of promotes) {
    promote.board_no = promote.bbs_url;
    delete promote.bbs_url;
  }
  for (const study of studies) {
    study.board_no = study.bbs_url;
    delete study.bbs_url;
  }
  const tagNoList = tagCounts.map((tagCount) => tagCount.no);
  const filteredTags = tags.filter((tag) => tagNoList.includes(tag.no));

  await newPrisma.article.createMany({ data: articles });
  await newPrisma.project.createMany({ data: projects });
  await newPrisma.promote.createMany({ data: promotes });
  await newPrisma.sessions.createMany({ data: sessions });
  await newPrisma.study.createMany({ data: studies });
  await newPrisma.tag.createMany({ data: filteredTags });

  // Dependent Level 2 Tables

  const comments = (await oldPrisma.comment.findMany()) as any[];
  const files = (await oldPrisma.file.findMany()) as any[];
  const panoramas = (await oldPrisma.panorama.findMany()) as any[];
  const purchases = (await oldPrisma.purchase.findMany()) as any[];

  await newPrisma.comment.createMany({ data: comments });
  await newPrisma.file.createMany({ data: files });
  await newPrisma.panorama.createMany({ data: panoramas });
  await newPrisma.purchase.createMany({ data: purchases });

  // Implicit many-to-many relation tables

  const userProjectLinks = await oldPrisma.user_project_link.findMany();
  const userPromoteLinks = await oldPrisma.user_promote_link.findMany();
  const userPurchaseLinks = await oldPrisma.user_purchase_link.findMany();
  const userStudyLinks = await oldPrisma.user_study_link.findMany();
  const userWorkshopLinks = await oldPrisma.user_workshop_link.findMany();

  for (const link of userProjectLinks) {
    await newPrisma.user.update({
      where: { no: link.user_id },
      data: { projects_participated: { connect: [{ no: link.project_id }] } },
    });
  }
  for (const link of userPromoteLinks) {
    await newPrisma.user.update({
      where: { no: link.user_id },
      data: { promotes_assented: { connect: [{ no: link.request_id }] } },
    });
  }
  for (const link of userPurchaseLinks) {
    await newPrisma.user.update({
      where: { no: link.user_id },
      data: { purchases_assented: { connect: [{ no: link.request_id }] } },
    });
  }
  for (const link of userStudyLinks) {
    await newPrisma.user.update({
      where: { no: link.user_id },
      data: { studies_participated: { connect: [{ no: link.study_id }] } },
    });
  }
  for (const link of userWorkshopLinks) {
    await newPrisma.user.update({
      where: { no: link.user_id },
      data: { workshops_participated: { connect: [{ no: link.workshop_id }] } },
    });
  }
})();
