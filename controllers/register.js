// controllers/register.js
const pool = require("../config/dbConnection");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const JWT_SECRET = "rohit123"

///register ke liye
async function registerUser(req, res) {
  const { username, password } = req.body;
  console.log(req.body)
  
  if (!username || !password) {
    return res.status(400).send({ message: 'Username and password are required' });
  }

  try {
    const [rows, fields] = await pool.query('SELECT * FROM users WHERE username = ?', [username]);

    if (rows.length > 0) {
      res.status(400).send({ message: 'User already exists' });
    } else {
      const salt = await bcrypt.genSalt(10);
      const hash = await bcrypt.hash(password, salt);

      await pool.query('INSERT INTO users (username, password) VALUES (?, ?)', [username, hash]);

      res.status(201).send({ message: 'User created successfully' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).send({ message: 'Internal server error' });
  }
}


//login ke liye
async function loginUser(req, res) {
    const { username, password } = req.body;
    if (!username || !password) {
      return res.status(400).send({ message: 'Username and password are required' });
    }
  
    
    try {
    const [rows, fields] = await pool.query('SELECT * FROM users WHERE username = ?', [username]);
    
    if (rows.length > 0) {
      const isValidPassword = await bcrypt.compare(password, rows[0].password);
    
      if (isValidPassword) {
        const token = jwt.sign({ id: rows[0].id, username: rows[0].username }, JWT_SECRET, { expiresIn: '60m' });

    
        res.status(200).send({ token });
      } else {
        res.status(400).send({ message: 'Invalid password' });
      }
    } else {
      res.status(400).send({ message: 'User not found' });
    }
    } catch (err) {
    console.error(err);
    res.status(500).send({ message: 'Internal server error' });
    }
    }
//token check krne ke liye

async function check_authentication (req, res){
    const token = req.body.token;
    if (!token) {
        res.status(400).send({ message: 'provide token ' });
        return;
      }
  
    jwt.verify(token,JWT_SECRET, (err, decoded) => {
      if (err) {
        res.json({
          valid: false
        });
      } else {
        res.json({
          valid: true
        });
      }
    });
  }


module.exports = { registerUser,loginUser,check_authentication};

