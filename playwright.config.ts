import { defineConfig, devices } from "@playwright/test";

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: "./tests",
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 0 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: "html",
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    // baseURL: 'http://localhost:3000',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    screenshot: "only-on-failure",
  },

  /* Configure projects for major browsers and different locales */
  projects: [
    // Default browser tests
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },

    {
      name: "firefox",
      use: { ...devices["Desktop Firefox"] },
    },

    {
      name: "webkit",
      use: { ...devices["Desktop Safari"] },
    },

    // Locale-specific tests
    {
      name: "US-English",
      use: {
        ...devices["Desktop Chrome"],
        locale: "en-US",
        timezoneId: "America/New_York",
        geolocation: { longitude: -74.006, latitude: 40.7128 }, // New York
        permissions: ["geolocation"],
      },
    },

    {
      name: "UK-English",
      use: {
        ...devices["Desktop Chrome"],
        locale: "en-GB",
        timezoneId: "Europe/London",
        geolocation: { longitude: -0.1276, latitude: 51.5074 }, // London
        permissions: ["geolocation"],
      },
    },

    {
      name: "Germany",
      use: {
        ...devices["Desktop Chrome"],
        locale: "de-DE",
        timezoneId: "Europe/Berlin",
        geolocation: { longitude: 13.405, latitude: 52.52 }, // Berlin
        permissions: ["geolocation"],
      },
    },

    {
      name: "France",
      use: {
        ...devices["Desktop Chrome"],
        locale: "fr-FR",
        timezoneId: "Europe/Paris",
        geolocation: { longitude: 2.3522, latitude: 48.8566 }, // Paris
        permissions: ["geolocation"],
      },
    },

    {
      name: "Japan",
      use: {
        ...devices["Desktop Chrome"],
        locale: "ja-JP",
        timezoneId: "Asia/Tokyo",
        geolocation: { longitude: 139.6917, latitude: 35.6895 }, // Tokyo
        permissions: ["geolocation"],
      },
    },

    {
      name: "Australia",
      use: {
        ...devices["Desktop Chrome"],
        locale: "en-AU",
        timezoneId: "Australia/Sydney",
        geolocation: { longitude: 151.2093, latitude: -33.8688 }, // Sydney
        permissions: ["geolocation"],
      },
    },

    {
      name: "Brazil",
      use: {
        ...devices["Desktop Chrome"],
        locale: "pt-BR",
        timezoneId: "America/Sao_Paulo",
        geolocation: { longitude: -46.6333, latitude: -23.5505 }, // São Paulo
        permissions: ["geolocation"],
      },
    },

    {
      name: "India",
      use: {
        ...devices["Desktop Chrome"],
        locale: "en-IN",
        timezoneId: "Asia/Kolkata",
        geolocation: { longitude: 77.209, latitude: 28.6139 }, // New Delhi
        permissions: ["geolocation"],
      },
    },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
