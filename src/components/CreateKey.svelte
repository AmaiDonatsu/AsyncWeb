<script lang="ts">
    import { createEventDispatcher } from 'svelte';
    const dispatchEvent = createEventDispatcher();
    let name: string = '';

    function close() {
        dispatchEvent('close');
    };

    function create() {
        if (name.trim()) {
            dispatchEvent('create', { name });
            name = '';
        }
    };
</script>

<div class="p-6">
    <!-- Header -->
    <div class="flex items-center justify-between mb-6">
        <div class="flex items-center gap-3">
            <div class="p-2 rounded-lg bg-blue-50">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                </svg>
            </div>
            <div>
                <h2 class="text-xl font-bold text-slate-800">Crear Nueva Llave</h2>
                <p class="text-sm text-slate-500">Agrega una nueva llave de acceso</p>
            </div>
        </div>
        <button 
            on:click={close} 
            class="p-2 rounded-lg hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition-colors"
            aria-label="Cerrar modal"
        >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
        </button>
    </div>

    <!-- Form -->
    <div class="space-y-4 mb-6">
        <div>
            <label for="keyName" class="block text-sm font-medium text-slate-700 mb-2">Nombre de la Llave</label>
            <input 
                id="keyName"
                type="text" 
                bind:value={name} 
                on:keydown={(e) => e.key === 'Enter' && create()}
                class="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-slate-700 bg-white"
                placeholder="Ej. Acceso Principal"
                autofocus
            />
        </div>
    </div>

    <!-- Actions -->
    <div class="flex gap-3">
        <button 
            on:click={close}
            class="flex-1 px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium rounded-lg transition-colors"
        >
            Cancelar
        </button>
        <button 
            on:click={create}
            disabled={!name.trim()}
            class="flex-1 flex justify-center items-center gap-2 px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-sm transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-blue-600"
        >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
            </svg>
            Crear Llave
        </button>
    </div>
</div>