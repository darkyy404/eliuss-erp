import { writable } from 'svelte/store';

export const temaOscuro = crearStoreTema();

function crearStoreTema() {
  const temaGuardado = localStorage.getItem('tema');
  const esOscuroInicial = temaGuardado === 'oscuro';

  // Aplicar el tema guardado al cargar
  document.documentElement.setAttribute('tema', esOscuroInicial ? 'oscuro' : 'claro');

  const { subscribe, set, update } = writable(esOscuroInicial);

  return {
    subscribe,

    cambiarTema: () => update(esOscuro => {
      const nuevoTema = !esOscuro;
      document.documentElement.setAttribute('tema', nuevoTema ? 'oscuro' : 'claro');
      localStorage.setItem('tema', nuevoTema ? 'oscuro' : 'claro');
      return nuevoTema;
    }),

    setTema: (esOscuro) => {
      document.documentElement.setAttribute('tema', esOscuro ? 'oscuro' : 'claro');
      localStorage.setItem('tema', esOscuro ? 'oscuro' : 'claro');
      set(esOscuro);
    }
  };
}
