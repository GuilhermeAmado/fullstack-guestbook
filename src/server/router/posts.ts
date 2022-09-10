import { createRouter } from './context';
import { z } from 'zod';

export const postsRouter = createRouter()
  .mutation('createPost', {
    input: z.object({
      slug: z.string(),
      content: z.string(),
    }),
    async resolve({ ctx, input }) {
      const post = await ctx.prisma.post.create({
        data: {
          userId: ctx.session?.user?.id ?? '',
          content: input.content,
          slug: input.slug,
        },
      });

      console.log(post);

      return post;
    },
  })
  .query('getAll', {
    async resolve({ ctx }) {
      return await ctx.prisma.post.findMany();
    },
  });
