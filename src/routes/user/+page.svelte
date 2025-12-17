<script>
    import { user } from '$lib/stores';
    import { goto } from '$app/navigation';
    import { browser } from '$app/environment';
    import { auth } from '$lib/firebase';
    import { signOut } from 'firebase/auth';

    async function logout() {
        try {
            await signOut(auth);
        } catch (error) {
            console.error(error);
        }
    }

    $: if(browser && $user === null) {
        goto('/auth');
    }
</script>

<div class="flex flex-col items-center justify-center min-h-[80vh] px-4">
    <div class="glass-card w-full max-w-md p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl text-center relative overflow-hidden group transition-all duration-300">
        <!-- Efecto de brillo de fondo -->
        <div class="absolute inset-0 bg-gradient-to-br from-aero-cyan/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>

        <!-- Avatar / Inicial -->
        <div class="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-aero-green to-aero-cyan flex items-center justify-center text-4xl font-bold text-white shadow-[0_0_20px_rgba(79,209,179,0.4)] border-2 border-white/20 relative z-10">
            {#if $user?.photoURL}
                <img src={$user.photoURL} alt="Profile" class="w-full h-full rounded-full object-cover" />
            {:else}
                {$user?.displayName ? $user.displayName[0].toUpperCase() : $user?.email ? $user.email[0].toUpperCase() : 'U'}
            {/if}
        </div>

        <!-- Información del Usuario -->
        <div class="relative z-10 mb-8">
            <h1 class="text-3xl font-bold text-white mb-2 drop-shadow-md">
                {$user?.displayName || 'Usuario'}
            </h1>
            
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-blue-100/80">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-4 h-4 opacity-70">
                    <path d="M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.162V6a2 2 0 00-2-2H3z" />
                    <path d="M19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z" />
                </svg>
                {$user?.email}
            </div>
        </div>

        <!-- Botones -->
        <div class="space-y-4 relative z-10">
            <button 
                on:click={logout}
                class="w-full py-3 px-6 rounded-xl bg-red-500/10 hover:bg-red-500/20 border border-red-500/30 text-red-200 font-semibold transition-all duration-200 hover:shadow-[0_0_20px_rgba(239,68,68,0.2)] hover:border-red-500/50 flex items-center justify-center gap-2 group/btn"
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 group-hover/btn:-translate-x-1 transition-transform">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
                </svg>
                Cerrar Sesión
            </button>
        </div>
    </div>
</div>