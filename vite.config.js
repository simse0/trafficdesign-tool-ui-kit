import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  root: '.',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        tables: resolve(__dirname, 'pages/tables.html'),
        forms: resolve(__dirname, 'pages/forms.html'),
        notifications: resolve(__dirname, 'pages/notifications.html'),
        panels: resolve(__dirname, 'pages/panels.html'),
        navigation: resolve(__dirname, 'pages/navigation.html'),
        elements: resolve(__dirname, 'pages/elements.html'),
        dataViz: resolve(__dirname, 'pages/data-viz.html'),
        charts: resolve(__dirname, 'pages/charts.html'),
        loadingStates: resolve(__dirname, 'pages/loading-states.html'),
        userElements: resolve(__dirname, 'pages/user-elements.html'),
        advancedInputs: resolve(__dirname, 'pages/advanced-inputs.html'),
        workflows: resolve(__dirname, 'pages/workflows.html'),
        listsFeeds: resolve(__dirname, 'pages/lists-feeds.html'),
        contextActions: resolve(__dirname, 'pages/context-actions.html'),
      }
    }
  },
  server: {
    port: 3000,
    open: true
  }
})

