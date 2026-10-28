# SolidStart

Everything you need to build a Solid project, powered by [`solid-start`](https://start.solidjs.com);

## Creating a project

```bash
# create a new project in the current directory
npm init solid@latest

# create a new project in my-app
npm init solid@latest my-app
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

SolidStart 2 requires Node.js 24 or newer. Build the app with:

```bash
npm run build

# preview the production build locally
npm run preview
```

The production build uses Nitro's Netlify preset.

## This project was created with the [Solid CLI](https://solid-cli.netlify.app)

## CSS
This project uses [Tailwind CSS](https://tailwindcss.com/docs) with its Vite plugin.

## Hosting
Documentation for [build docker image](https://docs.docker.com/get-started/02_our_app/)

Build image and run container
```bash
# build iamge for Mac
docker build -t getting-started .
# build image for NAS
docker build --platform=linux/amd64 -t landing-page .

# publish
docker tag landing-page marvin48/landing-page
docker push marvin48/landing-page

# run container
docker run -dp 127.0.0.1:3000:3000 getting-started
```