/** @type {import('next').NextConfig} */

const NextConfig ={
    reactStrictMode: true,
    images: {
        loader: "akamai",
        path: ""
    },
    basePath: "/Portfolio-website",
    assetPrefix: "/Portfolio-website/"
};
