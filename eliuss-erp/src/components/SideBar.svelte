<script lang="ts">
    import { isDarkTheme } from '../stores/tema';
    import { navigate } from 'svelte-routing';

    let menuItems = [
        { name: "Inicio", path: "/", icon: "home" },
        { name: "Facturación", path: "/facturacion", icon: "file-text" },
        { name: "Inventario", path: "/inventario", icon: "box" },
        { name: "Usuarios", path: "/usuarios", icon: "users" },
        { name: "Ventas", path: "/ventas", icon: "shopping-cart" }
    ];

    function goTo(path: string) {
        navigate(path);
    }
</script>

<aside class="sidebar">
    <div class="header">
        <h1>Enterprise ERP</h1>
    </div>

    <nav class="nav">
        {#each menuItems as item}
            <button class="nav-item" on:click={() => goTo(item.path)}>
                {@html getIcon(item.icon)}
                <span>{item.name}</span>
            </button>
        {/each}
    </nav>

    <div class="footer">
        <button class="icon-button" on:click={() => isDarkTheme.update(value => !value)}>
            {#if $isDarkTheme}
                {@html getIcon("sun")}
            {:else}
                {@html getIcon("moon")}
            {/if}
        </button>
        <button class="btn btn-primary" on:click={() => goTo('/login')}>
            Cerrar Sesión
        </button>
    </div>
</aside>

<script lang="ts">
    function getIcon(type: string) {
        const icons = {
            "home": `<svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M3 9L12 2l9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                        <polyline points="9 22 9 12 15 12 15 22"></polyline>
                    </svg>`,
            "file-text": `<svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M4 4h16v16H4z"></path>
                            <path d="M8 2v4M16 2v4M4 10h16M4 14h16M4 18h16"></path>
                          </svg>`,
            "box": `<svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M21 16V8a2 2 0 0 0-1-1.73l-8-4.62a2 2 0 0 0-2 0l-8 4.62A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l8 4.62a2 2 0 0 0 2 0l8-4.62a2 2 0 0 0 1-1.73z"></path>
                    </svg>`,
            "users": `<svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M16 21v-2a4 4 0 0 0-3-3.87M7 9a4 4 0 1 1 8 0M8 21v-2a4 4 0 0 1 3-3.87M4 8a4 4 0 0 1 4 4"></path>
                    </svg>`,
            "shopping-cart": `<svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <circle cx="9" cy="21" r="1"></circle>
                                <circle cx="20" cy="21" r="1"></circle>
                                <path d="M1 1h4l2 14h14"></path>
                                <path d="M16 5H3"></path>
                            </svg>`,
            "sun": `<svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <circle cx="12" cy="12" r="5"></circle>
                      <line x1="12" y1="1" x2="12" y2="3"></line>
                      <line x1="12" y1="21" x2="12" y2="23"></line>
                    </svg>`,
            "moon": `<svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"></path>
                    </svg>`
        };
        return icons[type] || "";
    }
</script>

<style>
    .sidebar {
        width: 16rem;
        height: 100vh;
        background-color: var(--color-background);
        border-right: 1px solid var(--color-border);
        display: flex;
        flex-direction: column;
    }

    .header {
        padding: 1rem;
        border-bottom: 1px solid var(--color-border);
        text-align: center;
    }

    .header h1 {
        font-size: 1.5rem;
        font-weight: bold;
        color: var(--color-primary);
    }

    .nav {
        flex: 1;
        padding: 1rem;
    }

    .nav-item {
        width: 100%;
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 10px;
        border: none;
        background: none;
        cursor: pointer;
        font-size: 1rem;
    }

    .nav-item:hover {
        background-color: var(--color-hover);
    }

    .footer {
        padding: 1rem;
        border-top: 1px solid var(--color-border);
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .icon-button {
        background: none;
        border: none;
        cursor: pointer;
    }

    .btn-primary {
        background-color: var(--color-primary);
        color: white;
        border: none;
        padding: 10px 15px;
        cursor: pointer;
    }

    .btn-primary:hover {
        background-color: var(--color-primary-dark);
    }
</style>
