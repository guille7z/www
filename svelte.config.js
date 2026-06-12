import { mdsvex } from "mdsvex";
import adapter from '@sveltejs/adapter-cloudflare';

const config = {
    compilerOptions: {
        runes: ({ filename }) => {
            if (!filename) return undefined;
            const parts = filename.split(/[/\\]/);
            if (parts.includes('node_modules')) return undefined;
            if (filename.endsWith('.svx') || filename.endsWith('.md')) return undefined;
            return true;
        }
    },
    kit: {
        adapter: adapter()
    },
    preprocess: [mdsvex({ extensions: ['.svx', '.md'] })],
    extensions: ['.svelte', '.svx', '.md']
};

export default config;