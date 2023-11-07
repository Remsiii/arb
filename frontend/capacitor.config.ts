import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'arb_app',
  webDir: 'public',
  server: {
    androidScheme: 'https',
    url: 'https://192.168.1.18:3000',
    cleartext: true,
  }
};

export default config;
