# ⚡ QUICK START GUIDE (Windows Users)

Welcome! This is a **simplified guide** to get your SAAS Automation Builder running in 15 minutes.

## 📺 Step-by-Step Video Instructions

If you prefer watching instead of reading, check out the YouTube tutorial at:
👉 **https://www.youtube.com/watch?v=fuzzify-saas**

---

## ✅ What You Need

Make sure you have **Node.js** installed. Check by opening PowerShell/CMD and typing:

```bash
node --version
```

**Don't see a version number?**
👉 Download Node.js from [nodejs.org](https://nodejs.org/) and install it.

---

## 🚀 INSTALLATION (Copy & Paste Commands)

### 1️⃣ Open PowerShell in Your Project Folder

1. Navigate to your project folder
2. **Right-click** in empty space
3. Click **"Open PowerShell window here"** (or **"Open in Terminal"**)

You should see something like:
```
PS C:\Users\karna\OneDrive\Desktop\SAAS Automation Builder>
```

### 2️⃣ Run Setup

Copy this command and paste into PowerShell (Right-click to paste):

```bash
.\scripts\setup.bat
```

**This will:**
- Install all dependencies
- Create `.env.local` file
- Set up your database

### 3️⃣ Add Your API Keys

The script created `.env.local` file. You need to add your API keys:

**Open `.env.local` in Notepad:**

```
1. Find the file: .env.local
2. Right-click → Open with → Notepad
```

**Copy your keys from these services:**

| Service | Get Key From | Paste Into |
|---------|-------------|-----------|
| **Clerk** | https://go.clerk.com/qbebvpA | `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` and `CLERK_SECRET_KEY` |
| **Neon DB** | https://neon.tech | `DATABASE_URL` |
| **Stripe** | https://stripe.com | `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` and `STRIPE_SECRET_KEY` |
| **Google** | https://console.cloud.google.com | `GOOGLE_CLIENT_ID` and `GOOGLE_CLIENT_SECRET` |
| **Slack** | https://api.slack.com/apps | `SLACK_CLIENT_ID`, etc. |
| **Discord** | https://discord.com/developers | `DISCORD_CLIENT_ID`, etc. |

### 4️⃣ Start the Development Server

Paste this in PowerShell:

```bash
npm run dev
```

You'll see:
```
> ready - started server on 0.0.0.0:3000, url: http://localhost:3000
```

**Open your browser:** http://localhost:3000 ✅

### 5️⃣ Stop the Server

Press:
```
Ctrl + C
```

(Hold the Control key and press C - it will ask if you want to stop, type `y` and press Enter)

---

## 🐳 Using Docker (Easier!)

If you have **Docker Desktop** installed, this is much simpler:

### 1️⃣ Start Everything

Paste in PowerShell:

```bash
docker-compose up
```

Wait 30 seconds... your app will be ready at **http://localhost:3000**

### 2️⃣ Stop Everything

Press:
```
Ctrl + C
```

---

## 📂 Project Structure (What Does Each Folder Do?)

```
SAAS Automation Builder/
├── src/                    # 👈 Your code goes here
│   ├── app/               # Pages and routes
│   ├── components/        # React components (buttons, forms, etc)
│   ├── lib/              # Helper functions
│   └── api/              # Backend endpoints
├── prisma/                # Database schema
├── public/                # Images, icons, etc
├── .github/               # GitHub Actions (CI/CD)
├── docker-compose.yml     # Docker configuration
└── package.json          # Dependencies list
```

---

## 🎮 Available Commands

| Command | What It Does | How to Stop |
|---------|------------|-----------|
| `npm run dev` | Starts development server | `Ctrl + C` |
| `npm run build` | Builds for production | N/A |
| `npm run lint` | Checks code quality | N/A |
| `docker-compose up` | Starts everything with Docker | `Ctrl + C` |

---

## 🔗 Connecting Integrations

After login, go to **Dashboard → Integrations** to connect:

- 📁 **Google Drive** - Auto-organize files
- 💬 **Slack** - Send notifications
- 🎮 **Discord** - Post to servers
- 📝 **Notion** - Create database entries
- 💳 **Stripe** - Accept payments

Each integration has a **"Connect"** button. Click it to authorize!

---

## 🚨 Common Issues & Fixes

### Error: "npm: command not found"

**Fix:** Install Node.js from [nodejs.org](https://nodejs.org/)

### Error: "Port 3000 already in use"

**Fix:** Another app is using port 3000. Either:
- Stop that app
- Or use different port:
  ```bash
  npm run dev -- -p 3001
  ```
  Then go to: **http://localhost:3001**

### Error: "Cannot find .env.local"

**Fix:** Run the setup script again:
```bash
.\scripts\setup.bat
```

### Docker won't start

**Fix:** Make sure Docker Desktop is running!

### Database connection error

**Check:**
1. Your `DATABASE_URL` in `.env.local` is correct
2. Your database password is right
3. Your internet is connected

---

## 📚 Next Steps

✅ **Project is running?** Now:

1. Go to **http://localhost:3000**
2. Sign up with email
3. Go to **Dashboard**
4. Click **"Connect Integrations"**
5. Connect Google Drive, Slack (or any service)
6. Create a **Workflow** (Coming soon in UI)

---

## 🌐 Deploy to Live Website

Want to show your friends? Deploy to the internet:

### Option 1: Vercel (Easiest)

1. Go to [vercel.com](https://vercel.com)
2. Click **"Import Project"**
3. Upload your GitHub repository
4. Click **Deploy**
5. Your site is live! 🚀

### Option 2: Docker

1. Build image: `docker build -t my-saas .`
2. Deploy to: AWS, Google Cloud, Azure, Heroku

---

## 💡 Need Help?

| Problem | Solution |
|---------|----------|
| Get stuck on a step? | Re-read the instructions or check YouTube tutorials |
| Error message confusing? | Copy the error and search on Google |
| Nothing works? | Check your `.env.local` - are all keys correct? |
| Want to code? | Check [Next.js docs](https://nextjs.org/docs) |

---

## 🎉 You're All Set!

Your SAAS is ready to use!

### Quick Checklist:

- [x] Node.js installed
- [x] Dependencies installed (`npm install`)
- [x] `.env.local` created with API keys
- [x] Server running (`npm run dev`)
- [x] Website works (`http://localhost:3000`)

**Congratulations! 🎊**

Now start building your automations!

---

## 📞 Contact & Resources

- **GitHub:** https://github.com/Bhavya7111
- **YouTube:** https://www.youtube.com/webprodigies
- **Discord:** Join the community
- **Docs:** https://nextjs.org/docs

Good luck! May your automations be swift and your code bug-free! 💪

