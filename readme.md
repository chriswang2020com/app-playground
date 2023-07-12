# Next.js App Router Playground
网站地址：http://35.222.12.162:3000/
- **添加docker容器化操作**
## 必须进入项目文件夹，需要吧package.json导入docker    cd app-playground
## 创建镜像 sudo docker build -t reactimage .
## 开启容器 sudo docker run -d -p 3000:3000 --name app-playground reactimage
## -d在后台运行，-p 3000本地端口:3000docker端口，--name命名，


Next.js recently introduced the App Router with support for:

- **Layouts:** Easily share UI while preserving state and avoiding re-renders.
- **Server Components:** Making server-first the default for the most dynamic applications.
- **Streaming:** Display instant loading states and stream in updates.
- **Suspense for Data Fetching:** `async`/`await` support and the `use` hook for component-level fetching.

The App Router can coexist with the existing `pages` directory for incremental adoption. While you **don't need to use the App Router** when upgrading to Next.js 13, we're laying the foundations to build complex interfaces while shipping less JavaScript.

## Running Locally
一些需要的包apt install即可
nodejs，npm，npm install pnpm

# nodejs

```sh
curl -sL https://deb.nodesource.com/setup_16.x | sudo -E bash -
sudo apt-get install -y nodejs
```


1. Install dependencies:

```sh
pnpm install
```

2. Start the dev server:

```sh
pnpm dev
```


