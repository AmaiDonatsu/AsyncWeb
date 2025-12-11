<article class="docs">
    <header class="hero">
        <h1>Configurar AsyncControl</h1>
        <p>
            Bienvenido a la documentación de AsyncControl. Aquí encontrarás todo lo
            necesario para instalar los componentes y poner en marcha tu plataforma
            de control de acceso asíncrono.
        </p>
    </header>

    <section class="card">
        <h2>Instalar la aplicación móvil</h2>
        <p>
            Usa la app libre y de código abierto
            <strong>TypusControlMini</strong>
            <span class="badge">en desarrollo</span>.
        </p>

        <div class="actions">
            <a
                class="button"
                href="https://github.com/AmaiDonatsu/TypusControlMini.git"
                target="_blank"
                rel="noopener noreferrer"
                >Repositorio de TypusControlMini en GitHub</a
            >
        </div>

        <ul class="notes">
            <li>
                La app aún no está en Play Store. Instálala manualmente desde el
                repositorio.
            </li>
            <li>Proyecto creado con Android Studio.</li>
        </ul>
    </section>

    <section class="card">
        <h2>Configurar el servidor</h2>
        <p>
            El backend se ejecuta con <strong>AsyncServerSeq</strong>.
        </p>

        <div class="actions">
            <a
                class="button"
                href="https://github.com/AmaiDonatsu/AsyncServerSeq.git"
                target="_blank"
                rel="noopener noreferrer"
                >Repositorio de AsyncServerSeq en GitHub</a
            >
        </div>

        <ul class="notes">
            <li>Proyecto pensado para trabajar con Visual Studio Code.</li>
            <li>
                Sigue el <code>README</code> del repositorio para configurar el servidor
                correctamente.
            </li>
        </ul>
    </section>

    <footer class="foot">
        <p class="tip">
            Consejo: guarda los repos en carpetas dedicadas y usa ramas para separar
            desarrollo de producción.
        </p>
    </footer>
</article>

<style>
    :root {
        --bg: #f2f4f7; 
        --surface: #ffffff; 
        --card: #ffffff; 
        --text: #111827; 
        --muted: #4b5563; 
        --border: #e4e7ec;

        --highlight-strong: #5bd835; 
        --highlight-soft: #9acd32; 
        --detail-teal: #4fd1b3; 
        --interactive: #ff9f45; 
        --detail-deep: #4a3b69; 
        --shadow: 0 10px 28px rgba(15, 23, 42, 0.09);
    }

    .docs {
        max-width: 880px;
        margin: 0 auto;
        padding: 2.5rem 1.25rem 4rem;
        color: var(--text);
        background: var(--bg);
    }

    .hero {
        margin-bottom: 1.75rem;
    }

    h1 {
        font-size: 2rem;
        line-height: 1.15;
        letter-spacing: -0.02em;
        margin: 0 0 0.5rem;
        color: var(--detail-deep);
    }

    .hero p {
        margin: 0;
        font-size: 1rem;
        line-height: 1.6;
        color: var(--muted);
    }

    .card {
        background: var(--card);
        border: 1px solid var(--border);
        border-radius: 14px;
        padding: 1.25rem 1.25rem 1rem;
        box-shadow: var(--shadow);
        margin: 1rem 0;
        position: relative;
        overflow: hidden;
    }

    .card::before {
        content: "";
        position: absolute;
        inset: 0;
        border-top: 3px solid var(--detail-teal);
        border-radius: inherit;
        pointer-events: none;
    }

    h2 {
        font-size: 1.25rem;
        line-height: 1.35;
        margin: 0 0 0.5rem;
        letter-spacing: -0.01em;
    }

    .card p {
        margin: 0 0 0.75rem;
        color: var(--muted);
    }

    .badge {
        display: inline-block;
        font-size: 0.75rem;
        line-height: 1;
        padding: 0.35rem 0.5rem;
        margin-left: 0.5rem;
        border-radius: 999px;
        background: rgba(90, 216, 53, 0.12);
        color: var(--highlight-strong);
        border: 1px solid rgba(154, 205, 50, 0.6);
        vertical-align: middle;
    }

    .actions {
        display: flex;
        gap: 0.75rem;
        margin: 0.5rem 0 0.75rem;
    }

    .button {
        display: inline-flex;
        align-items: center;
        gap: 0.5rem;
        padding: 0.6rem 0.85rem;
        border-radius: 10px;
        border: 1px solid transparent;
        color: #ffffff;
        background: linear-gradient(135deg, var(--interactive), var(--highlight-soft));
        text-decoration: none;
        font-weight: 600;
        transition: transform 120ms ease, box-shadow 120ms ease,
            background 120ms ease;
        box-shadow: 0 10px 24px rgba(255, 159, 69, 0.35);
    }

    .button:hover {
        transform: translateY(-1px);
        box-shadow: 0 12px 28px rgba(255, 159, 69, 0.45);
        background: linear-gradient(135deg, var(--interactive), var(--highlight-strong));
    }

    .button:focus-visible {
        outline: 3px solid rgba(79, 209, 179, 0.85);
        outline-offset: 3px;
    }

    .notes {
        margin: 0.5rem 0 0.25rem;
        padding-left: 1.25rem;
    }

    .notes li {
        margin: 0.35rem 0;
        color: var(--muted);
    }

    .foot {
        margin-top: 1.25rem;
    }

    .tip {
        margin: 0;
        font-size: 0.9rem;
        color: var(--muted);
        padding-left: 0.75rem;
        border-left: 3px solid var(--detail-deep);
    }

    /* Responsive */
    @media (max-width: 520px) {
        .docs {
            padding: 2rem 1rem 3rem;
        }

        .button {
            width: 100%;
            justify-content: center;
        }
    }
</style>