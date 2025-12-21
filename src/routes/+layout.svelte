<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import logo from '$lib/assets/logoasyc.webp';
    import fondo from '$lib/assets/fondo.png';
	import { onMount } from 'svelte';
    import { slide } from 'svelte/transition';
	import { onAuthStateChanged } from 'firebase/auth';
	import { user } from '$lib/stores';
	import { auth } from '$lib/firebase';
    import { injectAnalytics } from '@vercel/analytics/sveltekit'

    let isMenuOpen = $state(false);

	onMount(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            user.set(currentUser); 
            
            if (currentUser) {
                console.log("Usuario detectado:", currentUser.email);
            } else {
                console.log("No hay usuario (Modo Invitado)");
            }
        });
        return () => unsubscribe();
    });

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;800&display=swap" rel="stylesheet">
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    fontFamily: {
                        sans: ['Inter', 'sans-serif'],
                    },
                    colors: {
                        aero: {
                            bg: '#121e31',
                            glass: 'rgba(255, 255, 255, 0.25)',
                            border: 'rgba(255, 255, 255, 0.4)',
                            green: '#5BD835',
                            cyan: '#4FD1B3',
                            orange: '#FF9F45'
                        }
                    },
                    animation: {
                        'float': 'float 6s ease-in-out infinite',
                        'float-delayed': 'float 6s ease-in-out 3s infinite',
                        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                    },
                    keyframes: {
                        float: {
                            '0%, 100%': { transform: 'translateY(0)' },
                            '50%': { transform: 'translateY(-20px)' },
                        }
                    }
                }
            }
        }
    </script>
    <style>
        /* Patrón de cuadrícula sutil para el fondo tech */
        .grid-pattern {
            background-size: 40px 40px;
            background-image: linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
                              linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
        }
        
        /* Efecto de brillo en hover para las tarjetas */
        .glass-card:hover {
            box-shadow: 0 0 30px rgba(79, 209, 179, 0.3), inset 0 0 20px rgba(255,255,255,0.2);
            border-color: rgba(255,255,255,0.6);
        }
    </style>
</svelte:head>

<div class="bg-[#121e31] text-white min-h-screen relative overflow-x-hidden font-sans selection:bg-aero-cyan selection:text-black">
    <div class="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <img src={fondo} alt="" class="absolute inset-0 w-full h-full object-cover opacity-30" />

        <div class="absolute inset-0 grid-pattern opacity-30"></div>
        
        <div class="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-[#4A3B69] rounded-full mix-blend-screen filter blur-[100px] opacity-60 animate-pulse-slow"></div>
        <div class="absolute top-[20%] right-[-5%] w-[40vw] h-[40vw] bg-[#4FD1B3] rounded-full mix-blend-screen filter blur-[80px] opacity-40 animate-float"></div>
        <div class="absolute bottom-[-10%] left-[20%] w-[45vw] h-[45vw] bg-[#5BD835] rounded-full mix-blend-screen filter blur-[120px] opacity-30 animate-float-delayed"></div>
        
        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-b from-transparent via-[#4FD1B3]/5 to-transparent pointer-events-none"></div>
    </div>

    <nav class="absolute top-0 left-0 right-0 z-50 w-full max-w-6xl mt-6 px-6 mx-auto">
        <div class="bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-4 flex justify-between items-center shadow-[0_8px_32px_rgba(0,0,0,0.2)] relative z-50">
            <div class="flex items-center gap-2">
                <a href="/" class="flex items-center gap-2 hover:opacity-80 transition-opacity">
                    <img src={logo} alt="AsyncControl Logo" class="h-8 w-auto rounded-lg shadow-sm" />
                    <span class="font-bold text-xl tracking-tight text-white drop-shadow-md">Async<span class="text-aero-green">Control</span></span>
                </a>
            </div>
            
            <ul class="hidden md:flex gap-6 text-sm font-medium text-white/80 items-center">
                <li><a href="/" class="hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all">Home</a></li>
                <li><a href="https://async-control.vercel.app/" target="_blank" rel="noopener noreferrer" class="hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all">AsyncControl</a></li>
                <li><a href="/docs" class="hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all">Docs</a></li>
                <li><a href="/about" class="hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all">About</a></li>
                <li><a href="/console" class="hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all">Console</a></li>
                
                <li>
                    <a href="https://github.com/AmaiDonatsu/AsyncWeb" target="_blank" rel="noopener noreferrer" aria-label="Repositorio en GitHub" class="flex items-center gap-2 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5" aria-hidden="true">
                            <path fill-rule="evenodd" d="M12 .5a12 12 0 0 0-3.79 23.41c.6.11.82-.26.82-.58l-.01-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.4-1.35-1.77-1.35-1.77-1.1-.75.08-.73.08-.73 1.22.09 1.86 1.25 1.86 1.25 1.08 1.85 2.83 1.32 3.52 1.01.11-.79.42-1.32.77-1.62-2.67-.3-5.47-1.33-5.47-5.92 0-1.31.47-2.38 1.25-3.22-.13-.3-.54-1.52.12-3.17 0 0 1.02-.33 3.35 1.23a11.55 11.55 0 0 1 6.1 0c2.33-1.56 3.35-1.23 3.35-1.23.66 1.65.25 2.87.12 3.17.78.84 1.25 1.91 1.25 3.22 0 4.6-2.81 5.62-5.49 5.92.43.37.81 1.1.81 2.22l-.01 3.29c0 .32.22.7.83.58A12 12 0 0 0 12 .5Z" clip-rule="evenodd" />
                        </svg>
                        <span>Repo</span>
                    </a>
                </li>
            </ul>

            <div class="flex items-center gap-4">
                {#if $user}
                    <a href="/user" class="px-4 py-1.5 rounded-full border border-white/30 bg-white/10 hover:bg-white/20 transition text-sm font-semibold backdrop-blur-sm text-white">Mi perfil</a>
                {:else}
                    <a href="/auth" class="px-4 py-1.5 rounded-full border border-white/30 bg-white/10 hover:bg-white/20 transition text-sm font-semibold backdrop-blur-sm text-white">Login</a>
                {/if}

                <!-- Mobile Menu Button -->
                <button 
                    class="md:hidden text-white hover:text-aero-cyan transition-colors focus:outline-none"
                    onclick={() => isMenuOpen = !isMenuOpen}
                    aria-label="Toggle Menu"
                >
                    {#if isMenuOpen}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    {:else}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    {/if}
                </button>
            </div>
        </div>

        <!-- Mobile Menu Dropdown -->
        {#if isMenuOpen}
            <div transition:slide={{ duration: 300, axis: 'y' }} class="absolute top-full left-0 right-0 mt-2 mx-6 p-4 rounded-2xl bg-[#121e31]/95 backdrop-blur-xl border border-white/20 shadow-2xl md:hidden flex flex-col gap-2 z-40 overflow-hidden">
                <a href="/" onclick={() => isMenuOpen = false} class="text-white/90 hover:text-aero-cyan font-medium p-3 rounded-xl hover:bg-white/5 transition-all flex items-center gap-3">
                    <span>🏠</span> Home
                </a>
                <a href="https://async-control.vercel.app/" target="_blank" onclick={() => isMenuOpen = false} class="text-white/90 hover:text-aero-cyan font-medium p-3 rounded-xl hover:bg-white/5 transition-all flex items-center gap-3">
                    <span>🚀</span> AsyncControl
                </a>
                <a href="/docs" onclick={() => isMenuOpen = false} class="text-white/90 hover:text-aero-cyan font-medium p-3 rounded-xl hover:bg-white/5 transition-all flex items-center gap-3">
                    <span>📚</span> Docs
                </a>
                <a href="/about" onclick={() => isMenuOpen = false} class="text-white/90 hover:text-aero-cyan font-medium p-3 rounded-xl hover:bg-white/5 transition-all flex items-center gap-3">
                    <span>ℹ️</span> About
                </a>
                <a href="/console" onclick={() => isMenuOpen = false} class="text-white/90 hover:text-aero-cyan font-medium p-3 rounded-xl hover:bg-white/5 transition-all flex items-center gap-3">
                    <span>💻</span> Console
                </a>
                <a href="https://github.com/AmaiDonatsu/AsyncWeb" target="_blank" onclick={() => isMenuOpen = false} class="text-white/90 hover:text-aero-cyan font-medium p-3 rounded-xl hover:bg-white/5 transition-all flex items-center gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5" aria-hidden="true">
                        <path fill-rule="evenodd" d="M12 .5a12 12 0 0 0-3.79 23.41c.6.11.82-.26.82-.58l-.01-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.4-1.35-1.77-1.35-1.77-1.1-.75.08-.73.08-.73 1.22.09 1.86 1.25 1.86 1.25 1.08 1.85 2.83 1.32 3.52 1.01.11-.79.42-1.32.77-1.62-2.67-.3-5.47-1.33-5.47-5.92 0-1.31.47-2.38 1.25-3.22-.13-.3-.54-1.52.12-3.17 0 0 1.02-.33 3.35 1.23a11.55 11.55 0 0 1 6.1 0c2.33-1.56 3.35-1.23 3.35-1.23.66 1.65.25 2.87.12 3.17.78.84 1.25 1.91 1.25 3.22 0 4.6-2.81 5.62-5.49 5.92.43.37.81 1.1.81 2.22l-.01 3.29c0 .32.22.7.83.58A12 12 0 0 0 12 .5Z" clip-rule="evenodd" />
                    </svg>
                    Repo
                </a>
            </div>
        {/if}
    </nav>

    <div class="relative z-10 pt-20 pb-20 min-h-screen flex flex-col">
        {@render children()}
    </div>
</div>
