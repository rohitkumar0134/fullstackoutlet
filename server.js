const express = require('express');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const pool = require("./config/dbConnection");
const { registerUser,loginUser,check_authentication } = require('./controllers/register');
const {Outletupload,getOutlets,getsingleOutlets,outletimageupload,outletimages,Outletupdate,outletimagedelete} = require('./controllers/outlet');
const multer = require('multer');
const path = require('path');
const fs = require('fs');



const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.use(cors());
app.use(express.json());

const upload = multer({
    limits: { fileSize: 10 * 1024 * 1024 }
  });

const JWT_SECRET = "rohit123"

// login user
app.post('/api/register', registerUser);

app.post('/api/login',loginUser);

app.post('/api/check-token',check_authentication );


app.post('/api/outlet/upload',Outletupload)
app.post('/api/outlet/update/:id',Outletupdate)

app.get('/api/outlets',getOutlets)

app.get('/api/outlets/:id',getsingleOutlets)

app.post('/api/outlet/upload/images',outletimageupload)

app.post('/api/outlet/delete/images',outletimagedelete)

app.get('/api/outlet/images/:id',outletimages)





app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });