// server.js
const express = require('express');
const connectDB = require('./db.js');

const app = express(); // <--- Moved here
app.use(express.json()); // <--- Add this


app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;
  const db = await connectDB();
  const user = await db.collection('users').findOne({ email });
  if (user && user.password === password) {
    res.json({ token: 'your-token' });
  } else {
    res.status(401).json({ error: 'Invalid creds' });
  }
});

connectDB().then((db) => {
  app.listen(3000, () => {
    console.log('Server running on port 3000');
    // Use db for routes
  });
});