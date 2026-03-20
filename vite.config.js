import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // Replace 'portfolio-repo' with your actual GitHub repository name
  base: '/portfolio-project/', 
  plugins: [react()],
})