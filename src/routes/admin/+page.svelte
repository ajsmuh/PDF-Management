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
    </div>
</div>