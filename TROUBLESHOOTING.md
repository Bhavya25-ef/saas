# ⚠️ TROUBLESHOOTING GUIDE

Complete solutions for common problems.

---

## 🔴 Installation Issues

### "npm: command not found"

**Problem:** You typed `npm` but terminal doesn't recognize it.

**Solutions:**
1. **Install Node.js**
   - Go to [nodejs.org](https://nodejs.org/)
   - Download LTS version
   - Run installer
   - Restart your terminal

2. **Check Installation**
   ```bash
   node --version
   npm --version
   ```

---

### "npm install" hangs or takes forever

**Problem:** Installation is stuck.

**Solutions:**
```bash
# Clear cache
npm cache clean --force

# Try again with verbose output
npm install --verbose

# Alternative: Use yarn
npm install -g yarn
yarn install
```

---

### "Cannot find module '@prisma/client'"

**Problem:** Prisma client not generated.

**Solutions:**
```bash
# Generate Prisma
npm run prisma:generate

# Or manually
npx prisma generate
```

---

## 🔴 Database Issues

### "Error: connect ECONNREFUSED 127.0.0.1:5432"

**Problem:** Database is offline or not found.

**Solutions:**
1. **Using Docker?** Start it:
   ```bash
   docker-compose up
   ```

2. **Using local PostgreSQL?** Start it:
   - Windows: Run "PostgreSQL" from Programs
   - Mac: `brew services start postgresql`
   - Linux: `sudo systemctl start postgresql`

3. **Check DATABASE_URL** in `.env.local`:
   ```
   DATABASE_URL=postgresql://user:password@localhost:5432/db
   ```

4. **Not sure?** Use Neon cloud database:
   - Go to [neon.tech](https://neon.tech)
   - Create project
   - Copy CONNECTION STRING
   - Paste into `.env.local`

---

### "Client was already closed"

**Problem:** Too many connections or wrong URL.

**Solutions:**
```bash
# Restart everything
docker-compose down
docker-compose up

# Or for local PostgreSQL
npx prisma db push --force-reset
npx prisma db push
```

---

### "PrismaClientValidationError"

**Problem:** Prisma schema mismatch.

**Solutions:**
```bash
# Regenerate
npm run prisma:generate

# Add/run migration
npm run prisma:migrate

# If stuck, force reset (⚠️ deletes data)
npx prisma db push --force-reset
```

---

## 🔴 Port Issues

### "Error: listen EADDRINUSE :::3000"

**Problem:** Port 3000 is already used.

**Solutions:**

**Option 1: Use different port**
```bash
npm run dev -- -p 3001
# Then visit: http://localhost:3001
```

**Option 2: Kill process using port 3000**

**Windows PowerShell:**
```bash
Get-Process | Where-Object {$_.ProcessName -eq "node"} | Stop-Process -Force
```

**Mac/Linux:**
```bash
lsof -ti:3000 | xargs kill -9
```

---

## 🔴 Authentication Issues

### "Clerk keys not found"

**Problem:** Missing Clerk environment variables.

**Solutions:**
1. Get keys from [clerk.com](https://go.clerk.com/qbebvpA)
2. Edit `.env.local`:
   ```
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_xxxxx
   CLERK_SECRET_KEY=sk_test_xxxxx
   ```
3. Restart server: `npm run dev`

---

### "Sign up/login not working"

**Problem:** Authentication broken.

**Solutions:**
1. Check `.env.local` has all Clerk keys
2. Check Clerk dashboard allowed URLs:
   - `http://localhost:3000` (dev)
   - `https://yourdomain.com` (production)
3. Clear browser cache
4. Try in incognito window
5. Restart dev server

---

## 🔴 Deployment Issues

### "Build failed on Vercel"

**Problem:** Deployment build error.

**Solutions:**
1. **Check build locally works**
   ```bash
   npm run build
   npm start
   ```

2. **Check Vercel logs** for specific error

3. **Common fixes:**
   ```bash
   # Clear cache and rebuild
   npm cache clean --force
   rm -r .next node_modules
   npm install
   npm run build
   ```

4. **Check environment variables** in Vercel dashboard

---

### "Deployment succeeded but site is down"

**Problem:** App deployed but not loading.

**Solutions:**
1. **Check function logs** in Vercel dashboard
2. **Check environment variables** are all set
3. **Check database connection** from production
4. **Check Stripe/Auth keys** are production keys
5. **Restart deployment** from Vercel dashboard

---

### "Static files not loading"

**Problem:** Images, CSS, JS not loading on deployed site.

**Solutions:**
1. Check files exist in `public/` folder
2. Check file paths are correct
3. Clear Vercel cache:
   - Vercel dashboard → Settings → Rebuild cache

---

## 🔴 Docker Issues

### "Cannot connect to Docker daemon"

**Problem:** Docker not running.

**Solutions:**
1. **Start Docker Desktop**
   - Windows/Mac: Open Docker Desktop app
   - Linux: `sudo systemctl start docker`

2. **Check status**
   ```bash
   docker ps
   ```

---

### "Port already in use in Docker"

**Problem:** Docker port conflict.

**Solutions:**
```bash
# Stop all containers
docker-compose down

# Or use different port in docker-compose.yml
# Change "3000:3000" to "3001:3000"

# Then restart
docker-compose up
```

---

### "Docker container keeps crashing"

**Problem:** Container exits immediately.

**Solutions:**
```bash
# View logs
docker-compose logs app

# Check with verbose output
docker-compose up --no-log-prefix

# Try rebuilding
docker-compose up --build
```

---

## 🔴 Git Issues

### "fatal: not a git repository"

**Problem:** Not a git project yet.

**Solutions:**
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/your-user/repo.git
git push -u origin main
```

---

### "Everything changed, git is confused"

**Problem:** Massive git conflicts.

**Solutions:**
```bash
# Backup your work (copy entire folder)

# Then reset
git reset --hard HEAD
# or
git clean -fd
```

---

## 🔴 Environment Variable Issues

### "Environment variable not found"

**Problem:** A required variable is undefined.

**Solutions:**
1. Check `.env.local` exists
2. Check variable is spelled correctly (case-sensitive!)
3. Restart dev server: `npm run dev`
4. For Docker, restart: `docker-compose down && docker-compose up`

---

### "Error: Invalid DATABASE_URL"

**Problem:** Database connection string wrong.

**Solutions:**
1. **Get correct URL:**
   - Neon: Click "Connection String" in dashboard
   - Local PostgreSQL: `postgresql://user:password@localhost:5432/dbname`

2. **Check format:**
   ```
   postgresql://USERNAME:PASSWORD@HOST:PORT/DATABASE
   ```

3. **Special characters?** URL encode them:
   - `@` → `%40`
   - `!` → `%21`

---

## 🔴 Build Errors

### "TypeScript compilation error"

**Problem:** Type checking failed.

**Solutions:**
```bash
# Check errors
npx tsc --noEmit

# Fix errors manually or
npx tsc --skipLibCheck --noEmit
```

---

### "Out of memory during build"

**Problem:** Build ran out of RAM.

**Solutions:**
```bash
# Increase Node memory
NODE_OPTIONS=--max_old_space_size=4096 npm run build

# Or increase to 8GB
NODE_OPTIONS=--max_old_space_size=8192 npm run build
```

---

### "'react' is not defined"

**Problem:** Missing React import.

**Solutions:**
Add to top of file:
```typescript
import React from "react"
```

Or add to all files automatically:
```typescript
// Update tsconfig.json
{
  "compilerOptions": {
    "jsx": "react-jsx"  // auto imports React
  }
}
```

---

## 🔴 Browser Issues

### "Blank page - nothing displays"

**Problem:** React components not rendering.

**Solutions:**
1. **Check browser console** (F12 key):
   - Press F12
   - Go to "Console" tab
   - Look for red errors

2. **Common fixes:**
   ```bash
   # Restart dev server
   npm run dev
   
   # Clear browser cache
   Ctrl + Shift + Delete  # opens cache clearing
   ```

3. **Try incognito mode** (bypasses cache)

---

### "Page keeps reloading"

**Problem:** Infinite reload loop.

**Solutions:**
```bash
# Check for infinite loops in code
# Or restart dev server
npm run dev

# If that doesn't work
docker-compose down
docker-compose up
```

---

## 🆘 Nuclear Options (Use When Desperate!)

### Option 1: Complete Fresh Start

```bash
# Delete everything
rm -r node_modules package-lock.json

# Reinstall
npm install

# Clean database
npx prisma db push --force-reset

# Restart
npm run dev
```

### Option 2: Docker Full Reset

```bash
# Remove all containers/volumes
docker-compose down -v

# Rebuild from scratch
docker-compose up --build
```

### Option 3: Git Reset (⚠️ Loses recent changes!)

```bash
# Go back to last committed state
git reset --hard HEAD

# Or even further back
git reset --hard HEAD~1
```

---

## 📞 Getting Help

When asking for help, provide:

1. **Error message** (copy exact text)
2. **Command you ran** (what triggered it?)
3. **OS** (Windows/Mac/Linux)
4. **Output** of your most recent command

Example:
```
"npm run dev" gives error:
Error: ENOENT: no such file or directory, open '.env.local'
OS: Windows 11
Solution: Run setup script
```

---

## 🔗 Resources

- **Next.js Issues:** https://github.com/vercel/next.js/issues
- **Prisma Help:** https://github.com/prisma/prisma/issues
- **Stack Overflow:** https://stackoverflow.com/questions/tagged/nextjs
- **Discord Communities:** Find dev communities

---

**Remember: Google your error message! Chances are someone solved it before! 🔍**

