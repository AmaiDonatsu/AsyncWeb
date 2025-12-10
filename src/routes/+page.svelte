<div class="min-h-screen bg-gradient-to-br from-cyan-600 via-cyan-500 to-green-600 flex flex-col items-center text-white relative overflow-hidden">
    
    <!-- Background Elements -->
    <div class="absolute top-20 left-20 w-72 h-72 bg-white/20 rounded-full blur-3xl animate-pulse pointer-events-none"></div>
    <div class="absolute bottom-20 right-20 w-96 h-96 bg-cyan-300/20 rounded-full blur-3xl pointer-events-none"></div>

    <!-- Main Content -->
    <main class="relative z-10 w-full max-w-6xl px-6 py-12 flex flex-col items-center">
        
        <!-- Hero Section -->
        <div class="text-center max-w-4xl mb-16 ">
            <h1 class="text-6xl md:text-8xl font-black tracking-tight drop-shadow-lg mb-4">
                Async<span class="text-orange-300 rounded-md mg-md">Control</span>
            </h1>
            
            <p class="text-xl md:text-2xl font-light mb-8 text-blue-100 drop-shadow-md">
                Tu centro de comando IoT. Transparente. Rápido. Seguro.
            </p>

            <!-- Intro Text -->
            <div class="max-w-2xl mx-auto mb-10 text-lg md:text-xl leading-relaxed text-blue-50/90">
                <p>
                    <strong>AsyncControl</strong> es una plataforma avanzada diseñada para
                    <strong>QA testing</strong>, monitoreo y automatización. Gracias a su
                    sistema multi-agente de IA, <strong>AsyncMini</strong>, llevamos la
                    automatización al siguiente nivel.
                </p>
            </div>

            <!-- CTA Buttons -->
            <div class="flex flex-col md:flex-row gap-6 justify-center items-center">
                <a href="/download" 
                class="group relative px-8 py-4 bg-gradient-to-b from-orange-400 to-white/400 border border-white/50 rounded-full backdrop-blur-md shadow-[0_10px_20px_rgba(0,0,0,0.2)] hover:scale-105 transition-all duration-300 overflow-hidden">
                    <div class="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-orange-400 to-white/400 opacity-70"></div>
                    <span class="relative font-bold text-lg tracking-wide group-hover:text-orange-100">DESCARGAR AHORA</span>
                </a>

                <a href="/docs" 
                class="px-8 py-4 rounded-full border border-white/30 hover:bg-white/10 transition-all font-semibold text-lg backdrop-blur-sm">
                    Leer Documentación
                </a>
            </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mb-20">
            <div class="p-6 bg-white/10 border border-white/20 rounded-2xl backdrop-blur-md hover:bg-white/20 transition cursor-default">
                <div class="text-4xl mb-4">⚡</div>
                <h3 class="font-bold text-xl mb-2">Tiempo Real</h3>
                <p class="text-blue-100 text-sm">Controla tus dispositivos sin latencia perceptible.</p>
            </div>

            <div class="p-6 bg-white/10 border border-white/20 rounded-2xl backdrop-blur-md hover:bg-white/20 transition cursor-default">
                <div class="text-4xl mb-4">🔐</div>
                <h3 class="font-bold text-xl mb-2">Seguridad P2P</h3>
                <p class="text-blue-100 text-sm">Tus keys privadas nunca tocan nuestros servidores.</p>
            </div>

            <div class="p-6 bg-white/10 border border-white/20 rounded-2xl backdrop-blur-md hover:bg-white/20 transition cursor-default">
                <div class="text-4xl mb-4">📱</div>
                <h3 class="font-bold text-xl mb-2">Multi-Plataforma</h3>
                <p class="text-blue-100 text-sm">Desde el navegador hasta tu móvil Android.</p>
            </div>
        </div>

        <!-- Detailed Features Section -->
        <section class="w-full max-w-5xl">
            <h2 class="text-3xl md:text-4xl font-bold text-center mb-10 drop-shadow-md">¿Qué puedes lograr?</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <!-- Feature Item -->
                <div class="p-6 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm hover:bg-white/10 transition">
                    <strong class="block text-xl text-cyan-200 mb-2">Testing Contextual</strong>
                    <p class="text-blue-50">Automatiza pruebas considerando no solo la aplicación, sino también el entorno completo del dispositivo.</p>
                </div>
                <!-- Feature Item -->
                <div class="p-6 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm hover:bg-white/10 transition">
                    <strong class="block text-xl text-cyan-200 mb-2">Automatización Masiva</strong>
                    <p class="text-blue-50">Ejecuta tareas complejas y de larga duración en múltiples dispositivos simultáneamente.</p>
                </div>
                <!-- Feature Item -->
                <div class="p-6 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm hover:bg-white/10 transition">
                    <strong class="block text-xl text-cyan-200 mb-2">Asistencia Inteligente</strong>
                    <p class="text-blue-50">Resuelve problemas rápidamente con nuestro chatbot, capaz de analizar causas raíz desde el código de UI.</p>
                </div>
                <!-- Feature Item -->
                <div class="p-6 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm hover:bg-white/10 transition">
                    <strong class="block text-xl text-cyan-200 mb-2">Sinergia IoT + IA</strong>
                    <p class="text-blue-50">Aprovecha al máximo la tecnología IoT integrada con inteligencia artificial.</p>
                </div>
            </div>
        </section>

    </main>

    <footer class="relative z-10 py-8 text-center text-blue-200/60 text-sm">
        <p>
            Visita <a href="https://svelte.dev/docs/kit" class="hover:text-white underline decoration-blue-400/50 underline-offset-4 transition">svelte.dev/docs/kit</a> para leer la documentación.
        </p>
    </footer>
</div>
