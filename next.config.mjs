/** @type {import('next').NextConfig} */
const nextConfig = {
     output: 'export',
    basePath: '/Portfolio',
    assetPrefix: '/Portfolio',
    trailingSlash: true,
    images: {
        unoptimized: true, // 🛠️ Required for static export
    },
};

export default nextConfig;
