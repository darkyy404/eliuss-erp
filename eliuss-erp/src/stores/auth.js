import { writable } from 'svelte/store';

// Un store permite guardar y compartir información entre componentes sin necesidad de pasar datos manualmente (mediante props).

export const autenticacion = crearStoreAutenticacion();

function crearStoreAutenticacion() {
  // Creamos el store con el estado inicial de autenticación.
  const { subscribe, set } = writable({
    usuario: null,
    autenticado: false
  });

  return {
    subscribe, // Permite a otros componentes acceder al estado del usuario.

    establecerUsuario: (usuario) => {
      // Actualiza el usuario y cambia el estado de autenticación.
      set({
        usuario,
        autenticado: !!usuario
      });
    },

    cerrarSesion: () => {
      // Cierra sesión y borra la información del usuario.
      set({
        usuario: null,
        autenticado: false
      });
    }
  };
}
