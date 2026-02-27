module.exports = {
  apps: [
    {
      name: 'kalp-vriksh-public-school',
      script: 'npm',
      args: 'start',
      env: {
        NODE_ENV: 'production',
        PORT: 3002,
      },
    },
  ],
};
