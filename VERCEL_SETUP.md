# Vercel Deployment Setup - Step by Step

## 🎯 Goal
Deploy your portfolio to Vercel with automatic CI/CD from GitHub

---

## ✅ Step 1: Get Your Vercel Tokens

### 1.1 Get Vercel Auth Token
1. Go to: https://vercel.com/account/tokens
2. Click **"Create"** button
3. Name: `GitHub CI/CD`
4. Click **"Create"**
5. **Copy the token** (save it somewhere safe)

### 1.2 Get Project ID & Organization ID
1. Go to: https://vercel.com/dashboard
2. Click on your **portfolio project**
3. In the project page, look for **Project ID** (at the bottom of page)
4. Go to **Settings → General** and scroll down
5. Copy:
   - `PROJECT_ID` (the long string)
   - `ORG_ID` (your account ID or team ID)

Example:
```
VERCEL_TOKEN = "abcd1234efgh5678ijkl9..."
VERCEL_PROJECT_ID = "abc123def456"
VERCEL_ORG_ID = "team_abc123def456"
```

---

## 🔐 Step 2: Add Secrets to GitHub

1. Go to your GitHub repository
2. Click **Settings** (top right)
3. Left sidebar → **Secrets and variables** → **Actions**
4. Click **"New repository secret"** 3 times and add:

| Secret Name | Value |
|---|---|
| `VERCEL_TOKEN` | Your token from Step 1.1 |
| `VERCEL_ORG_ID` | Your org ID from Step 1.2 |
| `VERCEL_PROJECT_ID` | Your project ID from Step 1.2 |

**Screenshot guide:**
```
Settings → Secrets and variables → Actions → New repository secret
↓
Add VERCEL_TOKEN → Paste value → Add secret
Add VERCEL_ORG_ID → Paste value → Add secret
Add VERCEL_PROJECT_ID → Paste value → Add secret
```

---

## ✨ Step 3: GitHub Actions Workflow is Ready!

The workflow file is already created at:
`.github/workflows/deploy-vercel.yml`

It automatically:
1. ✅ Checks out your code
2. ✅ Installs Node.js 18
3. ✅ Installs dependencies (`npm install`)
4. ✅ Builds your project (`npm run build`)
5. ✅ Deploys to Vercel

---

## 🚀 Step 4: Deploy!

### Option A: First Time Deploy
```bash
# Push to main branch
git add .
git commit -m "Setup Vercel deployment"
git push origin main
```

Then:
1. Go to your GitHub repo
2. Click **Actions** tab
3. Click the workflow run
4. Watch it build and deploy!

### Option B: Already Pushed to Main?
Just create a new commit:
```bash
# Make a small change (or just add a comment in a file)
git add .
git commit -m "Trigger Vercel deployment"
git push origin main
```

---

## ✅ Verify Deployment

### Check GitHub Actions:
1. Go to **GitHub repo → Actions tab**
2. Look for **"Deploy to Vercel"** workflow
3. Should show ✅ **green checkmark** when complete

### Check Vercel:
1. Go to https://vercel.com/dashboard
2. Click your portfolio project
3. You should see the deployment listed
4. **Live URL** will be displayed

---

## 📝 Your Live URL

Once deployed, your site will be live at:
```
https://your-project-name.vercel.app
```

Or your custom domain if you set one up.

---

## 🔄 Auto-Deploy on Every Push

From now on:
- Push to `main` → GitHub Actions runs → Vercel deploys automatically
- Takes ~2-3 minutes total
- You can track progress in GitHub Actions tab

---

## 📊 Monitor Deployments

### GitHub Actions Dashboard:
```
Your Repo → Actions tab → Deploy to Vercel
```
Shows:
- ✅ Build status
- ⏱️ Duration
- 📝 Logs

### Vercel Dashboard:
```
https://vercel.com/dashboard
```
Shows:
- Live deployments
- Performance analytics
- Environment variables

---

## 🐛 Troubleshooting

### "Deployment failed" error?
1. Click the failed workflow in GitHub Actions
2. Scroll down to see the error
3. Common issues:
   - Missing secrets → Add them in Settings → Secrets
   - Wrong token → Regenerate at https://vercel.com/account/tokens
   - Build error → Check `npm run build` locally

### Want to test locally?
```bash
npm run build
# Should succeed without errors
```

### How to check Vercel Project ID?
```bash
# Install Vercel CLI
npm install -g vercel

# Login
vercel login

# Get project info
vercel projects list
```

---

## 🎉 You're Done!

Your portfolio is now:
- ✅ Connected to GitHub Actions
- ✅ Auto-deploying to Vercel on every push
- ✅ Live on the internet!

Every time you push code to `main`, it automatically builds and deploys. No manual steps needed! 🚀

---

## 📚 Next Steps

1. Make your first change
2. Commit and push
3. Watch it deploy in GitHub Actions
4. Visit your live URL

Done! 🎉
