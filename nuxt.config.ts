import { defineNuxtConfig } from "nuxt"

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    alias: {
        "@": "/src",
    },

    dir: {
        pages: "./src/pages",
        layouts: "./src/layouts",
    },

    components: {
        dirs: [
            "./src/components",
        ],
    },

    css: [
        "@/assets/css/tailwind.css",
    ],

    modules: [
        "@nuxtjs/i18n",
    ],

    i18n: {
        locales: ["en", "fr", "es"],
        defaultLocale: "en",
        vueI18n: {
            fallbackLocale: "en",
            legacy: false,
            locale: "en",
            messages: {
                en: {
                    welcome: "Welcome",
                    home: "Home"
                },
                fr: {
                    welcome: "Bienvenue",
                    home: "Home FR"
                },
                es: {
                    welcome: "Bienvenido",
                    home: "Home ES"
                },
            },
        },
    },

    build: {
        postcss: {
            postcssOptions: {
                plugins: {
                    tailwindcss: {},
                    autoprefixer: {},
                },
            },
        },
    },
})
