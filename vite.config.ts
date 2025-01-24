import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";

export default defineConfig({
    plugins: [
        react(),
        ViteImageOptimizer({
            png: {
                quality: 80, 
                compressionLevel: 8, 
            },
            jpeg: {
                quality: 85,
                progressive: true,
            },
            webp: {
                quality: 85, 
            },
            svg: {
                multipass: true, 
                js2svg: {
                    pretty: true, 
                    indent: 2,
                },
            },
        }),
    ],
    base: "/Test-work-landing/",
    resolve: {
        alias: {
            assets: "/src/assets",
            app: "/src/app",
            pages: "/src/pages",
            components: "/src/components",
            hooks: "/src/hooks",
            store: "/src/store",
            utils: "/src/utils",
            styles: "/src/styles",
            context: "/src/context",
        },
    },
});
