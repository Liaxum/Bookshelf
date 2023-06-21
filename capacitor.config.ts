import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.bookshelf.app',
  appName: 'bookshelf',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
