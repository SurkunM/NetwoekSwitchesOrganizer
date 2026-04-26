import Vue from "@vitejs/plugin-vue";
import { dirname, resolve } from "node:path";
import { URL, fileURLToPath } from "node:url";
import Fonts from "unplugin-fonts/vite";
import { defineConfig } from "vite";
import Vuetify, { transformAssetUrls } from "vite-plugin-vuetify";

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
    plugins: [
        Vue({
            template: { transformAssetUrls },
        }),
        Vuetify({
            autoImport: true,
            styles: {
                configFile: "src/styles/settings.scss",
            },
        }),
        Fonts({
            fontsource: {
                families: [
                    {
                        name: "Roboto",
                        weights: [100, 300, 400, 500, 700, 900],
                        styles: ["normal", "italic"],
                    },
                ],
            },
        }),
    ],
    define: { "process.env": {} },
    resolve: {
        alias: {
            "@": fileURLToPath(new URL("src", import.meta.url)),
        },
        extensions: [
            ".js",
            ".json",
            ".jsx",
            ".mjs",
            ".vue",
        ],
    },
    server: {
        port: 3000,
        proxy: {
            "/api": {
                target: "https://localhost:44384",
                changeOrigin: true,
                secure: false,
                ws: true,
            }
        }
    },

    build: {
        outDir: resolve(__dirname, "..", "wwwroot"),
        emptyOutDir: true,
    },

    base: "/",
})