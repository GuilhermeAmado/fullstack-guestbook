import { createRouter } from './context';
import { z } from 'zod';
import { TRPCError } from '@trpc/server';

export const postsRouter = createRouter()
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
  })
  .middleware(({ ctx, next }) => {
    if (!ctx.session || !ctx.session.user) {
      throw new TRPCError({ code: 'UNAUTHORIZED' });
    }
    return next({
      ctx: {
        ...ctx,
        // infers that `session` is non-nullable to downstream resolvers
        session: { ...ctx.session, user: ctx.session.user },
      },
    });
  })
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
  });
