<script>
    // Importamos la función `navegar` para redirigir a otras páginas
    import { navigate as navegar } from 'svelte-routing';
  
    // Importamos el store de autenticación
    import { autenticacion } from '../stores/auth';
  
    // Importamos la función para autenticar usuarios
    import { autenticarUsuario } from '../services/dataService';
  
    // Variables para almacenar los datos del formulario
    let correo = '';
    let contrasena = '';
    let error = '';
  
    // Manejo del envío del formulario
    async function manejarEnvio() {
      try {
        // Verificamos si las credenciales son correctas
        const usuario = autenticarUsuario(correo, contrasena);
        
        if (usuario) {
          // Si el usuario es válido, guardamos los datos en el store y redirigimos al inicio
          autenticacion.establecerUsuario(usuario);
          navegar('/', { replace: true });
        } else {
          // Si las credenciales son incorrectas, mostramos un mensaje de error
          error = 'Credenciales inválidas';
        }
      } catch (e) {
        // Capturamos cualquier error inesperado
        error = 'Error al iniciar sesión';
      }
    }
  </script>
  
  <!-- Contenedor del formulario de inicio de sesión -->
  <div class="contenedor-login">
    <div class="tarjeta-login">
      <h1>Iniciar Sesión</h1>
      
      <form on:submit|preventDefault={manejarEnvio}>
        <div class="grupo-formulario">
          <label for="correo">Correo electrónico</label>
          <input
            type="email"
            id="correo"
            bind:value={correo}
            placeholder="correo@ejemplo.com"
            required
          />
        </div>
  
        <div class="grupo-formulario">
          <label for="contrasena">Contraseña</label>
          <input
            type="password"
            id="contrasena"
            bind:value={contrasena}
            placeholder="••••••••"
            required
          />
        </div>
  
        <!-- Muestra un mensaje de error si la autenticación falla -->
        {#if error}
          <div class="error">{error}</div>
        {/if}
  
        <button type="submit" class="btn btn-primario">
          Iniciar Sesión
        </button>
      </form>
  
      <!-- Información sobre credenciales de prueba -->
      <div class="credenciales-demo">
        <p>Credenciales de prueba:</p>
        <code>admin@example.com / admin</code>
        <code>user@example.com / user</code>
      </div>
    </div>
  </div>
  
  <style>
    .contenedor-login {
      height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: var(--color-fondo);
    }
  
    .tarjeta-login {
      background-color: var(--color-fondo);
      padding: 2rem;
      border-radius: 0.5rem;
      box-shadow: var(--sombra-lg);
      width: 100%;
      max-width: 400px;
    }
  
    h1 {
      color: var(--color-primario);
      margin-bottom: 1.5rem;
      text-align: center;
    }
  
    .grupo-formulario {
      margin-bottom: 1rem;
    }
  
    label {
      display: block;
      margin-bottom: 0.5rem;
      color: var(--color-texto);
    }
  
    input {
      width: 100%;
      padding: 0.5rem;
      border: 1px solid var(--color-borde);
      border-radius: 0.25rem;
      background-color: var(--color-fondo);
      color: var(--color-texto);
    }
  
    input:focus {
      outline: none;
      border-color: var(--color-primario);
      box-shadow: 0 0 0 2px var(--color-primario-alpha);
    }
  
    .error {
      color: #ef4444;
      margin-bottom: 1rem;
      font-size: 0.875rem;
    }
  
    button {
      width: 100%;
    }
  
    .credenciales-demo {
      margin-top: 2rem;
      padding-top: 1rem;
      border-top: 1px solid var(--color-borde);
      font-size: 0.875rem;
      color: var(--color-texto);
    }
  
    .credenciales-demo p {
      margin-bottom: 0.5rem;
    }
  
    code {
      display: block;
      padding: 0.5rem;
      background-color: var(--color-borde);
      border-radius: 0.25rem;
      margin-bottom: 0.5rem;
      font-family: monospace;
    }
  </style>
  