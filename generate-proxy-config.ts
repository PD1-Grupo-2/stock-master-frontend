import * as fs from 'fs';
import * as dotenv from 'dotenv';

dotenv.config();

interface ProxyConfig {
  [key: string]: {
    target: string;
    secure: boolean;
    changeOrigin: boolean;
    logLevel: string;
  };
}

const proxyConfig: ProxyConfig = {
  "/api": {
    target: process.env['API_URL'] || '',
    secure: false,
    changeOrigin: true,
    logLevel: "debug"
  }
};

fs.writeFileSync('src/proxy.conf.json', JSON.stringify(proxyConfig, null, 2));
console.log('proxy.conf.json has been generated');