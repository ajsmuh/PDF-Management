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

        <div class="grid grid-cols-1 sm:grid-cols-3 gap-6">

            <!-- Feature 1 -->
            <div class="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
                <div class="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
                    </svg>
                </div>
                <h3 class="font-bold text-slate-900 mb-2">Einfacher Upload</h3>
                <p class="text-slate-400 text-sm">PDFs in Sekunden hochladen — einfach Datei auswählen und fertig.</p>
            </div>

            <!-- Feature 2 -->
            <div class="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
                <div class="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                    </svg>
                </div>
                <h3 class="font-bold text-slate-900 mb-2">Jederzeit Download</h3>
                <p class="text-slate-400 text-sm">Deine PDFs sind jederzeit verfügbar — einfach herunterladen wann du willst.</p>
            </div>

            <!-- Feature 3 -->
            <div class="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
                <div class="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                    </svg>
                </div>
                <h3 class="font-bold text-slate-900 mb-2">Sicher gespeichert</h3>
                <p class="text-slate-400 text-sm">Alle PDFs werden sicher in der Cloud gespeichert — nur du hast Zugriff.</p>
            </div>
        </div>
    </div>
</section>