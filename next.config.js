/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: [
            "static.wikia.nocookie.net",
            "upload-os-bbs.mihoyo.com",
            "img-os-static.hoyolab.com",
        ],
        formats: ["image/avif", "image/webp"],
        ///The deviceSizes are used for layout="responsive" and layout="fill" which generates a srcSet with all the device sizes. */
        imageSizes: [16, 32, 48, 64], // This array is concatenated to deviceSizes.
        // imageSizes: [16, 32, 48, 64, 96, 128, 256, 384], // Next.js default
        deviceSizes: [
            96, 128, 256, 384, 512, 640, 750, 828, 1080, 1200, 1920, 2048, 3840,
        ],
        // deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840], // default
    },
};

const withBundleAnalyzer = require("@next/bundle-analyzer")({
    enabled: process.env.ANALYZE === "true",
});

module.exports = withBundleAnalyzer({ ...nextConfig });
