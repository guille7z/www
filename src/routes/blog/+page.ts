export async function load() {
    const modules = import.meta.glob('../../posts/*.md', { eager: true });

    const posts = Object.entries(modules).map(([path, mod]) => {
        const meta = (mod as { metadata: Record<string, string> }).metadata;
        return {
            slug: path.split('/').at(-1)!.replace('.md', ''),
            ...meta
        };
    });

    return {
        posts: posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    };
}