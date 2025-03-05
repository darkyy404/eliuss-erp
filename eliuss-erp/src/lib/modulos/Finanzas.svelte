<script>
  // @ts-nocheck
  
    import NavBar from '../../components/NavBar.svelte';
    import { getFinanceStats, getTransactions, getFinancialSummary } from '../../services/dataService.js';
  
    // Obtenemos datos de estadísticas financieras, transacciones recientes y resumen financiero.
    const stats = getFinanceStats();
    const transactions = getTransactions();
    const summary = getFinancialSummary();
  </script>
  
  <!-- Página del módulo de Finanzas -->
  <div class="pagina-modulo">
    <NavBar /> <!-- Barra de navegación -->
  
    <div class="contenedor-modulo">
        <header class="encabezado-modulo">
            <h1>Finanzas</h1>
  
            <!-- Tarjetas con métricas clave -->
            <div class="estadisticas-rapidas">
                <div class="tarjeta-estadistica">
                    <!-- Ícono de dólar -->
                    <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <line x1="12" y1="1" x2="12" y2="23"></line>
                        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7H14.5a3.5 3.5 0 1 1 0 7H7"></path>
                    </svg>
                    <div class="contenido-estadistica">
                        <span class="valor-estadistica">${stats.monthlyIncome.toLocaleString()}</span>
                        <span class="etiqueta-estadistica">Ingresos mensuales</span>
                    </div>
                </div>
                <div class="tarjeta-estadistica">
                    <!-- Ícono de crecimiento -->
                    <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
                        <polyline points="17 6 23 6 23 12"></polyline>
                    </svg>
                    <div class="contenido-estadistica">
                        <span class="valor-estadistica">+{stats.growth}%</span>
                        <span class="etiqueta-estadistica">Crecimiento</span>
                    </div>
                </div>
                <div class="tarjeta-estadistica">
                    <!-- Ícono de gráfico circular -->
                    <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M21 12A9 9 0 1 1 12 3v9z"></path>
                    </svg>
                    <div class="contenido-estadistica">
                        <span class="valor-estadistica">{stats.profitMargin}%</span>
                        <span class="etiqueta-estadistica">Margen de beneficio</span>
                    </div>
                </div>
            </div>
        </header>
  
        <div class="contenido-modulo">
            <div class="rejilla-contenido">
                
                <!-- Tabla de transacciones recientes -->
                <div class="elemento-rejilla transacciones">
                    <h2>Últimas Transacciones</h2>
                    <div class="contenedor-tabla">
                        <table>
                            <thead>
                                <tr>
                                    <th>Descripción</th>
                                    <th>Fecha</th>
                                    <th>Monto</th>
                                    <th>Estado</th>
                                </tr>
                            </thead>
                            <tbody>
                                {#each transactions as transaction}
                                    <tr>
                                        <td>{transaction.description}</td>
                                        <td>{transaction.date}</td>
                                        <td class={transaction.amount > 0 ? 'positivo' : 'negativo'}>
                                            {transaction.amount > 0 ? '+' : ''}${Math.abs(transaction.amount).toLocaleString()}
                                        </td>
                                        <td>
                                            <span class="estado {transaction.status}">
                                                {transaction.status === 'completed' ? 'Completado' : 'Pendiente'}
                                            </span>
                                        </td>
                                    </tr>
                                {/each}
                            </tbody>
                        </table>
                    </div>
                </div>
  
                <!-- Resumen financiero -->
                <div class="elemento-rejilla resumen-financiero">
                    <h2>Resumen Financiero</h2>
                    <div class="lista-resumen">
                        <div class="elemento-resumen">
                            <span class="etiqueta">Ingresos totales</span>
                            <span class="valor positivo">+${summary.totalIncome.toLocaleString()}</span>
                        </div>
  
                        <div class="elemento-resumen">
                            <span class="etiqueta">Gastos totales</span>
                            <span class="valor negativo">-${summary.totalExpenses.toLocaleString()}</span>
                        </div>
  
                        <div class="elemento-resumen total">
                            <span class="etiqueta">Balance neto</span>
                            <span class="valor">${summary.netBalance.toLocaleString()}</span>
                        </div>
                    </div>
                </div> <!-- Fin del resumen financiero -->
                
            </div>
        </div>
    </div>
  </div>
  
  <style>
    .pagina-modulo {
        height: 100vh;
        display: flex;
        flex-direction: column;
    }
  
    .contenedor-modulo {
        flex: 1;
        padding: 2rem;
        overflow-y: auto;
    }
  
    .encabezado-modulo {
        margin-bottom: 2rem;
    }
  
    .estadisticas-rapidas {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 1rem;
    }
  
    .tarjeta-estadistica {
        background-color: var(--color-background);
        border: 1px solid var(--color-border);
        border-radius: 0.5rem;
        padding: 1.5rem;
        display: flex;
        align-items: center;
        gap: 1rem;
    }
  
    .tarjeta-estadistica svg {
        color: var(--color-primary);
    }
  
    .contenido-estadistica {
        display: flex;
        flex-direction: column;
    }
  
    .valor-estadistica {
        font-size: 1.5rem;
        font-weight: 600;
        color: var(--color-text);
    }
  
    .etiqueta-estadistica {
        font-size: 0.875rem;
        color: var(--color-text);
        opacity: 0.8;
    }
  
    .rejilla-contenido {
        display: grid;
        grid-template-columns: 2fr 1fr;
        gap: 2rem;
    }
  
    .elemento-rejilla {
        background-color: var(--color-background);
        border: 1px solid var(--color-border);
        border-radius: 0.5rem;
        padding: 1.5rem;
    }
  
    .contenedor-tabla {
        overflow-x: auto;
    }
  
    .estado {
        padding: 0.25rem 0.5rem;
        border-radius: 0.25rem;
        font-size: 0.875rem;
    }
  
    .completado {
        background-color: #10B981;
        color: white;
    }
  
    .pendiente {
        background-color: #F59E0B;
        color: white;
    }
  
    .lista-resumen {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
  
    .elemento-resumen {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem;
        border-bottom: 1px solid var(--color-border);
    }
  
    .positivo {
        color: #10B981;
    }
  
    .negativo {
        color: #EF4444;
    }
  </style>
  