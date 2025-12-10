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
	<ul class="flex gap-4 font-bold text-slate-700">
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

	</ul>
</nav>

{@render children()}
