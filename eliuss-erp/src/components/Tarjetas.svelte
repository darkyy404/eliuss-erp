<script>
    import { navigate } from 'svelte-routing';
    export let modulo;
    export let icono;
  
    // Función que maneja la navegación al hacer clic en el módulo.
    function manejarClic() {
      navigate(modulo.ruta);
    }
  </script>
  
  <div 
    class="modulo"
    on:click={manejarClic}
    on:keydown={(e) => e.key === 'Enter' && manejarClic()} 
    role="button"
    tabindex="0"
  >
    <div class="modulo-icono">
      <div class="icono-circulo">
        <svelte:component this={icono} size={24} />
      </div>
    </div>
    <h3 class="modulo-titulo">{modulo.titulo}</h3>
    <p class="modulo-descripcion">{modulo.descripcion}</p>
  </div>
  
  <style>
    .modulo {
      background-color: var(--color-fondo);
      border: 1px solid var(--color-borde);
      border-radius: 0.75rem;
      padding: 1.5rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      cursor: pointer;
      transition: all 0.2s ease-in-out;
    }
  
    .modulo:hover {
      transform: translateY(-2px);
      box-shadow: var(--sombra-md);
    }
  
    .modulo:focus {
      outline: 2px solid var(--color-primario);
      outline-offset: 2px;
    }
  
    .modulo-icono {
      margin-bottom: 1rem;
    }
  
    .icono-circulo {
      background-color: var(--color-primario);
      opacity: 0.1;
      width: 3rem;
      height: 3rem;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  
    .icono-circulo :global(svg) {
      color: var(--color-primario);
      opacity: 1;
    }
  
    .modulo-titulo {
      font-size: 1.125rem;
      font-weight: 600;
      color: var(--color-texto);
      margin-bottom: 0.5rem;
      text-align: center;
    }
  
    .modulo-descripcion {
      font-size: 0.875rem;
      color: var(--color-texto);
      opacity: 0.8;
      text-align: center;
      line-height: 1.4;
    }
  </style>
  