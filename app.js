const express = require('express');
const path = require('path');


const app = express();
app.use(express.static(path.join(__dirname, '/public')));
app.use('/css', express.static(path.join(__dirname, '/node_module/bootstrap/dist/css')));
app.use('/js', express.static(path.join(__dirname, '/node_module/bootstrap/dist/js')));
app.use('/js', express.static(path.join(__dirname, '/node_module/jquery/dist')));
app.set('views', './src/views');
app.set('view engine', 'ejs');
const hotelRouter = express.Router();
const rooms = express.Router();

app.use('/', hotelRouter);
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
