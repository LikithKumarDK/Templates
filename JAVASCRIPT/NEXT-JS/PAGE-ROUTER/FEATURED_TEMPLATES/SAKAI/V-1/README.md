# ReactJS

React is an open-source JavaScript library used for building user interfaces and UI components. You can find its documentation at https://reactjs.org/.

# NextJS

Next.js is a popular open-source framework/extension built on top of React. It is used for building server-rendered React applications and static websites. For more information, you can refer to its documentation at https://nextjs.org/docs.

## Please follow the below steps

1. Clone the repository from git using the below command

```bash
git clone -b page-router https://github.com/LikithKumarDK/Sakai-NextJS.git
```

2. Copy .env.local.example -> .env.local & Update environments variables

3. Install packages from package.json

```bash
npm i
# or
npm install
```

If there is any obstruction in package installation, please check for Node version which supports Next.js.

## Development Mode

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with the browser to see the result.
If there is any obstruction in starting the node server, please check for Node version which supports Next.js or port which application is  running.

## Production Mode

1. To generate the build run the below command

```bash
npm run build
```

2. Folder by name "out" will be created at the root level of the project directory.

3. Run "out" folder in local, Try

```bash
npx serve@latest out
```

4. Deploy the "out" folder as static export build in the server.
