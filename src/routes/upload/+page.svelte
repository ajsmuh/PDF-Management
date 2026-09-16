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
        </div>
    </div>
</div>