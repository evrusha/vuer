import { defineConfig } from 'vite'
import RubyPlugin from 'vite-plugin-rails'
import vue from '@vitejs/plugin-vue'
import VueDevTools from 'vite-plugin-vue-devtools'

export default defineConfig({
  plugins: [
    RubyPlugin(),
    vue(),
    VueDevTools(),
  ],
})
