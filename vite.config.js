const path = require('path')
const {defineConfig} = require('vite')

module.exports = defineConfig({
  // build as a library
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/main.ts'),
      name: "CropModalLib",
      fileName: (format) => `rvt-crop-modal.${format}.js`,
    },
    rollupOptions: {
      external: ["rvt-uits", "croppie"],
      output: {
        globals: {
          modal: "Modal",
          croppie: "Croppie",
        }
      }
    }
  }
})
