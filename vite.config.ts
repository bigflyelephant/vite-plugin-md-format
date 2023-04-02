import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc';
import vitePluginMDFormat from './plugins/vite-plugin-md-format';

// https://vitejs.dev/config/
export default defineConfig({
  // assetsInclude:['**/*.md'],
  base:'./',
  build:{
    target:'esnext'
  },
  plugins: [vitePluginMDFormat(),react()],
})
