/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    env: {
        BASE_URL: 'http://ec2-18-234-125-13.compute-1.amazonaws.com:8080/New-FoodOrdering',
    },
};

console.log("BASE_URL in next.config.js:", nextConfig.env.BASE_URL);

module.exports = nextConfig;
