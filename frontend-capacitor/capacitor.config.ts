import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'capacitor-app',
  webDir: 'build',
  server: {
    androidScheme: 'https',
    url: 'https://192.168.1.187:3000',
    cleartext: true,
  }
};

export default config;
