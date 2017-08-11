//Your MLAB database should be here 
var mongoose = require('mongoose');
var connection = mongoose.connection;


mongoose.connect('mongodb://spencer:jwufDq5U27Uc@ds127963.mlab.com:27963/inspire_db', {
  server: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } },
  replset: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } }
});

connection.on('error', (err) => {
    console.log('SOMETHING FAILED WHEN CONNECTING TO MLAB', err)
});

connection.once('open', () => {
    console.log('SUCCESSFULLY CONNECTED TO MLAB')
});