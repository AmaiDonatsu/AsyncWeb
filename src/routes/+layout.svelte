<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import { onMount } from 'svelte';
	import { onAuthStateChanged } from 'firebase/auth';
	import { user } from '$lib/stores';
	import { auth } from '$lib/firebase';

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
</svelte:head>
<nav class="p-4 bg-slate-100 border-b border-slate-300">
	<ul class="flex w-full items-center gap-4 font-bold text-slate-700">
		<li><a href="/">Home</a></li>
		<li><a href="/download">Download</a></li>
		<li><a href="/docs">Docs</a></li>
		<li><a href="/about">About</a></li>
		<li><a href="/console">console</a></li>
		
		<li>
			{#if $user}
				<a href="/user">Mi maldito perfil</a>
			{:else}
				<a href="/auth">Login/SignIn</a>
			{/if}
		</li>

		<li class="ml-auto">
			<a href="https://github.com/AmaiDonatsu/AsyncWeb" target="_blank" rel="noopener noreferrer" aria-label="Repositorio en GitHub" class="flex items-center gap-2">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 text-slate-700" aria-hidden="true">
					<path fill-rule="evenodd" d="M12 .5a12 12 0 0 0-3.79 23.41c.6.11.82-.26.82-.58l-.01-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.4-1.35-1.77-1.35-1.77-1.1-.75.08-.73.08-.73 1.22.09 1.86 1.25 1.86 1.25 1.08 1.85 2.83 1.32 3.52 1.01.11-.79.42-1.32.77-1.62-2.67-.3-5.47-1.33-5.47-5.92 0-1.31.47-2.38 1.25-3.22-.13-.3-.54-1.52.12-3.17 0 0 1.02-.33 3.35 1.23a11.55 11.55 0 0 1 6.1 0c2.33-1.56 3.35-1.23 3.35-1.23.66 1.65.25 2.87.12 3.17.78.84 1.25 1.91 1.25 3.22 0 4.6-2.81 5.62-5.49 5.92.43.37.81 1.1.81 2.22l-.01 3.29c0 .32.22.7.83.58A12 12 0 0 0 12 .5Z" clip-rule="evenodd" />
				</svg>
				<span>Repo</span>
			</a>
		</li>
	</ul>
</nav>

{@render children()}
