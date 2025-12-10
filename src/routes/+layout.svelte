<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';

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
		<li><a href="/console">Blog</a></li>
		<li><a href="/auth">Login/signin</a></li>
	</ul>
</nav>

{@render children()}
