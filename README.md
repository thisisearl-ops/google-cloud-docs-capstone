# Google Cloud Docs Capstone

A prototype UI for Google Cloud Documentation with AI-powered Skills — built with React, Vite, and TypeScript.

---

## What This Project Does

This app is a working prototype that shows what the Google Cloud documentation experience could look like with **Skills** — guided, AI-assisted workflows embedded directly in the docs.

The app has 5 main pages:


| Page          | URL               | Description                                  |
| ------------- | ----------------- | -------------------------------------------- |
| Home          | `/`               | Main landing with Gemini-style search        |
| Skills        | `/skills`         | Explainer page for what Skills are           |
| Skill Library | `/skills/library` | Browse and filter all available skills       |
| Skill on Doc  | `/skills/on-doc`  | A skill surfaced inside a documentation page |
| Skill Detail  | `/skills/detail`  | Step-by-step detail view of a single skill   |


---

## Setting Up on Your Computer

### Step 1 — Install Node.js

Node.js is the engine that runs this project. You only need to install it once.

1. Go to **[https://nodejs.org](https://nodejs.org)**
2. Click the big green **"LTS"** button to download
3. Open the downloaded file and follow the installer steps (just keep clicking Next/Continue)
4. When it finishes, open **Terminal** (Mac) or **Command Prompt** (Windows)
5. Type this and press Enter to confirm it worked:
  ```
   node --version
  ```
   You should see something like `v22.14.0`. If you do, you're good.

---

### Step 2 — Get the Project Files

You need to download the code from GitHub onto your computer.

**Option A — If you have Git installed:**

Open Terminal and run:

```bash
git clone https://github.com/jimniDev/google-cloud-docs-capstone.git
cd google-cloud-docs-capstone
```

**Option B — If you don't have Git:**

1. Go to **[https://github.com/jimniDev/google-cloud-docs-capstone](https://github.com/jimniDev/google-cloud-docs-capstone)**
2. Click the green **Code** button
3. Click **Download ZIP**
4. Unzip the downloaded file somewhere easy to find (like your Desktop)
5. Open Terminal and navigate into the folder:
  ```bash
   cd ~/Desktop/google-cloud-docs-capstone
  ```
   *(If you unzipped it somewhere else, replace `~/Desktop/` with that path)*

---

### Step 3 — Install Dependencies

This installs all the libraries the project needs. You only need to do this once.

In your Terminal, make sure you're inside the project folder, then run:

```bash
npm install
```

Wait for it to finish (it may take 1–2 minutes). You'll see a line like `added 177 packages` when it's done.

---

### Step 4 — Start the App

```bash
npm run dev
```

You'll see output like this:

```
VITE v8.x  ready in 200ms

➜  Local:   http://localhost:5173/
```

Open your browser and go to **[http://localhost:5173](http://localhost:5173)**

The app is now running. 🎉

---

### Stopping the App

Go back to Terminal and press **Ctrl + C** (hold Control, then press C).

---

## Pulling the Latest Changes from GitHub

When a teammate pushes new changes, here's how to get them:

```bash
git pull
npm install
```

Run both every time you pull — `npm install` makes sure any new libraries are installed too.

---

## Project Structure (For Reference)

```
google-cloud-docs-capstone/
├── public/
│   └── pages/             ← The 3 HTML pages from the team
│       ├── skill-library.html
│       ├── skill-detail-screen.html
│       └── skill-on-doc.html
├── src/
│   ├── app/
│   │   ├── components/    ← All React page components
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── MainContent.tsx
│   │   │   ├── SkillsPage.tsx
│   │   │   ├── SkillLibraryPage.tsx
│   │   │   ├── SkillDetailPage.tsx
│   │   │   ├── SkillOnDocPage.tsx
│   │   │   └── FixPermissionErrorPage.tsx
│   │   └── routes.tsx     ← URL routing config
│   ├── styles/            ← CSS files
│   └── main.tsx           ← App entry point
├── package.json           ← Project config and scripts
└── README.md              ← This file
```

---

## Available Scripts


| Command           | What it does                         |
| ----------------- | ------------------------------------ |
| `npm run dev`     | Start the local dev server           |
| `npm run build`   | Build for production                 |
| `npm run preview` | Preview the production build locally |


---

## Common Issues

**"npm: command not found"**
→ Node.js is not installed. Go back to Step 1.

**"Cannot find module" error after pulling**
→ Run `npm install` again.

**The page is blank or shows an error**
→ Make sure you ran `npm install` first. Check the Terminal for any red error messages.

**Port 5173 is already in use**
→ Stop any other running instances with Ctrl+C, or Vite will automatically try the next port (5174, etc.).