const express = require('express');
const connectDB = require('./db.js');
const User = require('./User.js');
const app = express();

app.use(express.json());

app.get('/api/test', (req, res) => {
  res.send('API test successful!');
});

app.post('/api/signup', async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.send({ message: 'User created' });
  } catch (err) {
    res.status(400).send({ error: err.message });
  }
});

connectDB().then(() => {
  app.listen(3000, () => {
    console.log('Server running on port 3000');
  });
})
