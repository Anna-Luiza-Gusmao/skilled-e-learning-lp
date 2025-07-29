export default {
  root: 'docs',
  build: {
    outDir: '../dist'
  },
  server: {
    port: 8080
  },
  css: {
     preprocessorOptions: {
        scss: {
          silenceDeprecations: [
            'import',
            'mixed-decls',
            'color-functions',
            'global-builtin',
          ],
        },
     },
  },
}