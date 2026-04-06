# 🔗 ALL URLS AND SERVICES NEEDED

This file has **every link you need** to get started. Just copy-paste!

## 📋 Quick Links Summary

| Service | Tier | Link | What to Get |
|---------|------|------|-----------|
| Clerk | Free ✅ | https://go.clerk.com/qbebvpA | PUBLIC_KEY + SECRET_KEY |
| Neon | Free ✅ | https://neon.tech | DATABASE_URL |
| Stripe | Free ✅ | https://stripe.com | PUBLISHABLE_KEY + SECRET_KEY |
| Google | Free ✅ | https://console.cloud.google.com | CLIENT_ID + SECRET |
| Slack | Free ✅ | https://api.slack.com/apps | CLIENT_ID + SECRET |
| Discord | Free ✅ | https://discord.com/developers | TOKEN + CLIENT_ID |
| Notion | Free ✅ | https://notion.so/my-integrations | CLIENT_ID + SECRET |
| Uploadcare | Free ✅ | https://uploadcare.com/?via=emmanuel | PUBLIC_KEY |
| Resend (Email) | Free ✅ | https://resend.com | API_KEY |

---

## 🔐 STEP-BY-STEP Setup Instructions

### Step 1: Clerk Authentication
**Time: 5 minutes | Tier: Free**

👉 **Link:** https://go.clerk.com/qbebvpA

**Instructions:**
1. Click link → Sign up
2. Create application → Choose "Personal Account"
3. Go to **Developers** → **API Keys**
4. Copy these two keys to `.env.local`:
   ```
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_xxxxx
   CLERK_SECRET_KEY=sk_test_xxxxx
   ```
5. Go back to **Dashboard** → Copy your **Domain**
6. Add to `.env.local`:
   ```
   NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
   NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
   NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
   NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard
   ```

---

### Step 2: Neon Database
**Time: 3 minutes | Tier: Free**

👉 **Link:** https://neon.tech

**Instructions:**
1. Click link → Sign up (use GitHub or email)
2. Create new database (PostgreSQL)
3. Click **Connection string**
4. Copy the string that looks like:
   ```
   postgresql://username:password@host/database
   ```
5. Paste into `.env.local`:
   ```
   DATABASE_URL=postgresql://xxx:yyy@host/dbname
   ```

---

### Step 3: Stripe Payments
**Time: 5 minutes | Tier: Free**

👉 **Link:** https://stripe.com

**Instructions:**
1. Click link → Sign up
2. Go to **Developers** → **API Keys**
3. Copy **Publishable Key**:
   ```
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_xxxxx
   ```
4. Copy **Secret Key**:
   ```
   STRIPE_SECRET_KEY=sk_test_xxxxx
   ```
5. Go to **Webhooks** → **Add endpoint**
6. Add endpoint: `http://localhost:3000/api/webhooks/stripe`
7. Copy **Signing secret**:
   ```
   STRIPE_WEBHOOK_SECRET=whsec_xxxxx
   ```

---

### Step 4: Google OAuth & Drive
**Time: 10 minutes | Tier: Free**

👉 **Link:** https://console.cloud.google.com

**Instructions:**
1. Click link → Create new project
2. Search for **"Google Drive API"** → Enable it
3. Search for **"Google+ API"** → Enable it
4. Go to **Credentials** → **Create Credentials** → **OAuth Client ID**
5. Choose **Web Application**
6. Add redirect URI: `http://localhost:3000/api/auth/google/callback`
7. Copy **Client ID** and **Client Secret**:
   ```
   GOOGLE_CLIENT_ID=xxxxx.apps.googleusercontent.com
   GOOGLE_CLIENT_SECRET=GOCSPX-xxxxx
   GOOGLE_REDIRECT_URI=http://localhost:3000/api/auth/google/callback
   ```

---

### Step 5: Slack Integration
**Time: 5 minutes | Tier: Free**

👉 **Link:** https://api.slack.com/apps

**Instructions:**
1. Click link → **Create New App** → **From scratch**
2. Name: `SAAS Automation`
3. Workspace: Create or choose
4. Go to **OAuth & Permissions**
5. Copy **Client ID** and **Client Secret**:
   ```
   SLACK_CLIENT_ID=xxxxx.xxxxx
   SLACK_CLIENT_SECRET=xxxxx
   ```
6. Scroll down to **Scopes** → Add:
   - `chat:write`
   - `channels:read`
   - `users:read`
7. Go to **Basic Information** → Copy **Signing Secret**:
   ```
   SLACK_SIGNING_SECRET=xxxxx
   ```

---

### Step 6: Discord Integration
**Time: 5 minutes | Tier: Free**

👉 **Link:** https://discord.com/developers/applications

**Instructions:**
1. Click link → **New Application** → Name: `SAAS Automation`
2. Go to **OAuth2** → **Client ID** and **Client Secret**:
   ```
   DISCORD_CLIENT_ID=xxxxx
   DISCORD_CLIENT_SECRET=xxxxx
   ```
3. Go to **Bot** → **Create Bot**
4. Copy **Token**:
   ```
   DISCORD_BOT_TOKEN=MTk4NjIyNDgzNzE5NzA1MDI0.Clwa7A.xxxxx
   ```
5. Go to **OAuth2** → **URL Generator**
6. Select scopes: `bot`
7. Select permissions: `Send Messages`, `Embed Links`
8. Copy generated URL and invite bot to your server

---

### Step 7: Notion Integration
**Time: 5 minutes | Tier: Free**

👉 **Link:** https://notion.so/my-integrations

**Instructions:**
1. Click link → **Create new integration**
2. Name: `SAAS Automation`
3. Copy **Client ID** and **Client Secret**:
   ```
   NOTION_CLIENT_ID=xxxxx-xxxxx-xxxxx
   NOTION_CLIENT_SECRET=secret_xxxxx
   ```

---

### Step 8: Uploadcare (File Storage)
**Time: 3 minutes | Tier: Free**

👉 **Link:** https://uploadcare.com/?via=emmanuel

**Instructions:**
1. Click link → Sign up
2. Create new project
3. Go to **Settings** → **API Keys**
4. Copy **Public Key**:
   ```
   NEXT_PUBLIC_UPLOADCARE_PUBLIC_KEY=xxxxx
   ```

---

### Step 9: Resend (Email Service)
**Time: 3 minutes | Tier: Free**

👉 **Link:** https://resend.com

**Instructions:**
1. Click link → Sign up
2. Go to **API Keys**
3. Create new API key
4. Copy token:
   ```
   RESEND_API_KEY=re_xxxxx
   ```

---

### Step 10: NGROK (For Local Development)
**Time: 2 minutes | Tier: Free**

👉 **Link:** https://ngrok.com

**Instructions:**
1. Click link → Sign up
2. Download ngrok
3. Go to **Account** → Copy **Auth Token**:
   ```
   NGROK_AUTH_TOKEN=xxxxx
   ```

---

## ✅ Final Checklist

Make sure these are in your `.env.local`:

```bash
# Auth
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_xxxxx
CLERK_SECRET_KEY=sk_test_xxxxx

# Database
DATABASE_URL=postgresql://user:pass@host/db

# Stripe
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_xxxxx
STRIPE_SECRET_KEY=sk_test_xxxxx
STRIPE_WEBHOOK_SECRET=whsec_xxxxx

# Google
GOOGLE_CLIENT_ID=xxxxx.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=GOCSPX-xxxxx

# Slack
SLACK_CLIENT_ID=xxxxx.xxxxx
SLACK_CLIENT_SECRET=xxxxx
SLACK_SIGNING_SECRET=xxxxx

# Discord
DISCORD_CLIENT_ID=xxxxx
DISCORD_CLIENT_SECRET=xxxxx
DISCORD_BOT_TOKEN=MTk4NjIyNDgzNzE5NzA1MDI0.Clwa7A.xxxxx

# Notion
NOTION_CLIENT_ID=xxxxx-xxxxx-xxxxx
NOTION_CLIENT_SECRET=secret_xxxxx

# Others
NEXT_PUBLIC_UPLOADCARE_PUBLIC_KEY=xxxxx
RESEND_API_KEY=re_xxxxx
NGROK_AUTH_TOKEN=xxxxx
```

---

## 🎉 All Set!

You have all the links and keys you need!

**Next:** Run `npm run dev` and start building! 🚀

---

## 📞 Support

- **Clerk Docs:** https://clerk.com/docs
- **Stripe Docs:** https://stripe.com/docs
- **Google Docs:** https://developers.google.com
- **Slack Docs:** https://api.slack.com/docs
- **Discord Docs:** https://discord.com/developers/docs
- **Notion Docs:** https://developers.notion.com

