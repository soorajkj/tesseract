/* eslint-disable prettier/prettier */
/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      "family-inter": "var(--font-family-inter)",
    },
    colors: {
      "color-transparent": "transparent",
      "color-current": "current",
      "color-base-900": "rgb(var(--cl-base-900) / <alpha-value>)",
      "color-base-800": "rgb(var(--cl-base-800) / <alpha-value>)",
      "color-base-700": "rgb(var(--cl-base-700) / <alpha-value>)",
      "color-base-600": "rgb(var(--cl-base-600) / <alpha-value>)",
      "color-base-500": "rgb(var(--cl-base-500) / <alpha-value>)",
      "color-base-400": "rgb(var(--cl-base-400) / <alpha-value>)",
      "color-base-300": "rgb(var(--cl-base-300) / <alpha-value>)",
      "color-base-200": "rgb(var(--cl-base-200) / <alpha-value>)",
      "color-base-100": "rgb(var(--cl-base-100) / <alpha-value>)",
      "color-base-050": "rgb(var(--cl-base-050) / <alpha-value>)",
      "color-base-025": "rgb(var(--cl-base-025) / <alpha-value>)",
      "color-base-000": "rgb(var(--cl-base-000) / <alpha-value>)",
      "color-error-900": "rgb(var(--cl-error-900) / <alpha-value>)",
      "color-error-800": "rgb(var(--cl-error-800) / <alpha-value>)",
      "color-error-700": "rgb(var(--cl-error-700) / <alpha-value>)",
      "color-error-600": "rgb(var(--cl-error-600) / <alpha-value>)",
      "color-error-500": "rgb(var(--cl-error-500) / <alpha-value>)",
      "color-error-400": "rgb(var(--cl-error-400) / <alpha-value>)",
      "color-error-300": "rgb(var(--cl-error-300) / <alpha-value>)",
      "color-error-200": "rgb(var(--cl-error-200) / <alpha-value>)",
      "color-error-100": "rgb(var(--cl-error-100) / <alpha-value>)",
      "color-error-050": "rgb(var(--cl-error-050) / <alpha-value>)",
      "color-error-000": "rgb(var(--cl-error-000) / <alpha-value>)",
      "color-success-900": "rgb(var(--cl-success-900) / <alpha-value>)",
      "color-success-800": "rgb(var(--cl-success-800) / <alpha-value>)",
      "color-success-700": "rgb(var(--cl-success-700) / <alpha-value>)",
      "color-success-600": "rgb(var(--cl-success-600) / <alpha-value>)",
      "color-success-500": "rgb(var(--cl-success-500) / <alpha-value>)",
      "color-success-400": "rgb(var(--cl-success-400) / <alpha-value>)",
      "color-success-300": "rgb(var(--cl-success-300) / <alpha-value>)",
      "color-success-200": "rgb(var(--cl-success-200) / <alpha-value>)",
      "color-success-100": "rgb(var(--cl-success-100) / <alpha-value>)",
      "color-success-050": "rgb(var(--cl-success-050) / <alpha-value>)",
      "color-success-000": "rgb(var(--cl-success-000) / <alpha-value>)",
      "color-primary-900": "rgb(var(--cl-primary-900) / <alpha-value>)",
      "color-primary-800": "rgb(var(--cl-primary-800) / <alpha-value>)",
      "color-primary-700": "rgb(var(--cl-primary-700) / <alpha-value>)",
      "color-primary-600": "rgb(var(--cl-primary-600) / <alpha-value>)",
      "color-primary-500": "rgb(var(--cl-primary-500) / <alpha-value>)",
      "color-primary-400": "rgb(var(--cl-primary-400) / <alpha-value>)",
      "color-primary-300": "rgb(var(--cl-primary-300) / <alpha-value>)",
      "color-primary-200": "rgb(var(--cl-primary-200) / <alpha-value>)",
      "color-primary-100": "rgb(var(--cl-primary-100) / <alpha-value>)",
      "color-primary-050": "rgb(var(--cl-primary-050) / <alpha-value>)",
      "color-primary-000": "rgb(var(--cl-primary-000) / <alpha-value>)",
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [
    require("prettier-plugin-tailwindcss"),
    require("tailwindcss-animate"),
  ],
};
