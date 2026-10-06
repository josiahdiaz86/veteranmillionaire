const nextConfig = { reactStrictMode: true, async rewrites() { return { beforeFiles: [ { source: '/:path((?!lending\\.html|welcome\\.mp4|poster\\.jpg|privacy|terms|_next|favicon\\.ico).*)', destination: '/lending.html' } ] }; } };

export default nextConfig;
