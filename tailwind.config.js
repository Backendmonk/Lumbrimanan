/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Ini sangat penting!
  ],
  theme: {
    extend: {
      colors: {
        emerald: { 850: '#064e3b', 900: '#022c22' },
        stone: { 850: '#1c1917' },
        amber: { 450: '#f59e0b' }
      },
    }
  },
  plugins: [],
}