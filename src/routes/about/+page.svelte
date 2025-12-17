<script>
    import Mascota from '$lib/assets/imgs/ayncMasc.webp'
    import Sorprendida from '$lib/assets/imgs/sorprendida.png'
</script>

<div class="about-container">
    <header class="hero">
        <h1>Sobre AsyncControl</h1>
        <p class="subtitle">Inteligencia Artificial aplicada al control IoT</p>
    </header>

    <section class="contact-section">
        <h2>Contacto</h2>
        <div class="contact-grid">
            <div class="contact-item">
                <span class="contact-label">Email</span>
                <a href="mailto:nissunay@gmail.com" class="contact-link">nissunay@gmail.com</a>
            </div>
            <div class="contact-item">
                <span class="contact-label">GitHub</span>
                <a href="https://github.com/AmaiDonatsu" target="_blank" rel="noopener noreferrer" class="contact-link">
                    github.com/AmaiDonatsu
                </a>
            </div>
            <div class="contact-item">
                <span class="contact-label">LinkedIn</span>
                <a href="https://www.linkedin.com/in/rodolfo-emmanuel-escamilla-tabares-57461924a" target="_blank" rel="noopener noreferrer" class="contact-link">
                    Ver perfil
                </a>
            </div>
        </div>
    </section>
    
    <section class="technical-section">
        <h2>¿Qué es AsyncControl?</h2>
        <div class="content-with-mascot">
            <div class="text-content">
                <p class="intro-text">
                    AsyncControl es una plataforma de control y monitoreo IoT, impulsada por modelos de lenguaje grande (LLMs). 
                    Permite a los usuarios interactuar con dispositivos físicos a través de comandos de lenguaje natural, 
                    facilitando la automatización y gestión de hardware conectado.
                </p>
                
                <h3>🎯 Principales Casos de Uso</h3>
                
                <div class="feature-card">
                    <h4>QA Testing Automatizado</h4>
                    <p>
                        Las features que ofrece AsyncControl son ideales para usuarios que buscan hacer QA testing en sus 
                        aplicaciones móviles sin tener que escribir scripts repetitivos en lenguajes de automatización. 
                    </p>
                    <ul>
                        <li>Describe las acciones que quieres realizar en lenguaje natural</li>
                        <li>La IA comprende el objetivo técnico sin conocer los detalles internos</li>
                        <li>Ejecuta acciones buscando bugs o comportamientos inesperados</li>
                        <li>Imita el comportamiento de usuarios reales para detectar problemas de UX</li>
                        <li>Genera scripts YAML ejecutables en Maestro del proceso realizado</li>
                    </ul>
                </div>

                <div class="feature-card">
                    <h4>Soporte Técnico Remoto</h4>
                    <p>
                        Herramienta útil para solución de problemas remotos, permitiendo a técnicos y usuarios finales 
                        diagnosticar y resolver problemas sin necesidad de intervención física directa.
                    </p>
                </div>

                <div class="feature-card">
                    <h4>Automatización IoT</h4>
                    <p>
                        Realiza tareas de automatización en dispositivos IoT mediante lenguaje natural:
                    </p>
                    <ul>
                        <li>Configuraciones con instrucciones complejas</li>
                        <li>Secuencias de comandos para tareas repetitivas</li>
                        <li>Sistema multi-agentes para problemas abstractos complejos</li>
                    </ul>
                </div>

                <div class="feature-card">
                    <h4>Generación de Código</h4>
                    <p>
                        Dentro del chatbot puedes analizar el código de la UI del dispositivo, discutir sobre sus 
                        características de forma conversacional y pedirle que genere código para hacer una aplicación 
                        parecida a la que esté viendo en el dispositivo.
                    </p>
                </div>

                <h3>⚙️ ¿Cómo Funciona?</h3>
                <p class="how-it-works-intro">
                    Imagina que AsyncControl es como tener un asistente virtual que puede "ver" y "tocar" tu teléfono por ti. 
                    Cuando le das una instrucción (como "abre WhatsApp" o "activa el modo avión"), el sistema ejecuta tres pasos:
                </p>
                
                <div class="steps-container">
                    <div class="step-item">
                        <span class="step-number">1</span>
                        <div class="step-content">
                            <h4>Entiende lo que quieres</h4>
                            <p>Nuestro sistema de IA interpreta tu comando en lenguaje natural</p>
                        </div>
                    </div>
                    
                    <div class="step-item">
                        <span class="step-number">2</span>
                        <div class="step-content">
                            <h4>Ve qué hay en tu pantalla</h4>
                            <p>Analiza tu dispositivo tomando capturas de pantalla o leyendo información técnica del sistema</p>
                        </div>
                    </div>
                    
                    <div class="step-item">
                        <span class="step-number">3</span>
                        <div class="step-content">
                            <h4>Actúa como lo harías tú</h4>
                            <p>Simula toques, clics y escritura, exactamente como si estuvieras usando el teléfono con tus propios dedos</p>
                        </div>
                    </div>
                </div>
                
                <div class="highlight-box">
                    <h3>TypusControlMini</h3>
                    <p>
                        La aplicación TypusControlMini es la interfaz a la que le llegan los comandos enviados por AsyncControl. 
                        El objetivo final es que pueda ser instalada en cualquier dispositivo inteligente, intentando explotar 
                        al máximo las posibilidades de Java Virtual Machine para correr en la mayoría de dispositivos IoT.
                    </p>
                    <p>
                        TypusControlMini es una aplicación de código abierto y software libre.
                    </p>
                    <a href="https://github.com/AmaiDonatsu/TypusControlMini.git" target="_blank" rel="noopener noreferrer" class="repo-link">
                        Ver repositorio en GitHub →
                    </a>
                </div>
            </div>

            <div class="mascot-container">
                <img src={Mascota} alt="Mascota de AsyncControl" class="mascot-image" />
            </div>
        </div>
    </section>

    <section class="story-section">
        <h2>La Historia</h2>
        <div class="story-content">
            <p>
                AsyncControl nació de mi pasión por el IoT y la tecnología. Desde el inicio de la revolución de la 
                Inteligencia Artificial, he perseguido el objetivo de integrar los LLMs con el mundo físico para el 
                control de hardware.
            </p>
            <p>
                Al principio, el desafío era técnico: los primeros modelos se limitaban a generar texto o editar documentos, 
                careciendo de la lógica necesaria para tareas complejas. Sin embargo, la evolución explosiva de los modelos 
                en 2025 ha cambiado las reglas del juego. Con la tecnología de finales de este año, finalmente tenemos la 
                esperanza —y la capacidad— de crear agentes que interactúen con el mundo físico de forma nativa, eliminando 
                la necesidad de una ingeniería de prompts excesivamente compleja.
            </p>
        </div>
        <div class="mascot-container" style="margin-top: 2rem; justify-content: end;">
            <img src={Sorprendida} alt="Mascota Sorprendida" class="mascot-image" style="max-width: 250px;" />

        </div>
    </section>
</div>

<style>
    .about-container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 2rem;
        font-family: system-ui, -apple-system, sans-serif;
        line-height: 1.6;
        color: #333;
    }

    .hero {
        text-align: center;
        margin-bottom: 4rem;
        padding: 3rem 1rem;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        border-radius: 16px;
        color: white;
    }

    .hero h1 {
        font-size: 3rem;
        margin: 0 0 1rem 0;
        font-weight: 700;
    }

    .subtitle {
        font-size: 1.25rem;
        opacity: 0.95;
        margin: 0;
    }

    section {
        margin-bottom: 4rem;
        padding: 2rem;
        background: white;
        border-radius: 12px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    }

    h2 {
        font-size: 2rem;
        margin-top: 0;
        margin-bottom: 1.5rem;
        color: #667eea;
        border-bottom: 3px solid #667eea;
        padding-bottom: 0.5rem;
    }

    /* Contact Section */
    .contact-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 1.5rem;
        margin-top: 2rem;
    }

    .contact-item {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        padding: 1.5rem;
        background: #f8f9fa;
        border-radius: 8px;
        border-left: 4px solid #667eea;
        transition: transform 0.2s, box-shadow 0.2s;
    }

    .contact-item:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(102, 126, 234, 0.2);
    }

    .contact-label {
        font-weight: 600;
        color: #555;
        font-size: 0.9rem;
        text-transform: uppercase;
        letter-spacing: 0.5px;
    }

    .contact-link {
        color: #667eea;
        text-decoration: none;
        font-weight: 500;
        transition: color 0.2s;
    }

    .contact-link:hover {
        color: #764ba2;
        text-decoration: underline;
    }

    /* Technical Section */
    .technical-section {
        background: linear-gradient(to bottom, #ffffff 0%, #f8f9fa 100%);
    }

    .content-with-mascot {
        display: grid;
        grid-template-columns: 1fr 300px;
        gap: 3rem;
        align-items: start;
    }

    .text-content p {
        margin-bottom: 1.5rem;
        text-align: justify;
        color: #555;
    }

    .intro-text {
        font-size: 1.1rem;
        font-weight: 500;
        color: #444;
        background: #f8f9fa;
        padding: 1.25rem;
        border-radius: 8px;
        border-left: 4px solid #667eea;
    }

    .text-content h3 {
        color: #764ba2;
        font-size: 1.5rem;
        margin-top: 2.5rem;
        margin-bottom: 1.5rem;
        font-weight: 600;
    }

    .feature-card {
        background: white;
        border: 1px solid #e0e0e0;
        border-radius: 8px;
        padding: 1.5rem;
        margin-bottom: 1.5rem;
        transition: transform 0.2s, box-shadow 0.2s;
    }

    .feature-card:hover {
        transform: translateX(5px);
        box-shadow: 0 4px 12px rgba(102, 126, 234, 0.15);
    }

    .feature-card h4 {
        color: #667eea;
        font-size: 1.2rem;
        margin-top: 0;
        margin-bottom: 0.75rem;
        font-weight: 600;
    }

    .feature-card p {
        margin-bottom: 0.75rem;
        text-align: left;
    }

    .feature-card ul {
        margin: 1rem 0 0 0;
        padding-left: 1.5rem;
        color: #555;
    }

    .feature-card li {
        margin-bottom: 0.5rem;
        line-height: 1.6;
    }

    .how-it-works-intro {
        background: linear-gradient(135deg, #667eea08 0%, #764ba208 100%);
        padding: 1rem 1.25rem;
        border-radius: 8px;
        text-align: left;
        margin-bottom: 2rem;
    }

    .steps-container {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
        margin-top: 2rem;
    }

    .step-item {
        display: flex;
        align-items: start;
        gap: 1.5rem;
        background: white;
        border: 1px solid #e0e0e0;
        border-radius: 8px;
        padding: 1.5rem;
        transition: transform 0.2s, box-shadow 0.2s;
    }

    .step-item:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(102, 126, 234, 0.15);
    }

    .step-number {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 50px;
        height: 50px;
        min-width: 50px;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        font-size: 1.5rem;
        font-weight: 700;
        border-radius: 50%;
        box-shadow: 0 4px 8px rgba(102, 126, 234, 0.3);
    }

    .step-content h4 {
        margin: 0 0 0.5rem 0;
        color: #667eea;
        font-size: 1.15rem;
        font-weight: 600;
    }

    .step-content p {
        margin: 0;
        color: #555;
        text-align: left;
    }

    .highlight-box {
        background: linear-gradient(135deg, #667eea15 0%, #764ba215 100%);
        padding: 1.5rem;
        border-radius: 8px;
        border-left: 4px solid #667eea;
        margin-top: 2rem;
    }

    .highlight-box h3 {
        margin-top: 0;
        margin-bottom: 1rem;
        color: #667eea;
        font-size: 1.5rem;
    }

    .highlight-box p {
        margin-bottom: 1rem;
    }

    .repo-link {
        display: inline-flex;
        align-items: center;
        color: #667eea;
        text-decoration: none;
        font-weight: 600;
        transition: color 0.2s;
    }

    .repo-link:hover {
        color: #764ba2;
    }

    /* Mascot */
    .mascot-container {
        position: sticky;
        top: 2rem;
        display: flex;
        justify-content: center;
        align-items: start;
    }

    .mascot-image {
        width: 100%;
        max-width: 300px;
        height: auto;
        border-radius: 16px;
        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
        transition: transform 0.3s, box-shadow 0.3s;
    }

    .mascot-image:hover {
        transform: scale(1.05) rotate(2deg);
        box-shadow: 0 12px 32px rgba(102, 126, 234, 0.3);
    }

    /* Story Section */
    .story-section {
        background: linear-gradient(135deg, #667eea10 0%, #764ba210 100%);
        border-left: 4px solid #764ba2;
    }

    .story-section h2 {
        color: #d4b0f7;
    }

    .story-content p {
        margin-bottom: 1.5rem;
        text-align: justify;
        color: #fff7f7;
        font-size: 1.05rem;
    }

    /* Responsive Design */
    @media (max-width: 768px) {
        .about-container {
            padding: 1rem;
        }

        .hero h1 {
            font-size: 2rem;
        }

        .subtitle {
            font-size: 1rem;
        }

        h2 {
            font-size: 1.5rem;
        }

        section {
            padding: 1.5rem;
        }

        .content-with-mascot {
            grid-template-columns: 1fr;
            gap: 2rem;
        }

        .mascot-container {
            position: static;
            order: -1;
        }

        .mascot-image {
            max-width: 250px;
        }

        .contact-grid {
            grid-template-columns: 1fr;
        }

        .step-item {
            flex-direction: column;
            text-align: center;
        }

        .step-number {
            width: 40px;
            height: 40px;
            min-width: 40px;
            font-size: 1.25rem;
        }

        .text-content h3 {
            font-size: 1.3rem;
        }
    }
</style>