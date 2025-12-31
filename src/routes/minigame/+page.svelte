<script lang="ts">
    import { onMount } from 'svelte';

    // Estados del juego
    let level = $state(1);
    let score = $state(0);
    let isPlaying = $state(false);
    let isShowingSequence = $state(false);
    let isInverseMode = $state(false);
    let statusText = $state("Sistema Inicializado");
    let shuffleStatusText = $state("INACTIVO (NIVEL < 5)");
    let speedDisplay = $state("600ms");
    let isShuffling = $state(false);
    let statusActive = $state(false);

    // Datos del grid
    const icons = ['⚛️', '🧬', '🔭', '🪐', '💻', '⚡', '🤖', '🔋', '🚀'];
    let nodeMapping = $state([0, 1, 2, 3, 4, 5, 6, 7, 8]);
    let slotStatuses = $state<string[]>(new Array(9).fill('')); // 'active', 'error', 'success', ''

    // Lógica interna
    let sequence: number[] = [];
    let playerSequence: number[] = [];

    function wait(ms: number) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    function shuffleGrid() {
        let newMapping = [...nodeMapping];
        newMapping.sort(() => Math.random() - 0.5);
        nodeMapping = newMapping;
    }

    function highlightNode(slotIdx: number, type = 'active') {
        const newStatuses = [...slotStatuses];
        newStatuses[slotIdx] = type;
        slotStatuses = newStatuses;
        
        setTimeout(() => {
             if (slotStatuses[slotIdx] === type) {
                 const clearStatuses = [...slotStatuses];
                 clearStatuses[slotIdx] = '';
                 slotStatuses = clearStatuses;
             }
        }, 400);
    }

    async function playSequence() {
        isShowingSequence = true;
        isPlaying = false;
        playerSequence = [];
        
        const currentSpeed = Math.max(250, 600 - (level * 25));
        speedDisplay = `${currentSpeed}ms`;

        statusText = "Sincronizando Secuencia...";
        statusActive = true;

        for (let iconIdx of sequence) {
            await wait(currentSpeed);
            const slotIdx = nodeMapping.indexOf(iconIdx);
            highlightNode(slotIdx, 'active');
            await wait(currentSpeed);
        }

        if (level >= 5) {
            statusText = "¡INTERFERENCIA DETECTADA!";
            shuffleStatusText = "ACTIVO 🔥";
            isShuffling = true;
            await wait(500);
            shuffleGrid();
            isShuffling = false;
        } else {
            shuffleStatusText = "INACTIVO (NIVEL < 5)";
        }

        statusActive = false;
        statusText = isInverseMode ? "ORDEN INVERSO" : "TU TURNO";
        isShowingSequence = false;
        isPlaying = true;
    }

    function handleNodeClick(slotIdx: number) {
        if (!isPlaying || isShowingSequence) return;

        const iconIdxClicked = nodeMapping[slotIdx];
        playerSequence.push(iconIdxClicked);
        highlightNode(slotIdx, 'active');

        const currentStep = playerSequence.length - 1;
        const targetSequence = isInverseMode ? [...sequence].reverse() : sequence;

        if (playerSequence[currentStep] !== targetSequence[currentStep]) {
            gameOver();
            return;
        }

        if (playerSequence.length === sequence.length) {
            nextLevel();
        }
    }

    function nextLevel() {
        isPlaying = false;
        score += level * 150;
        level++;
        statusText = "NIVEL SUPERADO";
        
        slotStatuses = new Array(9).fill('success');
        
        setTimeout(() => {
            slotStatuses = new Array(9).fill('');
            startNextRound();
        }, 800);
    }

    function startNextRound() {
        const nextIconIdx = Math.floor(Math.random() * 9);
        sequence.push(nextIconIdx);
        playSequence();
    }

    function gameOver() {
        isPlaying = false;
        statusText = "FALLO EN LA MATRIZ";
        slotStatuses = new Array(9).fill('error');
        
        setTimeout(() => {
            slotStatuses = new Array(9).fill('');
            resetGame();
        }, 1200);
    }

    function resetGame() {
        level = 1;
        score = 0;
        sequence = [];
        playerSequence = [];
        nodeMapping = [0, 1, 2, 3, 4, 5, 6, 7, 8];
        statusText = "SISTEMA LISTO";
        shuffleStatusText = "INACTIVO (NIVEL < 5)";
        slotStatuses = new Array(9).fill('');
    }

    function startGame() {
        resetGame();
        sequence = [Math.floor(Math.random() * 9)];
        playSequence();
    }

    function setMode(inverse: boolean) {
        isInverseMode = inverse;
        resetGame();
    }
</script>

<svelte:head>
    <title>Neuro-Sync: Memoria de Trabajo Pro</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700&display=swap');
    </style>
</svelte:head>

<div class="w-full flex flex-col items-center justify-center p-4 font-mono">

    <div class="max-w-md w-full glass-panel rounded-[2.5rem] p-8 shadow-2xl border-b-4 border-blue-900/30">
        <div class="text-center mb-6">
            <h1 class="text-2xl font-black text-blue-500 tracking-tighter mb-1">NEURO-SYNC <span class="text-xs bg-blue-900/50 px-2 py-0.5 rounded text-blue-300 ml-1">v2.0 PRO</span></h1>
            <p class="text-[9px] text-slate-500 uppercase tracking-[0.3em] font-bold">Protocolo de Alta Interferencia Cognitiva</p>
        </div>

        <div class="flex justify-between mb-6 bg-black/40 p-4 rounded-2xl border border-white/5">
            <div class="flex flex-col">
                <span class="text-slate-500 uppercase text-[9px] font-bold mb-1">Nivel Actual</span>
                <span class="font-bold text-2xl text-white tabular-nums">{level.toString().padStart(2, '0')}</span>
            </div>
            <div class="flex flex-col items-end">
                <span class="text-slate-500 uppercase text-[9px] font-bold mb-1">Puntuación</span>
                <span class="font-bold text-2xl text-blue-400 tabular-nums">{score.toString().padStart(4, '0')}</span>
            </div>
        </div>

        <div class="h-14 flex items-center justify-center mb-6 rounded-2xl bg-blue-950/20 border border-blue-500/10 text-center px-4">
            <span class="text-xs text-blue-300 font-bold uppercase tracking-wider {statusActive ? 'status-active' : ''}">{statusText}</span>
        </div>

        <div class="hex-grid mb-8 {isShuffling ? 'shuffling' : ''}">
            {#each nodeMapping as iconIndex, i}
                <!-- svelte-ignore a11y_click_events_have_key_events -->
                <!-- svelte-ignore a11y_no_static_element_interactions -->
                <div 
                    class="node {slotStatuses[i]}"
                    onclick={() => handleNodeClick(i)}
                >
                    <span>{icons[iconIndex]}</span>
                </div>
            {/each}
        </div>

        <div class="flex flex-col gap-3">
            <button 
                onclick={startGame}
                disabled={isPlaying || isShowingSequence}
                class="w-full py-4 bg-gradient-to-r from-blue-700 to-blue-600 hover:from-blue-600 hover:to-blue-500 text-white rounded-2xl font-black transition-all shadow-xl shadow-blue-900/40 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
            >
                INICIAR ENTRENAMIENTO
            </button>
            
            <div class="flex gap-2">
                <button 
                    onclick={() => setMode(false)}
                    class="flex-1 py-3 text-[10px] rounded-xl border font-bold transition-all { !isInverseMode ? 'bg-slate-800/50 border-blue-500/50 text-blue-300' : 'bg-slate-900/50 border-transparent text-slate-500 hover:text-slate-300' }"
                >
                    NORMAL
                </button>
                <button 
                    onclick={() => setMode(true)}
                    class="flex-1 py-3 text-[10px] rounded-xl border font-bold transition-all { isInverseMode ? 'bg-slate-800/50 border-blue-500/50 text-blue-300' : 'bg-slate-900/50 border-transparent text-slate-500 hover:text-slate-300' }"
                >
                    INVERSO (HARD)
                </button>
            </div>
        </div>

        <div class="mt-8 pt-6 border-t border-white/5 space-y-2">
            <div class="flex justify-between items-center text-[10px]">
                <span class="text-slate-500 font-bold">MODO SHUFFLE:</span>
                <span class="text-slate-600 {level >= 5 ? 'text-orange-500' : ''}">{shuffleStatusText}</span>
            </div>
            <div class="flex justify-between items-center text-[10px]">
                <span class="text-slate-500 font-bold">LATENCIA:</span>
                <span class="text-blue-400 font-mono">{speedDisplay}</span>
            </div>
        </div>
    </div>
</div>

<style>
    .font-mono {
        font-family: 'JetBrains Mono', monospace;
    }

    .hex-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 12px;
        max-width: 340px;
        margin: 0 auto;
    }

    .node {
        aspect-ratio: 1;
        background: #16161e;
        border: 2px solid #2d2d39;
        border-radius: 16px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
        font-size: 2.2rem;
        position: relative;
        user-select: none;
    }

    .node:active {
        transform: scale(0.92);
    }

    .node.active {
        background: #3b82f6;
        border-color: #60a5fa;
        box-shadow: 0 0 25px rgba(59, 130, 246, 0.7);
        transform: translateY(-2px);
        z-index: 10;
    }

    .node.error {
        background: #ef4444;
        border-color: #f87171;
        box-shadow: 0 0 25px rgba(239, 68, 68, 0.7);
    }

    .node.success {
        background: #10b981;
        border-color: #34d399;
        box-shadow: 0 0 25px rgba(16, 185, 129, 0.7);
    }

    .glass-panel {
        background: rgba(20, 20, 28, 0.85);
        backdrop-filter: blur(12px);
        border: 1px solid rgba(255, 255, 255, 0.08);
    }

    @keyframes shuffle-anim {
        0% { transform: scale(1); filter: blur(0); }
        50% { transform: scale(0.8); filter: blur(4px); opacity: 0.5; }
        100% { transform: scale(1); filter: blur(0); }
    }

    .shuffling {
        animation: shuffle-anim 0.5s ease-in-out;
    }

    @keyframes pulse-text {
        0%, 100% { opacity: 1; text-shadow: 0 0 10px rgba(59, 130, 246, 0.5); }
        50% { opacity: 0.6; }
    }

    .status-active {
        animation: pulse-text 1.5s infinite;
    }
</style>
