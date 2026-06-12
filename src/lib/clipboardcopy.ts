import type { Action } from 'svelte/action';

export const copy: Action<HTMLElement, string> = (nodo, texto) => {
  const processCopy = async () => {
    if (!texto) return;
    try {
      await navigator.clipboard.writeText(texto);
    } catch (err) {
      console.error('Error al copiar:', err);
    }
  };

  nodo.addEventListener('click', processCopy);

  return {
    update(nuevoTexto: string) {
      texto = nuevoTexto;
    },
    destroy() {
      nodo.removeEventListener('click', processCopy);
    }
  };
};