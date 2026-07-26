# Deployment Instructions - Tarek Salam Personal Website

## Step 1: Enable GitHub Pages

1. Go to: https://github.com/tareksalam3-commits/tarek-salam-website/settings/pages
2. Under "Source", select "GitHub Actions"
3. The deploy.yml workflow will auto-build and deploy on every push to main

## Step 2: Build Locally (optional)

```bash
pnpm install
pnpm build
```

## Step 3: Verify Deployment

After pushing, check: https://github.com/tareksalam3-commits/tarek-salam-website/actions
The site will be available at: https://tareksalam3-commits.github.io/tarek-salam-website/
