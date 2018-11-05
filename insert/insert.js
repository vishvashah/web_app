const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017/';
MongoClient.connect(url, (err, db) => {
  if (err) throw err;
  const dbo = db.db('web_app');
  const myobj = {
    Name: 'Vishva', Email: 'vishva@gmail.com', Date: '1/2', Person: '1', Rooms: '1' };
  dbo.collection('booking').insertOne(myobj, (err, res) => {
    if (err) throw err;
    console.log('1 document inserted');
    db.close();
  });
});
