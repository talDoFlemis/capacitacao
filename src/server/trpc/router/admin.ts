import { z } from "zod";

import { router, adminProcedure } from "../trpc";

export const adminRouter = router({
  getUserCount: adminProcedure.query(({ ctx }) => {
    return ctx.prisma.user.count({});
  }),
  getModCount: adminProcedure.query(({ ctx }) => {
    return ctx.prisma.module.count({});
  }),
  getLessCount: adminProcedure.query(({ ctx }) => {
    return ctx.prisma.lesson.count({});
  }),
  getModSuggestions: adminProcedure.query(({ ctx }) => {
    return ctx.prisma.modSuggestion.findMany({
      include: {
        module: { select: { id: true, name: true } },
        user: { select: { id: true, name: true } },
      },
    });
  }),
  getLessSuggestions: adminProcedure.query(({ ctx }) => {
    return ctx.prisma.lesSuggestion.findMany({
      include: {
        lesson: { select: { id: true, name: true } },
        user: { select: { id: true, name: true } },
      },
    });
  }),
});
