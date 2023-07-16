# A statically generated blog example using Next.js, Markdown, and TypeScript

This website is based on [NextJS Blog Starter with Typescript and Markdown](https://github.com/vercel/next.js/tree/canary/examples/blog-starter).

It uses Next.js's [Static Generation](https://nextjs.org/docs/basic-features/pages) feature using Markdown files as the data source.

The blog posts are stored in `/_posts` as Markdown files with front matter support. Adding a new Markdown file in there will create a new blog post.

Images are stored in `/public/assets`.

To create the blog posts we use [`remark`](https://github.com/remarkjs/remark) and [`remark-html`](https://github.com/remarkjs/remark-html) to convert the Markdown files into an HTML string, and then send it down as a prop to the page. The metadata of every post is handled by [`gray-matter`](https://github.com/jonschlinkert/gray-matter) and also sent in props to the page.

## Live version

Is available at [indiedublin.com](https://indiedublin.com) and it's hosted on vercel, whatever is marged to the `main` branch gets automatically deployed.


## Development and contributing

Before making any significant contributions, please discuss them on [discord](https://discord.gg/Y4hvQJ2n6t) first :).

You can develop the site as any JS app.

To install and run it (after cloning the repo):

```
npm install
npm run dev
```

If you have any questions, please bring them on the [discord](https://discord.gg/Y4hvQJ2n6t). Thanks!