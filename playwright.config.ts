import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
    workers: 1,
    timeout: 5000,
    reporter: "html",
    use: {
      headless: false,
      //screenshot: "on",
      //video: "on"
    }
  });