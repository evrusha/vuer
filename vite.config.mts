import { defineConfig } from 'vite'
import RubyPlugin from 'vite-plugin-rails'
import Vue from '@vitejs/plugin-vue'
import VueDevTools from 'vite-plugin-vue-devtools'

export default defineConfig({
  plugins: [
    RubyPlugin(),
    Vue(),
    VueDevTools(),
  ],
})
