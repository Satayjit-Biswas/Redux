# Getting Started Project with React and using Redux

## Getting Started Project Setup

# Step 1 :

Install React with vite

```
npm create vite@latest
```

# Step 2 :

Install npm

```
npm i
```

# Step 3:

If you are using tailwindcss then follow the step
---> Go tailwindcss.com and press GetStart and search vite
next follow the step

```
npm install -D tailwindcss postcss autoprefixer
```

```
npx tailwindcss init -p
```

----> Configuration this (tailwind.config.js) file

```
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

----> Next add this code in index.css file

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

# Step 4:

Install React Router

```
npm install react-router-dom
```

And Configure Router

# Step 5:

Install ReDux Tookit

```
npm install react-redux
```

and

```
npm install @reduxjs/toolkit
```

And Configure Router
