# Deployment Instructions - Tarek Salam Personal Website

## Step 1: Enable GitHub Pages

1. Go to: https://github.com/tareksalammohamed/me/settings/pages
2. Under "Source", select "GitHub Actions"
3. The deploy.yml workflow will auto-build and deploy on every push to main

## Step 2: Build Locally (optional)

```bash
pnpm install
pnpm build
```

## Step 3: Verify Deployment

After pushing, check: https://github.com/tareksalammohamed/me/actions
The site will be available at: https://tareksalammohamed.github.io/me/
