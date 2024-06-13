/* eslint-disable no-undef */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({ 

  base: process.env.NODE_ENV === 'production' ? "/react_kasa" : "/", // Spécifie le chemin de base pour le déploiement sur GitHub Pages
  plugins: [react()],
})

