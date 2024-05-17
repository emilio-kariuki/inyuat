/** @type {import('next').NextConfig} */
const config = {
  
    images:{
      remotePatterns:[
        {
          hostname:"www.picsa.pro",
        },
        {
          hostname:"bit.ly"
        },
        {
          hostname:"picsa.pro"
        },
        {
          hostname:"utfs.io"
        }
      ],
    },
    typescript: {
      ignoreBuildErrors: true,
    },
    eslint: {
      ignoreDuringBuilds: true,
    },
  };

export default config;


