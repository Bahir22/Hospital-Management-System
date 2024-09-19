module.exports = {
    ci: {
      collect: {
        staticDistDir: './dist', // Adjust this path to your static files directory
        url: ['http://localhost:3000'], // Replace with your URL
      },
      upload: {
        target: 'temporary-public-storage',
      },
    },
  };
  