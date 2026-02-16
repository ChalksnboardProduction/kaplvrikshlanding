module.exports = {
  apps: [
    {
      name: 'bhatnagar-foundation',
      script: 'npm',
      args: 'start',
      env: {
        NODE_ENV: 'production',
        PORT: 3002,
      },
    },
  ],
};
