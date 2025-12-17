<script>
</script>

<svelte:head>
    <title>AsyncControl - IoT Command Center</title>
</svelte:head>

<!-- UI PRINCIPAL -->
<div class="flex flex-col items-center min-h-screen">
    
    <!-- HERO SECTION -->
    <main class="flex-grow flex flex-col items-center justify-center w-full max-w-5xl px-6 pt-20 pb-20 text-center">
            
            <!-- Badge "New v2.0" -->
            <div class="mb-6 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/20 backdrop-blur-sm text-xs font-medium text-aero-cyan uppercase tracking-widest shadow-lg animate-float">
                <span class="w-2 h-2 rounded-full bg-aero-green animate-pulse"></span>
                AsyncMini AI Activado
            </div>

            <h1 class="text-5xl md:text-7xl font-black mb-6 tracking-tight leading-tight drop-shadow-xl">
                <span class="bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/70">Tu Centro de Comando</span>
                <br>
                <span class="bg-clip-text text-transparent bg-gradient-to-r from-aero-green via-aero-cyan to-white drop-shadow-[0_0_25px_rgba(79,209,179,0.5)]">
                    IoT & Testing
                </span>
            </h1>

            <p class="text-lg md:text-xl text-blue-100/90 max-w-2xl mb-10 leading-relaxed drop-shadow-md font-light">
                Olvídate de la latencia. <strong class="text-white font-semibold">AsyncControl</strong> combina automatización P2P con inteligencia artificial para un flujo de trabajo transparente, rápido y seguro.
            </p>

            <!-- BOTONES DE ACCIÓN (Estilo Gel/Glossy) -->
            <div class="flex flex-col sm:flex-row gap-5 w-full justify-center items-center">
                <!-- Botón Principal "Gel" -->
                <a href="https://async-control.vercel.app/" target="_blank" class="group relative w-full sm:w-auto overflow-hidden rounded-full transition-transform hover:scale-105 duration-300 shadow-[0_10px_40px_-10px_rgba(91,216,53,0.5)]">
                    <!-- Fondo base -->
                    <div class="absolute inset-0 bg-gradient-to-b from-[#70e64c] to-[#3aa11a]"></div>
                    <!-- Brillo superior (Gloss) -->
                    <div class="absolute inset-x-0 top-0 h-[45%] bg-gradient-to-b from-white/60 to-transparent opacity-90"></div>
                    <!-- Contenido -->
                    <div class="relative px-8 py-4 flex items-center justify-center gap-3">
                        <span class="font-bold text-lg text-white drop-shadow-md tracking-wide">AsyncControl</span>
                        <svg class="w-5 h-5 text-white drop-shadow-md group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7" />
                        </svg>
                    </div>
                </a>

                <!-- Botón Secundario "Cristal" -->
                <a href="/docs" class="group relative w-full sm:w-auto px-8 py-4 rounded-full border border-white/40 bg-white/5 backdrop-blur-md hover:bg-white/10 transition-all shadow-lg hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                    <span class="font-semibold text-white tracking-wide">Ver Documentación</span>
                </a>
            </div>

            <!-- FEATURES CARDS (Glassmorphism + Grid) -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mt-24">
                
                <!-- Card 1 -->
                <div class="glass-card relative p-8 rounded-3xl bg-gradient-to-b from-white/10 to-white/5 border-t border-l border-white/20 border-b border-r border-white/5 backdrop-blur-xl transition-all duration-300 group">
                    <div class="absolute inset-0 bg-gradient-to-br from-aero-cyan/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl pointer-events-none"></div>
                    <div class="w-12 h-12 mb-4 bg-gradient-to-br from-white/20 to-transparent rounded-xl flex items-center justify-center border border-white/20 shadow-inner">
                        <span class="text-2xl">⚡</span>
                    </div>
                    <h3 class="text-xl font-bold text-white mb-2 group-hover:text-aero-cyan transition-colors">Tiempo Real</h3>
                    <p class="text-blue-100/70 text-sm leading-relaxed">Arquitectura optimizada para cero latencia perceptible en redes locales.</p>
                </div>

                <!-- Card 2 -->
                <div class="glass-card relative p-8 rounded-3xl bg-gradient-to-b from-white/10 to-white/5 border-t border-l border-white/20 border-b border-r border-white/5 backdrop-blur-xl transition-all duration-300 group">
                    <div class="absolute inset-0 bg-gradient-to-br from-aero-green/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl pointer-events-none"></div>
                    <div class="w-12 h-12 mb-4 bg-gradient-to-br from-white/20 to-transparent rounded-xl flex items-center justify-center border border-white/20 shadow-inner">
                        <span class="text-2xl">🛡️</span>
                    </div>
                    <h3 class="text-xl font-bold text-white mb-2 group-hover:text-aero-green transition-colors">Seguridad P2P</h3>
                    <p class="text-blue-100/70 text-sm leading-relaxed">Encriptación de extremo a extremo. Tus llaves privadas nunca salen de tu control.</p>
                </div>

                <!-- Card 3 -->
                <div class="glass-card relative p-8 rounded-3xl bg-gradient-to-b from-white/10 to-white/5 border-t border-l border-white/20 border-b border-r border-white/5 backdrop-blur-xl transition-all duration-300 group">
                    <div class="absolute inset-0 bg-gradient-to-br from-aero-orange/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl pointer-events-none"></div>
                    <div class="w-12 h-12 mb-4 bg-gradient-to-br from-white/20 to-transparent rounded-xl flex items-center justify-center border border-white/20 shadow-inner">
                        <span class="text-2xl">📱</span>
                    </div>
                    <h3 class="text-xl font-bold text-white mb-2 group-hover:text-aero-orange transition-colors">Multi-Device</h3>
                    <p class="text-blue-100/70 text-sm leading-relaxed">Control unificado desde el navegador, escritorio o tu dispositivo Android.</p>
                </div>

            </div>

            <!-- SECCIÓN "BENTO" DE CARACTERÍSTICAS -->
            <div class="w-full mt-24">
                <h2 class="text-3xl font-bold mb-10 text-center drop-shadow-lg">Potencia sin límites</h2>
                
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 h-auto md:h-64">
                    <!-- Feature Grande -->
                    <div class="col-span-1 md:col-span-2 row-span-1 glass-card p-8 rounded-3xl bg-white/5 border border-white/10 flex flex-col justify-center text-left relative overflow-hidden group">
                        <div class="absolute right-0 bottom-0 w-32 h-32 bg-aero-orange/30 blur-[60px] group-hover:bg-aero-orange/50 transition-all"></div>
                        <h4 class="text-2xl font-bold text-white mb-2 z-10">AsyncMini AI</h4>
                        <p class="text-blue-100/80 z-10 max-w-sm">Nuestro sistema multi-agente analiza logs en tiempo real y sugiere fixes automáticos.</p>
                    </div>

                    <!-- Feature Pequeño -->
                    <div class="col-span-1 glass-card p-6 rounded-3xl bg-white/5 border border-white/10 flex flex-col justify-end relative overflow-hidden text-left hover:-translate-y-1 transition-transform">
                        <div class="absolute top-4 right-4 text-3xl opacity-50">🎮</div>
                        <h4 class="font-bold text-white text-lg">Testing Contextual</h4>
                        <p class="text-xs text-blue-200 mt-1">Simula entornos reales.</p>
                    </div>

                    <!-- Feature Pequeño -->
                    <div class="col-span-1 glass-card p-6 rounded-3xl bg-white/5 border border-white/10 flex flex-col justify-end relative overflow-hidden text-left hover:-translate-y-1 transition-transform">
                        <div class="absolute top-4 right-4 text-3xl opacity-50">🔄</div>
                        <h4 class="font-bold text-white text-lg">Auto-Scaling</h4>
                        <p class="text-xs text-blue-200 mt-1">Crece con tu infraestructura.</p>
                    </div>
                </div>
            </div>

        </main>
</div>