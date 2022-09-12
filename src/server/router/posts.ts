import { createRouter } from './context';
import { z } from 'zod';

export const postsRouter = createRouter()
  .mutation('createPost', {
    input: z.object({
      slug: z.string(),
      title: z.string(),
      content: z.string(),
    }),
    async resolve({ ctx, input }) {
      const post = await ctx.prisma.post.create({
        data: {
          userId: ctx.session?.user?.id ?? '',
          title: input.title,
          content: input.content,
          slug: input.slug,
        },
      });

      return post;
    },
  })
  .query('getAll', {
    async resolve({ ctx }) {
      return await ctx.prisma.post.findMany({
        select: {
          id: true,
          author: {
            select: {
              username: true,
            },
          },
          title: true,
          content: true,
          slug: true,
        },
      });
    },
  });
