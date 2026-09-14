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
		</div>	
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
 
 