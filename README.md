# om's desktop wallpaper collection.
A collection of handpicked wallpapers that I like.

## ════ ⋆★⋆ ════

> Live demo can be found [here](https://oms-wp-collection.vercel.app/)

SVG (Logo and Bridge files used on this project) designed by [CodeLikeAGirl29](https://github.com/CodeLikeAGirl29). Also this website is inspired from her image-gallery website :D

## Tech Stack

- Next.js

- Typescript
- Tailwind CSS
---

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=<name-of-cloud>`

`CLOUDINARY_API_KEY=<your-api-key>`

`CLOUDINARY_API_SECRET=<secret-key>`

// optional

`CLOUDINARY_FOLDER=<specific-folder-name>`

## Configuration

Add the following variables to your .env.local or .env file. & if you deploy it, with Vercel for example, you can place these variables in the Envorpnment Variables part of the setup!

NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME="<Your Cloud Name>"

CLOUDINARY_API_KEY=<your-api-key>

CLOUDINARY_API_SECRET=<secret-key>

CLOUDINARY_FOLDER=<specific-folder-name>

## Dependencies

* From the command line: 

 1. @headlessui/react 
 2. @heroicons/react  
 3. cloudinary 
 4. eslint-config-next 
 5. framer-motion 
 6. imagemin 
 7. imagein-jpegtran 
 8. next 
 9. react 
 10. react-dom 
 11. react-hooks-global-state 
 12. react-swipeable 
 13. react-use-keypress

## Usage

### Screenshots

![App Screenshot](https://github.com/user-attachments/assets/fc3ffaf2-1a69-4a27-b830-4aac89763c1c)

### Features

## Code
![Vercel](http://therealsujitk-vercel-badge.vercel.app/?app=oms-wp-collection.vercel.app)

### Build
```
    npm run build
```
### Run
```
    npm run start
```
### Run as dev
```
    npm run dev
```
 
### Deploy (how to install build product)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FCodeLikeAGirl29%2Fimage-gallery&env=NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,CLOUDINARY_API_KEY,CLOUDINARY_API_SECRET&envDescription=API%20Keys%20are%20Needed%20for%20this%20to%20work.&envLink=https%3A%2F%2Fcloudinary.com%2Fguides%2Ffront-end-development%2Fintegrating-cloudinary-with-next-js&project-name=cloudinary-nextjs&demo-title=Img%20Gallery&demo-description=A%20Nextjs%20blog%20site%20using%20my%20Cloudinary%20Images%20%26%20styled%20with%20Tailwindcss.&demo-url=https%3A%2F%2Fimage-gallery-eight-lac.vercel.app%2F&integration-ids=oac_0Bh9szvT534p5qWBHYR2EwiG)

## License

This example shows how to create an image gallery site using Next.js, [Cloudinary](https://cloudinary.com), and [Tailwind](https://tailwindcss.com).

## Demo

View the demo [here](https://oms-wp-collection.vercel.app/)

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## How to use

Execute [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) with [npm](https://docs.npmjs.com/cli/init), [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/), or [pnpm](https://pnpm.io) to bootstrap the example::

```bash
 npx create-next-app --example with-cloudinary nextjs-image-gallery
```

```bash
yarn create next-app --example with-cloudinary nextjs-image-gallery
```

```bash
pnpm create next-app --example with-cloudinary nextjs-image-gallery
```

## References

- Cloudinary API: https://cloudinary.com/documentation/transformation_reference
