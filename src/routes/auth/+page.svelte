<script>
    import { auth, googleProvider } from '$lib/firebase';
    import { signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
    import { goto } from '$app/navigation';

    let email = '';
    let password = '';
    let errorMsg = '';
    let isRegistering = false;

    async function loginGoogle() {
        try {
            await signInWithPopup(auth, googleProvider);
            goto('/console');
        } catch (error) {
            console.error(error);
            errorMsg = "Error al entrar con Google. Intenta de nuevo.";
        }
    }

    async function handleAuth() {
        try {
            if (isRegistering) {
                await createUserWithEmailAndPassword(auth, email, password);
            } else {
                await signInWithEmailAndPassword(auth, email, password);
            }
            goto('/console');
        } catch (error) {
            console.error(error);
            if (isRegistering) {
                const message = error instanceof Error ? error.message : 'Error desconocido';
                errorMsg = "Error al registrarse. " + message;
            } else {
                errorMsg = "Correo o contraseña incorrectos.";
            }
        }
    };
    function toggleMode() {
        isRegistering = !isRegistering;
        errorMsg = '';
    };

</script>

<div class="min-h-[80vh] flex items-center justify-center relative overflow-hidden">
    
    <div class="absolute top-10 left-10 w-64 h-64 bg-cyan-400/20 rounded-full blur-3xl animate-pulse"></div>
    <div class="absolute bottom-10 right-10 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl"></div>

    <div class="relative z-10 w-full max-w-md p-8 bg-white/10 border border-white/30 rounded-2xl backdrop-blur-lg shadow-[0_8px_32px_rgba(0,0,0,0.1)]">
        
        <h2 class="text-3xl font-black text-center mb-6 text-slate-700 drop-shadow-sm">
            {isRegistering ? 'Crear Cuenta' : 'Iniciar Sesión'}
        </h2>

        {#if errorMsg}
            <div class="mb-4 p-3 bg-red-100/80 border border-red-200 text-red-700 text-sm rounded-lg text-center">
                {errorMsg}
            </div>
        {/if}

        <div class="space-y-4">
            <div>
                <label for="email" class="block text-sm font-medium text-slate-600 mb-1">Correo Electrónico</label>
                <input id="email" type="email" bind:value={email} 
                       class="w-full rounded-lg border-slate-300 bg-white/50 focus:border-cyan-400 focus:ring focus:ring-cyan-200 transition" 
                       placeholder="tu@correo.com">
            </div>

            <div>
                <label for="password" class="block text-sm font-medium text-slate-600 mb-1">Contraseña</label>
                <input id="password" type="password" bind:value={password} 
                       class="w-full rounded-lg border-slate-300 bg-white/50 focus:border-cyan-400 focus:ring focus:ring-cyan-200 transition" 
                       placeholder="••••••••">
            </div>

            <button on:click={handleAuth} 
                    class="w-full py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all">
                {isRegistering ? 'Registrarse' : 'Entrar al Sistema'}
            </button>

            <div class="text-center mt-4">
                <button on:click={toggleMode} class="text-sm text-slate-600 hover:text-cyan-600 underline">
                    {isRegistering ? '¿Ya tienes cuenta? Inicia sesión' : '¿No tienes cuenta? Regístrate'}
                </button>
            </div>

            <div class="relative flex py-2 items-center">
                <div class="flex-grow border-t border-slate-300"></div>
                <span class="flex-shrink mx-4 text-slate-400 text-sm">O continúa con</span>
                <div class="flex-grow border-t border-slate-300"></div>
            </div>

            <button on:click={loginGoogle} 
                    class="w-full py-3 bg-white/70 border border-slate-200 text-slate-700 font-semibold rounded-lg hover:bg-white transition flex items-center justify-center gap-2 shadow-sm">
                <img src="https://www.svgrepo.com/show/475656/google-color.svg" class="w-5 h-5" alt="Google">
                Google
            </button>
        </div>
    </div>
</div>