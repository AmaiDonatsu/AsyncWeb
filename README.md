# AsyncControl

> **Tu Centro de Comando IoT & Testing.**  
> Automatización P2P, Inteligencia Artificial y cero latencia.

**AsyncControl** es una plataforma de vanguardia diseñada para la gestión, control y testeo de dispositivos IoT en tiempo real. Combina una arquitectura optimizada para baja latencia con **AsyncMini AI**, un sistema multi-agente que analiza logs y sugiere correcciones automáticas, ofreciendo un flujo de trabajo transparente, rápido y seguro.

![AsyncControl Badge](https://img.shields.io/badge/Status-Active-success)
![Svelte](https://img.shields.io/badge/Built%20with-Svelte%205-orange)

## 🚀 Características Principales

*   **⚡ Tiempo Real**: Arquitectura optimizada para cero latencia perceptible en redes locales.
*   **🛡️ Seguridad P2P**: Encriptación de extremo a extremo. Tus llaves privadas nunca salen de tu control.
*   **🤖 AsyncMini AI**: Sistema multi-agente integrado que analiza el rendimiento y logs en tiempo real.
*   **📱 Multi-Device**: Control unificado accesible desde navegador, escritorio o dispositivos móviles.
*   **🎮 Testing Contextual**: Herramientas para simular entornos reales y pruebas de carga.
*   **💎 Diseño Premium**: Interfaz moderna con Glassmorphism y micro-interacciones fluidas.

## 🛠️ Stack Tecnológico

Este proyecto está construido con las últimas tecnologías web para asegurar máximo rendimiento y mantenibilidad:

*   **Framework**: [SvelteKit](https://kit.svelte.dev/) (Svelte 5)
*   **Estilos**: [TailwindCSS](https://tailwindcss.com/)
*   **Backend/BaaS**: [Firebase](https://firebase.google.com/)
*   **Lenguaje**: TypeScript
*   **Analíticas**: Vercel Analytics

## 💻 Desarrollo Local

Sigue estos pasos para levantar el proyecto en tu entorno local:

1.  **Clonar el repositorio**:
    ```bash
    git clone https://github.com/AmaiDonatsu/AsyncWeb.git
    cd AsyncWeb
    ```

2.  **Instalar dependencias**:
    ```bash
    npm install
    # o pnpm install / yarn
    ```

3.  **Configurar variables de entorno**:
    Crea un archivo `.env` en la raíz basado en `.env.example` (si existe) y configura tus credenciales.

4.  **Iniciar servidor de desarrollo**:
    ```bash
    npm run dev
    ```
    El servidor estará disponible en `http://localhost:5173`.

## 📦 Construcción

Para generar una versión de producción:

```bash
npm run build
```

Puedes previsualizar la build con:

```bash
npm run preview
```

## 📄 Licencia

Este proyecto es propiedad de **AsyncWeb Team**. Todos los derechos reservados.
