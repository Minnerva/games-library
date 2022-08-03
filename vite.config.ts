import { defineConfig, loadEnv } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'


export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), ``)

  return {
    server: {
      port: parseInt(env.VITE_PORT)
    },
    plugins: [svelte()],
    optimizeDeps: {
      exclude: [`svelte-navigator`]
    }
  }
})

