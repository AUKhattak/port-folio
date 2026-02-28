# GitHub Actions CI/CD Deployment Guide

## ✅ Yes, it's possible to push to a different GitHub account!

Your repository now has two deployment workflows:
- `deploy-vercel.yml` - For Vercel deployment
- `deploy-netlify.yml` - For Netlify deployment

---

## 📋 Setup Steps

### **Option 1: Vercel Deployment** (Recommended)

#### 1. Create Vercel Account & Project
```bash
# Install Vercel CLI
npm install -g vercel

# Login and create project
vercel login
vercel --prod
```

#### 2. Get Vercel Secrets
```bash
# Go to https://vercel.com/account/tokens
# Create a token → Copy and save it
```

#### 3. Add GitHub Secrets
Go to your current GitHub repo → **Settings → Secrets and variables → Actions**

Add these secrets:
- `VERCEL_TOKEN` - Your Vercel auth token
- `VERCEL_ORG_ID` - Found in Vercel project settings
- `VERCEL_PROJECT_ID` - Found in Vercel project settings

#### 4. (Optional) Push to Different Account
To push to a different GitHub account, also add:
- `GITHUB_TOKEN_DIFFERENT_ACCOUNT` - Personal access token from different account
- `DIFFERENT_ACCOUNT_REPO` - Format: `username/repo-name`

---

### **Option 2: Netlify Deployment**

#### 1. Create Netlify Account & Connect
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Create new site or connect existing
netlify init
```

#### 2. Get Netlify Secrets
- Go to **https://app.netlify.com/user/applications/personal-access-tokens**
- Create new access token → Copy and save
- Go to **Site settings → General** → Copy Site ID

#### 3. Add GitHub Secrets
Go to your current GitHub repo → **Settings → Secrets and variables → Actions**

Add these secrets:
- `NETLIFY_AUTH_TOKEN` - Your Netlify auth token
- `NETLIFY_SITE_ID` - Your site ID

#### 4. (Optional) Push to Different Account
Same as Vercel above:
- `GITHUB_TOKEN_DIFFERENT_ACCOUNT`
- `DIFFERENT_ACCOUNT_REPO`

---

## 🔑 How to Create GitHub Token for Different Account

1. Go to **https://github.com/settings/tokens** (on the different account)
2. Click **Generate new token (classic)**
3. Give it a name: `CI/CD Deployment`
4. Select scopes:
   - ✅ `repo` (full control of repositories)
   - ✅ `workflow`
5. Click **Generate token**
6. Copy the token immediately (you won't see it again)
7. Add it as `GITHUB_TOKEN_DIFFERENT_ACCOUNT` secret in your current repo

---

## 📤 How the Different Account Push Works

The workflow does this:

```yaml
# 1. Builds your code
npm run build

# 2. (If Vercel/Netlify deployment succeeds)
# Pushes the code to the different account's repository

git remote add deploy https://TOKEN@github.com/different-account/repo-name.git
git push deploy main -f
```

The `-f` flag forces the push (use carefully in production).

---

## ✨ How to Use

### **First Time Setup:**
1. Pick Vercel or Netlify
2. Create account and get secrets
3. Add secrets to GitHub → **Settings → Secrets and variables**
4. Edit the workflow file if needed

### **After Setup:**
Just push to `main` or `master` branch:
```bash
git add .
git commit -m "Your message"
git push origin main
```

**GitHub Actions will automatically:**
1. ✅ Build your app
2. ✅ Deploy to Vercel/Netlify
3. ✅ (Optional) Push code to different account's repo

---

## 🚀 Verify Deployment

### Vercel:
- Check https://vercel.com/dashboard
- Your deployment status will show

### Netlify:
- Check https://app.netlify.com
- Your site URL will be live

---

## 📝 Workflow Files Location

- Vercel: `.github/workflows/deploy-vercel.yml`
- Netlify: `.github/workflows/deploy-netlify.yml`

You can delete the one you don't use, or keep both and comment out the unwanted one.

---

## ⚠️ Tips & Warnings

1. **Never use `-f` (force push) in production** - It can overwrite other's work
2. **Keep tokens secret** - Don't commit them to your repo
3. **Test on a branch first** - Create a test branch to verify the workflow
4. **Both tokens needed** - If pushing to different account, both tokens are required
5. **Netlify free tier limits** - 300 build minutes/month

---

## 🐛 Troubleshooting

**Deployment fails?**
1. Check GitHub Actions tab → Logs
2. Verify all secrets are added correctly
3. Make sure Node version in workflow matches your project

**Push to different account fails?**
1. Verify token has `repo` scope
2. Check account username and repo name
3. Token shouldn't be expired

**Build fails?**
```bash
# Test locally
npm install
npm run build
```

---

Done! Your CI/CD is ready to deploy! 🎉
