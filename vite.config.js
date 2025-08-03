// vite.config.js
export default {
  build: {
    lib: {
      entry: 'index.js',
      name: 'Finy',
      fileName: 'finy',
      formats: ['umd'], // expose as global Finy
    },
  },
};
