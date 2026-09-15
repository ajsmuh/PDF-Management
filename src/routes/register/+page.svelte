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
        
        <form action="?/register" method="POST" class="space-y-5">
            <!-- Username -->
            <div class="relative">
                <input type="text" id="username" name="username"
                       autocomplete="username" required placeholder=" "
                       class="peer w-full h-12 border border-slate-300 rounded-lg px-3.5 pt-4 pb-1
                              text-sm text-slate-900 bg-white focus:outline-none
                              focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all" />
                <label for="username"
                       class="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-slate-400 bg-white px-1
                              pointer-events-none transition-all duration-200
                              peer-focus:top-0 peer-focus:text-xs peer-focus:text-blue-600 peer-focus:font-medium
                              peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-slate-500">
                    Username
                </label>
            </div>

            <!-- Passwort -->
            <div class="relative">
                <input type={showPassword ? 'text' : 'password'} id="password" name="password"
                       autocomplete="new-password" required placeholder=" "
                       class="peer w-full h-12 border border-slate-300 rounded-lg pl-3.5 pr-12 pt-4 pb-1
                              text-sm text-slate-900 bg-white focus:outline-none
                              focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all" />
                <label for="password"
                       class="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-slate-400 bg-white px-1
                              pointer-events-none transition-all duration-200
                              peer-focus:top-0 peer-focus:text-xs peer-focus:text-blue-600 peer-focus:font-medium
                              peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-slate-500">
                    Passwort
                </label>
                <button type="button" onclick={() => showPassword = !showPassword}
                        class="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600">
                    {#if showPassword}
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                            <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"/><path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"/><path d="M6.61 6.61A13.52 13.52 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"/><line x1="2" y1="2" x2="22" y2="22"/>
                        </svg>
                    {:else}
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                            <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"/><circle cx="12" cy="12" r="3"/>
                        </svg>
                    {/if}
                </button>
            </div>  

            <button type="submit"
                class="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors text-sm">
                Konto erstellen
            </button>
        </form>

        <p class="text-slate-500 text-sm text-center mt-6">
            Schon ein Konto?
            <a href="/login" class="text-blue-600 font-semibold hover:underline ml-1">Einloggen</a>
        </p>
    </div>
</div>