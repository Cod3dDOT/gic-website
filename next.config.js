/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: [
            "static.wikia.nocookie.net",
            "upload-os-bbs.mihoyo.com",
            "img-os-static.hoyolab.com",
        ],
        formats: ["image/webp"],
    },
};

const withBundleAnalyzer = require("@next/bundle-analyzer")({
    enabled: process.env.ANALYZE === "true",
});

// module.exports = nextConfig;
module.exports = withBundleAnalyzer({ ...nextConfig });
