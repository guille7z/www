import { generateIdenticonSvg } from 'kydenticon';
import type { PageServerLoad } from './$types';

export const prerender = true;

const icon = (src: string) => `data:image/svg+xml,${encodeURIComponent(generateIdenticonSvg(src))}`;

export const load: PageServerLoad = () => ({
	projects: [
		{
			title: 'novarum',
			description: 'good enough federated chat app',
			icon: 'https://raw.githubusercontent.com/novarumsocial/novarum/main/apps/electron/icons/icon.png'
		},
    {
      title: 'websiet',
      description: 'personal website & portfolio thing',
      icon: icon('websiet')
    },
		{
			title: 'keygen.mp3',
			description: 'Keygen (chiptune) music player, built with Svelte 5 & chiptune.js',
			icon: icon('keygen.mp3')
		},
		{
			title: 'ezmc',
			description: 'An easy to use TUI made in Python to create and manage Minecraft servers!',
			icon: icon('ezmc')
		}
	]
});
