<script>
    // Login-Seite
    let { form } = $props();
    let showPassword = $state(false);
</script>

<div class="min-h-screen flex items-center justify-center bg-slate-100 p-5">
    <div class="bg-white w-full max-w-md rounded-2xl border border-slate-200 shadow-sm px-8 py-12">

        <!-- Titel -->
        <div class="mb-8">
            <p class="text-slate-400 text-sm">Willkommen zurück</p>
            <h1 class="text-3xl font-extrabold text-slate-900 mt-1">Login</h1>
        </div>

        <!-- Fehlermeldung -->
        {#if form?.error}
            <div class="bg-rose-50 border border-rose-100 text-rose-600 text-sm px-4 py-3 rounded-xl mb-5 flex items-center gap-2">
                <span>⚠</span> {form.error}
            </div>
        {/if}

        <form action="?/login" method="POST" class="space-y-5">
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
                       autocomplete="current-password" required placeholder=" "
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
            </div>
        </form>
    </div>
</div>