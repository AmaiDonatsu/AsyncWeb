<script lang="ts">
	import { user } from '$lib/stores';
	import { goto } from '$app/navigation';
	import { browser } from '$app/environment';
	import { auth } from '$lib/firebase';
	import KeysCard from '../../components/KeysCard.svelte';
	import KeyPanel from '../../components/KeyPanel.svelte';
	import { updateKey, createKey, getUserKeys } from '$lib/apiBackend';
	import CreateKey from '../../components/CreateKey.svelte';
	import type { UserKeysResponse } from '$lib/interfaces';

	$effect(() => {
		if (browser && $user === null) {
			goto('/auth');
		} else {
			getConsoleData();
		}
	});

	let selectedKey = $state<string | null>(null);
	let userKeys = $state<UserKeysResponse>();
	let creatingKey = $state<boolean>(false);

	async function getConsoleData() {
		console.log('fetching user keys...');
		try {
			if (!auth.currentUser) {
				console.warn('Usuario no autenticado, esperando...');
				return;
			}

			const token = await auth.currentUser?.getIdToken(true);
			if (!token) return;

			const keys = await getUserKeys(token);

			userKeys = await keys.json();
		} catch (error) {
			console.error('Error fetching user keys:', error);
		}
	}

	function selectKey(keyId: string) {
		console.log('Selecting key:', keyId);
		if (keyId === null) {
			return;
		}

		if (selectedKey === keyId) {
			selectedKey = null;
			return;
		}

		selectedKey = keyId;
	}
</script>

<div class="min-h-screen bg-slate-50 p-6 md:p-10">
	<header class="mb-10 max-w-7xl mx-auto">
		<div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
			<div>
				<h1 class="text-3xl font-bold text-slate-800 tracking-tight">Consola de Servicios</h1>
				<p class="text-slate-500 mt-1">Administra tus llaves de acceso y dispositivos conectados</p>
			</div>
			<div class="flex items-center gap-3">
				<div
					class="h-10 w-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold shadow-lg shadow-blue-200"
				>
					{$user?.email?.[0].toUpperCase() || 'U'}
				</div>
			</div>
		</div>
	</header>

	<div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
		<!-- Lista de Keys -->
		<div
			class="{selectedKey
				? 'lg:col-span-8'
				: 'lg:col-span-12'} transition-all duration-500 ease-in-out"
		>
			<div class="flex items-center justify-between mb-6">
				<h2 class="text-xl font-semibold text-slate-700 flex items-center gap-2">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-5 w-5 text-slate-400"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"
						/>
					</svg>
					Mis Llaves
					{#if !creatingKey}
						<button
							onclick={() => (creatingKey = true)}
							class="ml-3 px-3 py-1 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
						>
							Crear Llave
						</button>
					{/if}
				</h2>
				{#if userKeys?.keys}
					<span
						class="px-3 py-1 bg-white border border-slate-200 text-slate-600 rounded-full text-xs font-medium shadow-sm"
					>
						{userKeys.keys.length} Dispositivos
					</span>
				{/if}
			</div>

			{#if userKeys && userKeys.keys && userKeys.keys.length > 0}
				<div
					class="grid grid-cols-1 md:grid-cols-2 {selectedKey
						? 'xl:grid-cols-2'
						: 'xl:grid-cols-3'} gap-5"
				>
					{#each userKeys.keys as key}
						<button
							onclick={() => selectKey(key.id)}
							class="text-left w-full group focus:outline-none"
						>
							<KeysCard keyData={key} selected={key.id === selectedKey} />
						</button>
					{/each}
				</div>
			{:else}
				<div
					class="bg-white rounded-2xl p-16 text-center border border-slate-200 border-dashed shadow-sm"
				>
					<div
						class="inline-flex items-center justify-center w-16 h-16 rounded-full bg-slate-50 mb-4"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-8 w-8 text-slate-400"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M12 6v6m0 0v6m0-6h6m-6 0H6"
							/>
						</svg>
					</div>
					<h3 class="text-lg font-medium text-slate-900">No hay llaves encontradas</h3>
					<p class="text-slate-500 mt-1 max-w-sm mx-auto">
						Parece que aún no tienes dispositivos asociados a tu cuenta.
					</p>
				</div>
			{/if}
		</div>

		<!-- Panel de Edición -->
		{#if selectedKey && userKeys && userKeys.keys}
			<div class="lg:col-span-4 animate-in slide-in-from-right-10 fade-in duration-300">
				<div
					class="bg-white rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 overflow-hidden sticky top-8"
				>
					<div
						class="p-5 border-b border-slate-100 bg-slate-50/50 flex justify-between items-center backdrop-blur-sm"
					>
						<h2 class="font-semibold text-slate-800 flex items-center gap-2">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="h-5 w-5 text-blue-500"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
								/>
							</svg>
							Editar Llave
						</h2>
						<button
							onclick={() => (selectedKey = null)}
							aria-label="Cerrar"
							class="p-1 rounded-lg hover:bg-slate-200 text-slate-400 hover:text-slate-600 transition-colors"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="h-5 w-5"
								viewBox="0 0 20 20"
								fill="currentColor"
							>
								<path
									fill-rule="evenodd"
									d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
									clip-rule="evenodd"
								/>
							</svg>
						</button>
					</div>
					<div class="p-6">
						{#each userKeys.keys as key (key.id)}
							{#if key && key.id === selectedKey}
								<KeyPanel
									keyData={key}
									on:update={async (e) => {
										console.log('Updated key data:', e.detail);
										const token = (await auth.currentUser?.getIdToken(true)) || '';
										updateKey(key.id, e.detail.name, e.detail.reserved, token).then(() => {
											getConsoleData();
										});
									}}
								/>
							{/if}
						{/each}
					</div>
				</div>
			</div>
		{/if}
	</div>

	<!-- Modal Crear Key -->
	{#if creatingKey}
		<div
			class="fixed inset-0 z-50 flex items-center justify-center p-4 animate-in fade-in duration-200"
		>
			<!-- Backdrop -->
			<div
				class="absolute inset-0 bg-slate-900/50 backdrop-blur-sm"
				onclick={() => (creatingKey = false)}
				role="button"
				tabindex="0"
				onkeydown={(e) => {
					if (e.key === 'Enter' || e.key === ' ') creatingKey = false;
				}}
			></div>

			<!-- Modal Content -->
			<div
				class="relative bg-white rounded-2xl shadow-2xl max-w-md w-full animate-in zoom-in-95 duration-200"
			>
				<CreateKey
					on:close={() => (creatingKey = false)}
					on:create={async (e) => {
						console.log('Creating key:', e.detail);
						const token = (await auth.currentUser?.getIdToken(true)) || '';
						await createKey(e.detail.name, token);
						creatingKey = false;
						getConsoleData();
					}}
				/>
			</div>
		</div>
	{/if}
</div>
