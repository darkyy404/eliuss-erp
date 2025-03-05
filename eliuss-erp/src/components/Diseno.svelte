<script>
    import { onMount } from 'svelte';   // Importamos `onMount` de Svelte, que nos permite ejecutar código cuando el componente se monta en el DOM
  
    import { autenticacion } from '../stores/auth';
    import { navigate } from 'svelte-routing';
    import Sidebar from './SideBar.svelte';
    import ModulosEstructura from './ModulosEstructura.svelte';
  
    // Cuando el componente se monta, verificamos si el usuario está autenticado
    onMount(() => {
      if (!autenticacion.isAuthenticated) {
        navigate('/login', { replace: true });
      }
    });
  </script>
  
  <div class="layout">
    <Sidebar />
    <main class="main-content">
      <h1>Bienvenido a la plataforma</h1>
      <p>Aquí puedes acceder a los diferentes módulos disponibles.</p>
      <ModulosEstructura />
    </main>
  </div>
  
  <style>
    .layout {
      display: flex;
      height: 100vh;
      width: 100vw;
      overflow: hidden;
    }
  
    .main-content {
      flex: 1;
      overflow-y: auto;
      padding: 2rem;
    }
  </style>
  