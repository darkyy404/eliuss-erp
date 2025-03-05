<script>
  // Importamos el Router y los componentes de rutas de Svelte Routing
  import { Route, Router } from "svelte-routing";

  // Importamos `onMount` para ejecutar código al cargar la aplicación
  import { onMount } from "svelte";

  // Importamos los componentes de la aplicación
  import Diseno from "./components/Diseno.svelte";
  import InicioSesion from "./lib/login.svelte";
  import Ventas from "./lib/modulos/Ventas.svelte";
  import Inventario from "./lib/modulos/Inventario.svelte";
  import RecursosHumanos from "./lib/modulos/RecursosHumanos.svelte";
  import Finanzas from "./lib/modulos/Finanzas.svelte";
  import Facturacion from "./lib/modulos/Facturacion.svelte";

  import { temaOscuro } from "./stores/tema";
  import Login from "./lib/login.svelte";

  // Propiedad para manejar la URL actual (necesaria para el Router en SSR)
  export let url = "";

  // Al cargar la aplicación, recuperamos el tema guardado en `localStorage`
  onMount(() => {
    const temaGuardado = localStorage.getItem("tema");
    if (temaGuardado) {
      temaOscuro.setTheme(temaGuardado === "oscuro");
    }
  });
</script>

<!-- Configuración del enrutador -->
<Router {url}>
  <main>
    <!-- Definición de rutas y asignación de componentes -->
    <Route path="/inicio-sesion" component={InicioSesion} />
    <Route path="/ventas" component={Ventas} />
    <Route path="/inventario" component={Inventario} />
    <Route path="/recursos-humanos" component={RecursosHumanos} />
    <Route path="/finanzas" component={Finanzas} />
    <Route path="/facturacion" component={Facturacion} />
    <Route path="/login" component={Login} />

    <!-- Ruta por defecto: carga el diseño general -->
    <Route path="/*" component={Diseno} />
  </main>
</Router>
