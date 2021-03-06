const path = require('path')
const {defineConfig} = require('vite')

module.exports = defineConfig({
  // build as a library
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/CropModal'),
      name: "CropModalLib",
      fileName: (format) => `rvt-crop-modal.${format}.js`,
    },
    rollupOptions: {
      external: ["rivet-uits", "croppie"],
      output: {
        globals: {
          modal: "Modal",
          croppie: "Croppie",
        }
      }
    }
  }
})
