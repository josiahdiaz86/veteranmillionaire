const nextConfig = { reactStrictMode: true, async rewrites() { return { beforeFiles: [ { source: '/welcome.mp4', destination: '/welcome_1.mp4' }, { source: '/poster.jpg', destination: '/poster_1.jpg' }, { source: '/:path((?!lending\\.html|welcome_1\\.mp4|poster_1\\.jpg|privacy|terms|_next|favicon\\.ico).*)', destination: '/lending.html' } ] }; } };

export default nextConfig;
