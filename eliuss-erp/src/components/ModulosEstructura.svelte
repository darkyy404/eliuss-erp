<script> 
  import { modulos } from '../config/modulos';
  import { autenticacion } from '../stores/auth';
  import TarjetaModulo from './Tarjetas.svelte';

  // Filtra los módulos disponibles según el rol del usuario autenticado.
  // Si no hay un usuario (`$autenticacion.usuario` es `null` o `undefined`), no se muestra ningún módulo.
  // Si hay un usuario, solo se incluyen los módulos cuyo `rolesPermitidos` contenga el rol del usuario.
  $: modulosFiltrados = modulos
      .filter(modulo => $autenticacion.usuario && modulo.rolesPermitidos.includes($autenticacion.usuario.rol));
</script>

<div class="grid-modulos">
  {#each modulosFiltrados as modulo (modulo.id)}
    <TarjetaModulo modulo={modulo} icono={modulo.icono} />
  {/each}
</div>

<style>
.grid-modulos {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1.5rem;
  padding: 1.5rem;
  width: 100%;
}
</style>
