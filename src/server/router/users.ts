import { createRouter } from './context';
import { z } from 'zod';

export const usersRouter = createRouter().query('getAllUsernames', {
  async resolve({ ctx }) {
    return await ctx.prisma.user.findMany({
      select: {
        username: true,
      },
    });
  },
});
