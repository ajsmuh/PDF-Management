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
        
        {/if}
    </div>
</div>