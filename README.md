# 🚀 SAAS Automation Builder - Complete Setup Guide

Welcome! This guide will walk you through setting up and running your SAAS Automation Builder project.

## 📋 Table of Contents

1. [Prerequisites](#prerequisites)
2. [Installation](#installation)
3. [Environment Setup](#environment-setup)
4. [Running Locally](#running-locally)
5. [CI/CD Pipeline](#cicd-pipeline)
6. [API Integrations](#api-integrations)
7. [Deployment](#deployment)
8. [Troubleshooting](#troubleshooting)

---

## Prerequisites

Before you start, make sure you have these installed:

- **Node.js 18+** - [Download from nodejs.org](https://nodejs.org/)
- **Git** - [Download from git-scm.com](https://git-scm.com/)
- **Docker & Docker Compose** - [Download from docker.com](https://www.docker.com/products/docker-desktop/)
- **A code editor** - VS Code recommended

### ✅ Verify Installations

Open your **Terminal** or **PowerShell** and run these commands:

```bash
node --version      # Should show v18.x.x or higher
npm --version       # Should show 9.x.x or higher
git --version       # Should show git version
docker --version    # Should show Docker version
```

---

## Installation

### Step 1: Download and Extract Project

Your project is already extracted! Navigate to it:

```bash
cd "c:\Users\karna\OneDrive\Desktop\SAAS Automation Builder"
```

### Step 2: Install Dependencies

```bash
npm install
```

**What does this do?** Downloads and installs all packages listed in `package.json`.

**Expected time:** 2-5 minutes depending on internet speed.

**If you get errors:** Delete `node_modules` folder and try again:
```bash
rm -r node_modules  # On Mac/Linux
rmdir /s node_modules  # On Windows (PowerShell)
npm install
```

---

## Environment Setup

### Step 1: Copy Environment Template

```bash
cp .env.local.example .env.local
```

### Step 2: Get API Keys

You need to sign up for these services and get your API keys:

#### **🔐 Clerk Authentication**
1. Go to [clerk.com](https://go.clerk.com/qbebvpA)
2. Sign up for free
3. Create a new application
4. Copy your keys to `.env.local`:
   - `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`
   - `CLERK_SECRET_KEY`

#### **🗄️ Neon Database**
1. Go to [neon.tech](https://neon.tech/)
2. Sign up for free (no credit card needed)
3. Create a new project
4. Copy the connection string to:
   - `DATABASE_URL` in `.env.local`

#### **💳 Stripe**
1. Go to [stripe.com](https://stripe.com)
2. Sign up for free
3. Get your API keys from Dashboard → Developers → API Keys
4. Add to `.env.local`:
   - `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`
   - `STRIPE_SECRET_KEY`

#### **🔑 Google OAuth**
1. Go to [console.cloud.google.com](https://console.cloud.google.com)
2. Create a new project
3. Enable Google Drive API and Google+ API
4. Create OAuth 2.0 credentials (OAuth client ID)
5. Add to `.env.local`:
   - `GOOGLE_CLIENT_ID`
   - `GOOGLE_CLIENT_SECRET`

#### **💬 Slack**
1. Go to [api.slack.com/apps](https://api.slack.com/apps)
2. Create new app
3. Get your credentials:
   - `SLACK_CLIENT_ID`
   - `SLACK_CLIENT_SECRET`
   - `SLACK_SIGNING_SECRET`

#### **🎮 Discord**
1. Go to [discord.com/developers/applications](https://discord.com/developers/applications)
2. Create new application
3. Get your credentials:
   - `DISCORD_CLIENT_ID`
   - `DISCORD_CLIENT_SECRET`
   - `DISCORD_BOT_TOKEN` (create bot and get token)

#### **📝 Notion**
1. Go to [notion.so/my-integrations](https://notion.so/my-integrations)
2. Create new integration
3. Get `NOTION_CLIENT_ID` and `NOTION_CLIENT_SECRET`

### Step 3: Update `.env.local`

Open `.env.local` in your editor and fill in all the keys you just got.

---

## Running Locally

### Option A: Quick Start (Recommended for Beginners)

This uses Docker to run everything automatically:

```bash
docker-compose up
```

**What happens:**
- PostgreSQL database starts
- Redis cache starts
- Your Next.js app starts on `http://localhost:3000`

Open your browser and go to `http://localhost:3000` ✅

**To stop:** Press `Ctrl+C` in terminal

### Option B: Manual Setup (Advanced)

If you don't have Docker, run these commands in separate terminals:

**Terminal 1 - Database:**
```bash
# Skip if you already have PostgreSQL running locally
# You'll need to install PostgreSQL first from postgresql.org
```

**Terminal 2 - Application:**
```bash
npm run dev
```

Open `http://localhost:3000` in your browser ✅

---

## Database Setup

### Generate Prisma Client

```bash
npm run prisma:generate
```

### Run Migrations

```bash
npm run prisma:migrate
```

**This creates your database tables.**

### View Database (Optional)

```bash
npm run prisma:studio
```

Opens a visual database browser at `http://localhost:5555`

---

## Building for Production

```bash
npm run build
```

**This:**
- Compiles TypeScript
- Optimizes React components
- Generates optimized JavaScript

Creates `.next` folder with production build.

---

## CI/CD Pipeline

Your project has **full automation** with GitHub Actions!

### ✅ What the Pipeline Does

1. **Lint** - Checks code quality
2. **Security** - Scans for vulnerabilities
3. **Build** - Builds the application
4. **Docker** - Creates container image
5. **Deploy Staging** - Deploys to test environment
6. **Deploy Production** - Deploys to live site
7. **Health Check** - Verifies everything works

### How to Use It

1. **Get GitHub Repository:**
   - Go to [github.com/Bhavya7111](https://github.com/Bhavya7111)
   - or create your own GitHub account

2. **Push Your Code:**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

3. **Watch Pipeline Run:**
   - Go to your repository on GitHub
   - Click "Actions" tab
   - Watch your pipeline run automatically ✅

4. **Set GitHub Secrets:**
   - Go to Settings → Secrets and variables → Actions
   - Add your environment variables there
   - The pipeline will use them automatically

---

## Available Commands

| Command | What it does |
|---------|-------------|
| `npm run dev` | Start development server (http://localhost:3000) |
| `npm run build` | Build for production |
| `npm start` | Run production build |
| `npm run lint` | Check code quality |
| `npm run prisma:generate` | Generate database client |
| `npm run prisma:migrate` | Create/update database |
| `npm run prisma:studio` | Open database browser |
| `docker-compose up` | Start everything with Docker |
| `docker-compose down` | Stop Docker containers |

---

## Terminal Tips for Beginners

### How to Use Terminal/PowerShell

1. **Open Terminal:**
   - On Windows: Press `Win + X` → PowerShell
   - On Mac: Press `Cmd + Space` → type "Terminal"

2. **Navigate to Folder:**
   ```bash
   cd "c:\Users\karna\OneDrive\Desktop\SAAS Automation Builder"
   ```

3. **Running Commands:**
   - Type command and press **Enter**
   - Example: `npm install`

4. **Stopping Running Process:**
   - Press **Ctrl + C** (hold Control, then press C)
   - Wait a moment for it to stop

5. **Viewing Terminal Output:**
   - Scroll up to see previous messages
   - Look for errors (usually in red)

### Common Terminal Tricks

| Key | Action |
|-----|--------|
| `Ctrl + C` | Stop running process |
| `Ctrl + L` | Clear terminal |
| `Arrow Up` | Last command |
| `Tab` | Auto-complete path |
| `Ctrl + V` | Paste text |

---

## Project Structure

```
saas-automation-builder/
├── src/
│   ├── app/                 # Next.js pages and layout
│   │   ├── api/            # API routes
│   │   ├── page.tsx        # Home page
│   │   └── layout.tsx      # Root layout
│   ├── components/         # React components
│   │   ├── ui/            # Reusable UI components
│   │   ├── navigation/    # Navigation components
│   │   └── landing/       # Landing page
│   ├── lib/               # Utilities and helpers
│   │   ├── db.ts         # Database client
│   │   └── utils.ts      # Helper functions
│   └── middleware.ts      # Middleware for auth
├── prisma/
│   └── schema.prisma      # Database schema
├── .github/
│   └── workflows/
│       └── ci-cd-pipeline.yml  # GitHub Actions
├── Dockerfile             # Docker config
├── docker-compose.yml     # Docker Compose config
├── package.json           # Dependencies
├── tsconfig.json          # TypeScript config
└── tailwind.config.ts     # Tailwind CSS config
```

---

## Deployment

### Option 1: Vercel (Recommended)

1. Go to [vercel.com](https://vercel.com)
2. Sign in with GitHub
3. Click "New Project"
4. Select your repository
5. Add environment variables
6. Click Deploy ✅

### Option 2: Docker + Cloud

Deploy Docker image to:
- AWS ECS
- Google Cloud Run
- Azure Container Instances
- DigitalOcean
- Heroku

```bash
docker build -t saas-automation:latest .
docker push your-registry/saas-automation:latest
```

---

## Troubleshooting

### "npm: command not found"

**Solution:** Install Node.js from [nodejs.org](https://nodejs.org/)

### "Cannot find module '@prisma/client'"

**Solution:**
```bash
npm install
npm run prisma:generate
```

### "Port 3000 already in use"

**Solution:** The port is busy. Either:
- Stop other apps using port 3000
- Or use different port:
  ```bash
  npm run dev -- -p 3001
  ```

### Database Connection Error

**Check:**
1. `DATABASE_URL` in `.env.local` is correct
2. Database service is running (if using Docker, `docker ps` shows postgres)
3. Internet connection is stable

### GitHub Actions Not Running

**Check:**
1. Repository has `.github/workflows/ci-cd-pipeline.yml`
2. You pushed code to GitHub (`git push`)
3. Go to "Actions" tab to see status

### Docker Container Won't Start

```bash
# See what's wrong
docker-compose logs

# Stop and remove everything
docker-compose down -v

# Start fresh
docker-compose up --build
```

---

## 🎉 You're Ready!

Your SAAS Automation Builder is now fully set up!

### Next Steps:

1. ✅ Install all dependencies
2. ✅ Get API keys from each service
3. ✅ Set up environment variables
4. ✅ Run locally with `docker-compose up`
5. ✅ Push to GitHub
6. ✅ Watch CI/CD pipeline run
7. ✅ Deploy to production

---

## 📚 Useful Links

| Service | Link |
|---------|------|
| Clerk Auth | https://go.clerk.com/qbebvpA |
| Neon Database | https://neon.tech/ |
| Stripe | https://stripe.com |
| Google Cloud | https://console.cloud.google.com |
| Slack API | https://api.slack.com/apps |
| Discord API | https://discord.com/developers |
| Notion API | https://developers.notion.com |
| GitHub Docs | https://docs.github.com |
| Next.js Docs | https://nextjs.org/docs |
| Prisma Docs | https://www.prisma.io/docs |

---

## ❓ Still Need Help?

1. Check the [Troubleshooting](#troubleshooting) section
2. Read the service documentation (links above)
3. Search error messages on Google
4. Ask on GitHub Discussions or community forums

**You've got this! 💪**

---

## License

This project is part of the SAAS Automation Tutorial Series.
Free to use and modify for personal/commercial projects.

