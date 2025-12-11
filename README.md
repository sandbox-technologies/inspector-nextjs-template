# Inspector Next.js Template

A modern Next.js template styled with the Inspector design language and powered by shadcn/ui.

## 🛠️ Tech Stack

- **Next.js 15** - The React framework for production
- **React 19** - A JavaScript library for building user interfaces
- **TypeScript** - Typed superset of JavaScript
- **Tailwind CSS v4** - Utility-first CSS framework
- **shadcn/ui** - Beautifully designed components
- **Lucide Icons** - Beautiful, consistent icon set

## 🎨 Features

- **Dark/Light Mode** - Built-in theme toggle with localStorage persistence
- **Inspector Styling** - Matches the Inspector app design language
- **App Router** - Uses the latest Next.js App Router
- **Ready to Build** - Start adding your own components immediately

## ⚙️ Prerequisites

- Node.js (version 20 or above)
- pnpm (recommended) or npm

## 🚀 Getting Started

1. Install dependencies:

   ```bash
   pnpm install
   ```

2. Start the development server:

   ```bash
   pnpm dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start development server |
| `pnpm build` | Build for production |
| `pnpm start` | Start production server |
| `pnpm lint` | Run ESLint |

## 📂 Project Structure

```
inspector-nextjs-template/
├── app/
│   ├── globals.css        # Global styles with CSS variables
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/
│   └── theme-toggle.tsx   # Dark mode toggle
├── hooks/
│   └── use-dark-mode.ts   # Dark mode hook
├── lib/
│   └── utils.ts           # Utility functions (cn)
├── public/
│   └── inspector-logo.png
├── components.json        # shadcn/ui config
└── package.json
```

## ➕ Adding shadcn/ui Components

Use the shadcn/ui CLI to add more components:

```bash
npx shadcn@latest add button
npx shadcn@latest add card
npx shadcn@latest add input
# etc.
```

Browse all available components at [ui.shadcn.com](https://ui.shadcn.com/docs/components).

## 🚀 Deploy

The easiest way to deploy is with [Vercel](https://vercel.com):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/anthropics/inspector-nextjs-template)

## 📄 License

Apache 2.0 License - see [LICENSE](LICENSE) for details.
