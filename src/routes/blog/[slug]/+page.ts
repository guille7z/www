import type { PageLoad } from './$types.ts';

export const load: PageLoad = async ({ params }) => {
    const post = await import(`../../../posts/${params.slug}.md`);
    return {
        content: post.default,
        meta: post.metadata as Record<string, string>
    };
};