<script>
    // Register-Seite
    let { form } = $props();
    let showPassword = $state(false);
</script>

<div class="min-h-screen flex items-center justify-center bg-slate-100 p-5">
    <div class="bg-white w-full max-w-md rounded-2xl border border-slate-200 shadow-sm px-8 py-12">

        <!-- Titel -->
        <div class="mb-8">
            <p class="text-slate-400 text-sm">Erstelle dein Konto</p>
            <h1 class="text-3xl font-extrabold text-slate-900 mt-1">Registrieren</h1>
        </div>

        <!-- Fehlermeldung -->
        {#if form?.error}
            <div class="bg-rose-50 border border-rose-100 text-rose-600 text-sm px-4 py-3 rounded-xl mb-5 flex items-center gap-2">
                <span>⚠</span> {form.error}
            </div>
        {/if}

    </div>
</div>