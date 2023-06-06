const express = require('express');
const app = express();

// Endpoint to get 20 posts
app.get('/posts', (req, res) => {
  const posts = Array.from({ length: 20 }, (_, index) => ({
    id: index + 1,
    title: `Post ${index + 1}`
  }));

  res.json(posts);
});

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
