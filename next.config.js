/** @type {import('next').NextConfig} */

const NextConfig ={
    reactStrictMode: true,
    images: {
        loader: "akamai",
        path: ""
    },
    basePath: "/nextjs-pages",
    assetPrefix: "/nextjs-pages"
};
