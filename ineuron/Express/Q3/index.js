const express = require('express');
const app = express();
const mongoose = require('mongoose');
const port = 3000;

app.use(express.json());

// Start the server
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

mongoose.connect('mongodb://localhost/blogdb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});