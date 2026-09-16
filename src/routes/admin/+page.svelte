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

<<<<<<< HEAD
                <!-- Stats -->
=======

        <!-- Stats -->
>>>>>>> temp-migration
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
<<<<<<< HEAD


=======
>>>>>>> temp-migration
    </div>
</div>