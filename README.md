# 100 Days of Rust

## Sausage Making

I've become proficient at putting together simple static websites using React. I wouldn't call what I create an app,
because the don't really have any functionality beyond displaying static information.

I put this app together using the [Vite](https://vitejs.dev) bundler and it's React template.

Issue the following command from your favourite command line tool:

```
npm init vite@latest 100-days-of-rust --template react
```

This will scafold a basic React app similar to what you get with create-react-app. I then cleared out all the default files to make my own structure.
The only other customization step is to install the react-markdown and react-gfm (github flavoured markdown) npm packages. I've come to like the notion
of writing heavy volumes of text in Markdown, which is a lot easier than volumes of jsx in a React component.

You can consult the github repo for this project to see the final code.

## Deployment

This app of mine lives on [Vercel](https://vercel.com), an amazing platform for hosting all things React. Deployment to Vercel is as simple as opening
a hobbyist account, then connecting your github repo, and following the automated steps to deploy to production. Anytime you update your code, the github
connection means Vercel will push the latest updates out to the world automagically.
