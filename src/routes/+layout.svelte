<script>
    // Layout — Header und Footer für alle Seiten
    let { data, children } = $props();

    // Mobile Menü State
    let menuOpen = $state(false);
</script>

 
<script>
    // Layout — Header und Footer für alle Seiten
    let { data, children } = $props();
    // Mobile Menü State
    let menuOpen = $state(false);
</script>
<div class="min-h-screen flex flex-col bg-slate-50">
    <!-- Header -->
    <header class="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div class="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between">
            <!-- Logo -->
            <a href="/" class="font-extrabold text-lg text-slate-900 tracking-tight hover:text-blue-600 transition-colors">
                📄 PDF Manager
            </a>
			
			<!-- Desktop Nav -->
            <nav class="hidden sm:flex items-center gap-3 text-sm">
                {#if data.user}
                    <span class="text-slate-500">@{data.user.username}</span>

                    {#if data.user.role === 'admin'}
                        <a href="/admin"
                           class="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-1.5 rounded-lg transition-colors text-xs">
                            Admin Panel
                        </a>
                    {:else}
                        <a href="/upload"
                           class="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-1.5 rounded-lg transition-colors text-xs">
                            Meine PDFs
                        </a>
                    {/if}

                    <form action="/logout" method="POST">
                        <button type="submit"
                                class="text-slate-400 hover:text-red-500 transition-colors text-xs">
                            Logout
                        </button>
                    </form>
                {:else}
                    <a href="/login" class="text-slate-500 hover:text-slate-900 transition-colors">Login</a>
                    <a href="/register"
                       class="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-1.5 rounded-lg transition-colors text-xs">
                        Register
                    </a>
                {/if}
            </nav>
			 
			<!-- Mobile Hamburger -->
            <button class="sm:hidden text-slate-500" onclick={() => menuOpen = !menuOpen}>
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                </svg>
            </button>
        </div>
        
		<!-- Mobile Menu -->
        {#if menuOpen}
            <div class="sm:hidden border-t border-slate-100 bg-white px-4 py-3 flex flex-col gap-3 text-sm">
                {#if data.user}
                    <span class="text-slate-500">@{data.user.username}</span>
                    {#if data.user.role === 'admin'}
                        <a href="/admin" class="text-blue-600 font-semibold">Admin Panel</a>
                    {:else}
                        <a href="/upload" class="text-blue-600 font-semibold">Meine PDFs</a>
                    {/if}
                    <form action="/logout" method="POST">
                        <button type="submit" class="text-red-500">Logout</button>
                    </form>
                {:else}
                    <a href="/login" class="text-slate-600">Login</a>
                    <a href="/register" class="text-blue-600 font-semibold">Register</a>
                {/if}
            </div>
        {/if}
    </header>

    <!-- Hauptinhalt -->
    <main class="flex-1">
        {@render children()}
    </main>
    <!-- Footer -->
    <footer class="bg-white border-t border-slate-100 py-6 text-center text-slate-400 text-xs">
        © 2025 PDF Manager - WAE Übung
    </footer>
</div>
 
 