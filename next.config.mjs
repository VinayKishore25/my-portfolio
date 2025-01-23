/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true, // Enforce React's strict mode
    swcMinify: true, // Use SWC for minification
    eslint: {
      ignoreDuringBuilds: true, // Skip ESLint during production builds
    },
    experimental: {
      appDir: true, // Enable the new app directory feature if needed
    },
  };
  
  export default nextConfig;
  