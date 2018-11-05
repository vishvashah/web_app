const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');


const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/website");
const nameSchema = new mongoose.Schema({
  Name: String,
  Email: String,
  Date: String,
  Person: String,
  Rooms: String

});
const User = mongoose.model("User", nameSchema);

app.post("/booking", (req, res) => {
const myData = new User(req.body);
  myData.save()
      .then(item => {
          res.send("Name saved to database");
      })
      .catch(err => {
          res.status(400).send("Unable to save to database");
      });
});

app.use(express.static(path.join(__dirname, '/public')));
app.use('/css', express.static(path.join(__dirname, '/node_module/bootstrap/dist/css')));
app.use('/js', express.static(path.join(__dirname, '/node_module/bootstrap/dist/js')));
app.use('/js', express.static(path.join(__dirname, '/node_module/jquery/dist')));
app.set('views', './src/views');
app.set('view engine', 'ejs');
const hotelRouter = express.Router();
const rooms = express.Router();

const authRouter = require('./src/routes/authRoutes');
app.use('/', hotelRouter);
app.use('/routes', authRouter);
// app.use('/', rooms);


app.get('/', (req, res) => {
  res.render(
    'index',
    {
      list: [{ link: '/home', title: 'Home' }, { link: '/about', title: 'About' }, { link: '/rooms', title: 'Rooms' }, { link: '/booking', title: 'Booking' }],
    }
  );
});

app.get('/rooms', (req, res) => {
  res.render(
    'rooms',
    {
      list: [{ link: '/home', title: 'Home' }, { link: '/about', title: 'About' }, { link: '/rooms', title: 'Rooms' }, { link: '/booking', title: 'Booking' }],
    }
  );
});

app.get('/booking', (req, res) => {
  res.render(
    'booking',
    {
      list: [{ link: '/home', title: 'Home' }, { link: '/about', title: 'About' }, { link: '/rooms', title: 'Rooms' }, { link: '/booking', title: 'Booking' }],
    }
  );
});

app.get('/about', (req, res) => {
  res.render(
    'about',
    {
      list: [{ link: '/home', title: 'Home' }, { link: '/about', title: 'About' }, { link: '/rooms', title: 'Rooms' }, { link: '/booking', title: 'Booking' }],
    }
  );
});


app.listen('3000', () => {
  console.log('port 3000');
});
