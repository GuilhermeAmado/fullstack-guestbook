import { createRouter } from './context';
import { z } from 'zod';

export const usersRouter = createRouter()
  .query('getAllUsernames', {
    async resolve({ ctx }) {
      return await ctx.prisma.user.findMany({
        select: {
          username: true,
        },
      });
    },
  })
  .query('checkUsernameAvailability', {
    input: z.object({ username: z.string().min(3).max(30) }),
    output: z.object({ isAvailable: z.boolean() }),
    async resolve({ ctx, input }) {
      const user = await ctx.prisma.user.findFirst({
        where: {
          username: input.username,
        },
      });

      if (user) {
        return {
          isAvailable: false,
        };
      }

      return {
        isAvailable: true,
      };
    },
  });
