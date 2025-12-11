<script>
    import { createEventDispatcher } from 'svelte';
    const dispatchEvent = createEventDispatcher();
    export let keyData = {
        id: '',
        name: '',
        device: '',
        reserved: false
    };

    let reserved = keyData.reserved;
    let name = keyData.name;
    let device = keyData.device;

    function updateDispatch() {
        if ( reserved === keyData.reserved && name === keyData.name && device === keyData.device ) {
            return;
        }
        dispatchEvent('update', { name, device, reserved });
    };

</script>

<div class="space-y-6">
    <div class="space-y-4">
        <div>
            <label for="keyName" class="block text-sm font-medium text-slate-700 mb-1">Nombre de la Llave</label>
            <input 
                id="keyName"
                type="text" 
                bind:value={name} 
                class="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-slate-700 bg-white"
                placeholder="Ej. Acceso Principal"
            />
        </div>

        <div>
            <label for="deviceName" class="block text-sm font-medium text-slate-700 mb-1">Dispositivo Asociado</label>
            <div class="relative">
                <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                </div>
                <input 
                    id="deviceName"
                    type="text" 
                    bind:value={device} 
                    class="w-full pl-10 px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-slate-700 bg-white"
                    placeholder="Ej. Monitor Sala 1"
                />
            </div>
        </div>

        <div class="flex items-center justify-between p-4 bg-slate-50 rounded-lg border border-slate-200">
            <div class="flex flex-col">
                <span class="text-sm font-medium text-slate-700">Estado de Reserva</span>
                <span class="text-xs text-slate-500">Indica si la llave está en uso actualmente</span>
            </div>
            <label class="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" bind:checked={reserved} class="sr-only peer">
                <div class="w-11 h-6 bg-slate-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
        </div>
    </div>

    <div class="pt-4 border-t border-slate-100">
        <button 
            on:click={updateDispatch}
            class="w-full flex justify-center items-center gap-2 px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-sm hover:shadow transition-all focus:ring-4 focus:ring-blue-200"
        >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
            </svg>
            Guardar Cambios
        </button>
    </div>
</div>