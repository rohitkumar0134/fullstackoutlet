const express = require('express');
const cors = require('cors');
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
// app.post('/api/register', registerUser);

app.post('/api/login',loginUser);

app.post('/api/check-token',check_authentication );


app.post('/api/outlet/upload',Outletupload)
app.post('/api/outlet/update/:id',Outletupdate)

app.get('/api/outlets',getOutlets)

app.get('/api/outlets/:id',getsingleOutlets)

app.post('/api/outlet/upload/images',outletimageupload)

app.post('/api/outlet/delete/images',outletimagedelete)

app.get('/api/outlet/images/:id',outletimages)


app.get('/api/pageview/', function(req, res) {
  // http://localhost:3000/api/pageview/
  if (req.url === '/favicon.ico') {
      res.end();
  } 
  // Ends request for favicon without counting

  const json = fs.readFileSync('count.json', 'utf-8');
  const obj = JSON.parse(json);
  // Reads count.json and converts to JS object

  obj.pageviews = obj.pageviews+1;
  console.log(req.query.view)

  // http://localhost:3000/api/pageview/?view=visit-pageview

  if (req.query.view === 'visit-pageview') {
      obj.visits = obj.visits+1;
  }
  // Updates pageviews and visits (conditional upon URL param value)

  const newJSON = JSON.stringify(obj);
  // Converts result to JSON

  fs.writeFileSync('count.json', newJSON);
  res.send(newJSON);
  // Writes result to file and sends to user as JSON

})


app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});


app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });