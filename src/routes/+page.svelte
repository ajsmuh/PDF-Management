<script>
    // Marketing-Seite — öffentlich, keine Authentication nötig
    let { data } = $props();
</script>

<!-- Hero Section -->
<section class="bg-white border-b border-slate-200">
    <div class="max-w-5xl mx-auto px-6 py-20 text-center">
        <div class="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
            </svg>
        </div>
        <p class="text-blue-600 text-sm font-semibold uppercase tracking-widest mb-3">PDF Manager</p>
        <h1 class="text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
            Deine PDFs.
            Sicher gespeichert.
        </h1>
        <p class="text-slate-400 text-lg max-w-md mx-auto mb-8">
            Lade PDFs hoch, verwalte sie und lade sie jederzeit wieder herunter.
            Einfach, schnell und sicher.
        </p>

        <div class="flex gap-3 justify-center">
            {#if data.user}
                <a href="/upload"
                   class="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl transition-colors text-sm">
                    Zu meinen PDFs
                </a>
            {:else}
                <a href="/register"
                   class="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl transition-colors text-sm">
                    Kostenlos starten
                </a>
                <a href="/login"
                   class="bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium px-6 py-3 rounded-xl transition-colors text-sm">
                    Einloggen
                </a>
            {/if}
        </div>
    </div>
</section>

<!-- Features Section -->
<section class="bg-slate-100 py-16">
    <div class="max-w-5xl mx-auto px-6">

        <h2 class="text-2xl font-extrabold text-slate-900 text-center mb-10">
            Warum PDF Manager?
        </h2>

    </div>
</section>