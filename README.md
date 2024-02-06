<p align="center">
  <a href="https://my-starry.com">
    <img width="500" alt="Starry – Generate pictures based on Van Gogh's Starry Night." src="./.github/images/preview.gif">
    <h1 align="center">Starry 💫</h1>
  </a>
</p>

<p align="center">
  Turn your ideas into Van Gogh arts via AI model
</p>

<p align="center">
  <a href="https://twitter.com/lauradotjs">
    <img src="https://img.shields.io/twitter/follow/lauradotjs?style=flat&label=lauradotjs&logo=twitter&color=0bf&logoColor=fff" alt="Laura Twitter followers count" />
  </a>
   <a href="https://github.com/laurabeatris/starry">
    <img src="https://img.shields.io/github/stars/laurabeatris/starry?label=laurabeatris%2Fstarry" alt="Spirals repository stars count" />
  </a>
</p>

## How it works

This application leverages an AI model, specifically [Stable Diffusion](https://replicate.com/stability-ai/stable-diffusion) hosted on Replicate, to transform your images into art inspired by Van Gogh's Starry Night. Simply enter a prompt, and it will be processed through this AI model via a Next.js server action and an API route that listens to Replicate's webhook.

## 🎥 Walkthrough videos

<!-- TODO -> Add link -->
- [Video explanation on how I built this application]()
- [Launch demo video](https://work-os.slack.com/archives/C06FKD58VHP/p1707229394539739?thread_ts=1706544852.887569&cid=C06FKD58VHP)

## Powered by

- [Bun](https://bun.sh/) for compilation
- [Replicate](https://replicate.ai/) for AI API
- [Vercel](https://vercel.com)
  - Next.js [App Router](https://nextjs.org/docs/app)
  - Next.js [Server Actions](https://nextjs.org/docs/app/api-reference/functions/server-actions)
  - [Vercel Blob](https://vercel.com/storage/blob) for image storage
  - [Vercel KV](https://vercel.com/storage/kv) for redis
- [WorkOS](https://workos.com/)
  - [AuthKit](https://authkit.com/) for user management

## How to run on your own machine

### 1. Install [Bun](https://bun.sh/) for compilation

### 2. Install [ngrok](https://ngrok.com/) to listen to Replicate's webhook events while developing locally

### 2. Cloning the repository

```bash
git clone
```

### 3. Sign up for the services mentioned in the [Powered by](#powered-by) section

### 4. Storing API keys in .env file.

Copy the `.env.example` file and update with your own API keys.

### 5. Installing the dependencies.

```bash
bun install
```

### 6. Running the application.

Then, run the application in the command line and it will be available at `http://localhost:3000`.

```bash
bun run dev
```

Also, run `ngrok http 3000` to create a tunnel to listen to Replicate's webhook events.

## Author

- Laura Beatris ([@lauradotjs](https://twitter.com/lauradotjs))
