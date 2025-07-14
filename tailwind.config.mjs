/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        
        foreground: "var(--foreground)",
        foreground_secondary: "var(--foreground_secondary)",
        foreground_third: "var(--foreground_third)",

        border: "var(--border)",
        primary: "var(--primary)",
        
        text_secondary: "var(--text_secondary)",
        text_third: "var(--text_third)"
      },
    },
  },
  plugins: [],
};
