<script>
    export let keyData;
    export let selected = false;
</script>

<div class="h-full p-5 bg-white border rounded-2xl transition-all duration-300 flex flex-col justify-between relative overflow-hidden group-hover:shadow-lg
    {selected ? 'border-blue-500 ring-1 ring-blue-500 shadow-md' : 'border-slate-200 hover:border-blue-300'}">
    
    {#if selected}
        <div class="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-blue-500/10 to-transparent rounded-bl-full -mr-8 -mt-8"></div>
    {/if}

    <div class="flex justify-between items-start mb-5 relative z-10">
        <div class="p-2.5 rounded-xl shadow-sm {keyData.reserved ? 'bg-amber-50 text-amber-600 ring-1 ring-amber-100' : 'bg-emerald-50 text-emerald-600 ring-1 ring-emerald-100'}">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
            </svg>
        </div>
        <span class="text-[10px] font-mono text-slate-400 bg-slate-50 border border-slate-100 px-2 py-1 rounded-md">
            ID: {keyData.id.slice(0, 6)}...
        </span>
    </div>

    <div class="relative z-10">
        <h3 class="font-bold text-slate-800 text-lg mb-1 truncate tracking-tight" title={keyData.name}>
            {keyData.name}
        </h3>
        <p class="text-sm text-slate-500 flex items-center gap-1.5 mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            {keyData.device || 'Sin dispositivo'}
        </p>
    </div>

    <div class="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between relative z-10">
        <span class="text-xs font-semibold uppercase tracking-wider text-slate-400">Estado</span>
        <span class="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium border
            {keyData.reserved ? 'bg-amber-50 text-amber-700 border-amber-100' : 'bg-emerald-50 text-emerald-700 border-emerald-100'}">
            <span class="w-1.5 h-1.5 rounded-full mr-1.5 {keyData.reserved ? 'bg-amber-500' : 'bg-emerald-500'} animate-pulse"></span>
            {keyData.reserved ? 'Ocupada' : 'Disponible'}
        </span>
    </div>
</div>