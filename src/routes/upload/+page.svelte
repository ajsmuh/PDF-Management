<script>
    // PDFs hochladen, ansehen und herunterladen
    let { data, form } = $props();
</script>

<div class="bg-slate-100 min-h-screen">
    <div class="max-w-3xl mx-auto px-4 py-8">

        <h1 class="text-2xl font-extrabold text-slate-900 mb-1">Meine PDFs</h1>
        <p class="text-slate-400 text-sm mb-8">PDFs hochladen und herunterladen</p>

        <!-- Upload Formular -->
        <div class="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 mb-8">
            <h2 class="font-bold text-slate-800 text-sm mb-5">Neues PDF hochladen</h2>

            {#if form?.success}
                <div class="bg-green-50 border border-green-200 text-green-700 text-sm px-4 py-3 rounded-xl mb-4 flex items-center gap-2">
                    <span>✓</span> PDF erfolgreich hochgeladen!
                </div>
            {/if}
            {#if form?.error}
                <div class="bg-rose-50 border border-rose-100 text-rose-600 text-sm px-4 py-3 rounded-xl mb-4">
                    {form.error}
                </div>
            {/if}

            <form action="?/upload" method="POST" enctype="multipart/form-data" class="space-y-4">
                <!-- File Input — nur PDFs -->
                <input type="file"
                       name="pdf"
                       accept="application/pdf"
                       required
                       class="w-full text-slate-500 text-sm
                              file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0
                              file:bg-blue-600 file:text-white file:font-semibold
                              file:cursor-pointer hover:file:bg-blue-700 file:text-sm" />

                <button type="submit"
                        class="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white
                               font-semibold rounded-lg transition-colors text-sm">
                    Hochladen
                </button>
            </form>
        </div>

        <!-- PDF Liste -->
        <h2 class="font-bold text-slate-600 text-xs uppercase tracking-widest mb-3">
            Meine PDFs ({data.pdfs.length})
        </h2>

        {#if data.pdfs.length === 0}
            <div class="bg-white rounded-2xl border border-slate-200 text-center py-14">
                <p class="text-slate-400 text-sm">Noch keine PDFs hochgeladen.</p>
            </div>
        {:else}
            <div class="space-y-3">
                {#each data.pdfs as pdf (pdf.id)}
                    <div class="bg-white rounded-2xl border border-slate-200 shadow-sm p-4
                                flex items-center justify-between gap-4">

                        <!-- PDF Icon + Name -->
                        <div class="flex items-center gap-3 min-w-0">
                            <div class="w-10 h-10 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                                </svg>
                            </div>
                            <div class="min-w-0">
                                <p class="text-slate-800 text-sm font-medium truncate">{pdf.filename}</p>
                                <p class="text-slate-400 text-xs">
                                    {new Date(pdf.created_at).toLocaleDateString('de-AT')}
                                </p>
                            </div>
                        </div>

                        <!-- Buttons -->
                        <div class="flex items-center gap-2 flex-shrink-0">
                            <!-- Herunterladen -->
                            <a href={pdf.url}
                               target="_blank"
                               download={pdf.filename}
                               class="bg-blue-600 hover:bg-blue-700 text-white text-xs
                                      font-semibold px-3 py-2 rounded-lg transition-colors">
                                Download
                            </a>

                            <!-- Löschen -->
                            <form action="?/delete" method="POST">
                                <input type="hidden" name="pdfId" value={pdf.id} />
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