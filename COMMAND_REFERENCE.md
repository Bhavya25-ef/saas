# 📚 COMPLETE COMMAND REFERENCE

All commands you'll ever need for this project.

## 🎯 Most Common Commands

### Start Development

```bash
npm run dev
```
Opens http://localhost:3000

### Build for Production

```bash
npm run build
```

### Start Production Server

```bash
npm start
```

### Using Docker (All-in-one)

```bash
docker-compose up
```

---

## 🗄️ Database Commands

### Generate Prisma Client

```bash
npm run prisma:generate
```

### Create/Update Database

```bash
npm run prisma:migrate
```

When prompted, name your migration (e.g., "init")

### View Database in Browser

```bash
npm run prisma:studio
```

Opens http://localhost:5555

### Reset Database (⚠️ Deletes All Data!)

```bash
npx prisma db push --force-reset
```

---

## 🔍 Code Quality Commands

### Run Linter

```bash
npm run lint
```

Checks code style and finds issues.

### Fix Linting Issues Automatically

```bash
npm run lint -- --fix
```

---

## 🧪 Build & Deployment

### Full Build & Migrate

```bash
npm run build && npm run prisma:migrate
```

### Check TypeScript

```bash
npx tsc --noEmit
```

Checks for type errors without building.

---

## 🐳 Docker Commands

### Start Everything

```bash
docker-compose up
```

### Start in Background

```bash
docker-compose up -d
```

### Stop Everything

```bash
docker-compose down
```

### Stop & Remove All Data

```bash
docker-compose down -v
```

### View Logs

```bash
docker-compose logs
```

### Follow Logs (Live)

```bash
docker-compose logs -f
```

### Rebuild Containers

```bash
docker-compose up --build
```

### Stop Single Container

```bash
docker-compose stop app  # stops only app
```

---

## 📦 NPM Commands

### Install All Packages

```bash
npm install
```

### Install Specific Package

```bash
npm install package-name
```

### Uninstall Package

```bash
npm uninstall package-name
```

### Update All Packages

```bash
npm update
```

### Check Outdated Packages

```bash
npm outdated
```

---

## 🚀 Deployment Commands

### Deploy to Vercel

```bash
npm install -g vercel
vercel
```

### Push to GitHub

```bash
git add .
git commit -m "Your message"
git push origin main
```

### Build Docker Image

```bash
docker build -t my-saas:latest .
```

### Push Docker to Registry

```bash
docker push my-registry/my-saas:latest
```

---

## 🔐 Environment & Setup

### Copy Environment Template

```bash
cp .env.local.example .env.local
```

### Run Setup Script (Windows)

```bash
.\scripts\setup.bat
```

### Run Setup Script (Mac/Linux)

```bash
bash scripts/setup.sh
```

---

## 🖥️ System Commands

### Check Node Version

```bash
node --version
```

### Check NPM Version

```bash
npm --version
```

### Check Docker

```bash
docker --version
docker ps  # running containers
```

### Check Git Status

```bash
git status
git log  # see commit history
```

---

## 🛠️ Useful Combinations

### Fresh Start (Nuclear Reset)

```bash
rm -r node_modules
rm package-lock.json
npm install
npm run prisma:generate
npm run dev
```

### Production Ready

```bash
npm install
npm run build
npm run prisma:migrate  # optional if already migrated
npm start
```

### Full Docker Restart

```bash
docker-compose down -v
docker-compose up --build
```

---

## 📊 Debugging Commands

### Clear NPM Cache

```bash
npm cache clean --force
```

### Check Package Size

```bash
npm ls
```

### Find Port Usage (Windows)

```bash
netstat -ano | findstr :3000
```

### Find Port Usage (Mac/Linux)

```bash
lsof -i :3000
```

### Kill Process on Port

```bash
# Windows
taskkill /PID <PID> /F

# Mac/Linux
kill -9 <PID>
```

---

## 📝 Git Commands

### Initialize Git (First Time)

```bash
git init
git remote add origin https://github.com/your-username/repo.git
git add .
git commit -m "Initial commit"
git push -u origin main
```

### Check Git Status

```bash
git status
```

### See Commit History

```bash
git log
git log --oneline  # shorter format
```

### Create New Branch

```bash
git checkout -b new-feature
```

### Switch Branch

```bash
git checkout main
```

### Merge Branch

```bash
git checkout main
git merge new-feature
```

---

## 🧹 Cleanup Commands

### Remove Build Folder

```bash
rm -r .next  # or: rmdir /s .next (Windows)
```

### Remove Old Logs

```bash
rm -r logs/*
```

### Clean Docker System

```bash
docker system prune
```

---

## 📈 Performance Commands

### Build Analyzer

```bash
npm install -g next-bundle-analyzer
npm run build
```

### Check Vulnabilities

```bash
npm audit
npm audit fix  # fixes automatically
```

---

## 🎓 Learning Commands

### See Project Structure

```bash
tree -L 2  # or: dir /s (Windows)
```

### Count Lines of Code

```bash
find src -name "*.ts" -o -name "*.tsx" | xargs wc -l
```

### List All Dependencies

```bash
npm ls
```

---

## ⏰ Terminal Tips

- `Ctrl + C` - Stop running process
- `Ctrl + L` (or `clear`) - Clear terminal
- `↑ Arrow` - Previous command
- `Tab` - Auto-complete
- `Ctrl + V` or `Right-click` - Paste in terminal

---

## 🆘 Emergency Commands

### If Everything Breaks

```bash
# Option 1: Clean slate
rm -r node_modules
rm package-lock.json
npm install
npm run prisma:generate

# Option 2: Full reset
docker-compose down -v
docker-compose up --build
```

### If Port is Stuck

```bash
# Kill process on port 3000
# Windows PowerShell
Get-Process | ? {$_.ProcessName -eq "node"} | Stop-Process -Force

# Mac/Linux
lsof -ti:3000 | xargs kill -9
```

---

## 📞 When to Use Each Command

| Goal | Command |
|------|---------|
| Start coding | `npm run dev` |
| Check code quality | `npm run lint` |
| Prepare for production | `npm run build` |
| Run production | `npm start` |
| Update database | `npm run prisma:migrate` |
| See database | `npm run prisma:studio` |
| Use Docker | `docker-compose up` |
| Deploy to Vercel | `npm install -g vercel && vercel` |
| Push to GitHub | `git push origin main` |
| Fix everything | See "Emergency Commands" |

---

**Bookmark this page! You'll come back to it often! 📌**

