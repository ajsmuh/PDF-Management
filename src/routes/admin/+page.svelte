<script>
    // Admin-Panel: alle PDFs und User verwalten
    let { data, form } = $props();

    // Tab zwischen PDFs und Usern wechseln
    let activeTab = $state('pdfs');
</script>

<div class="bg-slate-100 min-h-screen">
    <div class="max-w-5xl mx-auto px-4 py-8">

        <!-- Header -->
        <div class="mb-6">
            <span class="bg-red-100 text-red-600 text-xs font-bold px-2 py-0.5 rounded-full">Admin</span>
            <h1 class="text-2xl font-extrabold text-slate-900 mt-2">Admin Panel</h1>
            <p class="text-slate-400 text-sm mt-1">Alle PDFs und User verwalten</p>
        </div>

        <!-- Fehlermeldung -->
        {#if form?.error}
            <div class="bg-rose-50 border border-rose-100 text-rose-600 text-sm px-4 py-3 rounded-xl mb-5">
                {form.error}
            </div>
        {/if}

        <!-- Stats -->
        <div class="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
            <div class="bg-white rounded-2xl border border-slate-200 shadow-sm p-5">
                <p class="text-xs text-slate-400 uppercase tracking-widest mb-1">User</p>
                <p class="text-3xl font-extrabold text-slate-900">{data.users.length}</p>
            </div>
            <div class="bg-white rounded-2xl border border-slate-200 shadow-sm p-5">
                <p class="text-xs text-slate-400 uppercase tracking-widest mb-1">PDFs</p>
                <p class="text-3xl font-extrabold text-slate-900">{data.pdfs.length}</p>
            </div>
        </div>

        <!-- Tabs -->
        <div class="flex bg-white rounded-2xl border border-slate-200 shadow-sm p-1 mb-6 w-fit gap-1">
            <button onclick={() => activeTab = 'pdfs'}
                    class="px-5 py-2 rounded-xl text-sm font-semibold transition-all
                           {activeTab === 'pdfs' ? 'bg-blue-600 text-white' : 'text-slate-500 hover:text-slate-800'}">
                PDFs ({data.pdfs.length})
            </button>
            <button onclick={() => activeTab = 'users'}
                    class="px-5 py-2 rounded-xl text-sm font-semibold transition-all
                           {activeTab === 'users' ? 'bg-blue-600 text-white' : 'text-slate-500 hover:text-slate-800'}">
                User ({data.users.length})
            </button>
        </div>

        <!-- PDF Liste -->
        {#if activeTab === 'pdfs'}
            {#if data.pdfs.length === 0}
                <div class="bg-white rounded-2xl border border-slate-200 text-center py-14">
                    <p class="text-slate-400 text-sm">Noch keine PDFs vorhanden.</p>
                </div>
            {:else}
                <div class="space-y-3">
                    {#each data.pdfs as pdf (pdf.id)}
                        <div class="bg-white rounded-2xl border border-slate-200 shadow-sm p-4
                                    flex items-center justify-between gap-4">

                            <!-- PDF Info -->
                            <div class="flex items-center gap-3 min-w-0">
                                <div class="w-10 h-10 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                                    </svg>
                                </div>
                                <div class="min-w-0">
                                    <p class="text-slate-800 text-sm font-medium truncate">{pdf.filename}</p>
                                    <p class="text-slate-400 text-xs">
                                        @{pdf.username} · {new Date(pdf.created_at).toLocaleDateString('de-AT')}
                                    </p>
                                </div>
                            </div>

                            <!-- Buttons -->
                            <div class="flex items-center gap-2 flex-shrink-0">
                                <a href={pdf.url} target="_blank" download={pdf.filename}
                                   class="bg-blue-600 hover:bg-blue-700 text-white text-xs
                                          font-semibold px-3 py-2 rounded-lg transition-colors">
                                    Download
                                </a>
                                <form action="?/deletePdf" method="POST">
                                    <input type="hidden" name="id" value={pdf.id} />
                                    <button type="submit"
                                            onclick={(e) => { if (!confirm('PDF wirklich löschen?')) e.preventDefault(); }}
                                            class="bg-red-500 hover:bg-red-600 text-white text-xs
                                                   font-semibold px-3 py-2 rounded-lg transition-colors">
                                        Löschen
                                    </button>
                                </form>
                            </div>
                        </div>
                    {/each}
                </div>
            {/if}
    </div>
</div>