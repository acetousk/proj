/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        // Ensure valid configurations for image optimizations if needed
        unoptimized: true,  // You might need this for static exports
    }
};

export default nextConfig;
