/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        float1: "float 25s linear infinite",
        float2: "float 12s linear infinite 2s",
        float3: "float 25s linear infinite 4s",
        float4: "float 18s linear infinite 0s",
        float5: "float 25s linear infinite 0s",
        float6: "float 25s linear infinite 3s",
        float7: "float 25s linear infinite 7s",
        float8: "float 45s linear infinite 15s",
        float9: "float 35s linear infinite 2s",
        float10: "float 11s linear infinite 0s",
      },
      keyframes: {
        float: {
          "0%": {
            transform: "translateY(0) rotate(0deg)",
            opacity: "1",
            borderRadius: "0%",
          },
          "100%": {
            transform: "translateY(-1000px) rotate(720deg)",
            opacity: "0",
            borderRadius: "50%",
          },
        },
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
};
