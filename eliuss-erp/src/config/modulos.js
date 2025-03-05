// Definición de los módulos disponibles en la aplicación.
// Cada módulo contiene:
// - `id`: Identificador único del módulo.
// - `titulo`: Nombre del módulo que se mostrará en la interfaz.
// - `icono`: Nombre del icono asociado (debe coincidir con las claves en el objeto `iconos`).
// - `descripcion`: Breve descripción del módulo.
// - `ruta`: Ruta a la que se redirige al hacer clic en el módulo.
// - `rolesPermitidos`: Lista de roles que tienen acceso a este módulo.

export const modulos = [
    {
      id: 'ventas',
      titulo: 'Ventas',
      icono: 'Billetera',
      descripcion: 'Gestión de ventas y clientes',
      ruta: '/ventas',
      rolesPermitidos: ['admin', 'estandar']
    },
    {
      id: 'inventario',
      titulo: 'Inventario',
      icono: 'Caja',
      descripcion: 'Control de inventario y almacén',
      ruta: '/inventario',
      rolesPermitidos: ['admin', 'estandar']
    },
    {
      id: 'recursosHumanos',
      titulo: 'Recursos Humanos',
      icono: 'Usuarios',
      descripcion: 'Gestión de personal y nómina',
      ruta: '/recursos-humanos',
      rolesPermitidos: ['admin']
    },
    {
      id: 'finanzas',
      titulo: 'Finanzas',
      icono: 'GraficoBarras',
      descripcion: 'Contabilidad y finanzas',
      ruta: '/finanzas',
      rolesPermitidos: ['admin']
    },
    {
      id: 'facturacion',
      titulo: 'Facturación',
      icono: 'ArchivoTexto',
      descripcion: 'Gestión de facturas y pagos',
      ruta: '/facturacion',
      rolesPermitidos: ['admin', 'estandar']
    }
  ];
  