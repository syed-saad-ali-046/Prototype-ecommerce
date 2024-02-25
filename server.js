const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(express.json());

// Enable CORS
app.use(cors());

// Connect to MongoDB
mongoose
  .connect('mongodb+srv://saadali:saad1234@cluster22.dwzx3nu.mongodb.net/test', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

// User model and schema
const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const User = mongoose.model('users', userSchema);

// Register route
app.post('/', async (req, res) => {
    try {
      const { fullName, email, password } = req.body;
  
      let existingUser = await User.findOne({ email });
  
      if (existingUser) {
        // Update the existing user with new data
        existingUser.fullName = fullName;
        existingUser.password = password;
      } else {
        // Create a new user object
        existingUser = new User({
          fullName,
          email,
          password,
        });
      }
  
      // Save the user to the database
      await existingUser.save();
  
      res.status(200).json({ message: 'User registered successfully' });
    } catch (error) {
      console.error('Error registering user:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  //signin validity//
  // ...

// Login route
app.post('/login', async (req, res) => {
    try {
      const { email, password } = req.body;
  
      // Find the user with the provided email
      const user = await User.findOne({ email });
  
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
  
      // Check if the password is correct
      if (user.password !== password) {
        return res.status(401).json({ error: 'Invalid password' });
      }
  
      res.status(200).json({ message: 'User logged in successfully' });
    } catch (error) {
      console.error('Error logging in:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  
  // ...
  
  

// Start the server
const port = 5000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
