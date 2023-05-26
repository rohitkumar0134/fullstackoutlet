const multer = require('multer');
const mysql = require('mysql2');
const fs = require('fs');
const auth = require('./auth');
const dotenv = require('dotenv');
dotenv.config();
const pool1 = require("../config/dbConnection");

// Create a MySQL connection pool
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  // password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

const storage = multer.diskStorage({
    destination: function (req, file, callback) {
      callback(null, './outlet/public/bannerimages');
    },
    filename: function (req, file, callback) {
      console.log(req.body)
      callback(null, Date.now() + '-' + req.body.title +file.originalname);
    }
  });

  const upload = multer({ storage: storage }).single('bannerimage');





function Outletupload(req, res) {

  console.log(req.body);
  upload(req, res, function (err) {
    auth.verifyToken(req, res, null, async (req, res, next) => {
    if (err) {
      return res.end('Error uploading file.');
    }

    console.log(req.body);
    if (!req.file || !req.body.title || !req.body.address || !req.body.opentiming|| !req.body.closetiming || !req.body.location || !req.body.description || !req.body.youtubeLink) {
      return res.status(400).send({ message: 'All parameters are required.' });
    }

    
    // Extract the data from the request
 const { title, location, description, youtubeLink,category,address,opentiming,closetiming } = req.body;
 const bannerimage = req.file.filename

    // Create a message to be sent back to the client
    let message = 'Files are uploaded successfully!';

    if (bannerimage) {
      message += ` ${bannerimage} images uploaded.`;
    }

    // Convert the image paths to JSON
    console.log(bannerimage)
    
// Insert the data into the database
      pool.query(
        'INSERT INTO outlets (title, bannerimage, location, description, youtubeLink,category,address,opentiming,closetiming) VALUES (?, ?, ?, ?, ?,?,?,?,?)',
        [title, bannerimage, location, description, youtubeLink,category,address,opentiming,closetiming],
        (err, results) => {
          if (err) {
            console.error(err);
            return res.status(500).send('Error inserting data into the database.');
          }

      // Get the ID of the inserted row
      const id = results.insertId;

      // Send a response to the client
      res.json({ id, message });
    });
  });

});

}

function Outletupdate(req, res) {

  console.log(req.body);
  upload(req, res, function (err) {
    auth.verifyToken(req, res, null, async (req, res, next) => {
    if (err) {
      return res.end('Error uploading file.');
    }

    console.log(req.body);
    if ( !req.body.title || !req.body.address || !req.body.opentiming|| !req.body.closetiming || !req.body.location || !req.body.description || !req.body.youtubeLink) {
      return res.status(400).send({ message: 'All parameters are required.' });
    }

    const { id } = req.params;
    // Extract the data from the request
 const { title, location, description, youtubeLink,category,address,opentiming,closetiming } = req.body;

 const bannerimage = req.file ? req.file.filename:req.body.bannerimage

    // Create a message to be sent back to the client
    let message = 'Files are uploaded successfully!';

    if (bannerimage) {
      message += ` ${bannerimage} images uploaded.`;
    }

    // Convert the image paths to JSON
    console.log(bannerimage)
    
// Insert the data into the database
      pool.query(
        'UPDATE outlets SET title = ?, bannerimage = ?, location = ?, description = ?, youtubeLink = ?, category = ?, address = ?, opentiming = ?, closetiming = ? WHERE id = ?',
        [title, bannerimage, location, description, youtubeLink,category,address,opentiming,closetiming,id],
        (err, results) => {
          if (err) {
            console.error(err);
            return res.status(500).send('Error inserting data into the database.');
          }

      // Get the ID of the inserted row
      const id = results.insertId;

      // Send a response to the client
      res.json({ id, message });
    });
  });

});

}

async function getOutlets(req, res) {
  try {
    const sql = 'SELECT * FROM outlets';
    const conn = await pool1.getConnection();
    const [rows] = await conn.query(sql);
    conn.release();
    console.log(rows);
    res.json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error retrieving data from the database.');
  }
}

async function getsingleOutlets(req, res) {
  const { id } = req.params;
  try {
    const sql = `SELECT * FROM outlets where id= ${id}`;
    const conn = await pool1.getConnection();
    const [rows] = await conn.query(sql);
    conn.release();
    console.log(rows);
    res.json(rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error retrieving data from the database.');
  }
}



function outletimageupload(req, res) {

    

  upload(req, res, function (err) {
    auth.verifyToken(req, res, null, async (req, res, next) => {
    if (err) {
      return res.end('Error uploading file.');
    }
      console.log(req.body)
   if (!req.file || !req.body.outletid ) {
      return res.status(400).send({ message: 'all paramerter are required' });
    }
    
    // Extract the title and images from the request
    const images = req.file.filename
    const outletid = req.body.outletid;

    // Create a message to be sent back to the client
    let message = 'Files are uploaded successfully!';

    if (images) {
      message += ` ${images} images uploaded.`;
    }

    // Convert the image paths to JSON
    console.log(images)
    
    // Insert the title and images into the database
    pool.query('INSERT INTO outletsimages  SET ?', { outletid,images }, (err, results) => {
      if (err) {
        console.error(err);
        return res.status(500).send('Error inserting data into database.');
      }

      // Get the ID of the inserted row
      const id = results.insertId;

      // Send a response to the client
      res.json({ id, message });
    });
  });

});

}





async function outletimages(req, res) {
  const { id } = req.params;
  try {
    const sql = `SELECT * FROM outletsimages where outletid= ${id}`;
    const conn = await pool1.getConnection();
    const [rows] = await conn.query(sql);
    conn.release();
    console.log(rows);
    res.json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error retrieving data from the database.');
  }
}


function outletimagedelete(req, res) {
  upload(req, res, function (err) {
    auth.verifyToken(req, res, null, async (req, res, next) => {
      console.log(req.body)
        const id = req.body.id;
    
        if (!id) {
          return res.status(400).send({ message: 'id parameter is required' });
        }
    
        // First, get the filename of the image to be deleted
        pool.query('SELECT images FROM outletsimages WHERE id = ?', [id], (err, results) => {
          if (err) {
            console.error(err);
            return res.status(500).send('Error retrieving data from database.');
          }
    
          const filename = results[0].images;
    
          // Delete the row from the database
          pool.query('DELETE FROM outletsimages WHERE id = ?', [id], (err, results) => {
            if (err) {
              console.error(err);
              return res.status(500).send('Error deleting data from database.');
            }
    
            // Delete the file from the server
            fs.unlink(`./outlet/public/bannerimages/${filename}`, (err) => {
              if (err) {
                console.error(err);
                return res.status(500).send('Error deleting file from server.');
              }
    
              // Send a response to the client
              res.json({ id, message: 'Row and file deleted successfully!' });
            });
          });
        });
      });

});
  }



  module.exports = {
    Outletupload,Outletupdate,outletimagedelete,getOutlets,getsingleOutlets,outletimageupload,outletimages
};
