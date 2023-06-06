const AuthValidator = (req, res, next) => {
    // Check if user is authenticated (example: check for a token in headers or cookies)
    const token = req.headers.authorization;
  
    if (token && token === 'YOUR_AUTH_TOKEN') {
      // User is authenticated, proceed to the next middleware or route handler
      next();
    } else {
      // User is not authenticated, send an error response
      res.status(401).json({ error: 'Unauthorized' });
    }
  };
  
  // Example usage of the middleware
  app.get('/posts', AuthValidator, (req, res) => {
    const posts = [
      { id: 1, title: 'Post 1' },
      { id: 2, title: 'Post 2' },
      // ...
    ];
  
    res.json(posts);
  });