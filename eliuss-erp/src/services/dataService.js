import datosUsuarios from "./../data/usuarios.json";
import datosVentas from "./../data/ventas.json";
import datosInventario from "./../data/inventario.json";
import datosRRHH from "./../data/recursosHumanos.json";
import datosFinanzas from "./../data/finanzas.json";
import datosFacturacion from "./../data/facturacion.json";

/* AUTENTICACIÓN DE USUARIOS*/

// Función para autenticar a un usuario basándose en correo y contraseña.
// Devuelve el usuario si las credenciales coinciden o `null` si son incorrectas.
export const autenticarUsuario = (correo, contraseña) => {
  const usuario = datosUsuarios.usuarios.find(
    (u) => u.correo === correo && u.contrasena === contraseña
  );
  return usuario ? { ...usuario, password: undefined } : null; // Se omite la contraseña por seguridad.
};

/* GESTIÓN DE VENTAS  */

// Obtiene estadísticas generales de ventas.
export const obtenerEstadisticasVentas = () => {
  return datosVentas.estadisticas;
};

// Obtiene la lista de ventas recientes.
export const obtenerVentasRecientes = () => {
  return datosVentas.ventas;
};

// Obtiene los productos más vendidos.
export const obtenerProductosDestacados = () => {
  return datosVentas.productosDestacados;
};

/* GESTIÓN DE INVENTARIO*/

// Obtiene estadísticas del inventario.
export const obtenerEstadisticasInventario = () => {
  return datosInventario.estadisticas;
};

// Obtiene la lista de productos en inventario.
export const obtenerProductosInventario = () => {
  return datosInventario.productos;
};

// Obtiene alertas sobre inventario bajo o productos agotados.
export const obtenerAlertasInventario = () => {
  return datosInventario.alertas;
};

/* RECURSOS HUMANOS (RRHH)*/

// Obtiene estadísticas generales del departamento de RRHH.
export const obtenerEstadisticasRRHH = () => {
  return datosRRHH.estadisticas;
};

// Obtiene la lista de empleados registrados.
export const obtenerEmpleados = () => {
  return datosRRHH.empleados;
};

// Obtiene eventos o actividades relacionadas con RRHH.
export const obtenerEventosRRHH = () => {
  return datosRRHH.eventos;
};

/*GESTIÓN FINANCIERA */

// Obtiene estadísticas financieras generales.
export const obtenerEstadisticasFinancieras = () => {
  return datosFinanzas.estadisticas;
};

// Obtiene la lista de transacciones financieras.
export const obtenerTransacciones = () => {
  return datosFinanzas.transacciones;
};

// Obtiene un resumen financiero con balances e ingresos/gastos.
export const obtenerResumenFinanciero = () => {
  return datosFinanzas.resumen;
};

/* GESTIÓN DE FACTURACIÓN */

// Obtiene estadísticas sobre facturación.
export const obtenerEstadisticasFacturacion = () => {
  return datosFacturacion.estadisticas;
};

// Obtiene la lista de facturas emitidas.
export const obtenerFacturas = () => {
  return datosFacturacion.facturas;
};

// Obtiene un resumen de pagos realizados y pendientes.
export const obtenerResumenPagos = () => {
  return datosFacturacion.pagos;
};
