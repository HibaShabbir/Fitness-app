// Import required packages
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const session = require('express-session');

// Create Express app
const app = express();
app.use(session({
  secret: 'mykey123',
  resave: false,
  saveUninitialized: true,
  cookie: {
    secure: false,
    sameSite: 'none',
    maxAge: 3600000
  }
}));

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// Connect to MongoDB using Mongoose
mongoose.connect('mongodb://127.0.0.1/WebProject', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Error connecting to MongoDB:', err));

// Define Mongoose schema for user data
const userSchema = new mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  age: { type: Number, required: true },
  gender: { type: String, required: true },
  height: { type: Number, required: true },
  weight: { type: Number, required: true },
  disease: { type: String },
  food: { type: String },
  role: { type: String, enum: ['user', 'admin'], default: 'user' }
});

// Create Mongoose model for user data
const User = mongoose.model('User', userSchema);

// Define server endpoint for creating a new user
app.post('/api/signup', async (req, res) => {
  // Extract user data from request body
  const { email, password, age, gender, height, weight, disease, food } = req.body;
  
  // Check if user with same email already exists
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return res.status(409).json({ message: 'User already exists' });
  }

  // Create new User instance with extracted data
  const newUser = new User({ email, password, age, gender, height, weight, disease, food });
  
  // Save new user data to MongoDB
  try {
    const result = await newUser.save();
    // handle result
    console.log('New user created:');
    res.redirect('http://localhost:3000/');
  } catch (err) {
    // handle errora
    console.error('Error saving user data to MongoDB:', err);
    res.status(500).send('Error saving user data to MongoDB');
  }
});


app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).send({ success: false, message: 'Invalid username or password' });
    }

    if (user.password !== password) {
      return res.status(401).send({ success: false, message: 'Invalid username or password' });
    }

    // Login successful, store the user session
    req.session.user = user;
    const isAdmin = user.role === 'admin'; // assuming you have a 'role' property in your user object that indicates whether the user is an admin
    return res.send({ success: true, isAdmin, user });
  } catch (err) {
    console.error(err);
    return res.status(500).send({ success: false, message: 'Internal server error' });
  }
});

app.get('/api/login', (req, res) => {
  const user = req.session.user;
  console.log("session : "+req.session.user);
  if (user) {
    const isAdmin = user.role === 'admin'; // 'role' property in your user object that indicates whether the user is an admin
    return res.send({ success: true, isAdmin, user });
  } else {
    return res.send({ success: false, message: 'No user session' });
  }
});

app.post('/api/logout', (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.error('Error destroying user session:', err);
      return res.status(500).send('Error destroying user session');
    }
    return res.status(200).send('Logged out successfully');
  });
});


// Start server listening on port 5000
app.listen(5000, () => console.log('Server started listening on port 5000'));
